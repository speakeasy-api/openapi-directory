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

import org.openapis.openapi.models.operations.SmartdevicemanagementEnterprisesDevicesExecuteCommandSecurity;
import org.openapis.openapi.models.operations.SmartdevicemanagementEnterprisesDevicesExecuteCommandPathParams;
import org.openapis.openapi.models.operations.SmartdevicemanagementEnterprisesDevicesExecuteCommandQueryParams;
import org.openapis.openapi.models.operations.SmartdevicemanagementEnterprisesDevicesExecuteCommandRequest;
import org.openapis.openapi.models.operations.SmartdevicemanagementEnterprisesDevicesExecuteCommandResponse;
import org.openapis.openapi.models.shared.GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandRequest;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SmartdevicemanagementEnterprisesDevicesExecuteCommandRequest req = new SmartdevicemanagementEnterprisesDevicesExecuteCommandRequest() {{
                security = new SmartdevicemanagementEnterprisesDevicesExecuteCommandSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new SmartdevicemanagementEnterprisesDevicesExecuteCommandPathParams() {{
                    name = "corrupti";
                }};
                queryParams = new SmartdevicemanagementEnterprisesDevicesExecuteCommandQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    callback = "unde";
                    fields = "nulla";
                    key = "corrupti";
                    oauthToken = "illum";
                    prettyPrint = false;
                    quotaUser = "vel";
                    uploadType = "error";
                    uploadProtocol = "deserunt";
                }};
                request = new GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandRequest() {{
                    command = "suscipit";
                    params = new java.util.HashMap<String, Object>() {{
                        put("magnam", "debitis");
                        put("ipsa", "delectus");
                    }};
                }};
            }};            

            SmartdevicemanagementEnterprisesDevicesExecuteCommandResponse res = sdk.enterprises.smartdevicemanagementEnterprisesDevicesExecuteCommand(req);

            if (res.googleHomeEnterpriseSdmV1ExecuteDeviceCommandResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### enterprises

* `smartdevicemanagementEnterprisesDevicesExecuteCommand` - Executes a command to device managed by the enterprise.
* `smartdevicemanagementEnterprisesDevicesList` - Lists devices managed by the enterprise.
* `smartdevicemanagementEnterprisesStructuresList` - Lists structures managed by the enterprise.
* `smartdevicemanagementEnterprisesStructuresRoomsGet` - Gets a room managed by the enterprise.
* `smartdevicemanagementEnterprisesStructuresRoomsList` - Lists rooms managed by the enterprise.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
