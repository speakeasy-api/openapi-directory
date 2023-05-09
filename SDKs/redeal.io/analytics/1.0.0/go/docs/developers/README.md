# Developers

## Overview

Operations available to regular developers

### Available Operations

* [GetEvents](#getevents) - get events for analytics

## GetEvents

By passing in the company, site or deal Id a set of user interaction event records is returned. For pagination of a large result set use queryexecutionid and nexttoken instead.


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
    res, err := s.Developers.GetEvents(ctx, operations.GetEventsRequest{
        Company: sdk.String("Mueller - Oberbrunner"),
        Deal: sdk.String("suscipit"),
        Nexttoken: sdk.String("iure"),
        Queryexecutionid: sdk.String("magnam"),
        Site: sdk.String("debitis"),
        Type: operations.GetEventsTypeEnumAll.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EventRecords != nil {
        // handle response
    }
}
```
