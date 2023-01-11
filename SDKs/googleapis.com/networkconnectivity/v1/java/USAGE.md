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
                    parent = "et";
                }};
                queryParams = new NetworkconnectivityProjectsLocationsGlobalHubsCreateQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "voluptatum";
                    alt = "json";
                    callback = "et";
                    fields = "iste";
                    hubId = "iure";
                    key = "ad";
                    oauthToken = "tenetur";
                    prettyPrint = false;
                    quotaUser = "recusandae";
                    requestId = "cupiditate";
                    uploadType = "ab";
                    uploadProtocol = "iste";
                }};
                request = new HubInput() {{
                    description = "occaecati";
                    labels = new java.util.HashMap<String, String>() {{
                        put("qui", "est");
                    }};
                    name = "laboriosam";
                    routingVpcs = new openapisdk.models.shared.RoutingVpcInput[]() {{
                        add(new RoutingVpcInput() {{
                            uri = "sed";
                        }}),
                    }};
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