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
                    project = "officia";
                }};
                queryParams = new GkehubProjectsLocationsGlobalMembershipsInitializeHubQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "incidunt";
                    alt = "media";
                    callback = "et";
                    fields = "dolorem";
                    key = "nesciunt";
                    oauthToken = "laborum";
                    prettyPrint = true;
                    quotaUser = "dicta";
                    uploadType = "voluptatum";
                    uploadProtocol = "nisi";
                }};
                request = new java.util.HashMap<String, Object>() {{
                    put("rerum", "porro");
                    put("et", "necessitatibus");
                    put("architecto", "sed");
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