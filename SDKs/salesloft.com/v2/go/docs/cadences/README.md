# Cadences

## Overview

Cadence Management

### Available Operations

* [GetV2CadencesJSON](#getv2cadencesjson) - List cadences
* [GetV2CadencesIDJSON](#getv2cadencesidjson) - Fetch a cadence

## GetV2CadencesJSON

Fetches multiple cadence records. The records can be filtered, paged, and sorted according to
the respective parameters.


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
    res, err := s.Cadences.GetV2CadencesJSON(ctx, operations.GetV2CadencesJSONRequest{
        Archived: sdk.Bool(false),
        GroupIds: sdk.String("totam"),
        Ids: []int64{
            424089,
            497678,
            554688,
            427834,
        },
        IncludePagingCounts: sdk.Bool(false),
        LimitPagingCounts: sdk.Bool(false),
        Name: []string{
            "possimus",
            "facilis",
        },
        OwnedByGUID: []string{
            "commodi",
            "in",
            "corporis",
        },
        Page: sdk.Int64(968904),
        PeopleAddable: sdk.Bool(false),
        PerPage: sdk.Int64(828657),
        Shared: sdk.Bool(false),
        SortBy: sdk.String("nemo"),
        SortDirection: sdk.String("recusandae"),
        TeamCadence: sdk.Bool(false),
        UpdatedAt: []string{
            "aperiam",
            "cum",
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

## GetV2CadencesIDJSON

Fetches a cadence, by ID only.


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
    res, err := s.Cadences.GetV2CadencesIDJSON(ctx, operations.GetV2CadencesIDJSONRequest{
        ID: "375ed4f6-fbee-441f-b331-7fe35b60eb1e",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
