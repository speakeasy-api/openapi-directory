<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.CreateCategoriesRequest{
        CreateCategoriesRequest: shared.CreateCategoriesRequest{
            Categories: []shared.CategoryDTO{
                shared.CategoryDTO{
                    Name: "provident",
                    UUID: "bd9d8d69-a674-4e0f-867c-c8796ed151a0",
                },
                shared.CategoryDTO{
                    Name: "ipsam",
                    UUID: "dfc2ddf7-cc78-4ca1-ba92-8fc816742cb7",
                },
                shared.CategoryDTO{
                    Name: "ipsum",
                    UUID: "92059293-96fe-4a75-96eb-10faaa2352c5",
                },
            },
        },
        OrganizationUUID: "955907af-f1a3-4a2f-a946-7739251aa52c",
    }

    ctx := context.Background()
    res, err := s.Categories.CreateCategories(ctx, req, operations.CreateCategoriesSecurity{
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