# CadenceMemberships

## Overview

Cadence Membership

### Available Operations

* [DeleteV2CadenceMembershipsIDJSON](#deletev2cadencemembershipsidjson) - Delete a cadence membership
* [GetV2CadenceMembershipsJSON](#getv2cadencemembershipsjson) - List cadence memberships
* [GetV2CadenceMembershipsIDJSON](#getv2cadencemembershipsidjson) - Fetch a cadence membership
* [PostV2CadenceMembershipsJSON](#postv2cadencemembershipsjson) - Create a cadence membership

## DeleteV2CadenceMembershipsIDJSON

Cadence Membership


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
    res, err := s.CadenceMemberships.DeleteV2CadenceMembershipsIDJSON(ctx, operations.DeleteV2CadenceMembershipsIDJSONRequest{
        ID: "4f157560-82d6-48ea-99f1-d17051339d08",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetV2CadenceMembershipsJSON

Fetches multiple cadence membership records. The records can be filtered, paged, and sorted according to
the respective parameters. A cadence membership is the association between a person and their current and
historical time on a cadence. Cadence membership records are mutable and change over time. If a person is
added to a cadence and re-added to the same cadence in the future, there is a single membership record.


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
    res, err := s.CadenceMemberships.GetV2CadenceMembershipsJSON(ctx, operations.GetV2CadenceMembershipsJSONRequest{
        CadenceID: sdk.Int64(15606),
        CurrentlyOnCadence: sdk.Bool(false),
        Ids: []int64{
            428796,
            649832,
            68074,
        },
        IncludePagingCounts: sdk.Bool(false),
        LimitPagingCounts: sdk.Bool(false),
        Page: sdk.Int64(544591),
        PerPage: sdk.Int64(251941),
        PersonID: sdk.Int64(32465),
        SortBy: sdk.String("dolor"),
        SortDirection: sdk.String("occaecati"),
        UpdatedAt: []string{
            "impedit",
            "explicabo",
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

## GetV2CadenceMembershipsIDJSON

Fetches a cadence membership, by ID only.


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
    res, err := s.CadenceMemberships.GetV2CadenceMembershipsIDJSON(ctx, operations.GetV2CadenceMembershipsIDJSONRequest{
        ID: "6071f93f-5f06-442d-ac7a-f515cc413aa6",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## PostV2CadenceMembershipsJSON

Adds a person to a cadence. person_id and cadence_id are required, and must be visible to the authenticated user. user_id will
default to the authenticated user, but can be set to any visible user on the authenticated team.

A person cannot be added to a cadence on behalf of a teammate unless the cadence is a team cadence, the cadence is owned by
the teammate, or the teammate has the Personal Cadence Admin permission.


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
    res, err := s.CadenceMemberships.PostV2CadenceMembershipsJSON(ctx, operations.PostV2CadenceMembershipsJSONRequest{
        CadenceID: 246063,
        PersonID: 633931,
        StepID: sdk.Int64(665859),
        UserID: sdk.Int64(926880),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
