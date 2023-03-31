<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.GkehubProjectsLocationsGlobalMembershipsInitializeHubSecurity;
import org.openapis.openapi.models.operations.GkehubProjectsLocationsGlobalMembershipsInitializeHubPathParams;
import org.openapis.openapi.models.operations.GkehubProjectsLocationsGlobalMembershipsInitializeHubQueryParams;
import org.openapis.openapi.models.operations.GkehubProjectsLocationsGlobalMembershipsInitializeHubRequest;
import org.openapis.openapi.models.operations.GkehubProjectsLocationsGlobalMembershipsInitializeHubResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GkehubProjectsLocationsGlobalMembershipsInitializeHubRequest req = new GkehubProjectsLocationsGlobalMembershipsInitializeHubRequest() {{
                security = new GkehubProjectsLocationsGlobalMembershipsInitializeHubSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new GkehubProjectsLocationsGlobalMembershipsInitializeHubPathParams() {{
                    project = "corrupti";
                }};
                queryParams = new GkehubProjectsLocationsGlobalMembershipsInitializeHubQueryParams() {{
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
                request = new java.util.HashMap<String, Object>() {{
                    put("iure", "magnam");
                    put("debitis", "ipsa");
                }};
            }};            

            GkehubProjectsLocationsGlobalMembershipsInitializeHubResponse res = sdk.projects.gkehubProjectsLocationsGlobalMembershipsInitializeHub(req);

            if (res.initializeHubResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->