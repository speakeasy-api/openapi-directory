# CallDataRecords

## Overview

Call Data Record Management

### Available Operations

* [GetV2CallDataRecordsJSON](#getv2calldatarecordsjson) - List call data records
* [GetV2CallDataRecordsIDJSON](#getv2calldatarecordsidjson) - Fetch a call data record

## GetV2CallDataRecordsJSON

Fetches multiple call data records. The records can be filtered, paged, and sorted according to
the respective parameters.

Call data records are records of all inbound and outbound calls through Salesloft. A call data record may
be associated with a call, but does not have to be.


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
    res, err := s.CallDataRecords.GetV2CallDataRecordsJSON(ctx, operations.GetV2CallDataRecordsJSONRequest{
        CreatedAt: []string{
            "maiores",
            "incidunt",
            "sed",
        },
        HasCall: sdk.Bool(false),
        Ids: []int64{
            258702,
            896762,
            215529,
        },
        IncludePagingCounts: sdk.Bool(false),
        LimitPagingCounts: sdk.Bool(false),
        Page: sdk.Int64(406733),
        PerPage: sdk.Int64(579912),
        PersonID: []int64{
            975752,
            271653,
            273009,
        },
        SortBy: sdk.String("voluptate"),
        SortDirection: sdk.String("reiciendis"),
        UpdatedAt: []string{
            "sit",
            "non",
        },
        UserGUID: []string{
            "praesentium",
            "facilis",
            "quaerat",
            "incidunt",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetV2CallDataRecordsIDJSON

Fetches a call data record, by ID only.


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
    res, err := s.CallDataRecords.GetV2CallDataRecordsIDJSON(ctx, operations.GetV2CallDataRecordsIDJSONRequest{
        ID: "5e80ca55-efd2-40e4-97e1-858b6a89fbe3",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
