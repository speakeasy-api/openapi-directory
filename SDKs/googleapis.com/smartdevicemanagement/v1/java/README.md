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
import org.openapis.openapi.models.operations.SmartdevicemanagementEnterprisesDevicesExecuteCommandRequest;
import org.openapis.openapi.models.operations.SmartdevicemanagementEnterprisesDevicesExecuteCommandResponse;
import org.openapis.openapi.models.operations.SmartdevicemanagementEnterprisesDevicesExecuteCommandSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SmartdevicemanagementEnterprisesDevicesExecuteCommandRequest req = new SmartdevicemanagementEnterprisesDevicesExecuteCommandRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                googleHomeEnterpriseSdmV1ExecuteDeviceCommandRequest = new GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandRequest() {{
                    command = "distinctio";
                    params = new java.util.HashMap<String, Object>() {{
                        put("unde", "nulla");
                        put("corrupti", "illum");
                        put("vel", "error");
                        put("deserunt", "suscipit");
                    }};
                }};;
                accessToken = "iure";
                alt = AltEnum.JSON;
                callback = "debitis";
                fields = "ipsa";
                key = "delectus";
                oauthToken = "tempora";
                prettyPrint = false;
                quotaUser = "suscipit";
                uploadType = "molestiae";
                uploadProtocol = "minus";
            }};            

            SmartdevicemanagementEnterprisesDevicesExecuteCommandResponse res = sdk.enterprises.smartdevicemanagementEnterprisesDevicesExecuteCommand(req, new SmartdevicemanagementEnterprisesDevicesExecuteCommandSecurity("placeat", "voluptatum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleHomeEnterpriseSdmV1ExecuteDeviceCommandResponse != null) {
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


### [enterprises](docs/enterprises/README.md)

* [smartdevicemanagementEnterprisesDevicesExecuteCommand](docs/enterprises/README.md#smartdevicemanagemententerprisesdevicesexecutecommand) - Executes a command to device managed by the enterprise.
* [smartdevicemanagementEnterprisesDevicesList](docs/enterprises/README.md#smartdevicemanagemententerprisesdeviceslist) - Lists devices managed by the enterprise.
* [smartdevicemanagementEnterprisesStructuresList](docs/enterprises/README.md#smartdevicemanagemententerprisesstructureslist) - Lists structures managed by the enterprise.
* [smartdevicemanagementEnterprisesStructuresRoomsGet](docs/enterprises/README.md#smartdevicemanagemententerprisesstructuresroomsget) - Gets a room managed by the enterprise.
* [smartdevicemanagementEnterprisesStructuresRoomsList](docs/enterprises/README.md#smartdevicemanagemententerprisesstructuresroomslist) - Lists rooms managed by the enterprise.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
