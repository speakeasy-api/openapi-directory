# liveCurrencyRateConversion

### Available Operations

* [convertcurrency](#convertcurrency) - Converts amount in one currency to that of another

## convertcurrency

Provide an amount in one currency (EUR, GBP, CNY, JPY, AUD, etc.), and also a second currency to convert it to. The API will return the result using current foreign exchange rates. See the API home page for a list of all supported currencies.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConvertcurrencyRequest;
import org.openapis.openapi.models.operations.ConvertcurrencyResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ConvertcurrencyRequest req = new ConvertcurrencyRequest("unde", "nulla", "corrupti", "illum");            

            ConvertcurrencyResponse res = sdk.liveCurrencyRateConversion.convertcurrency(req);

            if (res.convertcurrency200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
