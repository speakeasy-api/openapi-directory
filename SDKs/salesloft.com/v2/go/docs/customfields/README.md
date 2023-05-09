# CustomFields

## Overview

Custom Field Management

### Available Operations

* [DeleteV2CustomFieldsIDJSON](#deletev2customfieldsidjson) - Delete a custom field
* [GetV2CustomFieldsJSON](#getv2customfieldsjson) - List custom fields
* [GetV2CustomFieldsIDJSON](#getv2customfieldsidjson) - Fetch a custom field
* [PostV2CustomFieldsJSON](#postv2customfieldsjson) - Create a custom field
* [PutV2CustomFieldsIDJSON](#putv2customfieldsidjson) - Update a custom field

## DeleteV2CustomFieldsIDJSON

Deletes a custom field.


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
    res, err := s.CustomFields.DeleteV2CustomFieldsIDJSON(ctx, operations.DeleteV2CustomFieldsIDJSONRequest{
        ID: "9e973e92-2a57-4a15-be3e-060807e2b6e3",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetV2CustomFieldsJSON

Fetches multiple custom field records. The records can be filtered, paged, and sorted according to
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
    res, err := s.CustomFields.GetV2CustomFieldsJSON(ctx, operations.GetV2CustomFieldsJSONRequest{
        FieldType: sdk.String("laborum"),
        Ids: []int64{
            528940,
            523006,
            304446,
        },
        IncludePagingCounts: sdk.Bool(false),
        LimitPagingCounts: sdk.Bool(false),
        Page: sdk.Int64(320565),
        PerPage: sdk.Int64(997963),
        SortBy: sdk.String("alias"),
        SortDirection: sdk.String("corporis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetV2CustomFieldsIDJSON

Fetches a custom field, by ID only.


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
    res, err := s.CustomFields.GetV2CustomFieldsIDJSON(ctx, operations.GetV2CustomFieldsIDJSONRequest{
        ID: "97a60ff2-a54a-431e-9476-4a3e865e7956",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## PostV2CustomFieldsJSON

Creates a custom field.


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
    res, err := s.CustomFields.PostV2CustomFieldsJSON(ctx, operations.PostV2CustomFieldsJSONRequestBody{
        FieldType: sdk.String("reiciendis"),
        Name: "Miss Bruce Hermann",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## PutV2CustomFieldsIDJSON

Update a custom field.


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
    res, err := s.CustomFields.PutV2CustomFieldsIDJSON(ctx, operations.PutV2CustomFieldsIDJSONRequest{
        RequestBody: &operations.PutV2CustomFieldsIDJSONRequestBody{
            FieldType: sdk.String("mollitia"),
            Name: sdk.String("Rufus Okuneva"),
        },
        ID: "0ff57bfa-ad4f-49ef-81b4-512c1032648d",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
