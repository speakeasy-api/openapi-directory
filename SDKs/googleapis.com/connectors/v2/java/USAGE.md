<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.ConnectorsProjectsLocationsConnectionsActionsExecuteSecurity;
import org.openapis.openapi.models.operations.ConnectorsProjectsLocationsConnectionsActionsExecutePathParams;
import org.openapis.openapi.models.operations.ConnectorsProjectsLocationsConnectionsActionsExecuteQueryParams;
import org.openapis.openapi.models.operations.ConnectorsProjectsLocationsConnectionsActionsExecuteRequest;
import org.openapis.openapi.models.operations.ConnectorsProjectsLocationsConnectionsActionsExecuteResponse;
import org.openapis.openapi.models.shared.ExecuteActionRequest;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

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
                    name = "corrupti";
                }};
                queryParams = new ConnectorsProjectsLocationsConnectionsActionsExecuteQueryParams() {{
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
                request = new ExecuteActionRequest() {{
                    parameters = new java.util.HashMap<String, Object>() {{
                        put("iure", "magnam");
                        put("debitis", "ipsa");
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