# Categories

### Available Operations

* [CreateCategories](#createcategories) - Create a new category
* [DeleteCategory](#deletecategory) - Delete a category
* [GetProductTypes](#getproducttypes) - Retrieve all categories
* [RenameCategory](#renamecategory) - Rename a category

## CreateCategories

Create a new category

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
    res, err := s.Categories.CreateCategories(ctx, operations.CreateCategoriesRequest{
        CreateCategoriesRequest: shared.CreateCategoriesRequest{
            Categories: []shared.CategoryDTO{
                shared.CategoryDTO{
                    Name: "Jessie Langosh V",
                    UUID: "7b0074f1-5471-4b5e-ae13-b99d488e1e91",
                },
                shared.CategoryDTO{
                    Name: "Miss Randall Hamill",
                    UUID: "2abd4426-9802-4d50-aa94-bb4f63c969e9",
                },
                shared.CategoryDTO{
                    Name: "Curtis Toy",
                    UUID: "77dfb14c-d66a-4e39-9efb-9ba88f3a6699",
                },
                shared.CategoryDTO{
                    Name: "Dorothy Kovacek",
                    UUID: "a4469b6e-2141-4959-890a-fa563e2516fe",
                },
            },
        },
        OrganizationUUID: "4c8b711e-5b7f-4d2e-9028-921cddc69260",
    }, operations.CreateCategoriesSecurity{
        ZettleOauth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteCategory

Delete a category

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
    res, err := s.Categories.DeleteCategory(ctx, operations.DeleteCategoryRequest{
        CategoryUUID: "1fb576b0-d5f0-4d30-85fb-b2587053202c",
        OrganizationUUID: "73d5fe9b-90c2-4890-9b3f-e49a8d9cbf48",
    }, operations.DeleteCategorySecurity{
        ZettleOauth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetProductTypes

Retrieve all categories

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
    res, err := s.Categories.GetProductTypes(ctx, operations.GetProductTypesRequest{
        OrganizationUUID: "633323f9-b77f-43a4-9006-74ebf69280d1",
    }, operations.GetProductTypesSecurity{
        ZettleOauth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CategoryResponse != nil {
        // handle response
    }
}
```

## RenameCategory

Rename a category

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
    res, err := s.Categories.RenameCategory(ctx, operations.RenameCategoryRequest{
        RenameCategoryRequest: shared.RenameCategoryRequest{
            Name: "Omar Kris",
        },
        CategoryUUID: "89ebf737-ae42-403c-a5e6-a95d8a0d446c",
        OrganizationUUID: "e2af7a73-cf3b-4e45-bf87-0b326b5a7342",
    }, operations.RenameCategorySecurity{
        ZettleOauth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
