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
        Security: operations.AddOrUpdateAdditionalRatesSecurity{
            PaylocityAuth: shared.SchemePaylocityAuth{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.AddOrUpdateAdditionalRatesPathParams{
            CompanyID: "corrupti",
            EmployeeID: "provident",
        },
        Request: shared.AdditionalRate{
            ChangeReason: "distinctio",
            CostCenter1: "quibusdam",
            CostCenter2: "unde",
            CostCenter3: "nulla",
            EffectiveDate: "corrupti",
            EndCheckDate: "illum",
            Job: "vel",
            Rate: 6235.64,
            RateCode: "deserunt",
            RateNotes: "suscipit",
            RatePer: "iure",
            Shift: "magnam",
        },
    }

    ctx := context.Background()
    res, err := s.AdditionalRates.AddOrUpdateAdditionalRates(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->