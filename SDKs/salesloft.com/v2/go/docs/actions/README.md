# Actions

## Overview

Actions

### Available Operations

* [GetV2ActionsJSON](#getv2actionsjson) - List actions
* [GetV2ActionsIDJSON](#getv2actionsidjson) - Fetch an action

## GetV2ActionsJSON

Fetches multiple action records. The records can be filtered, paged, and sorted according to
the respective parameters. Only actions that are currently "in_progess" will be returned by
this endpoint.

If the requester is not an admin, this endpoint will only return actions belonging to the requester.
If the request is an admin, this endpoint will return actions for the entire team. Additionaly, an admin
may use the user_guid parameter to request actions that belong to specific users on the team.


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
    res, err := s.Actions.GetV2ActionsJSON(ctx, operations.GetV2ActionsJSONRequest{
        CadenceID: []int64{
            486160,
            630448,
            708548,
            874288,
        },
        DueOn: []string{
            "dolore",
            "quibusdam",
        },
        Ids: []int64{
            194342,
            617877,
            773326,
            13236,
        },
        IncludePagingCounts: sdk.Bool(false),
        LimitPagingCounts: sdk.Bool(false),
        MultitouchGroupID: []int64{
            347233,
            862310,
            148141,
            780427,
        },
        Page: sdk.Int64(981830),
        PerPage: sdk.Int64(985033),
        PersonID: []int64{
            753570,
            497391,
        },
        SortBy: sdk.String("alias"),
        SortDirection: sdk.String("officia"),
        StepID: sdk.Int64(269479),
        Type: sdk.String("ipsam"),
        UpdatedAt: []string{
            "aspernatur",
            "vel",
        },
        UserGUID: []string{
            "magnam",
            "ratione",
            "ex",
            "laudantium",
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

## GetV2ActionsIDJSON

Fetches an action, by ID only.
This endpoint will only return actions that are in_progress or pending_activity.
Once an action is complete, the request for that action will return a 404 status code.


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
    res, err := s.Actions.GetV2ActionsIDJSON(ctx, operations.GetV2ActionsIDJSONRequest{
        ID: "13f16d9f-5fce-46c5-9614-6c3e250fb008",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
