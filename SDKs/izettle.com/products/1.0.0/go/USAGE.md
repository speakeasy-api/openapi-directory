<!-- Start SDK Example Usage -->
```go
package main

import (
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
            OrganizationUUID: "sequi",
        },
        Request: shared.CategoryRequest{
            Categories: []shared.CategoryDto{
                shared.CategoryDto{
                    Name: "provident",
                    UUID: "numquam",
                },
                shared.CategoryDto{
                    Name: "inventore",
                    UUID: "harum",
                },
                shared.CategoryDto{
                    Name: "est",
                    UUID: "dolor",
                },
            },
        },
    }
    
    res, err := s.Categories.CreateCategories(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->