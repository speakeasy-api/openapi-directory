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

            ConnectorsProjectsLocationsConnectionsActionsExecuteRequest req = new ConnectorsProjectsLocationsConnectionsActionsExecuteRequest() {{
                security = new ConnectorsProjectsLocationsConnectionsActionsExecuteSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new ConnectorsProjectsLocationsConnectionsActionsExecutePathParams() {{
                    name = "totam";
                }};
                queryParams = new ConnectorsProjectsLocationsConnectionsActionsExecuteQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "quod";
                    alt = "media";
                    callback = "qui";
                    fields = "maiores";
                    key = "ipsam";
                    oauthToken = "non";
                    prettyPrint = true;
                    quotaUser = "veritatis";
                    uploadType = "aut";
                    uploadProtocol = "eveniet";
                }};
                request = new ExecuteActionRequest() {{
                    parameters = new java.util.HashMap<String, Object>() {{
                        put("ipsa", "rem");
                    }};
                }};
            }};

            ConnectorsProjectsLocationsConnectionsActionsExecuteResponse res = sdk.projects.connectorsProjectsLocationsConnectionsActionsExecute(req);

            if (res.executeActionResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->