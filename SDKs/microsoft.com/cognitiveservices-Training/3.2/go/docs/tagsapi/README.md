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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            ApimKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.TagsAPI.CreateTag(ctx, operations.CreateTagRequest{
        Description: sdk.String("dicta"),
        Name: "Morris Flatley",
        ProjectID: "56d69180-ff60-4eb9-a665-8e69a4b843d3",
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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            ApimKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.TagsAPI.DeleteTag(ctx, operations.DeleteTagRequest{
        ProjectID: "2dbec75c-68c6-4065-9468-ce304d8849bf",
        TagID: "8214c337-f96b-4b0c-a9e3-72db1344ba9f",
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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            ApimKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.TagsAPI.GetTag(ctx, operations.GetTagRequest{
        IterationID: sdk.String("78a5c0ed-7aab-462e-9726-1fb0c58d27b5"),
        ProjectID: "1996b5b4-b50e-4ef7-92b7-a7ab0344b171",
        TagID: "0688deeb-ef89-47f3-9d0c-cd33f11b3e4e",
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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            ApimKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.TagsAPI.GetTags(ctx, operations.GetTagsRequest{
        IterationID: sdk.String("080aa104-186e-4c75-9e02-f3702c5c8e2d"),
        ProjectID: "30ead310-4fa4-4470-bbf3-75b44282821f",
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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            ApimKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.TagsAPI.UpdateTagForm(ctx, operations.UpdateTagFormRequest{
        TagInput: shared.TagInput{
            Description: "nulla",
            Name: "Aaron Weimann",
            Type: shared.TagTypeEnumNegative,
        },
        ProjectID: "59267c71-cc8d-43cd-8258-d0358a82c808",
        TagID: "fe2751a2-047c-4044-9e14-3f9619bb7d40",
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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            ApimKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.TagsAPI.UpdateTagJSON(ctx, operations.UpdateTagJSONRequest{
        TagInput: shared.TagInput{
            Description: "vero",
            Name: "Dr. Maggie Bergnaum",
            Type: shared.TagTypeEnumRegular,
        },
        ProjectID: "36e62592-33f9-45c9-9237-397c785b5db4",
        TagID: "f500183f-ebdf-4676-b720-6dab750052a5",
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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            ApimKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.TagsAPI.UpdateTagRaw(ctx, operations.UpdateTagRawRequest{
        RequestBody: []byte("nisi"),
        ProjectID: "47edc439-ed8c-4432-8f41-240d4487ac69",
        TagID: "3b94c3b9-d248-48d7-95aa-42fc405669f6",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Tag != nil {
        // handle response
    }
}
```
