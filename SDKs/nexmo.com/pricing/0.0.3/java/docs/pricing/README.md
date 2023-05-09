# pricing

### Available Operations

* [retrievePrefixPricing](#retrieveprefixpricing) - Retrieve outbound pricing for a specific dialing prefix.
* [retrievePricingAllCountries](#retrievepricingallcountries) - Retrieve outbound pricing for all countries.
* [retrievePricingCountry](#retrievepricingcountry) - Retrieve outbound pricing for a specific country.

## retrievePrefixPricing

Retrieves the pricing information based on the dialing prefix.


### Example Usage

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

            RetrievePrefixPricingRequest req = new RetrievePrefixPricingRequest("unde", "nulla", "corrupti", "illum");            

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

## retrievePricingAllCountries

Retrieves the pricing information for all countries.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RetrievePricingAllCountriesRequest;
import org.openapis.openapi.models.operations.RetrievePricingAllCountriesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetrievePricingAllCountriesRequest req = new RetrievePricingAllCountriesRequest("vel", "error", "deserunt");            

            RetrievePricingAllCountriesResponse res = sdk.pricing.retrievePricingAllCountries(req);

            if (res.pricingCountriesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## retrievePricingCountry

Retrieves the pricing information based on the specified country.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RetrievePricingCountryRequest;
import org.openapis.openapi.models.operations.RetrievePricingCountryResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetrievePricingCountryRequest req = new RetrievePricingCountryRequest("suscipit", "iure", "magnam", "debitis");            

            RetrievePricingCountryResponse res = sdk.pricing.retrievePricingCountry(req);

            if (res.pricingCountryResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
