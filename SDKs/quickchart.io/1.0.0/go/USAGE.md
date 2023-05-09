<!-- Start SDK Example Usage -->
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
    res, err := s.GetChart(ctx, operations.GetChartRequest{
        BackgroundColor: sdk.String("corrupti"),
        Chart: sdk.String("provident"),
        Format: sdk.String("distinctio"),
        Height: sdk.Int64(844266),
        Width: sdk.Int64(602763),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetChart200ImageJpegBinaryString != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->