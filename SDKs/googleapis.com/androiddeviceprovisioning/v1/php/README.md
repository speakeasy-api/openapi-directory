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

<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### customers

* `androiddeviceprovisioningCustomersConfigurationsCreate` - Creates a new configuration. Once created, a customer can apply the configuration to devices.
* `androiddeviceprovisioningCustomersConfigurationsDelete` - Deletes an unused configuration. The API call fails if the customer has devices with the configuration applied.
* `androiddeviceprovisioningCustomersConfigurationsList` - Lists a customer's configurations.
* `androiddeviceprovisioningCustomersConfigurationsPatch` - Updates a configuration's field values.
* `androiddeviceprovisioningCustomersDevicesApplyConfiguration` - Applies a Configuration to the device to register the device for zero-touch enrollment. After applying a configuration to a device, the device automatically provisions itself on first boot, or next factory reset.
* `androiddeviceprovisioningCustomersDevicesList` - Lists a customer's devices.
* `androiddeviceprovisioningCustomersDevicesRemoveConfiguration` - Removes a configuration from device.
* `androiddeviceprovisioningCustomersDevicesUnclaim` - Unclaims a device from a customer and removes it from zero-touch enrollment. After removing a device, a customer must contact their reseller to register the device into zero-touch enrollment again.
* `androiddeviceprovisioningCustomersDpcsList` - Lists the DPCs (device policy controllers) that support zero-touch enrollment.
* `androiddeviceprovisioningCustomersList` - Lists the user's customer accounts.

### partners

* `androiddeviceprovisioningPartnersCustomersCreate` - Creates a customer for zero-touch enrollment. After the method returns successfully, admin and owner roles can manage devices and EMM configs by calling API methods or using their zero-touch enrollment portal. The customer receives an email that welcomes them to zero-touch enrollment and explains how to sign into the portal.
* `androiddeviceprovisioningPartnersCustomersList` - Lists the customers that are enrolled to the reseller identified by the `partnerId` argument. This list includes customers that the reseller created and customers that enrolled themselves using the portal.
* `androiddeviceprovisioningPartnersDevicesClaim` - Claims a device for a customer and adds it to zero-touch enrollment. If the device is already claimed by another customer, the call returns an error.
* `androiddeviceprovisioningPartnersDevicesClaimAsync` - Claims a batch of devices for a customer asynchronously. Adds the devices to zero-touch enrollment. To learn more, read [Long‑running batch operations](/zero-touch/guides/how-it-works#operations).
* `androiddeviceprovisioningPartnersDevicesFindByIdentifier` - Finds devices by hardware identifiers, such as IMEI.
* `androiddeviceprovisioningPartnersDevicesFindByOwner` - Finds devices claimed for customers. The results only contain devices registered to the reseller that's identified by the `partnerId` argument. The customer's devices purchased from other resellers don't appear in the results.
* `androiddeviceprovisioningPartnersDevicesGet` - Gets a device.
* `androiddeviceprovisioningPartnersDevicesMetadata` - Updates reseller metadata associated with the device. Android devices only.
* `androiddeviceprovisioningPartnersDevicesUnclaim` - Unclaims a device from a customer and removes it from zero-touch enrollment.
* `androiddeviceprovisioningPartnersDevicesUnclaimAsync` - Unclaims a batch of devices for a customer asynchronously. Removes the devices from zero-touch enrollment. To learn more, read [Long‑running batch operations](/zero-touch/guides/how-it-works#operations).
* `androiddeviceprovisioningPartnersDevicesUpdateMetadataAsync` - Updates the reseller metadata attached to a batch of devices. This method updates devices asynchronously and returns an `Operation` that can be used to track progress. Read [Long‑running batch operations](/zero-touch/guides/how-it-works#operations). Android Devices only.
* `androiddeviceprovisioningPartnersVendorsCustomersList` - Lists the customers of the vendor.
* `androiddeviceprovisioningPartnersVendorsList` - Lists the vendors of the partner.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
