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

            ApigeeregistryProjectsLocationsApisCreateRequest req = new ApigeeregistryProjectsLocationsApisCreateRequest() {{
                security = new ApigeeregistryProjectsLocationsApisCreateSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new ApigeeregistryProjectsLocationsApisCreatePathParams() {{
                    parent = "velit";
                }};
                queryParams = new ApigeeregistryProjectsLocationsApisCreateQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "dolor";
                    alt = "proto";
                    apiId = "velit";
                    callback = "aut";
                    fields = "aut";
                    key = "nobis";
                    oauthToken = "iste";
                    prettyPrint = false;
                    quotaUser = "expedita";
                    uploadType = "impedit";
                    uploadProtocol = "rerum";
                }};
                request = new ApiInput() {{
                    annotations = new java.util.HashMap<String, String>() {{
                        put("in", "assumenda");
                        put("modi", "quos");
                        put("vel", "aut");
                    }};
                    availability = "beatae";
                    description = "consectetur";
                    displayName = "et";
                    labels = new java.util.HashMap<String, String>() {{
                        put("provident", "inventore");
                        put("quas", "dolorum");
                    }};
                    name = "dolores";
                    recommendedDeployment = "aut";
                    recommendedVersion = "sit";
                }};
            }};

            ApigeeregistryProjectsLocationsApisCreateResponse res = sdk.projects.apigeeregistryProjectsLocationsApisCreate(req);

            if (res.api.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->