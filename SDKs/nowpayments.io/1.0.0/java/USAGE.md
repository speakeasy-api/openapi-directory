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

            ThreeGetEstimatedPriceRequest req = new ThreeGetEstimatedPriceRequest() {{
                queryParams = new ThreeGetEstimatedPriceQueryParams() {{
                    amount = "non";
                    currencyFrom = "est";
                    currencyTo = "alias";
                }};
            }};

            ThreeGetEstimatedPriceResponse res = sdk.threeGetEstimatedPrice(req);

            if (res.threeGetEstimatedPrice200ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->