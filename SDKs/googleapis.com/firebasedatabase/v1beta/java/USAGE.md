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
                    parent = "nam";
                }};
                queryParams = new FirebasedatabaseProjectsLocationsInstancesCreateQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "quo";
                    alt = "proto";
                    callback = "quo";
                    databaseId = "dolor";
                    fields = "dolorem";
                    key = "enim";
                    oauthToken = "nemo";
                    prettyPrint = false;
                    quotaUser = "in";
                    uploadType = "maxime";
                    uploadProtocol = "rerum";
                    validateOnly = false;
                }};
                request = new DatabaseInstanceInput() {{
                    name = "vero";
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