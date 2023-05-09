# Calls

## Overview

Call Management

### Available Operations

* [GetV2ActivitiesCallsJSON](#getv2activitiescallsjson) - List calls
* [GetV2ActivitiesCallsIDJSON](#getv2activitiescallsidjson) - Fetch a call
* [PostV2ActivitiesCallsJSON](#postv2activitiescallsjson) - Create a call

## GetV2ActivitiesCallsJSON

Fetches multiple call records. The records can be filtered, paged, and sorted according to
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
    res, err := s.Calls.GetV2ActivitiesCallsJSON(ctx, operations.GetV2ActivitiesCallsJSONRequest{
        CreatedAt: []string{
            "consequatur",
            "esse",
        },
        Disposition: []string{
            "sit",
            "voluptatum",
        },
        Ids: []int64{
            922112,
            361151,
            89494,
        },
        IncludePagingCounts: sdk.Bool(false),
        LimitPagingCounts: sdk.Bool(false),
        Page: sdk.Int64(502710),
        PerPage: sdk.Int64(405942),
        PersonID: []int64{
            24313,
        },
        Sentiment: []string{
            "nostrum",
            "saepe",
        },
        SortBy: sdk.String("error"),
        SortDirection: sdk.String("consequatur"),
        UpdatedAt: []string{
            "reiciendis",
            "dolorem",
        },
        UserGUID: []string{
            "dicta",
            "architecto",
            "occaecati",
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

## GetV2ActivitiesCallsIDJSON

Fetches a call, by ID only.


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
    res, err := s.Calls.GetV2ActivitiesCallsIDJSON(ctx, operations.GetV2ActivitiesCallsIDJSONRequest{
        ID: "4b8abf60-3a79-4f9d-be0a-b7da8a50ce18",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## PostV2ActivitiesCallsJSON

Creates a call. The parameters of this endpoint can be used to create an action
and ensure that the CRM Task is mapped correctly.


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
    res, err := s.Calls.PostV2ActivitiesCallsJSON(ctx, operations.PostV2ActivitiesCallsJSONRequestBody{
        ActionID: sdk.Int64(442036),
        CrmParams: map[string]interface{}{
            "totam": "suscipit",
            "quidem": "maxime",
            "et": "esse",
            "amet": "assumenda",
        },
        Disposition: sdk.String("ea"),
        Duration: sdk.Int64(539118),
        LinkedCallDataRecordIds: []int64{
            887265,
            886961,
            880107,
        },
        Notes: sdk.String("natus"),
        PersonID: 328303,
        Sentiment: sdk.String("aspernatur"),
        To: sdk.String("ex"),
        UserGUID: sdk.String("maiores"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
