<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.RetrievePrefixPricingPathParams;
import org.openapis.openapi.models.operations.RetrievePrefixPricingQueryParams;
import org.openapis.openapi.models.operations.RetrievePrefixPricingRequest;
import org.openapis.openapi.models.operations.RetrievePrefixPricingResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetrievePrefixPricingRequest req = new RetrievePrefixPricingRequest() {{
                pathParams = new RetrievePrefixPricingPathParams() {{
                    type = "corrupti";
                }};
                queryParams = new RetrievePrefixPricingQueryParams() {{
                    apiKey = "provident";
                    apiSecret = "distinctio";
                    prefix = "quibusdam";
                }};
            }};            

            RetrievePrefixPricingResponse res = sdk.pricing.retrievePrefixPricing(req);

            if (res.pricingCountriesResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->