# ActivityHistories

## Overview

Activity Histories

### Available Operations

* [GetV2ActivityHistories](#getv2activityhistories) - List Past Activities

## GetV2ActivityHistories

Fetches all of the customer's past activities for your application. Returns all the Activities that are found on the Salesloft Activity Feed. <a href="/activity-history.html" target="_blank" rel="noopener noreferrer">Visit here for more details</a>.

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
    res, err := s.ActivityHistories.GetV2ActivityHistories(ctx, operations.GetV2ActivityHistoriesRequest{
        Resource: sdk.String("fugit"),
        IncludePagingCounts: sdk.Bool(false),
        OccurredAt: map[string]interface{}{
            "inventore": "non",
            "et": "dolorum",
            "laborum": "placeat",
            "velit": "eum",
        },
        Page: sdk.Int64(420539),
        PerPage: sdk.Int64(752135),
        Pinned: sdk.Bool(false),
        ResourceID: []string{
            "assumenda",
            "nulla",
            "voluptas",
        },
        ResourceType: sdk.String("libero"),
        SortBy: sdk.String("quasi"),
        SortDirection: sdk.String("tempora"),
        Type: sdk.String("numquam"),
        UpdatedAt: map[string]interface{}{
            "provident": "ipsa",
        },
        UserGUID: sdk.String("molestiae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
