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

            SiteVerificationWebResourceDeleteRequest req = new SiteVerificationWebResourceDeleteRequest() {{
                security = new SiteVerificationWebResourceDeleteSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new SiteVerificationWebResourceDeletePathParams() {{
                    id = "sit";
                }};
                queryParams = new SiteVerificationWebResourceDeleteQueryParams() {{
                    alt = "json";
                    fields = "culpa";
                    key = "expedita";
                    oauthToken = "consequuntur";
                    prettyPrint = false;
                    quotaUser = "expedita";
                    userIp = "voluptas";
                }};
            }};

            SiteVerificationWebResourceDeleteResponse res = sdk.webResource.siteVerificationWebResourceDelete(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->