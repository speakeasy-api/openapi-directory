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

            FirebaseappcheckProjectsAppsAppAttestConfigBatchGetRequest req = new FirebaseappcheckProjectsAppsAppAttestConfigBatchGetRequest() {{
                security = new FirebaseappcheckProjectsAppsAppAttestConfigBatchGetSecurity() {{
                    option1 = new FirebaseappcheckProjectsAppsAppAttestConfigBatchGetSecurityOption1() {{
                        oauth2 = new SchemeOauth2() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                        oauth2c = new SchemeOauth2c() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                    }};
                }};
                pathParams = new FirebaseappcheckProjectsAppsAppAttestConfigBatchGetPathParams() {{
                    parent = "sit";
                }};
                queryParams = new FirebaseappcheckProjectsAppsAppAttestConfigBatchGetQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "culpa";
                    alt = "media";
                    callback = "consequuntur";
                    fields = "dolor";
                    key = "expedita";
                    names = new String[]() {{
                        add("fugit"),
                        add("et"),
                        add("nihil"),
                    }};
                    oauthToken = "rerum";
                    prettyPrint = false;
                    quotaUser = "debitis";
                    uploadType = "voluptatum";
                    uploadProtocol = "et";
                }};
            }};

            FirebaseappcheckProjectsAppsAppAttestConfigBatchGetResponse res = sdk.projects.firebaseappcheckProjectsAppsAppAttestConfigBatchGet(req);

            if (res.googleFirebaseAppcheckV1BatchGetAppAttestConfigsResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->