<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.AdexchangebuyerAccountsGetSecurity;
import org.openapis.openapi.models.operations.AdexchangebuyerAccountsGetPathParams;
import org.openapis.openapi.models.operations.AdexchangebuyerAccountsGetQueryParams;
import org.openapis.openapi.models.operations.AdexchangebuyerAccountsGetRequest;
import org.openapis.openapi.models.operations.AdexchangebuyerAccountsGetResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

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
                    id = 548814;
                }};
                queryParams = new AdexchangebuyerAccountsGetQueryParams() {{
                    alt = "json";
                    fields = "provident";
                    key = "distinctio";
                    oauthToken = "quibusdam";
                    prettyPrint = false;
                    quotaUser = "unde";
                    userIp = "nulla";
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