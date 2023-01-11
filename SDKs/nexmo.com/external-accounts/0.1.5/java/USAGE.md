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

            GetAllAccountsRequest req = new GetAllAccountsRequest() {{
                security = new GetAllAccountsSecurity() {{
                    bearerAuth = new SchemeBearerAuth() {{
                        authorization = "Bearer YOUR_BEARER_TOKEN_HERE";
                    }};
                }};
                queryParams = new GetAllAccountsQueryParams() {{
                    pageNumber = 2936429507888505905;
                    pageSize = 7852850693617059290;
                    provider = "messenger";
                }};
            }};

            GetAllAccountsResponse res = sdk.account.getAllAccounts(req);

            if (res.getAllAccounts200ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->