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

            GetcurrencyrateRequest req = new GetcurrencyrateRequest() {{
                queryParams = new GetcurrencyrateQueryParams() {{
                    license = "adipisci";
                    symbol = "vel";
                }};
            }};

            GetcurrencyrateResponse res = sdk.currencyRates.getcurrencyrate(req);

            if (res.getcurrencyrate200ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->