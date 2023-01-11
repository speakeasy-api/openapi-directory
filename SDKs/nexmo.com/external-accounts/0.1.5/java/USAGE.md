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
                    pageNumber = 8717895732742165505;
                    pageSize = 2259404117704393152;
                    provider = "viber_service_msg";
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