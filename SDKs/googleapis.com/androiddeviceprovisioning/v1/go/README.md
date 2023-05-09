# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/androiddeviceprovisioning/v1/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Customers.AndroiddeviceprovisioningCustomersConfigurationsCreate(ctx, operations.AndroiddeviceprovisioningCustomersConfigurationsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ConfigurationInput: &shared.ConfigurationInput{
            CompanyName: sdk.String("provident"),
            ConfigurationName: sdk.String("distinctio"),
            ContactEmail: sdk.String("quibusdam"),
            ContactPhone: sdk.String("unde"),
            CustomMessage: sdk.String("nulla"),
            DpcExtras: sdk.String("corrupti"),
            DpcResourcePath: sdk.String("illum"),
            IsDefault: sdk.Bool(false),
        },
        AccessToken: sdk.String("vel"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("deserunt"),
        Fields: sdk.String("suscipit"),
        Key: sdk.String("iure"),
        OauthToken: sdk.String("magnam"),
        Parent: "debitis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ipsa"),
        UploadType: sdk.String("delectus"),
        UploadProtocol: sdk.String("tempora"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Configuration != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Customers](docs/customers/README.md)

* [AndroiddeviceprovisioningCustomersConfigurationsCreate](docs/customers/README.md#androiddeviceprovisioningcustomersconfigurationscreate) - Creates a new configuration. Once created, a customer can apply the configuration to devices.
* [AndroiddeviceprovisioningCustomersConfigurationsDelete](docs/customers/README.md#androiddeviceprovisioningcustomersconfigurationsdelete) - Deletes an unused configuration. The API call fails if the customer has devices with the configuration applied.
* [AndroiddeviceprovisioningCustomersConfigurationsList](docs/customers/README.md#androiddeviceprovisioningcustomersconfigurationslist) - Lists a customer's configurations.
* [AndroiddeviceprovisioningCustomersConfigurationsPatch](docs/customers/README.md#androiddeviceprovisioningcustomersconfigurationspatch) - Updates a configuration's field values.
* [AndroiddeviceprovisioningCustomersDevicesApplyConfiguration](docs/customers/README.md#androiddeviceprovisioningcustomersdevicesapplyconfiguration) - Applies a Configuration to the device to register the device for zero-touch enrollment. After applying a configuration to a device, the device automatically provisions itself on first boot, or next factory reset.
* [AndroiddeviceprovisioningCustomersDevicesList](docs/customers/README.md#androiddeviceprovisioningcustomersdeviceslist) - Lists a customer's devices.
* [AndroiddeviceprovisioningCustomersDevicesRemoveConfiguration](docs/customers/README.md#androiddeviceprovisioningcustomersdevicesremoveconfiguration) - Removes a configuration from device.
* [AndroiddeviceprovisioningCustomersDevicesUnclaim](docs/customers/README.md#androiddeviceprovisioningcustomersdevicesunclaim) - Unclaims a device from a customer and removes it from zero-touch enrollment. After removing a device, a customer must contact their reseller to register the device into zero-touch enrollment again.
* [AndroiddeviceprovisioningCustomersDpcsList](docs/customers/README.md#androiddeviceprovisioningcustomersdpcslist) - Lists the DPCs (device policy controllers) that support zero-touch enrollment.
* [AndroiddeviceprovisioningCustomersList](docs/customers/README.md#androiddeviceprovisioningcustomerslist) - Lists the user's customer accounts.

### [Partners](docs/partners/README.md)

* [AndroiddeviceprovisioningPartnersCustomersCreate](docs/partners/README.md#androiddeviceprovisioningpartnerscustomerscreate) - Creates a customer for zero-touch enrollment. After the method returns successfully, admin and owner roles can manage devices and EMM configs by calling API methods or using their zero-touch enrollment portal. The customer receives an email that welcomes them to zero-touch enrollment and explains how to sign into the portal.
* [AndroiddeviceprovisioningPartnersCustomersList](docs/partners/README.md#androiddeviceprovisioningpartnerscustomerslist) - Lists the customers that are enrolled to the reseller identified by the `partnerId` argument. This list includes customers that the reseller created and customers that enrolled themselves using the portal.
* [AndroiddeviceprovisioningPartnersDevicesClaim](docs/partners/README.md#androiddeviceprovisioningpartnersdevicesclaim) - Claims a device for a customer and adds it to zero-touch enrollment. If the device is already claimed by another customer, the call returns an error.
* [AndroiddeviceprovisioningPartnersDevicesClaimAsync](docs/partners/README.md#androiddeviceprovisioningpartnersdevicesclaimasync) - Claims a batch of devices for a customer asynchronously. Adds the devices to zero-touch enrollment. To learn more, read [Long‑running batch operations](/zero-touch/guides/how-it-works#operations).
* [AndroiddeviceprovisioningPartnersDevicesFindByIdentifier](docs/partners/README.md#androiddeviceprovisioningpartnersdevicesfindbyidentifier) - Finds devices by hardware identifiers, such as IMEI.
* [AndroiddeviceprovisioningPartnersDevicesFindByOwner](docs/partners/README.md#androiddeviceprovisioningpartnersdevicesfindbyowner) - Finds devices claimed for customers. The results only contain devices registered to the reseller that's identified by the `partnerId` argument. The customer's devices purchased from other resellers don't appear in the results.
* [AndroiddeviceprovisioningPartnersDevicesGet](docs/partners/README.md#androiddeviceprovisioningpartnersdevicesget) - Gets a device.
* [AndroiddeviceprovisioningPartnersDevicesMetadata](docs/partners/README.md#androiddeviceprovisioningpartnersdevicesmetadata) - Updates reseller metadata associated with the device. Android devices only.
* [AndroiddeviceprovisioningPartnersDevicesUnclaim](docs/partners/README.md#androiddeviceprovisioningpartnersdevicesunclaim) - Unclaims a device from a customer and removes it from zero-touch enrollment.
* [AndroiddeviceprovisioningPartnersDevicesUnclaimAsync](docs/partners/README.md#androiddeviceprovisioningpartnersdevicesunclaimasync) - Unclaims a batch of devices for a customer asynchronously. Removes the devices from zero-touch enrollment. To learn more, read [Long‑running batch operations](/zero-touch/guides/how-it-works#operations).
* [AndroiddeviceprovisioningPartnersDevicesUpdateMetadataAsync](docs/partners/README.md#androiddeviceprovisioningpartnersdevicesupdatemetadataasync) - Updates the reseller metadata attached to a batch of devices. This method updates devices asynchronously and returns an `Operation` that can be used to track progress. Read [Long‑running batch operations](/zero-touch/guides/how-it-works#operations). Android Devices only.
* [AndroiddeviceprovisioningPartnersVendorsCustomersList](docs/partners/README.md#androiddeviceprovisioningpartnersvendorscustomerslist) - Lists the customers of the vendor.
* [AndroiddeviceprovisioningPartnersVendorsList](docs/partners/README.md#androiddeviceprovisioningpartnersvendorslist) - Lists the vendors of the partner.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
