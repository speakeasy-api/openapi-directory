# Categories

### Available Operations

* [DeleteCategoriesIDJSON](#deletecategoriesidjson) - Delete an existing Category.
* [GetCategoriesJSON](#getcategoriesjson) - Retrieve all Categories.
* [GetCategoriesCountJSON](#getcategoriescountjson) - Count all Categories.
* [GetCategoriesIDJSON](#getcategoriesidjson) - Retrieve a single Category.
* [PostCategoriesJSON](#postcategoriesjson) - Create a new Category.
* [PutCategoriesIDJSON](#putcategoriesidjson) - Modify an existing Category.

## DeleteCategoriesIDJSON

Delete an existing Category.

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
    res, err := s.Categories.DeleteCategoriesIDJSON(ctx, operations.DeleteCategoriesIDJSONRequest{
        Authtoken: "delectus",
        ID: 272656,
        Login: "suscipit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteCategoriesIDJSON200ApplicationJSONString != nil {
        // handle response
    }
}
```

## GetCategoriesJSON

Retrieve all Categories.

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
    res, err := s.Categories.GetCategoriesJSON(ctx, operations.GetCategoriesJSONRequest{
        Authtoken: "molestiae",
        Login: "minus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Category != nil {
        // handle response
    }
}
```

## GetCategoriesCountJSON

Count all Categories.

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
    res, err := s.Categories.GetCategoriesCountJSON(ctx, operations.GetCategoriesCountJSONRequest{
        Authtoken: "placeat",
        Login: "voluptatum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Count != nil {
        // handle response
    }
}
```

## GetCategoriesIDJSON

Retrieve a single Category.

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
    res, err := s.Categories.GetCategoriesIDJSON(ctx, operations.GetCategoriesIDJSONRequest{
        Authtoken: "iusto",
        ID: 568045,
        Login: "nisi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Category != nil {
        // handle response
    }
}
```

## PostCategoriesJSON

Category's permalink is automatically generated from the given category's name.

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
    res, err := s.Categories.PostCategoriesJSON(ctx, operations.PostCategoriesJSONRequest{
        CategoryEdit: shared.CategoryEdit{
            Category: &shared.CategoryEditFields{
                Name: sdk.String("Jake Bernier MD"),
                ParentID: sdk.Int(20218),
            },
        },
        Authtoken: "ipsam",
        Login: "repellendus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Category != nil {
        // handle response
    }
}
```

## PutCategoriesIDJSON

Modify an existing Category.

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
    res, err := s.Categories.PutCategoriesIDJSON(ctx, operations.PutCategoriesIDJSONRequest{
        CategoryEdit: shared.CategoryEdit{
            Category: &shared.CategoryEditFields{
                Name: sdk.String("Cedric Connelly"),
                ParentID: sdk.Int(978619),
            },
        },
        Authtoken: "molestiae",
        ID: 799159,
        Login: "quod",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Category != nil {
        // handle response
    }
}
```
