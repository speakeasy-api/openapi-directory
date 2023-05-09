# SDK

## Overview

PlaceKit OpenAPI Specifications ([repository](https://github.com/placekit/api-reference))

### Available Operations

* [Reverse](#reverse) - Reverse geocoding
* [Search](#search) - Search for addresses

## Reverse

Performs a reverse geocoding search.

It will return the closest results around `coordinates`.\
If `coordinates` are not set, it will use the user's IP to approximate its coordinates but results will be less accurate (city level accuracy instead of street level accuracy).


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.Reverse(ctx, operations.ReverseRequestBody{
        Coordinates: sdk.String("48.873662, 2.295063"),
        Countries: []string{
            "suscipit",
            "iure",
            "magnam",
        },
        CountryByIP: sdk.Bool(false),
        Language: operations.ReverseRequestBodyLanguageEnumFr.ToPointer(),
        MaxResults: sdk.Int64(891773),
        Types: []shared.TypesEnum{
            shared.TypesEnumMinusTrain,
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Results != nil {
        // handle response
    }
}
```

## Search

Performs a forward geocoding search.

It will return results around `coordinates` (if provided) and the best matching textual relevance.

**It is highly recommended** to set the `countries` parameter with the country you need results from for the best accuracy and revelance possible.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.Search(ctx, operations.SearchRequestBody{
        Coordinates: sdk.String("48.873662, 2.295063"),
        Countries: []string{
            "suscipit",
            "molestiae",
        },
        CountryByIP: sdk.Bool(false),
        Language: operations.SearchRequestBodyLanguageEnumFr.ToPointer(),
        MaxResults: sdk.Int64(791725),
        Query: sdk.String("42 avenue Champs Elysees Paris"),
        Types: []shared.TypesEnum{
            shared.TypesEnumStreet,
            shared.TypesEnumMinusCountry,
            shared.TypesEnumMinusStreet,
            shared.TypesEnumCountry,
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Results != nil {
        // handle response
    }
}
```
