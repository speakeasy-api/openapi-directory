# Categories

### Available Operations

* [GetCategory](#getcategory) - Get category
* [GetCategoryDocs](#getcategorydocs) - Get docs for category

## GetCategory

Returns the category with this slug

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
    res, err := s.Categories.GetCategory(ctx, operations.GetCategoryRequest{
        Slug: "accusantium",
        XReadmeVersion: "iure",
    }, operations.GetCategorySecurity{
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

## GetCategoryDocs

Returns the docs and children docs within this category

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
    res, err := s.Categories.GetCategoryDocs(ctx, operations.GetCategoryDocsRequest{
        Slug: "culpa",
        XReadmeVersion: "doloribus",
    }, operations.GetCategoryDocsSecurity{
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
