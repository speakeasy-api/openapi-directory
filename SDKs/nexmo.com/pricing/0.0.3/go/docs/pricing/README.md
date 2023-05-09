# Pricing

### Available Operations

* [RetrievePrefixPricing](#retrieveprefixpricing) - Retrieve outbound pricing for a specific dialing prefix.
* [RetrievePricingAllCountries](#retrievepricingallcountries) - Retrieve outbound pricing for all countries.
* [RetrievePricingCountry](#retrievepricingcountry) - Retrieve outbound pricing for a specific country.

## RetrievePrefixPricing

Retrieves the pricing information based on the dialing prefix.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Pricing.RetrievePrefixPricing(ctx, operations.RetrievePrefixPricingRequest{
        APIKey: "unde",
        APISecret: "nulla",
        Prefix: "corrupti",
        Type: "illum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PricingCountriesResponse != nil {
        // handle response
    }
}
```

## RetrievePricingAllCountries

Retrieves the pricing information for all countries.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Pricing.RetrievePricingAllCountries(ctx, operations.RetrievePricingAllCountriesRequest{
        APIKey: "vel",
        APISecret: "error",
        Type: "deserunt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PricingCountriesResponse != nil {
        // handle response
    }
}
```

## RetrievePricingCountry

Retrieves the pricing information based on the specified country.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Pricing.RetrievePricingCountry(ctx, operations.RetrievePricingCountryRequest{
        APIKey: "suscipit",
        APISecret: "iure",
        Country: "French Guiana",
        Type: "debitis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PricingCountryResponse != nil {
        // handle response
    }
}
```
