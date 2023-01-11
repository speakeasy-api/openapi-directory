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

            NetworkconnectivityProjectsLocationsGlobalHubsCreateRequest req = new NetworkconnectivityProjectsLocationsGlobalHubsCreateRequest() {{
                security = new NetworkconnectivityProjectsLocationsGlobalHubsCreateSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new NetworkconnectivityProjectsLocationsGlobalHubsCreatePathParams() {{
                    parent = "sit";
                }};
                queryParams = new NetworkconnectivityProjectsLocationsGlobalHubsCreateQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "culpa";
                    alt = "media";
                    callback = "consequuntur";
                    fields = "dolor";
                    hubId = "expedita";
                    key = "voluptas";
                    oauthToken = "fugit";
                    prettyPrint = false;
                    quotaUser = "nihil";
                    requestId = "rerum";
                    uploadType = "dicta";
                    uploadProtocol = "debitis";
                }};
                request = new HubInput() {{
                    createTime = "voluptatum";
                    description = "et";
                    labels = new java.util.HashMap<String, String>() {{
                        put("dolorem", "et");
                        put("voluptate", "iste");
                        put("vitae", "totam");
                    }};
                    name = "dolores";
                    updateTime = "illum";
                }};
            }};

            NetworkconnectivityProjectsLocationsGlobalHubsCreateResponse res = sdk.projects.networkconnectivityProjectsLocationsGlobalHubsCreate(req);

            if (res.googleLongrunningOperation.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->