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
        Security: operations.CreateCategoriesSecurity{
            ZettleAPIKey: &shared.SchemeZettleAPIKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        PathParams: operations.CreateCategoriesPathParams{
            OrganizationUUID: "89bd9d8d-69a6-474e-8f46-7cc8796ed151",
        },
        Request: shared.CategoryRequest{
            Categories: []shared.CategoryDTO{
                shared.CategoryDTO{
                    Name: "voluptatem",
                    UUID: "5dfc2ddf-7cc7-48ca-9ba9-28fc816742cb",
                },
                shared.CategoryDTO{
                    Name: "blanditiis",
                    UUID: "39205929-396f-4ea7-996e-b10faaa2352c",
                },
                shared.CategoryDTO{
                    Name: "ipsam",
                    UUID: "955907af-f1a3-4a2f-a946-7739251aa52c",
                },
            },
        },
    }

    ctx := context.Background()
    res, err := s.Categories.CreateCategories(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->