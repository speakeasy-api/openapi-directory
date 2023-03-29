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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Bearer: shared.SchemeBearer{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        }),
    )

    req := operations.ArticleAddMeasureUnitRequest{
        Request: []shared.MeasureUnitDTO{
            shared.MeasureUnitDTO{
                ID: 592845,
                Name: "porro",
                Type: "nulla",
            },
            shared.MeasureUnitDTO{
                ID: 602763,
                Name: "vero",
                Type: "perspiciatis",
            },
            shared.MeasureUnitDTO{
                ID: 847252,
                Name: "nihil",
                Type: "fuga",
            },
        },
    }

    ctx := context.Background()
    res, err := s.Article.ArticleAddMeasureUnit(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.DefaultResponseDTOOfStatusDTO != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->