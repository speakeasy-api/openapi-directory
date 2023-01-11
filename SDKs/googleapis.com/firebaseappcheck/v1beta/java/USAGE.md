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
                    parent = "molestiae";
                }};
                queryParams = new FirebaseappcheckProjectsAppsAppAttestConfigBatchGetQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "ad";
                    alt = "proto";
                    callback = "dicta";
                    fields = "ratione";
                    key = "ipsam";
                    names = new String[]() {{
                        add("quibusdam"),
                        add("voluptatem"),
                        add("aut"),
                    }};
                    oauthToken = "est";
                    prettyPrint = true;
                    quotaUser = "ab";
                    uploadType = "eos";
                    uploadProtocol = "quam";
                }};
            }};

            FirebaseappcheckProjectsAppsAppAttestConfigBatchGetResponse res = sdk.projects.firebaseappcheckProjectsAppsAppAttestConfigBatchGet(req);

            if (res.googleFirebaseAppcheckV1betaBatchGetAppAttestConfigsResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->