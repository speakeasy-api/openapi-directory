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
                    parent = "sed";
                }};
                queryParams = new NetworkconnectivityProjectsLocationsGlobalHubsCreateQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "atque";
                    alt = "json";
                    callback = "omnis";
                    fields = "nemo";
                    hubId = "illo";
                    key = "est";
                    oauthToken = "ut";
                    prettyPrint = false;
                    quotaUser = "est";
                    requestId = "expedita";
                    uploadType = "autem";
                    uploadProtocol = "aut";
                }};
                request = new HubInput() {{
                    createTime = "aut";
                    description = "optio";
                    labels = new java.util.HashMap<String, String>() {{
                        put("sed", "libero");
                    }};
                    name = "deserunt";
                    updateTime = "quis";
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