# currencies

### Available Operations

* [listSupportedCurrenciesV2](#listsupportedcurrenciesv2) - List Supported Currencies

## listSupportedCurrenciesV2

List the supported currencies.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListSupportedCurrenciesV2Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("unde") {{
                    oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            ListSupportedCurrenciesV2Response res = sdk.currencies.listSupportedCurrenciesV2();

            if (res.supportedCurrencyResponseV2 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
