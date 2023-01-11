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

            ContentAccountsAuthinfoRequest req = new ContentAccountsAuthinfoRequest() {{
                security = new ContentAccountsAuthinfoSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                queryParams = new ContentAccountsAuthinfoQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "non";
                    alt = "media";
                    callback = "voluptatem";
                    fields = "officiis";
                    key = "in";
                    oauthToken = "et";
                    prettyPrint = true;
                    quotaUser = "rerum";
                    uploadType = "dicta";
                    uploadProtocol = "velit";
                }};
            }};

            ContentAccountsAuthinfoResponse res = sdk.accounts.contentAccountsAuthinfo(req);

            if (res.accountsAuthInfoResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->