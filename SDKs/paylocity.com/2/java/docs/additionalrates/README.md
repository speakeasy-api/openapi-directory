# additionalRates

### Available Operations

* [addOrUpdateAdditionalRates](#addorupdateadditionalrates) - Add/update additional rates

## addOrUpdateAdditionalRates

Sends new or updated employee additional rates information directly to Web Pay.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddOrUpdateAdditionalRatesRequest;
import org.openapis.openapi.models.operations.AddOrUpdateAdditionalRatesResponse;
import org.openapis.openapi.models.operations.AddOrUpdateAdditionalRatesSecurity;
import org.openapis.openapi.models.shared.AdditionalRate;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AddOrUpdateAdditionalRatesRequest req = new AddOrUpdateAdditionalRatesRequest(                new AdditionalRate() {{
                                changeReason = "ipsa";
                                costCenter1 = "delectus";
                                costCenter2 = "tempora";
                                costCenter3 = "suscipit";
                                effectiveDate = "molestiae";
                                endCheckDate = "minus";
                                job = "placeat";
                                rate = 5288.95;
                                rateCode = "iusto";
                                rateNotes = "excepturi";
                                ratePer = "nisi";
                                shift = "recusandae";
                            }};, "temporibus", "ab");            

            AddOrUpdateAdditionalRatesResponse res = sdk.additionalRates.addOrUpdateAdditionalRates(req, new AddOrUpdateAdditionalRatesSecurity("quis") {{
                paylocityAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
