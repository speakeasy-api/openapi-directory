<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.GetAccountBalanceQueryParams;
import org.openapis.openapi.models.operations.GetAccountBalanceRequest;
import org.openapis.openapi.models.operations.GetAccountBalanceResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAccountBalanceRequest req = new GetAccountBalanceRequest() {{
                queryParams = new GetAccountBalanceQueryParams() {{
                    apiKey = "abcd1234";
                    apiSecret = "ABCDEFGH01234abc";
                }};
            }};            

            GetAccountBalanceResponse res = sdk.balance.getAccountBalance(req);

            if (res.accountBalance.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->