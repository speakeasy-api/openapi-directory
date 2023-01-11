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

            PlaycustomappAccountsCustomAppsCreateRequest req = new PlaycustomappAccountsCustomAppsCreateRequest() {{
                security = new PlaycustomappAccountsCustomAppsCreateSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new PlaycustomappAccountsCustomAppsCreatePathParams() {{
                    account = "eum";
                }};
                queryParams = new PlaycustomappAccountsCustomAppsCreateQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "praesentium";
                    alt = "media";
                    callback = "blanditiis";
                    fields = "blanditiis";
                    key = "inventore";
                    oauthToken = "voluptas";
                    prettyPrint = false;
                    quotaUser = "quibusdam";
                    uploadType = "et";
                    uploadProtocol = "perspiciatis";
                }};
                request = "ut".getBytes();
            }};

            PlaycustomappAccountsCustomAppsCreateResponse res = sdk.accounts.playcustomappAccountsCustomAppsCreate(req);

            if (res.customApp.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->