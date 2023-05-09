# Imports

## Overview

Import Management

### Available Operations

* [DeleteV2ImportsIDJSON](#deletev2importsidjson) - Delete an import
* [GetV2ImportsJSON](#getv2importsjson) - List imports
* [GetV2ImportsIDJSON](#getv2importsidjson) - Fetch an import
* [PostV2ImportsJSON](#postv2importsjson) - Create an import
* [PutV2ImportsIDJSON](#putv2importsidjson) - Update an import

## DeleteV2ImportsIDJSON

Deletes an import, by ID only. The associated people can be deleted as part of the deletion process.

Admin users can access imports for the entire team, but non-admin users can only access their own imports.


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
    res, err := s.Imports.DeleteV2ImportsIDJSON(ctx, operations.DeleteV2ImportsIDJSONRequest{
        ID: "6deab3fe-c957-48a6-8584-273a8418d162",
        Undo: sdk.String("consectetur"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetV2ImportsJSON

Fetches multiple imports.


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
    res, err := s.Imports.GetV2ImportsJSON(ctx, operations.GetV2ImportsJSONRequest{
        Ids: []int64{
            585432,
        },
        IncludePagingCounts: sdk.Bool(false),
        LimitPagingCounts: sdk.Bool(false),
        Page: sdk.Int64(970732),
        PerPage: sdk.Int64(746837),
        SortBy: sdk.String("alias"),
        SortDirection: sdk.String("omnis"),
        UserIds: []int64{
            579011,
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

## GetV2ImportsIDJSON

Fetches an import, by ID only.

Admin users can access imports for the entire team, but non-admin users can only access their own imports.


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
    res, err := s.Imports.GetV2ImportsIDJSON(ctx, operations.GetV2ImportsIDJSONRequest{
        ID: "921aefb9-f58c-44d8-ae68-e4be056013f5",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## PostV2ImportsJSON

Creates an import.


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
    res, err := s.Imports.PostV2ImportsJSON(ctx, operations.PostV2ImportsJSONRequestBody{
        Name: sdk.String("Orville Nolan"),
        UserID: sdk.Int64(444587),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## PutV2ImportsIDJSON

Updates an import, by ID only.

Admin users can access imports for the entire team, but non-admin users can only access their own imports.


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
    res, err := s.Imports.PutV2ImportsIDJSON(ctx, operations.PutV2ImportsIDJSONRequest{
        RequestBody: &operations.PutV2ImportsIDJSONRequestBody{
            Name: sdk.String("Alvin Marquardt"),
            UserID: sdk.Int64(945027),
        },
        ID: "ef66ef1c-aa33-483c-abeb-477373c8d72f",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
