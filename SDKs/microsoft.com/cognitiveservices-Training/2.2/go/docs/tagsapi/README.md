# TagsAPI

### Available Operations

* [CreateTag](#createtag) - Create a tag for the project.
* [DeleteTag](#deletetag) - Delete a tag from the project.
* [GetTag](#gettag) - Get information about a specific tag.
* [GetTags](#gettags) - Get the tags for a given project and iteration.
* [UpdateTagForm](#updatetagform) - Update a tag.
* [UpdateTagJSON](#updatetagjson) - Update a tag.
* [UpdateTagRaw](#updatetagraw) - Update a tag.

## CreateTag

Create a tag for the project.

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
        TrainingKey: "quam",
        Description: sdk.String("molestiae"),
        Name: "Allison Kemmer",
        ProjectID: "4254038b-fb59-471e-9819-0557389cedba",
        Type: operations.CreateTagTypeEnumNegative.ToPointer(),
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

Delete a tag from the project.

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
        TrainingKey: "in",
        ProjectID: "fda39594-d66b-4c2a-a480-632b9954b6fa",
        TagID: "22063698-2855-43cb-9000-6bef4921ec20",
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

Get information about a specific tag.

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
        TrainingKey: "voluptas",
        IterationID: sdk.String("3b749366-ac8e-4e0f-abf1-9588d40d03f3"),
        ProjectID: "deba297b-e3e9-40bc-80df-868fd52405cb",
        TagID: "331d492f-4f12-47fb-8e0b-f1f8217978d0",
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

Get the tags for a given project and iteration.

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
        TrainingKey: "similique",
        IterationID: sdk.String("cca77aeb-7b70-421a-9204-6b64e99fb0e6"),
        ProjectID: "7e094fdf-ed55-440e-b53a-34a1b8fe9973",
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

Update a tag.

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
            Description: sdk.String("sunt"),
            Name: sdk.String("Mrs. Ismael Runte"),
            Type: shared.TagTypeEnumNegative.ToPointer(),
        },
        TrainingKey: "quis",
        ProjectID: "ae2dfb70-fb38-4742-90d3-36561eca16ef",
        TagID: "89451bd7-6eee-4b51-8c4d-a1fad35512f0",
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

Update a tag.

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
            Description: sdk.String("laboriosam"),
            Name: sdk.String("Micheal Watsica"),
            Type: shared.TagTypeEnumRegular.ToPointer(),
        },
        TrainingKey: "consequuntur",
        ProjectID: "f0f54856-8a04-424e-80a1-d6eb9434645d",
        TagID: "03084fbb-a5cc-4eff-9cb0-1fe51e528a45",
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

Update a tag.

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
        RequestBody: []byte("mollitia"),
        TrainingKey: "minus",
        ProjectID: "82b85f8b-c2ca-4ba8-9a41-27dd597ff471",
        TagID: "1aa1bc74-b86c-4ecc-b4f7-7b4848bd6a6f",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Tag != nil {
        // handle response
    }
}
```
