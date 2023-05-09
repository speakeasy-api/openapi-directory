# ProductsOnline

### Available Operations

* [CreateProductSlug](#createproductslug) - Create a product identifier

## CreateProductSlug

Creates a unique slug (identifier) for a product. The slug is used to create a product URL

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
    res, err := s.ProductsOnline.CreateProductSlug(ctx, operations.CreateProductSlugRequest{
        CreateSlugRequest: shared.CreateSlugRequest{
            ProductName: "amet",
        },
        OrganizationUUID: "19f4badf-947c-49a8-a7bc-42426665816d",
    }, operations.CreateProductSlugSecurity{
        ZettleOauth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SlugResponse != nil {
        // handle response
    }
}
```
