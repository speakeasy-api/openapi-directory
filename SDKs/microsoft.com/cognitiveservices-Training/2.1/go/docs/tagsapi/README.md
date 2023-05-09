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
        TrainingKey: "quam",
        Description: sdk.String("molestiae"),
        Name: "Allison Kemmer",
        ProjectID: "4254038b-fb59-471e-9819-0557389cedba",
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
        TrainingKey: "cumque",
        ProjectID: "7fda3959-4d66-4bc2-ae48-0632b9954b6f",
        TagID: "a2206369-8285-453c-b100-06bef4921ec2",
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
        TrainingKey: "sit",
        IterationID: sdk.String("53b74936-6ac8-4ee0-b2bf-19588d40d03f"),
        ProjectID: "3deba297-be3e-490b-840d-f868fd52405c",
        TagID: "b331d492-f4f1-427f-b0e0-bf1f8217978d",
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
        TrainingKey: "consequatur",
        IterationID: sdk.String("acca77ae-b7b7-4021-a520-46b64e99fb0e"),
        ProjectID: "67e094fd-fed5-4540-af53-a34a1b8fe997",
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
            Description: sdk.String("dolorem"),
            Name: sdk.String("Kristine Stiedemann II"),
        },
        TrainingKey: "fugiat",
        ProjectID: "85ae2dfb-70fb-4387-8290-d336561eca16",
        TagID: "ef89451b-d76e-4eeb-918c-4da1fad35512",
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
            Description: sdk.String("delectus"),
            Name: sdk.String("Vanessa Stiedemann"),
        },
        TrainingKey: "enim",
        ProjectID: "b72f0f54-8568-4a04-a4e0-0a1d6eb94346",
        TagID: "45d03084-fbba-45cc-aff5-cb01fe51e528",
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
        RequestBody: []byte("animi"),
        TrainingKey: "eius",
        ProjectID: "5ac82b85-f8bc-42ca-ba8d-a4127dd597ff",
        TagID: "4711aa1b-c74b-486c-acc7-4f77b4848bd6",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Tag != nil {
        // handle response
    }
}
```
