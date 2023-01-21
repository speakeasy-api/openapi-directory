<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    opts := []sdk.SDKOption{
        sdk.WithSecurity(
            shared.Security{
                Bearer: shared.SchemeBearer{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.ArticleAddMeasureUnitRequest{
        Request: []shared.MeasureUnitDto{
            shared.MeasureUnitDto{
                ID: 2259404117704393152,
                Name: "culpa",
                Type: "expedita",
            },
        },
    }
    
    res, err := s.Article.ArticleAddMeasureUnit(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.DefaultResponseDTOOfStatusDTO != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->