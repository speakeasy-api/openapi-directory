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
    res, err := s.Projects.CloudiotProjectsLocationsRegistriesBindDeviceToGateway(ctx, operations.CloudiotProjectsLocationsRegistriesBindDeviceToGatewayRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        BindDeviceToGatewayRequest: &shared.BindDeviceToGatewayRequest{
            DeviceID: sdk.String("provident"),
            GatewayID: sdk.String("distinctio"),
        },
        AccessToken: sdk.String("quibusdam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("nulla"),
        Fields: sdk.String("corrupti"),
        Key: sdk.String("illum"),
        OauthToken: sdk.String("vel"),
        Parent: "error",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("deserunt"),
        UploadType: sdk.String("suscipit"),
        UploadProtocol: sdk.String("iure"),
    }, operations.CloudiotProjectsLocationsRegistriesBindDeviceToGatewaySecurity{
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


### [Projects](docs/projects/README.md)

* [CloudiotProjectsLocationsRegistriesBindDeviceToGateway](docs/projects/README.md#cloudiotprojectslocationsregistriesbinddevicetogateway) - Associates the device with the gateway.
* [CloudiotProjectsLocationsRegistriesCreate](docs/projects/README.md#cloudiotprojectslocationsregistriescreate) - Creates a device registry that contains devices.
* [CloudiotProjectsLocationsRegistriesDevicesConfigVersionsList](docs/projects/README.md#cloudiotprojectslocationsregistriesdevicesconfigversionslist) - Lists the last few versions of the device configuration in descending order (i.e.: newest first).
* [CloudiotProjectsLocationsRegistriesDevicesCreate](docs/projects/README.md#cloudiotprojectslocationsregistriesdevicescreate) - Creates a device in a device registry.
* [CloudiotProjectsLocationsRegistriesDevicesDelete](docs/projects/README.md#cloudiotprojectslocationsregistriesdevicesdelete) - Deletes a device.
* [CloudiotProjectsLocationsRegistriesDevicesGet](docs/projects/README.md#cloudiotprojectslocationsregistriesdevicesget) - Gets details about a device.
* [CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfig](docs/projects/README.md#cloudiotprojectslocationsregistriesdevicesmodifycloudtodeviceconfig) - Modifies the configuration for the device, which is eventually sent from the Cloud IoT Core servers. Returns the modified configuration version and its metadata.
* [CloudiotProjectsLocationsRegistriesDevicesPatch](docs/projects/README.md#cloudiotprojectslocationsregistriesdevicespatch) - Updates a device.
* [CloudiotProjectsLocationsRegistriesDevicesSendCommandToDevice](docs/projects/README.md#cloudiotprojectslocationsregistriesdevicessendcommandtodevice) - Sends a command to the specified device. In order for a device to be able to receive commands, it must: 1) be connected to Cloud IoT Core using the MQTT protocol, and 2) be subscribed to the group of MQTT topics specified by /devices/{device-id}/commands/#. This subscription will receive commands at the top-level topic /devices/{device-id}/commands as well as commands for subfolders, like /devices/{device-id}/commands/subfolder. Note that subscribing to specific subfolders is not supported. If the command could not be delivered to the device, this method will return an error; in particular, if the device is not subscribed, this method will return FAILED_PRECONDITION. Otherwise, this method will return OK. If the subscription is QoS 1, at least once delivery will be guaranteed; for QoS 0, no acknowledgment will be expected from the device.
* [CloudiotProjectsLocationsRegistriesDevicesStatesList](docs/projects/README.md#cloudiotprojectslocationsregistriesdevicesstateslist) - Lists the last few versions of the device state in descending order (i.e.: newest first).
* [CloudiotProjectsLocationsRegistriesGroupsDevicesList](docs/projects/README.md#cloudiotprojectslocationsregistriesgroupsdeviceslist) - List devices in a device registry.
* [CloudiotProjectsLocationsRegistriesGroupsGetIamPolicy](docs/projects/README.md#cloudiotprojectslocationsregistriesgroupsgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [CloudiotProjectsLocationsRegistriesGroupsSetIamPolicy](docs/projects/README.md#cloudiotprojectslocationsregistriesgroupssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy.
* [CloudiotProjectsLocationsRegistriesGroupsTestIamPermissions](docs/projects/README.md#cloudiotprojectslocationsregistriesgroupstestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.
* [CloudiotProjectsLocationsRegistriesList](docs/projects/README.md#cloudiotprojectslocationsregistrieslist) - Lists device registries.
* [CloudiotProjectsLocationsRegistriesUnbindDeviceFromGateway](docs/projects/README.md#cloudiotprojectslocationsregistriesunbinddevicefromgateway) - Deletes the association between the device and the gateway.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
