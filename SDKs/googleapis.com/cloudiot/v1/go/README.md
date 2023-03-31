# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/cloudiot/v1/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.CloudiotProjectsLocationsRegistriesBindDeviceToGatewayRequest{
        DollarXgafv: "2",
        BindDeviceToGatewayRequest: &shared.BindDeviceToGatewayRequest{
            DeviceID: "provident",
            GatewayID: "distinctio",
        },
        AccessToken: "quibusdam",
        Alt: "media",
        Callback: "nulla",
        Fields: "corrupti",
        Key: "illum",
        OauthToken: "vel",
        Parent: "error",
        PrettyPrint: false,
        QuotaUser: "deserunt",
        UploadType: "suscipit",
        UploadProtocol: "iure",
    }

    ctx := context.Background()
    res, err := s.Projects.CloudiotProjectsLocationsRegistriesBindDeviceToGateway(ctx, req, operations.CloudiotProjectsLocationsRegistriesBindDeviceToGatewaySecurity{
        Option1: &operations.CloudiotProjectsLocationsRegistriesBindDeviceToGatewaySecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BindDeviceToGatewayResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### Projects

* `CloudiotProjectsLocationsRegistriesBindDeviceToGateway` - Associates the device with the gateway.
* `CloudiotProjectsLocationsRegistriesCreate` - Creates a device registry that contains devices.
* `CloudiotProjectsLocationsRegistriesDevicesConfigVersionsList` - Lists the last few versions of the device configuration in descending order (i.e.: newest first).
* `CloudiotProjectsLocationsRegistriesDevicesCreate` - Creates a device in a device registry.
* `CloudiotProjectsLocationsRegistriesDevicesDelete` - Deletes a device.
* `CloudiotProjectsLocationsRegistriesDevicesGet` - Gets details about a device.
* `CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfig` - Modifies the configuration for the device, which is eventually sent from the Cloud IoT Core servers. Returns the modified configuration version and its metadata.
* `CloudiotProjectsLocationsRegistriesDevicesPatch` - Updates a device.
* `CloudiotProjectsLocationsRegistriesDevicesSendCommandToDevice` - Sends a command to the specified device. In order for a device to be able to receive commands, it must: 1) be connected to Cloud IoT Core using the MQTT protocol, and 2) be subscribed to the group of MQTT topics specified by /devices/{device-id}/commands/#. This subscription will receive commands at the top-level topic /devices/{device-id}/commands as well as commands for subfolders, like /devices/{device-id}/commands/subfolder. Note that subscribing to specific subfolders is not supported. If the command could not be delivered to the device, this method will return an error; in particular, if the device is not subscribed, this method will return FAILED_PRECONDITION. Otherwise, this method will return OK. If the subscription is QoS 1, at least once delivery will be guaranteed; for QoS 0, no acknowledgment will be expected from the device.
* `CloudiotProjectsLocationsRegistriesDevicesStatesList` - Lists the last few versions of the device state in descending order (i.e.: newest first).
* `CloudiotProjectsLocationsRegistriesGroupsDevicesList` - List devices in a device registry.
* `CloudiotProjectsLocationsRegistriesGroupsGetIamPolicy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `CloudiotProjectsLocationsRegistriesGroupsSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy.
* `CloudiotProjectsLocationsRegistriesGroupsTestIamPermissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.
* `CloudiotProjectsLocationsRegistriesList` - Lists device registries.
* `CloudiotProjectsLocationsRegistriesUnbindDeviceFromGateway` - Deletes the association between the device and the gateway.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
