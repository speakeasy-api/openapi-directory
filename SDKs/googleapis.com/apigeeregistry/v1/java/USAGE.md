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
                    parent = "sit";
                }};
                queryParams = new ApigeeregistryProjectsLocationsApisCreateQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "culpa";
                    alt = "media";
                    apiId = "consequuntur";
                    callback = "dolor";
                    fields = "expedita";
                    key = "voluptas";
                    oauthToken = "fugit";
                    prettyPrint = false;
                    quotaUser = "nihil";
                    uploadType = "rerum";
                    uploadProtocol = "dicta";
                }};
                request = new ApiInput() {{
                    annotations = new java.util.HashMap<String, String>() {{
                        put("voluptatum", "et");
                    }};
                    availability = "ut";
                    description = "dolorem";
                    displayName = "et";
                    labels = new java.util.HashMap<String, String>() {{
                        put("iste", "vitae");
                    }};
                    name = "totam";
                    recommendedDeployment = "dolores";
                    recommendedVersion = "illum";
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