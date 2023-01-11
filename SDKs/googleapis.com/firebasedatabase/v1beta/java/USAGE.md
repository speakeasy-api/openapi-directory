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

            FirebasedatabaseProjectsLocationsInstancesCreateRequest req = new FirebasedatabaseProjectsLocationsInstancesCreateRequest() {{
                security = new FirebasedatabaseProjectsLocationsInstancesCreateSecurity() {{
                    option1 = new FirebasedatabaseProjectsLocationsInstancesCreateSecurityOption1() {{
                        oauth2 = new SchemeOauth2() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                        oauth2c = new SchemeOauth2c() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                    }};
                }};
                pathParams = new FirebasedatabaseProjectsLocationsInstancesCreatePathParams() {{
                    parent = "sit";
                }};
                queryParams = new FirebasedatabaseProjectsLocationsInstancesCreateQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "culpa";
                    alt = "media";
                    callback = "consequuntur";
                    databaseId = "dolor";
                    fields = "expedita";
                    key = "voluptas";
                    oauthToken = "fugit";
                    prettyPrint = false;
                    quotaUser = "nihil";
                    uploadType = "rerum";
                    uploadProtocol = "dicta";
                    validateOnly = true;
                }};
                request = new DatabaseInstanceInput() {{
                    name = "voluptatum";
                    type = "DATABASE_INSTANCE_TYPE_UNSPECIFIED";
                }};
            }};

            FirebasedatabaseProjectsLocationsInstancesCreateResponse res = sdk.projects.firebasedatabaseProjectsLocationsInstancesCreate(req);

            if (res.databaseInstance.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->