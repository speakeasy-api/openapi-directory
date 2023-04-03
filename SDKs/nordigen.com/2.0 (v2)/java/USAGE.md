<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AccountsBalancesRetrieveRequest;
import org.openapis.openapi.models.operations.AccountsBalancesRetrieveResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    jwtAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            AccountsBalancesRetrieveRequest req = new AccountsBalancesRetrieveRequest() {{
                id = "89bd9d8d-69a6-474e-8f46-7cc8796ed151";
            }}            

            AccountsBalancesRetrieveResponse res = sdk.accounts.accountsBalancesRetrieve(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->