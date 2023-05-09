# TagsAPI

### Available Operations

* [CreateTag](#createtag) - Create a tag for the project
* [DeleteTag](#deletetag) - Delete a tag from the project
* [GetTag](#gettag) - Get information about a specific tag
* [GetTags](#gettags) - Get the tags for a given project and iteration
* [UpdateTagForm](#updatetagform) - Update a tag
* [UpdateTagJSON](#updatetagjson) - Update a tag
* [UpdateTagRaw](#updatetagraw) - Update a tag

## CreateTag

Create a tag for the project

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
    res, err := s.TagsAPI.CreateTag(ctx, operations.CreateTagRequest{
        TrainingKey: "atque",
        Description: sdk.String("quaerat"),
        Name: "Courtney Kohler",
        ProjectID: "68a9a35d-086b-46f6-afef-020e9f443b42",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Tag != nil {
        // handle response
    }
}
```

## DeleteTag

Delete a tag from the project

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
    res, err := s.TagsAPI.DeleteTag(ctx, operations.DeleteTagRequest{
        TrainingKey: "enim",
        ProjectID: "7b992c8d-bda6-4a61-afa2-198258fd0a9e",
        TagID: "ba47f7d3-ef04-4964-8d6a-1831c87adf59",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetTag

Get information about a specific tag

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
    res, err := s.TagsAPI.GetTag(ctx, operations.GetTagRequest{
        TrainingKey: "suscipit",
        IterationID: sdk.String("fdf1ad83-7ae8-40c1-819c-95ba998678fa"),
        ProjectID: "3f696991-af38-48ce-8361-4448c7977a0e",
        TagID: "f2f53602-8efe-4ef9-b415-2ed7e253f4c1",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Tag != nil {
        // handle response
    }
}
```

## GetTags

Get the tags for a given project and iteration

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
    res, err := s.TagsAPI.GetTags(ctx, operations.GetTagsRequest{
        TrainingKey: "ullam",
        IterationID: sdk.String("7deaa717-0f44-45ac-8f66-7aaf9bbad185"),
        ProjectID: "fe431d6b-f5c8-438f-bb8c-20cb67fc4b42",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TagList != nil {
        // handle response
    }
}
```

## UpdateTagForm

Update a tag

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.TagsAPI.UpdateTagForm(ctx, operations.UpdateTagFormRequest{
        TagInput: shared.TagInput{
            Description: sdk.String("veniam"),
            Name: sdk.String("Perry Mayert"),
        },
        TrainingKey: "eos",
        ProjectID: "34c9f7b7-9dfe-4b77-a5c3-8d4baf91e506",
        TagID: "ef890a54-b475-4f16-b56d-385a3c4ac631",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Tag != nil {
        // handle response
    }
}
```

## UpdateTagJSON

Update a tag

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.TagsAPI.UpdateTagJSON(ctx, operations.UpdateTagJSONRequest{
        TagInput: shared.TagInput{
            Description: sdk.String("rerum"),
            Name: sdk.String("Terrence Treutel"),
        },
        TrainingKey: "optio",
        ProjectID: "ed8f9fdb-9410-4f63-bbf8-17837b01afdd",
        TagID: "78862418-9eb4-4487-bf50-33f19dbf125c",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Tag != nil {
        // handle response
    }
}
```

## UpdateTagRaw

Update a tag

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.TagsAPI.UpdateTagRaw(ctx, operations.UpdateTagRawRequest{
        RequestBody: []byte("debitis"),
        TrainingKey: "labore",
        ProjectID: "152eab9c-d7e5-4224-a6a0-e123b7847ec5",
        TagID: "9e1f67f3-c4cc-4e4b-ad76-96ff3c574750",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Tag != nil {
        // handle response
    }
}
```
