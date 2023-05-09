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
        TrainingKey: "modi",
        Description: sdk.String("eum"),
        Name: "Ms. Forrest Hickle",
        ProjectID: "bbca4922-7c42-4c22-8553-50495c5dbb3c",
        Type: operations.CreateTagTypeEnumRegular.ToPointer(),
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
        TrainingKey: "reprehenderit",
        ProjectID: "c1e4981e-8aa2-457d-9c19-12ebde64bfcc",
        TagID: "5469d401-5dfa-4796-a06b-ef2b0a3e42c1",
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
        TrainingKey: "deserunt",
        IterationID: sdk.String("a010e9aa-c2e9-4135-986d-18f9f97a4bfa"),
        ProjectID: "d2bf7d67-ca84-4ad9-9b41-d61243531870",
        TagID: "cf68b03a-d421-4bd4-bd1f-0cb0a0003eb2",
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
        TrainingKey: "sed",
        IterationID: sdk.String("d9b3a70d-94fa-4a74-9c57-d1fedc2050d3"),
        ProjectID: "8dc3ce18-5472-4f9e-a691-66a8be3444ea",
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
            Description: "porro",
            Name: "Wm Dietrich",
            Type: shared.TagTypeEnumNegative,
        },
        TrainingKey: "dignissimos",
        ProjectID: "5c6c1fe6-06d0-47d2-a9c8-7ae50c16661a",
        TagID: "1d9136a7-e8d5-4321-bf3f-658752db764c",
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
            Description: "nostrum",
            Name: "Aubrey Baumbach",
            Type: shared.TagTypeEnumRegular,
        },
        TrainingKey: "placeat",
        ProjectID: "ebcada29-ca79-4181-8956-71663c530b56",
        TagID: "65163a36-3851-42ab-a521-b9f2e072467b",
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
        RequestBody: []byte("quas"),
        TrainingKey: "officia",
        ProjectID: "40bc05fa-b0d6-450e-9f22-a94d20ec90ea",
        TagID: "41d1f465-e851-456f-bf73-fdf54fdd5ea9",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Tag != nil {
        // handle response
    }
}
```
