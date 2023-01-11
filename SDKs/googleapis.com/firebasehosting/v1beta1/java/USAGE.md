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

            FirebasehostingProjectsSitesCreateRequest req = new FirebasehostingProjectsSitesCreateRequest() {{
                security = new FirebasehostingProjectsSitesCreateSecurity() {{
                    option1 = new FirebasehostingProjectsSitesCreateSecurityOption1() {{
                        oauth2 = new SchemeOauth2() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                        oauth2c = new SchemeOauth2c() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                    }};
                }};
                pathParams = new FirebasehostingProjectsSitesCreatePathParams() {{
                    parent = "est";
                }};
                queryParams = new FirebasehostingProjectsSitesCreateQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "rerum";
                    alt = "proto";
                    callback = "corrupti";
                    fields = "architecto";
                    key = "nihil";
                    oauthToken = "aut";
                    prettyPrint = true;
                    quotaUser = "natus";
                    siteId = "vero";
                    uploadType = "qui";
                    uploadProtocol = "commodi";
                }};
                request = new SiteInput() {{
                    appId = "hic";
                    labels = new java.util.HashMap<String, String>() {{
                        put("in", "enim");
                        put("voluptates", "tempore");
                        put("corporis", "labore");
                    }};
                }};
            }};

            FirebasehostingProjectsSitesCreateResponse res = sdk.projects.firebasehostingProjectsSitesCreate(req);

            if (res.site.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->