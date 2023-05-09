# Users

## Overview

User Management

### Available Operations

* [GetV2UsersJSON](#getv2usersjson) - List users
* [GetV2UsersIDJSON](#getv2usersidjson) - Fetch a user
* [PutV2UsersIDJSON](#putv2usersidjson) - Update a user

## GetV2UsersJSON

Non Admin: Lists only your user, or all on team depending on group visibility policy
Team Admin: Lists users associated with your team


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
    res, err := s.Users.GetV2UsersJSON(ctx, operations.GetV2UsersJSONRequest{
        Active: sdk.Bool(false),
        GroupID: []string{
            "nesciunt",
            "sit",
            "odio",
            "minus",
        },
        GUID: []string{
            "recusandae",
            "voluptates",
            "praesentium",
            "dicta",
        },
        HasCrmUser: sdk.Bool(false),
        Ids: []int64{
            25190,
        },
        IncludePagingCounts: sdk.Bool(false),
        Page: sdk.Int64(396234),
        PerPage: sdk.Int64(898638),
        RoleID: []string{
            "deleniti",
        },
        Search: sdk.String("sunt"),
        SortBy: sdk.String("nesciunt"),
        SortDirection: sdk.String("delectus"),
        VisibleOnly: sdk.Bool(false),
        WorkCountry: []string{
            "aliquam",
            "deserunt",
            "modi",
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

## GetV2UsersIDJSON

Fetches a user, by ID only.


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
    res, err := s.Users.GetV2UsersIDJSON(ctx, operations.GetV2UsersIDJSONRequest{
        ID: "1c480d3f-2132-4af0-b102-d514f4cc6f18",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## PutV2UsersIDJSON

Updates a user.


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
    res, err := s.Users.PutV2UsersIDJSON(ctx, operations.PutV2UsersIDJSONRequest{
        RequestBody: &operations.PutV2UsersIDJSONRequestBody{
            Active: sdk.Bool(false),
            GroupID: sdk.Int64(711615),
            RoleID: sdk.String("hic"),
            WorkCountry: sdk.String("excepturi"),
        },
        ID: "621a6a4f-77a8-47ee-be4b-e752c65b3441",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
