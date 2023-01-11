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
                    name = "sit";
                }};
                queryParams = new SmartdevicemanagementEnterprisesDevicesExecuteCommandQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "culpa";
                    alt = "media";
                    callback = "consequuntur";
                    fields = "dolor";
                    key = "expedita";
                    oauthToken = "voluptas";
                    prettyPrint = true;
                    quotaUser = "et";
                    uploadType = "nihil";
                    uploadProtocol = "rerum";
                }};
                request = new GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandRequest() {{
                    command = "dicta";
                    params = new java.util.HashMap<String, Object>() {{
                        put("voluptatum", "et");
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