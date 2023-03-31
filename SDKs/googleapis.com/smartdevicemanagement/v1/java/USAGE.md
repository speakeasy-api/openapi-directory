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