# RootEventSeries

## Overview

Event Series.

### Available Operations

* [QueryEventSeriesByIDV1](#queryeventseriesbyidv1) - Get all events and relevant information associated with an event series ID

## QueryEventSeriesByIDV1

Gets all events, event series, SLA Domain, and object information that is associated with a specified event series ID.

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
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootEventSeries.QueryEventSeriesByIDV1(ctx, operations.QueryEventSeriesByIDV1Request{
        ID: "25c1fc0e-115c-480b-bf91-8544ec42defc",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EventSeriesSummaryV1 != nil {
        // handle response
    }
}
```
