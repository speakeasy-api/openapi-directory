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