# Groups

## Overview

Group Management

### Available Operations

* [GetV2GroupsJSON](#getv2groupsjson) - List groups
* [GetV2GroupsIDJSON](#getv2groupsidjson) - Fetch a group

## GetV2GroupsJSON

Fetches multiple group records. The records can be filtered, and sorted according to
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
    res, err := s.Groups.GetV2GroupsJSON(ctx, operations.GetV2GroupsJSONRequest{
        Ids: []int64{
            66149,
        },
        SortBy: sdk.String("laudantium"),
        SortDirection: sdk.String("quae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetV2GroupsIDJSON

Fetches a group, by ID only.


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
    res, err := s.Groups.GetV2GroupsIDJSON(ctx, operations.GetV2GroupsIDJSONRequest{
        ID: "3d5208ec-e7e2-453b-a684-51c6c6e205e1",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
