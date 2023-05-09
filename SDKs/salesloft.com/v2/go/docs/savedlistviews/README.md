# SavedListViews

## Overview

Saved List Views

### Available Operations

* [DeleteV2SavedListViewsIDJSON](#deletev2savedlistviewsidjson) - Delete a saved list view
* [GetV2SavedListViewsJSON](#getv2savedlistviewsjson) - List saved list views
* [GetV2SavedListViewsIDJSON](#getv2savedlistviewsidjson) - Fetch a saved list view
* [PostV2SavedListViewsJSON](#postv2savedlistviewsjson) - Create a saved list view
* [PutV2SavedListViewsIDJSON](#putv2savedlistviewsidjson) - Update a saved list view

## DeleteV2SavedListViewsIDJSON

Deletes a saved list view. This operation is not reversible without contacting support.
This operation can be called multiple times successfully.


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
    res, err := s.SavedListViews.DeleteV2SavedListViewsIDJSON(ctx, operations.DeleteV2SavedListViewsIDJSONRequest{
        ID: "3e902c14-125b-4096-8a66-8151a472af92",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetV2SavedListViewsJSON

Fetches multiple saved list view records. The records can be filtered, paged, and sorted according to
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
    res, err := s.SavedListViews.GetV2SavedListViewsJSON(ctx, operations.GetV2SavedListViewsJSONRequest{
        Ids: []int64{
            805463,
        },
        IncludePagingCounts: sdk.Bool(false),
        LimitPagingCounts: sdk.Bool(false),
        Page: sdk.Int64(337841),
        PerPage: sdk.Int64(586108),
        SortBy: sdk.String("aliquam"),
        SortDirection: sdk.String("excepturi"),
        View: sdk.String("maiores"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetV2SavedListViewsIDJSON

Fetches a saved list view, by ID only.


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
    res, err := s.SavedListViews.GetV2SavedListViewsIDJSON(ctx, operations.GetV2SavedListViewsIDJSONRequest{
        ID: "83f350cf-876f-4fb9-81c6-ecbb4e243cf7",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## PostV2SavedListViewsJSON

Creates a saved list view.


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
    res, err := s.SavedListViews.PostV2SavedListViewsJSON(ctx, operations.PostV2SavedListViewsJSONRequestBody{
        IsDefault: sdk.Bool(false),
        Name: "Perry Zieme",
        View: "maiores",
        ViewParams: sdk.String("itaque"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## PutV2SavedListViewsIDJSON

Updates a saved list view.


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
    res, err := s.SavedListViews.PutV2SavedListViewsIDJSON(ctx, operations.PutV2SavedListViewsIDJSONRequest{
        RequestBody: &operations.PutV2SavedListViewsIDJSONRequestBody{
            IsDefault: sdk.Bool(false),
            Name: sdk.String("Gerard Herzog"),
            ViewParams: sdk.String("enim"),
        },
        ID: "ae6e0ac1-84c2-4b9c-a47c-88373a40e194",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
