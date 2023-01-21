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
    
    req := operations.AddOrUpdateAdditionalRatesRequest{
        Security: operations.AddOrUpdateAdditionalRatesSecurity{
            PaylocityAuth: shared.SchemePaylocityAuth{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.AddOrUpdateAdditionalRatesPathParams{
            CompanyID: "sit",
            EmployeeID: "voluptas",
        },
        Request: shared.AdditionalRate{
            ChangeReason: "culpa",
            CostCenter1: "expedita",
            CostCenter2: "consequuntur",
            CostCenter3: "dolor",
            EffectiveDate: "expedita",
            EndCheckDate: "voluptas",
            Job: "fugit",
            Rate: 28.100000,
            RateCode: "rerum",
            RateNotes: "dicta",
            RatePer: "debitis",
            Shift: "voluptatum",
        },
    }
    
    res, err := s.AdditionalRates.AddOrUpdateAdditionalRates(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->