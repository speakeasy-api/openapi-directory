# V1

### Available Operations

* [GetCountries](#getcountries) - Retrieves summary country information for the provided marketId and filters
* [GetCountry](#getcountry) - Retrieves country and summary state information for provided countryKey

## GetCountries

Authorization is not required

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
    res, err := s.V1.GetCountries(ctx, operations.GetCountriesRequest{
        MarketID: "nulla",
        Order: operations.GetCountriesOrderEnumDescending.ToPointer(),
        RegionName: sdk.String("illum"),
        RegionTypeID: sdk.Int64(423655),
        Sort: operations.GetCountriesSortEnumLabel.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ArrayOfCountrySummary != nil {
        // handle response
    }
}
```

## GetCountry

Authorization is not required

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
    res, err := s.V1.GetCountry(ctx, operations.GetCountryRequest{
        CountryKey: "deserunt",
        MarketID: "suscipit",
        Order: operations.GetCountryOrderEnumAscending.ToPointer(),
        Sort: operations.GetCountrySortEnumKey.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ArrayOfCountry != nil {
        // handle response
    }
}
```
