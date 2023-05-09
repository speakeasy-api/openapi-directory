# Statistics

## Overview

Retrieving server statistics

### Available Operations

* [GetStatistics](#getstatistics) - Fetch server Statistics

## GetStatistics

Fetch server Statistics

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Statistics.GetStatistics(ctx, operations.GetStatisticsRequest{
        From: types.MustTimeFromString("2022-12-31T23:01:47.942Z"),
        To: types.MustTimeFromString("2022-01-24T12:18:47.570Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Statistics != nil {
        // handle response
    }
}
```
