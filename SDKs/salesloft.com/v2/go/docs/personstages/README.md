# PersonStages

## Overview

Person Stage Management

### Available Operations

* [DeleteV2PersonStagesIDJSON](#deletev2personstagesidjson) - Delete an person stage
* [GetV2PersonStagesJSON](#getv2personstagesjson) - List person stages
* [GetV2PersonStagesIDJSON](#getv2personstagesidjson) - Fetch a person stage
* [PostV2PersonStagesJSON](#postv2personstagesjson) - Create a person stage
* [PutV2PersonStagesIDJSON](#putv2personstagesidjson) - Update a person stage

## DeleteV2PersonStagesIDJSON

Deletes a person stage. This operation is not reversible without contacting support.
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
    res, err := s.PersonStages.DeleteV2PersonStagesIDJSON(ctx, operations.DeleteV2PersonStagesIDJSONRequest{
        ID: "e4825c1f-c0e1-415c-80bf-f918544ec42d",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetV2PersonStagesJSON

Fetches multiple person stage records. The records can be filtered, paged, and sorted according to
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
    res, err := s.PersonStages.GetV2PersonStagesJSON(ctx, operations.GetV2PersonStagesJSONRequest{
        Ids: []int64{
            985109,
            773711,
            783397,
            883819,
        },
        IncludePagingCounts: sdk.Bool(false),
        LimitPagingCounts: sdk.Bool(false),
        Page: sdk.Int64(518990),
        PerPage: sdk.Int64(969168),
        SortBy: sdk.String("ab"),
        SortDirection: sdk.String("sint"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetV2PersonStagesIDJSON

Fetches a person stage, by ID only.


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
    res, err := s.PersonStages.GetV2PersonStagesIDJSON(ctx, operations.GetV2PersonStagesIDJSONRequest{
        ID: "77773e63-562a-47b4-88f0-5e3d48fdaf31",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## PostV2PersonStagesJSON

Creates a person stage.


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
    res, err := s.PersonStages.PostV2PersonStagesJSON(ctx, operations.PostV2PersonStagesJSONRequestBody{
        Name: "Harriet Blanda",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## PutV2PersonStagesIDJSON

Updates a person stage.


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
    res, err := s.PersonStages.PutV2PersonStagesIDJSON(ctx, operations.PutV2PersonStagesIDJSONRequest{
        RequestBody: operations.PutV2PersonStagesIDJSONRequestBody{
            Name: "Woodrow Mitchell III",
        },
        ID: "9c0b36f2-5ea9-444f-bb75-6c11f6c37a51",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
