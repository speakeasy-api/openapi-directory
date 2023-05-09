# SDK

## Overview

With the Times Newswire API, you can get links and metadata for Times articles and blog posts as soon as they are published on NYTimes.com. The Times Newswire API provides an up-to-the-minute stream of published items.

<http://developer.nytimes.com/>
### Available Operations

* [GetContentJSON](#getcontentjson)
* [GetContentSourceSectionJSON](#getcontentsourcesectionjson)
* [GetContentSourceSectionTimePeriodJSON](#getcontentsourcesectiontimeperiodjson)

## GetContentJSON

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
    res, err := s.SDK.GetContentJSON(ctx, operations.GetContentJSONRequest{
        URL: "provident",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetContentJSON200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetContentSourceSectionJSON

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
    res, err := s.SDK.GetContentSourceSectionJSON(ctx, operations.GetContentSourceSectionJSONRequest{
        Limit: sdk.Int64(715190),
        Offset: sdk.Int64(844266),
        Section: "unde",
        Source: operations.GetContentSourceSectionJSONSourceEnumIht,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetContentSourceSectionJSON200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetContentSourceSectionTimePeriodJSON

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
    res, err := s.SDK.GetContentSourceSectionTimePeriodJSON(ctx, operations.GetContentSourceSectionTimePeriodJSONRequest{
        Limit: sdk.Int64(544883),
        Offset: sdk.Int64(847252),
        Section: "vel",
        Source: operations.GetContentSourceSectionTimePeriodJSONSourceEnumNyt,
        TimePeriod: 645894,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetContentSourceSectionTimePeriodJSON200ApplicationJSONObject != nil {
        // handle response
    }
}
```
