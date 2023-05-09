<!-- Start SDK Example Usage -->
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
                    Name: "Kelvin Sporer",
                    UUID: "8d69a674-e0f4-467c-8879-6ed151a05dfc",
                },
                shared.CategoryDTO{
                    Name: "Teri Strosin",
                    UUID: "cc78ca1b-a928-4fc8-9674-2cb739205929",
                },
                shared.CategoryDTO{
                    Name: "Faye Howe",
                    UUID: "a7596eb1-0faa-4a23-92c5-955907aff1a3",
                },
            },
        },
        OrganizationUUID: "a2fa9467-7392-451a-a52c-3f5ad019da1f",
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
<!-- End SDK Example Usage -->