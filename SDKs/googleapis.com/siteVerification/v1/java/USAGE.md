<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.SiteVerificationWebResourceDeleteSecurity;
import org.openapis.openapi.models.operations.SiteVerificationWebResourceDeletePathParams;
import org.openapis.openapi.models.operations.SiteVerificationWebResourceDeleteQueryParams;
import org.openapis.openapi.models.operations.SiteVerificationWebResourceDeleteRequest;
import org.openapis.openapi.models.operations.SiteVerificationWebResourceDeleteResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

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
                    id = "corrupti";
                }};
                queryParams = new SiteVerificationWebResourceDeleteQueryParams() {{
                    alt = "json";
                    fields = "provident";
                    key = "distinctio";
                    oauthToken = "quibusdam";
                    prettyPrint = false;
                    quotaUser = "unde";
                    userIp = "nulla";
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