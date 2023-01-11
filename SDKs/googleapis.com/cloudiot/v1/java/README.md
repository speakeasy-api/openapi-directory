# openapisdk

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'openapisdk:openapisdk:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

            CloudiotProjectsLocationsRegistriesBindDeviceToGatewayRequest req = new CloudiotProjectsLocationsRegistriesBindDeviceToGatewayRequest() {{
                security = new CloudiotProjectsLocationsRegistriesBindDeviceToGatewaySecurity() {{
                    option1 = new CloudiotProjectsLocationsRegistriesBindDeviceToGatewaySecurityOption1() {{
                        oauth2 = new SchemeOauth2() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                        oauth2c = new SchemeOauth2c() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                    }};
                }};
                pathParams = new CloudiotProjectsLocationsRegistriesBindDeviceToGatewayPathParams() {{
                    parent = "reprehenderit";
                }};
                queryParams = new CloudiotProjectsLocationsRegistriesBindDeviceToGatewayQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "sit";
                    alt = "media";
                    callback = "iure";
                    fields = "ad";
                    key = "nam";
                    oauthToken = "dolores";
                    prettyPrint = true;
                    quotaUser = "corrupti";
                    uploadType = "quod";
                    uploadProtocol = "voluptas";
                }};
                request = new BindDeviceToGatewayRequest() {{
                    deviceId = "dolorem";
                    gatewayId = "molestias";
                }};
            }};

            CloudiotProjectsLocationsRegistriesBindDeviceToGatewayResponse res = sdk.projects.cloudiotProjectsLocationsRegistriesBindDeviceToGateway(req);

            if (res.bindDeviceToGatewayResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `cloudiotProjectsLocationsRegistriesBindDeviceToGateway` - Associates the device with the gateway.
* `cloudiotProjectsLocationsRegistriesCreate` - Creates a device registry that contains devices.
* `cloudiotProjectsLocationsRegistriesDevicesConfigVersionsList` - Lists the last few versions of the device configuration in descending order (i.e.: newest first).
* `cloudiotProjectsLocationsRegistriesDevicesCreate` - Creates a device in a device registry.
* `cloudiotProjectsLocationsRegistriesDevicesDelete` - Deletes a device.
* `cloudiotProjectsLocationsRegistriesDevicesGet` - Gets details about a device.
* `cloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfig` - Modifies the configuration for the device, which is eventually sent from the Cloud IoT Core servers. Returns the modified configuration version and its metadata.
* `cloudiotProjectsLocationsRegistriesDevicesPatch` - Updates a device.
* `cloudiotProjectsLocationsRegistriesDevicesSendCommandToDevice` - Sends a command to the specified device. In order for a device to be able to receive commands, it must: 1) be connected to Cloud IoT Core using the MQTT protocol, and 2) be subscribed to the group of MQTT topics specified by /devices/{device-id}/commands/#. This subscription will receive commands at the top-level topic /devices/{device-id}/commands as well as commands for subfolders, like /devices/{device-id}/commands/subfolder. Note that subscribing to specific subfolders is not supported. If the command could not be delivered to the device, this method will return an error; in particular, if the device is not subscribed, this method will return FAILED_PRECONDITION. Otherwise, this method will return OK. If the subscription is QoS 1, at least once delivery will be guaranteed; for QoS 0, no acknowledgment will be expected from the device.
* `cloudiotProjectsLocationsRegistriesDevicesStatesList` - Lists the last few versions of the device state in descending order (i.e.: newest first).
* `cloudiotProjectsLocationsRegistriesGroupsDevicesList` - List devices in a device registry.
* `cloudiotProjectsLocationsRegistriesGroupsGetIamPolicy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `cloudiotProjectsLocationsRegistriesGroupsSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy.
* `cloudiotProjectsLocationsRegistriesGroupsTestIamPermissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.
* `cloudiotProjectsLocationsRegistriesList` - Lists device registries.
* `cloudiotProjectsLocationsRegistriesUnbindDeviceFromGateway` - Deletes the association between the device and the gateway.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
