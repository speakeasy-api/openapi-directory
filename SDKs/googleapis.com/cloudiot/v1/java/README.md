# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudiotProjectsLocationsRegistriesBindDeviceToGatewayRequest;
import org.openapis.openapi.models.operations.CloudiotProjectsLocationsRegistriesBindDeviceToGatewayResponse;
import org.openapis.openapi.models.operations.CloudiotProjectsLocationsRegistriesBindDeviceToGatewaySecurity;
import org.openapis.openapi.models.operations.CloudiotProjectsLocationsRegistriesBindDeviceToGatewaySecurityOption1;
import org.openapis.openapi.models.operations.CloudiotProjectsLocationsRegistriesBindDeviceToGatewaySecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.BindDeviceToGatewayRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudiotProjectsLocationsRegistriesBindDeviceToGatewayRequest req = new CloudiotProjectsLocationsRegistriesBindDeviceToGatewayRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                bindDeviceToGatewayRequest = new BindDeviceToGatewayRequest() {{
                    deviceId = "distinctio";
                    gatewayId = "quibusdam";
                }};;
                accessToken = "unde";
                alt = AltEnum.PROTO;
                callback = "corrupti";
                fields = "illum";
                key = "vel";
                oauthToken = "error";
                prettyPrint = false;
                quotaUser = "deserunt";
                uploadType = "suscipit";
                uploadProtocol = "iure";
            }};            

            CloudiotProjectsLocationsRegistriesBindDeviceToGatewayResponse res = sdk.projects.cloudiotProjectsLocationsRegistriesBindDeviceToGateway(req, new CloudiotProjectsLocationsRegistriesBindDeviceToGatewaySecurity() {{
                option1 = new CloudiotProjectsLocationsRegistriesBindDeviceToGatewaySecurityOption1("magnam", "debitis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.bindDeviceToGatewayResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [projects](docs/projects/README.md)

* [cloudiotProjectsLocationsRegistriesBindDeviceToGateway](docs/projects/README.md#cloudiotprojectslocationsregistriesbinddevicetogateway) - Associates the device with the gateway.
* [cloudiotProjectsLocationsRegistriesCreate](docs/projects/README.md#cloudiotprojectslocationsregistriescreate) - Creates a device registry that contains devices.
* [cloudiotProjectsLocationsRegistriesDevicesConfigVersionsList](docs/projects/README.md#cloudiotprojectslocationsregistriesdevicesconfigversionslist) - Lists the last few versions of the device configuration in descending order (i.e.: newest first).
* [cloudiotProjectsLocationsRegistriesDevicesCreate](docs/projects/README.md#cloudiotprojectslocationsregistriesdevicescreate) - Creates a device in a device registry.
* [cloudiotProjectsLocationsRegistriesDevicesDelete](docs/projects/README.md#cloudiotprojectslocationsregistriesdevicesdelete) - Deletes a device.
* [cloudiotProjectsLocationsRegistriesDevicesGet](docs/projects/README.md#cloudiotprojectslocationsregistriesdevicesget) - Gets details about a device.
* [cloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfig](docs/projects/README.md#cloudiotprojectslocationsregistriesdevicesmodifycloudtodeviceconfig) - Modifies the configuration for the device, which is eventually sent from the Cloud IoT Core servers. Returns the modified configuration version and its metadata.
* [cloudiotProjectsLocationsRegistriesDevicesPatch](docs/projects/README.md#cloudiotprojectslocationsregistriesdevicespatch) - Updates a device.
* [cloudiotProjectsLocationsRegistriesDevicesSendCommandToDevice](docs/projects/README.md#cloudiotprojectslocationsregistriesdevicessendcommandtodevice) - Sends a command to the specified device. In order for a device to be able to receive commands, it must: 1) be connected to Cloud IoT Core using the MQTT protocol, and 2) be subscribed to the group of MQTT topics specified by /devices/{device-id}/commands/#. This subscription will receive commands at the top-level topic /devices/{device-id}/commands as well as commands for subfolders, like /devices/{device-id}/commands/subfolder. Note that subscribing to specific subfolders is not supported. If the command could not be delivered to the device, this method will return an error; in particular, if the device is not subscribed, this method will return FAILED_PRECONDITION. Otherwise, this method will return OK. If the subscription is QoS 1, at least once delivery will be guaranteed; for QoS 0, no acknowledgment will be expected from the device.
* [cloudiotProjectsLocationsRegistriesDevicesStatesList](docs/projects/README.md#cloudiotprojectslocationsregistriesdevicesstateslist) - Lists the last few versions of the device state in descending order (i.e.: newest first).
* [cloudiotProjectsLocationsRegistriesGroupsDevicesList](docs/projects/README.md#cloudiotprojectslocationsregistriesgroupsdeviceslist) - List devices in a device registry.
* [cloudiotProjectsLocationsRegistriesGroupsGetIamPolicy](docs/projects/README.md#cloudiotprojectslocationsregistriesgroupsgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [cloudiotProjectsLocationsRegistriesGroupsSetIamPolicy](docs/projects/README.md#cloudiotprojectslocationsregistriesgroupssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy.
* [cloudiotProjectsLocationsRegistriesGroupsTestIamPermissions](docs/projects/README.md#cloudiotprojectslocationsregistriesgroupstestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.
* [cloudiotProjectsLocationsRegistriesList](docs/projects/README.md#cloudiotprojectslocationsregistrieslist) - Lists device registries.
* [cloudiotProjectsLocationsRegistriesUnbindDeviceFromGateway](docs/projects/README.md#cloudiotprojectslocationsregistriesunbinddevicefromgateway) - Deletes the association between the device and the gateway.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
