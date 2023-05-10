# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroiddeviceprovisioningCustomersConfigurationsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ConfigurationInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroiddeviceprovisioningCustomersConfigurationsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->configurationInput = new ConfigurationInput();
    $request->configurationInput->companyName = 'provident';
    $request->configurationInput->configurationName = 'distinctio';
    $request->configurationInput->contactEmail = 'quibusdam';
    $request->configurationInput->contactPhone = 'unde';
    $request->configurationInput->customMessage = 'nulla';
    $request->configurationInput->dpcExtras = 'corrupti';
    $request->configurationInput->dpcResourcePath = 'illum';
    $request->configurationInput->isDefault = false;
    $request->accessToken = 'vel';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'deserunt';
    $request->fields = 'suscipit';
    $request->key = 'iure';
    $request->oauthToken = 'magnam';
    $request->parent = 'debitis';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsa';
    $request->uploadType = 'delectus';
    $request->uploadProtocol = 'tempora';

    $response = $sdk->customers->androiddeviceprovisioningCustomersConfigurationsCreate($request);

    if ($response->configuration !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [customers](docs/customers/README.md)

* [androiddeviceprovisioningCustomersConfigurationsCreate](docs/customers/README.md#androiddeviceprovisioningcustomersconfigurationscreate) - Creates a new configuration. Once created, a customer can apply the configuration to devices.
* [androiddeviceprovisioningCustomersConfigurationsDelete](docs/customers/README.md#androiddeviceprovisioningcustomersconfigurationsdelete) - Deletes an unused configuration. The API call fails if the customer has devices with the configuration applied.
* [androiddeviceprovisioningCustomersConfigurationsList](docs/customers/README.md#androiddeviceprovisioningcustomersconfigurationslist) - Lists a customer's configurations.
* [androiddeviceprovisioningCustomersConfigurationsPatch](docs/customers/README.md#androiddeviceprovisioningcustomersconfigurationspatch) - Updates a configuration's field values.
* [androiddeviceprovisioningCustomersDevicesApplyConfiguration](docs/customers/README.md#androiddeviceprovisioningcustomersdevicesapplyconfiguration) - Applies a Configuration to the device to register the device for zero-touch enrollment. After applying a configuration to a device, the device automatically provisions itself on first boot, or next factory reset.
* [androiddeviceprovisioningCustomersDevicesList](docs/customers/README.md#androiddeviceprovisioningcustomersdeviceslist) - Lists a customer's devices.
* [androiddeviceprovisioningCustomersDevicesRemoveConfiguration](docs/customers/README.md#androiddeviceprovisioningcustomersdevicesremoveconfiguration) - Removes a configuration from device.
* [androiddeviceprovisioningCustomersDevicesUnclaim](docs/customers/README.md#androiddeviceprovisioningcustomersdevicesunclaim) - Unclaims a device from a customer and removes it from zero-touch enrollment. After removing a device, a customer must contact their reseller to register the device into zero-touch enrollment again.
* [androiddeviceprovisioningCustomersDpcsList](docs/customers/README.md#androiddeviceprovisioningcustomersdpcslist) - Lists the DPCs (device policy controllers) that support zero-touch enrollment.
* [androiddeviceprovisioningCustomersList](docs/customers/README.md#androiddeviceprovisioningcustomerslist) - Lists the user's customer accounts.

### [partners](docs/partners/README.md)

* [androiddeviceprovisioningPartnersCustomersCreate](docs/partners/README.md#androiddeviceprovisioningpartnerscustomerscreate) - Creates a customer for zero-touch enrollment. After the method returns successfully, admin and owner roles can manage devices and EMM configs by calling API methods or using their zero-touch enrollment portal. The customer receives an email that welcomes them to zero-touch enrollment and explains how to sign into the portal.
* [androiddeviceprovisioningPartnersCustomersList](docs/partners/README.md#androiddeviceprovisioningpartnerscustomerslist) - Lists the customers that are enrolled to the reseller identified by the `partnerId` argument. This list includes customers that the reseller created and customers that enrolled themselves using the portal.
* [androiddeviceprovisioningPartnersDevicesClaim](docs/partners/README.md#androiddeviceprovisioningpartnersdevicesclaim) - Claims a device for a customer and adds it to zero-touch enrollment. If the device is already claimed by another customer, the call returns an error.
* [androiddeviceprovisioningPartnersDevicesClaimAsync](docs/partners/README.md#androiddeviceprovisioningpartnersdevicesclaimasync) - Claims a batch of devices for a customer asynchronously. Adds the devices to zero-touch enrollment. To learn more, read [Long‑running batch operations](/zero-touch/guides/how-it-works#operations).
* [androiddeviceprovisioningPartnersDevicesFindByIdentifier](docs/partners/README.md#androiddeviceprovisioningpartnersdevicesfindbyidentifier) - Finds devices by hardware identifiers, such as IMEI.
* [androiddeviceprovisioningPartnersDevicesFindByOwner](docs/partners/README.md#androiddeviceprovisioningpartnersdevicesfindbyowner) - Finds devices claimed for customers. The results only contain devices registered to the reseller that's identified by the `partnerId` argument. The customer's devices purchased from other resellers don't appear in the results.
* [androiddeviceprovisioningPartnersDevicesGet](docs/partners/README.md#androiddeviceprovisioningpartnersdevicesget) - Gets a device.
* [androiddeviceprovisioningPartnersDevicesMetadata](docs/partners/README.md#androiddeviceprovisioningpartnersdevicesmetadata) - Updates reseller metadata associated with the device. Android devices only.
* [androiddeviceprovisioningPartnersDevicesUnclaim](docs/partners/README.md#androiddeviceprovisioningpartnersdevicesunclaim) - Unclaims a device from a customer and removes it from zero-touch enrollment.
* [androiddeviceprovisioningPartnersDevicesUnclaimAsync](docs/partners/README.md#androiddeviceprovisioningpartnersdevicesunclaimasync) - Unclaims a batch of devices for a customer asynchronously. Removes the devices from zero-touch enrollment. To learn more, read [Long‑running batch operations](/zero-touch/guides/how-it-works#operations).
* [androiddeviceprovisioningPartnersDevicesUpdateMetadataAsync](docs/partners/README.md#androiddeviceprovisioningpartnersdevicesupdatemetadataasync) - Updates the reseller metadata attached to a batch of devices. This method updates devices asynchronously and returns an `Operation` that can be used to track progress. Read [Long‑running batch operations](/zero-touch/guides/how-it-works#operations). Android Devices only.
* [androiddeviceprovisioningPartnersVendorsCustomersList](docs/partners/README.md#androiddeviceprovisioningpartnersvendorscustomerslist) - Lists the customers of the vendor.
* [androiddeviceprovisioningPartnersVendorsList](docs/partners/README.md#androiddeviceprovisioningpartnersvendorslist) - Lists the vendors of the partner.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
