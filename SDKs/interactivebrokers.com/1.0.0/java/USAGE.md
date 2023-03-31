<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.GetAccountsQueryParams;
import org.openapis.openapi.models.operations.GetAccountsRequest;
import org.openapis.openapi.models.operations.GetAccountsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    cookieAuth = new SchemeCookieAuth() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            GetAccountsRequest req = new GetAccountsRequest() {{
                queryParams = new GetAccountsQueryParams() {{
                    account = "corrupti";
                }};
            }};            

            GetAccountsResponse res = sdk.accountAndPortfolio.getAccounts(req);

            if (res.getAccounts200ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->