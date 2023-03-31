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

    req := operations.AddOrUpdateAdditionalRatesRequest{
        AdditionalRate: shared.AdditionalRate{
            ChangeReason: "corrupti",
            CostCenter1: "provident",
            CostCenter2: "distinctio",
            CostCenter3: "quibusdam",
            EffectiveDate: "unde",
            EndCheckDate: "nulla",
            Job: "corrupti",
            Rate: 8472.52,
            RateCode: "vel",
            RateNotes: "error",
            RatePer: "deserunt",
            Shift: "suscipit",
        },
        CompanyID: "iure",
        EmployeeID: "magnam",
    }

    ctx := context.Background()
    res, err := s.AdditionalRates.AddOrUpdateAdditionalRates(ctx, req, operations.AddOrUpdateAdditionalRatesSecurity{
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