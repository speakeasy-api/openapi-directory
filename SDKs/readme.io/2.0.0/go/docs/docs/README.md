# Docs

### Available Operations

* [CreateDoc](#createdoc) - Create doc
* [DeleteDoc](#deletedoc) - Delete doc
* [GetDoc](#getdoc) - Get doc
* [SearchDocs](#searchdocs) - Search docs
* [UpdateDoc](#updatedoc) - Update doc

## CreateDoc

Create a new doc inside of this project

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
    res, err := s.Docs.CreateDoc(ctx, operations.CreateDocRequest{
        Doc: shared.Doc{
            Body: sdk.String("quo"),
            Category: "sequi",
            Hidden: sdk.Bool(false),
            ParentDoc: sdk.String("tenetur"),
            Title: "Mrs.",
            Type: shared.DocTypeEnumError.ToPointer(),
        },
        XReadmeVersion: "possimus",
    }, operations.CreateDocSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteDoc

Delete the doc with this slug

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
    res, err := s.Docs.DeleteDoc(ctx, operations.DeleteDocRequest{
        Slug: "aut",
        XReadmeVersion: "quasi",
    }, operations.DeleteDocSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetDoc

Returns the doc with this slug

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
    res, err := s.Docs.GetDoc(ctx, operations.GetDocRequest{
        Slug: "error",
        XReadmeVersion: "temporibus",
    }, operations.GetDocSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## SearchDocs

Returns all docs that match the search

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
    res, err := s.Docs.SearchDocs(ctx, operations.SearchDocsRequest{
        Search: "laborum",
        XReadmeVersion: "quasi",
    }, operations.SearchDocsSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateDoc

Update a doc with this slug

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
    res, err := s.Docs.UpdateDoc(ctx, operations.UpdateDocRequest{
        Doc: shared.Doc{
            Body: sdk.String("reiciendis"),
            Category: "voluptatibus",
            Hidden: sdk.Bool(false),
            ParentDoc: sdk.String("vero"),
            Title: "Ms.",
            Type: shared.DocTypeEnumError.ToPointer(),
        },
        Slug: "voluptatibus",
        XReadmeVersion: "ipsa",
    }, operations.UpdateDocSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
