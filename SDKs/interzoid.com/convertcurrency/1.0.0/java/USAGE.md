<!-- Start SDK Example Usage -->
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

            ConvertcurrencyRequest req = new ConvertcurrencyRequest() {{
                amount = "corrupti";
                from = "provident";
                license = "distinctio";
                to = "quibusdam";
            }}            

            ConvertcurrencyResponse res = sdk.liveCurrencyRateConversion.convertcurrency(req);

            if (res.convertcurrency200ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->