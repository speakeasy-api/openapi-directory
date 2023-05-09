<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GkehubProjectsLocationsGlobalMembershipsInitializeHubRequest;
import org.openapis.openapi.models.operations.GkehubProjectsLocationsGlobalMembershipsInitializeHubResponse;
import org.openapis.openapi.models.operations.GkehubProjectsLocationsGlobalMembershipsInitializeHubSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GkehubProjectsLocationsGlobalMembershipsInitializeHubRequest req = new GkehubProjectsLocationsGlobalMembershipsInitializeHubRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("quibusdam", "unde");
                    put("nulla", "corrupti");
                    put("illum", "vel");
                }};
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

            GkehubProjectsLocationsGlobalMembershipsInitializeHubResponse res = sdk.projects.gkehubProjectsLocationsGlobalMembershipsInitializeHub(req, new GkehubProjectsLocationsGlobalMembershipsInitializeHubSecurity("suscipit", "molestiae") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.initializeHubResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->