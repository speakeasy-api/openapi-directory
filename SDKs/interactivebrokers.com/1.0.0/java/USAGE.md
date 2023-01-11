<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            builder.setSecurity(
                new Security() {{
                    cookieAuth = new SchemeCookieAuth() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }}
            );

            SDK sdk = builder.build();

            GetAccountsRequest req = new GetAccountsRequest() {{
                queryParams = new GetAccountsQueryParams() {{
                    account = "delectus";
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