# premium

### Available Operations

* [retrieveAccountTransactionsV2](#retrieveaccounttransactionsv2) - Access account premium transactions.

## retrieveAccountTransactionsV2

Access account premium transactions.

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RetrieveAccountTransactionsV2Request;
import org.openapis.openapi.models.operations.RetrieveAccountTransactionsV2Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("officia") {{
                    jwtAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            RetrieveAccountTransactionsV2Request req = new RetrieveAccountTransactionsV2Request("a8e4824d-0ab4-4075-888e-51862065e904") {{
                country = "Vietnam";
                dateFrom = LocalDate.parse("2022-04-23");
                dateTo = LocalDate.parse("2022-11-25");
            }};            

            RetrieveAccountTransactionsV2Response res = sdk.premium.retrieveAccountTransactionsV2(req);

            if (res.retrieveAccountTransactionsV2200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
