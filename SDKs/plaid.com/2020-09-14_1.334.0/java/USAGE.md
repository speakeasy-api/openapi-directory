<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AccountsBalanceGetResponse;
import org.openapis.openapi.models.shared.AccountsBalanceGetRequest;
import org.openapis.openapi.models.shared.AccountsBalanceGetRequestOptions;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.AccountsBalanceGetRequest req = new AccountsBalanceGetRequest() {{
                accessToken = "corrupti";
                clientId = "provident";
                options = new AccountsBalanceGetRequestOptions() {{
                    accountIds = new String[]{{
                        add("quibusdam"),
                        add("unde"),
                        add("nulla"),
                    }};
                    minLastUpdatedDatetime = "2021-04-22T12:08:58.275Z";
                }};
                secret = "vel";
            }}            

            AccountsBalanceGetResponse res = sdk.plaid.accountsBalanceGet(req);

            if (res.accountsGetResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->