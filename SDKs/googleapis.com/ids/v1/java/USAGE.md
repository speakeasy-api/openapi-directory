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
                    parent = "odio";
                }};
                queryParams = new IdsProjectsLocationsEndpointsCreateQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "quas";
                    alt = "media";
                    callback = "amet";
                    endpointId = "excepturi";
                    fields = "maxime";
                    key = "perspiciatis";
                    oauthToken = "ad";
                    prettyPrint = false;
                    quotaUser = "provident";
                    requestId = "voluptatem";
                    uploadType = "ipsam";
                    uploadProtocol = "est";
                }};
                request = new EndpointInput() {{
                    description = "incidunt";
                    labels = new java.util.HashMap<String, String>() {{
                        put("et", "possimus");
                        put("quasi", "dolorum");
                        put("quasi", "nostrum");
                    }};
                    network = "quia";
                    severity = "INFORMATIONAL";
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