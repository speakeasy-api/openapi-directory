# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RetrievePrefixPricingRequest;
import org.openapis.openapi.models.operations.RetrievePrefixPricingResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetrievePrefixPricingRequest req = new RetrievePrefixPricingRequest("corrupti", "provident", "distinctio", "quibusdam");            

            RetrievePrefixPricingResponse res = sdk.pricing.retrievePrefixPricing(req);

            if (res.pricingCountriesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [pricing](docs/pricing/README.md)

* [retrievePrefixPricing](docs/pricing/README.md#retrieveprefixpricing) - Retrieve outbound pricing for a specific dialing prefix.
* [retrievePricingAllCountries](docs/pricing/README.md#retrievepricingallcountries) - Retrieve outbound pricing for all countries.
* [retrievePricingCountry](docs/pricing/README.md#retrievepricingcountry) - Retrieve outbound pricing for a specific country.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
