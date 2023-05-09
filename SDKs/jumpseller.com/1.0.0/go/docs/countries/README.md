# Countries

### Available Operations

* [GetCountriesJSON](#getcountriesjson) - Retrieve all Countries.
* [GetCountriesCountryCodeJSON](#getcountriescountrycodejson) - Retrieve a single Country information.
* [GetCountriesCountryCodeRegionsJSON](#getcountriescountrycoderegionsjson) - Retrieve all Regions from a single Country.
* [GetCountriesCountryCodeRegionsRegionCodeJSON](#getcountriescountrycoderegionsregioncodejson) - Retrieve a single Region information object.

## GetCountriesJSON

Retrieve all Countries.

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
    res, err := s.Countries.GetCountriesJSON(ctx, operations.GetCountriesJSONRequest{
        Authtoken: "hic",
        Login: "saepe",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Countries != nil {
        // handle response
    }
}
```

## GetCountriesCountryCodeJSON

Retrieve a single Country information.

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
    res, err := s.Countries.GetCountriesCountryCodeJSON(ctx, operations.GetCountriesCountryCodeJSONRequest{
        Authtoken: "fuga",
        CountryCode: "in",
        Login: "corporis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Country != nil {
        // handle response
    }
}
```

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
    res, err := s.Countries.GetCountriesCountryCodeRegionsJSON(ctx, operations.GetCountriesCountryCodeRegionsJSONRequest{
        Authtoken: "iste",
        CountryCode: "iure",
        Login: "saepe",
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
    res, err := s.Countries.GetCountriesCountryCodeRegionsRegionCodeJSON(ctx, operations.GetCountriesCountryCodeRegionsRegionCodeJSONRequest{
        Authtoken: "quidem",
        CountryCode: "architecto",
        Login: "ipsa",
        RegionCode: "reiciendis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Region != nil {
        // handle response
    }
}
```
