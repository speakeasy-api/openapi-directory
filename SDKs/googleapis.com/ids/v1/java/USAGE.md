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

            IdsProjectsLocationsEndpointsCreateRequest req = new IdsProjectsLocationsEndpointsCreateRequest() {{
                security = new IdsProjectsLocationsEndpointsCreateSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new IdsProjectsLocationsEndpointsCreatePathParams() {{
                    parent = "sit";
                }};
                queryParams = new IdsProjectsLocationsEndpointsCreateQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "culpa";
                    alt = "media";
                    callback = "consequuntur";
                    endpointId = "dolor";
                    fields = "expedita";
                    key = "voluptas";
                    oauthToken = "fugit";
                    prettyPrint = false;
                    quotaUser = "nihil";
                    requestId = "rerum";
                    uploadType = "dicta";
                    uploadProtocol = "debitis";
                }};
                request = new EndpointInput() {{
                    description = "voluptatum";
                    labels = new java.util.HashMap<String, String>() {{
                        put("ut", "dolorem");
                    }};
                    network = "et";
                    severity = "SEVERITY_UNSPECIFIED";
                    trafficLogs = true;
                }};
            }};

            IdsProjectsLocationsEndpointsCreateResponse res = sdk.projects.idsProjectsLocationsEndpointsCreate(req);

            if (res.operation.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->