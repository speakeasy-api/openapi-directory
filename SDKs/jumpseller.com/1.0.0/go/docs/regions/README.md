# Regions

### Available Operations

* [GetCountriesCountryCodeRegionsJSON](#getcountriescountrycoderegionsjson) - Retrieve all Regions from a single Country.
* [GetCountriesCountryCodeRegionsRegionCodeJSON](#getcountriescountrycoderegionsregioncodejson) - Retrieve a single Region information object.

## GetCountriesCountryCodeRegionsJSON

Retrieve all Regions from a single Country.

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
    res, err := s.Regions.GetCountriesCountryCodeRegionsJSON(ctx, operations.GetCountriesCountryCodeRegionsJSONRequest{
        Authtoken: "nostrum",
        CountryCode: "saepe",
        Login: "error",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Regions != nil {
        // handle response
    }
}
```

## GetCountriesCountryCodeRegionsRegionCodeJSON

Retrieve a single Region information object.

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
    res, err := s.Regions.GetCountriesCountryCodeRegionsRegionCodeJSON(ctx, operations.GetCountriesCountryCodeRegionsRegionCodeJSONRequest{
        Authtoken: "consequatur",
        CountryCode: "incidunt",
        Login: "reiciendis",
        RegionCode: "dolorem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Region != nil {
        // handle response
    }
}
```
