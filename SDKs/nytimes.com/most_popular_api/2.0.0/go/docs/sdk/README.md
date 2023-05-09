# SDK

## Overview

Get lists of NYT Articles based on shares, emails, and views.

<http://developer.nytimes.com/>
### Available Operations

* [GETMostemailedSectionTimePeriodJSON](#getmostemailedsectiontimeperiodjson) - Most Emailed by Section & Time Period
* [GETMostsharedSectionTimePeriodJSON](#getmostsharedsectiontimeperiodjson) - Most Shared by Section & Time Period
* [GETMostviewedSectionTimePeriodJSON](#getmostviewedsectiontimeperiodjson) - Most Viewed by Section & Time Period

## GETMostemailedSectionTimePeriodJSON

Most Emailed by Section & Time Period

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GETMostemailedSectionTimePeriodJSON(ctx, operations.GETMostemailedSectionTimePeriodJSONRequest{
        Section: shared.SectionEnumTMagazine,
        TimePeriod: shared.TimePeriodEnumThirty,
    }, operations.GETMostemailedSectionTimePeriodJSONSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GETMostemailedSectionTimePeriodJSON200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GETMostsharedSectionTimePeriodJSON

Most Shared by Section & Time Period

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GETMostsharedSectionTimePeriodJSON(ctx, operations.GETMostsharedSectionTimePeriodJSONRequest{
        Section: shared.SectionEnumScience,
        TimePeriod: shared.TimePeriodEnumThirty,
    }, operations.GETMostsharedSectionTimePeriodJSONSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GETMostsharedSectionTimePeriodJSON200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GETMostviewedSectionTimePeriodJSON

Most Viewed by Section & Time Period

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GETMostviewedSectionTimePeriodJSON(ctx, operations.GETMostviewedSectionTimePeriodJSONRequest{
        Section: shared.SectionEnumPublicEditor,
        TimePeriod: shared.TimePeriodEnumThirty,
    }, operations.GETMostviewedSectionTimePeriodJSONSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GETMostviewedSectionTimePeriodJSON200ApplicationJSONObject != nil {
        // handle response
    }
}
```
