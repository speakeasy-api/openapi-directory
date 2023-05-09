<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Bearer: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Article.ArticleAddMeasureUnit(ctx, []shared.MeasureUnitDTO{
        shared.MeasureUnitDTO{
            ID: sdk.Int(592845),
            Name: sdk.String("Ellis Mitchell"),
            Type: sdk.String("illum"),
        },
        shared.MeasureUnitDTO{
            ID: sdk.Int(423655),
            Name: sdk.String("Doug Hoppe"),
            Type: sdk.String("debitis"),
        },
        shared.MeasureUnitDTO{
            ID: sdk.Int(56713),
            Name: sdk.String("Ricky Hoppe"),
            Type: sdk.String("placeat"),
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DefaultResponseDTOOfStatusDTO != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->