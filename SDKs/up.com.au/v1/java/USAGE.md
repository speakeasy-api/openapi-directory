<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.GetAccountsRequest;
import org.openapis.openapi.models.operations.GetAccountsResponse;
import org.openapis.openapi.models.shared.OwnershipTypeEnumEnum;
import org.openapis.openapi.models.shared.AccountTypeEnumEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            GetAccountsRequest req = new GetAccountsRequest() {{
                filterAccountType = "TRANSACTIONAL";
                filterOwnershipType = "JOINT";
                pageSize = 715190;
            }}            

            GetAccountsResponse res = sdk.accounts.getAccounts(req);

            if (res.listAccountsResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->