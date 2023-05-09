# currencyRates

### Available Operations

* [getcurrencyrate](#getcurrencyrate) - Gets a foreign currency rate for one US Dollar

## getcurrencyrate

Use a currency symbol (EUR, GBP, CNY, JPY, AUD, etc.) to obtain a live currency foreign exchange rate for one US Dollar. See the API home page for list of all supported currencies.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetcurrencyrateRequest;
import org.openapis.openapi.models.operations.GetcurrencyrateResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetcurrencyrateRequest req = new GetcurrencyrateRequest("distinctio", "quibusdam");            

            GetcurrencyrateResponse res = sdk.currencyRates.getcurrencyrate(req);

            if (res.getcurrencyrate200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
