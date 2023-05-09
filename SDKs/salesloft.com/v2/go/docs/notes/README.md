# Notes

## Overview

Note Management

### Available Operations

* [DeleteV2NotesIDJSON](#deletev2notesidjson) - Delete a note
* [GetV2NotesJSON](#getv2notesjson) - List notes
* [GetV2NotesIDJSON](#getv2notesidjson) - Fetch a note
* [PostV2NotesJSON](#postv2notesjson) - Create a note
* [PutV2NotesIDJSON](#putv2notesidjson) - Update a note

## DeleteV2NotesIDJSON

Deletes a note owned by authorized account.
This operation is not reversible without contacting support.
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
    res, err := s.Notes.DeleteV2NotesIDJSON(ctx, operations.DeleteV2NotesIDJSONRequest{
        ID: "197f9244-3da7-4ce5-ab89-5c537c6454ef",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetV2NotesJSON

Fetches multiple note records. The records can be filtered, paged, and sorted according to
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
    res, err := s.Notes.GetV2NotesJSON(ctx, operations.GetV2NotesJSONRequest{
        AssociatedWithID: sdk.Int64(731744),
        AssociatedWithType: sdk.String("aperiam"),
        Ids: []int64{
            189753,
            289913,
            520875,
        },
        IncludePagingCounts: sdk.Bool(false),
        LimitPagingCounts: sdk.Bool(false),
        Page: sdk.Int64(577709),
        PerPage: sdk.Int64(375994),
        SortBy: sdk.String("quo"),
        SortDirection: sdk.String("velit"),
        UpdatedAt: []string{
            "fuga",
            "nostrum",
            "est",
            "impedit",
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

## GetV2NotesIDJSON

Fetches a note, by ID only.


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
    res, err := s.Notes.GetV2NotesIDJSON(ctx, operations.GetV2NotesIDJSONRequest{
        ID: "fbe2fd57-0757-4792-9177-deac646ecb57",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## PostV2NotesJSON

Creates a note.


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
    res, err := s.Notes.PostV2NotesJSON(ctx, operations.PostV2NotesJSONRequestBody{
        AssociatedWithID: 211455,
        AssociatedWithType: "modi",
        CallID: sdk.Int64(59383),
        Content: "sint",
        SkipCrmSync: sdk.Bool(false),
        Subject: sdk.String("vero"),
        UserGUID: sdk.String("sequi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## PutV2NotesIDJSON

Updates a note. Any changes to the note or associated records will not reflect in your CRM.


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
    res, err := s.Notes.PutV2NotesIDJSON(ctx, operations.PutV2NotesIDJSONRequest{
        RequestBody: operations.PutV2NotesIDJSONRequestBody{
            CallID: sdk.Int64(918547),
            Content: "cum",
        },
        ID: "1e5a2b12-eb07-4f11-adb9-9545fc95fa88",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
