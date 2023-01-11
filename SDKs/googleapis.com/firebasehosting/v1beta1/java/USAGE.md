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
                    parent = "sit";
                }};
                queryParams = new FirebasehostingProjectsSitesCreateQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "culpa";
                    alt = "media";
                    callback = "consequuntur";
                    fields = "dolor";
                    key = "expedita";
                    oauthToken = "voluptas";
                    prettyPrint = true;
                    quotaUser = "et";
                    siteId = "nihil";
                    uploadType = "rerum";
                    uploadProtocol = "dicta";
                }};
                request = new SiteInput() {{
                    appId = "debitis";
                    labels = new java.util.HashMap<String, String>() {{
                        put("et", "ut");
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