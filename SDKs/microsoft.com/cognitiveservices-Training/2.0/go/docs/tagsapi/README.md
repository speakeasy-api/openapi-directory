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
        TrainingKey: "dolores",
        Description: sdk.String("molestias"),
        Name: "Tanya Hyatt",
        ProjectID: "33425403-8bfb-4597-9e98-190557389ced",
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
        TrainingKey: "nam",
        ProjectID: "ac7fda39-594d-466b-82ae-480632b9954b",
        TagID: "6fa22063-6982-4855-bcb1-0006bef4921e",
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
        TrainingKey: "quod",
        IterationID: sdk.String("2053b749-366a-4c8e-a0f2-bf19588d40d0"),
        ProjectID: "3f3deba2-97be-43e9-8bc4-0df868fd5240",
        TagID: "5cb331d4-92f4-4f12-bfb0-e0bf1f821797",
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
        TrainingKey: "voluptatum",
        IterationID: sdk.String("d0acca77-aeb7-4b70-a1a5-2046b64e99fb"),
        ProjectID: "0e67e094-fdfe-4d55-80ef-53a34a1b8fe9",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Tags != nil {
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
            Description: sdk.String("natus"),
            Name: sdk.String("Dawn Casper"),
        },
        TrainingKey: "cumque",
        ProjectID: "05d85ae2-dfb7-40fb-b874-290d336561ec",
        TagID: "a16ef894-51bd-476e-aeb5-18c4da1fad35",
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
            Description: sdk.String("quis"),
            Name: sdk.String("Mrs. Kathy Wisoky"),
        },
        TrainingKey: "dolore",
        ProjectID: "e5b72f0f-5485-468a-8424-e00a1d6eb943",
        TagID: "4645d030-84fb-4ba5-8cef-f5cb01fe51e5",
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
        RequestBody: []byte("aspernatur"),
        TrainingKey: "atque",
        ProjectID: "a45ac82b-85f8-4bc2-8aba-8da4127dd597",
        TagID: "ff4711aa-1bc7-44b8-acec-c74f77b4848b",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Tag != nil {
        // handle response
    }
}
```
