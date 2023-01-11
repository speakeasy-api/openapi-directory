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

            RetrievePrefixPricingRequest req = new RetrievePrefixPricingRequest() {{
                pathParams = new RetrievePrefixPricingPathParams() {{
                    type = "id";
                }};
                queryParams = new RetrievePrefixPricingQueryParams() {{
                    apiKey = "ex";
                    apiSecret = "dignissimos";
                    prefix = "laudantium";
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