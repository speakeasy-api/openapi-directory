<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.ApigeeregistryProjectsLocationsApisCreateSecurity;
import org.openapis.openapi.models.operations.ApigeeregistryProjectsLocationsApisCreatePathParams;
import org.openapis.openapi.models.operations.ApigeeregistryProjectsLocationsApisCreateQueryParams;
import org.openapis.openapi.models.operations.ApigeeregistryProjectsLocationsApisCreateRequest;
import org.openapis.openapi.models.operations.ApigeeregistryProjectsLocationsApisCreateResponse;
import org.openapis.openapi.models.shared.ApiInput;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

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
                    parent = "corrupti";
                }};
                queryParams = new ApigeeregistryProjectsLocationsApisCreateQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    apiId = "unde";
                    callback = "nulla";
                    fields = "corrupti";
                    key = "illum";
                    oauthToken = "vel";
                    prettyPrint = false;
                    quotaUser = "error";
                    uploadType = "deserunt";
                    uploadProtocol = "suscipit";
                }};
                request = new ApiInput() {{
                    annotations = new java.util.HashMap<String, String>() {{
                        put("magnam", "debitis");
                        put("ipsa", "delectus");
                    }};
                    availability = "tempora";
                    description = "suscipit";
                    displayName = "molestiae";
                    labels = new java.util.HashMap<String, String>() {{
                        put("placeat", "voluptatum");
                        put("iusto", "excepturi");
                        put("nisi", "recusandae");
                        put("temporibus", "ab");
                    }};
                    name = "quis";
                    recommendedDeployment = "veritatis";
                    recommendedVersion = "deserunt";
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