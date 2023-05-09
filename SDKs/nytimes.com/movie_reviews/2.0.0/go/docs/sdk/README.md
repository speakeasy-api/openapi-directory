# SDK

## Overview

With the Movie Reviews API, you can search New York Times movie reviews by keyword and get lists of NYT Critics' Picks.

<http://developer.nytimes.com/>
### Available Operations

* [GetCriticsResourceTypeJSON](#getcriticsresourcetypejson)
* [GetReviewsSearchJSON](#getreviewssearchjson)
* [GetReviewsResourceTypeJSON](#getreviewsresourcetypejson)

## GetCriticsResourceTypeJSON

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Apikey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetCriticsResourceTypeJSON(ctx, operations.GetCriticsResourceTypeJSONRequest{
        ResourceType: "provident",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetCriticsResourceTypeJSON200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetReviewsSearchJSON

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Apikey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetReviewsSearchJSON(ctx, operations.GetReviewsSearchJSONRequest{
        CriticsPick: operations.GetReviewsSearchJSONCriticsPickEnumN.ToPointer(),
        Offset: sdk.Int64(844266),
        OpeningDate: sdk.String("unde"),
        Order: sdk.String("nulla"),
        PublicationDate: sdk.String("corrupti"),
        Query: sdk.String("illum"),
        Reviewer: sdk.String("vel"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetReviewsSearchJSON200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetReviewsResourceTypeJSON

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Apikey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetReviewsResourceTypeJSON(ctx, operations.GetReviewsResourceTypeJSONRequest{
        Offset: sdk.Int64(623564),
        Order: operations.GetReviewsResourceTypeJSONOrderEnumByPublicationDate.ToPointer(),
        ResourceType: operations.GetReviewsResourceTypeJSONResourceTypeEnumAll,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetReviewsResourceTypeJSON200ApplicationJSONObject != nil {
        // handle response
    }
}
```
