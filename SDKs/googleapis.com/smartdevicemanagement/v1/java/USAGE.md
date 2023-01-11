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
                    name = "excepturi";
                }};
                queryParams = new SmartdevicemanagementEnterprisesDevicesExecuteCommandQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "placeat";
                    alt = "json";
                    callback = "autem";
                    fields = "voluptas";
                    key = "aut";
                    oauthToken = "sunt";
                    prettyPrint = false;
                    quotaUser = "molestiae";
                    uploadType = "aut";
                    uploadProtocol = "nesciunt";
                }};
                request = new GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandRequest() {{
                    command = "reiciendis";
                    params = new java.util.HashMap<String, Object>() {{
                        put("tenetur", "eum");
                        put("quo", "minus");
                        put("sint", "est");
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