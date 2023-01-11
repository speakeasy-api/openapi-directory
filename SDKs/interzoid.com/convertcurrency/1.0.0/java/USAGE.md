<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

            ConvertcurrencyRequest req = new ConvertcurrencyRequest() {{
                queryParams = new ConvertcurrencyQueryParams() {{
                    amount = "nesciunt";
                    from = "non";
                    license = "autem";
                    to = "omnis";
                }};
            }};

            ConvertcurrencyResponse res = sdk.liveCurrencyRateConversion.convertcurrency(req);

            if (res.convertcurrency200ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->