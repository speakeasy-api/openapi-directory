# CheckAPIUsage

## Overview

Resources that let you get API usage information.

### Available Operations

* [GetAPIUsagePlansV2](#getapiusageplansv2) - Get API Isage

## GetAPIUsagePlansV2

Returns prediction usage on a monthly basis for the current calendar month and future months. Each apiusage object in the response corresponds to a calendar month in your plan.

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
    res, err := s.CheckAPIUsage.GetAPIUsagePlansV2(ctx, operations.GetAPIUsagePlansV2Security{
        BearerToken: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIUsageList != nil {
        // handle response
    }
}
```
