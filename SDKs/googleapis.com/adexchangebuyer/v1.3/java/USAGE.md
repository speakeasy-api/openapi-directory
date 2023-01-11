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

            AdexchangebuyerAccountsGetRequest req = new AdexchangebuyerAccountsGetRequest() {{
                security = new AdexchangebuyerAccountsGetSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new AdexchangebuyerAccountsGetPathParams() {{
                    id = 8717895732742165505;
                }};
                queryParams = new AdexchangebuyerAccountsGetQueryParams() {{
                    alt = "json";
                    fields = "culpa";
                    key = "expedita";
                    oauthToken = "consequuntur";
                    prettyPrint = false;
                    quotaUser = "expedita";
                    userIp = "voluptas";
                }};
            }};

            AdexchangebuyerAccountsGetResponse res = sdk.accounts.adexchangebuyerAccountsGet(req);

            if (res.account.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->