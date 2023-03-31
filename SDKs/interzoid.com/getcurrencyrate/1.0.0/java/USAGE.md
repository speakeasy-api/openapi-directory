<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.GetcurrencyrateQueryParams;
import org.openapis.openapi.models.operations.GetcurrencyrateRequest;
import org.openapis.openapi.models.operations.GetcurrencyrateResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetcurrencyrateRequest req = new GetcurrencyrateRequest() {{
                queryParams = new GetcurrencyrateQueryParams() {{
                    license = "corrupti";
                    symbol = "provident";
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