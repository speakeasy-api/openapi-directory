# Roles

## Overview

Role Information

### Available Operations

* [GetV2CustomRolesJSON](#getv2customrolesjson) - List custom roles
* [GetV2CustomRolesIDJSON](#getv2customrolesidjson) - Fetch a custom role

## GetV2CustomRolesJSON

Fetches multiple custom role records. The records can be filtered, and sorted according to
the respective parameters. A custom role is any role that is not Admin or User.


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
    res, err := s.Roles.GetV2CustomRolesJSON(ctx, operations.GetV2CustomRolesJSONRequest{
        Ids: []string{
            "quod",
            "laboriosam",
            "doloremque",
        },
        IncludePagingCounts: sdk.Bool(false),
        LimitPagingCounts: sdk.Bool(false),
        Page: sdk.Int64(31574),
        PerPage: sdk.Int64(816421),
        SortBy: sdk.String("necessitatibus"),
        SortDirection: sdk.String("maxime"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetV2CustomRolesIDJSON

Fetches a custom role, by ID only.


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
    res, err := s.Roles.GetV2CustomRolesIDJSON(ctx, operations.GetV2CustomRolesIDJSONRequest{
        ID: "001ac802-e2ec-409f-b8f0-f816ff3477c1",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
