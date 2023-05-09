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
    res, err := s.AdditionalRates.AddOrUpdateAdditionalRates(ctx, operations.AddOrUpdateAdditionalRatesRequest{
        AdditionalRate: shared.AdditionalRate{
            ChangeReason: sdk.String("corrupti"),
            CostCenter1: sdk.String("provident"),
            CostCenter2: sdk.String("distinctio"),
            CostCenter3: sdk.String("quibusdam"),
            EffectiveDate: sdk.String("unde"),
            EndCheckDate: sdk.String("nulla"),
            Job: sdk.String("corrupti"),
            Rate: sdk.Float64(8472.52),
            RateCode: sdk.String("vel"),
            RateNotes: sdk.String("error"),
            RatePer: sdk.String("deserunt"),
            Shift: sdk.String("suscipit"),
        },
        CompanyID: "iure",
        EmployeeID: "magnam",
    }, operations.AddOrUpdateAdditionalRatesSecurity{
        PaylocityAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
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