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
            Bearer: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    req := []shared.MeasureUnitDTO{
        shared.MeasureUnitDTO{
            ID: 592845,
            Name: "distinctio",
            Type: "quibusdam",
        },
        shared.MeasureUnitDTO{
            ID: 602763,
            Name: "nulla",
            Type: "corrupti",
        },
        shared.MeasureUnitDTO{
            ID: 847252,
            Name: "vel",
            Type: "error",
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