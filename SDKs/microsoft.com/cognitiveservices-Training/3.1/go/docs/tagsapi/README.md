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
        TrainingKey: "ullam",
        Description: sdk.String("sed"),
        Name: "Bert Fahey",
        ProjectID: "b4db8b77-8ebb-46e1-92cf-502bafb2cbc4",
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
        TrainingKey: "adipisci",
        ProjectID: "5d5e65da-028c-43e9-91a1-e30fda966489",
        TagID: "d7b78673-e13a-412a-ab99-2494594487f5",
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
        TrainingKey: "cumque",
        IterationID: sdk.String("843836b8-6b3c-4df6-815b-0449f9df13f4"),
        ProjectID: "eedbe78b-f606-4825-894e-a763d5c72795",
        TagID: "b785148d-6d54-49e5-a35b-33bc0f970c42",
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
        TrainingKey: "voluptatibus",
        IterationID: sdk.String("c9f48442-25e7-45b7-9606-5c0efa6f93b9"),
        ProjectID: "0a1b8c95-be12-454b-b39f-4fe77210d1f6",
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
            Description: "exercitationem",
            Name: "Billie Rutherford",
            Type: shared.TagTypeEnumNegative,
        },
        TrainingKey: "iure",
        ProjectID: "22d2bc0f-9408-47d9-8aae-042dd7caac9b",
        TagID: "4caa1cfe-9e15-4df9-8390-7f37831983d4",
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
            Description: "odit",
            Name: "Derek Gutmann",
            Type: shared.TagTypeEnumRegular,
        },
        TrainingKey: "dolore",
        ProjectID: "66597c50-233c-4147-9d51-aaa6ddf5abd6",
        TagID: "487c5fc2-b862-4a00-bef6-9e100157630b",
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
        RequestBody: []byte("quibusdam"),
        TrainingKey: "fuga",
        ProjectID: "7afded84-a35a-4412-b8e1-a735ac26ae33",
        TagID: "bef971a8-f46b-4ca1-906f-e965b711d08c",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Tag != nil {
        // handle response
    }
}
```
