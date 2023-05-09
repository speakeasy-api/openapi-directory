<!-- Start SDK Example Usage -->
```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AccountsBalanceGetResponse;
import org.openapis.openapi.models.shared.AccountsBalanceGetRequest;
import org.openapis.openapi.models.shared.AccountsBalanceGetRequestOptions;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti", "provident", "distinctio") {{
                    clientId = "YOUR_API_KEY_HERE";
                    plaidVersion = "YOUR_API_KEY_HERE";
                    secret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.AccountsBalanceGetRequest req = new AccountsBalanceGetRequest("quibusdam") {{
                clientId = "unde";
                options = new AccountsBalanceGetRequestOptions() {{
                    accountIds = new String[]{{
                        add("corrupti"),
                        add("illum"),
                        add("vel"),
                        add("error"),
                    }};
                    minLastUpdatedDatetime = OffsetDateTime.parse("2022-03-26T09:37:56.283Z");
                }};;
                secret = "iure";
            }};            

            AccountsBalanceGetResponse res = sdk.plaid.accountsBalanceGet(req);

            if (res.accountsGetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->