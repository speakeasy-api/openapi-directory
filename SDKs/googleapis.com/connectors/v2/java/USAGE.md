<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConnectorsProjectsLocationsConnectionsActionsExecuteRequest;
import org.openapis.openapi.models.operations.ConnectorsProjectsLocationsConnectionsActionsExecuteResponse;
import org.openapis.openapi.models.operations.ConnectorsProjectsLocationsConnectionsActionsExecuteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ExecuteActionRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ConnectorsProjectsLocationsConnectionsActionsExecuteRequest req = new ConnectorsProjectsLocationsConnectionsActionsExecuteRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                executeActionRequest = new ExecuteActionRequest() {{
                    parameters = new java.util.HashMap<String, Object>() {{
                        put("quibusdam", "unde");
                        put("nulla", "corrupti");
                        put("illum", "vel");
                    }};
                }};;
                accessToken = "error";
                alt = AltEnum.MEDIA;
                callback = "suscipit";
                fields = "iure";
                key = "magnam";
                oauthToken = "debitis";
                prettyPrint = false;
                quotaUser = "ipsa";
                uploadType = "delectus";
                uploadProtocol = "tempora";
            }};            

            ConnectorsProjectsLocationsConnectionsActionsExecuteResponse res = sdk.projects.connectorsProjectsLocationsConnectionsActionsExecute(req, new ConnectorsProjectsLocationsConnectionsActionsExecuteSecurity("suscipit", "molestiae") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.executeActionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->