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
            CompanyID: "voluptatum",
            EmployeeID: "quia",
        },
        Request: shared.AdditionalRate{
            ChangeReason: "maiores",
            CostCenter1: "aut",
            CostCenter2: "provident",
            CostCenter3: "alias",
            EffectiveDate: "eius",
            EndCheckDate: "aut",
            Job: "nam",
            Rate: 5.200000,
            RateCode: "tenetur",
            RateNotes: "corrupti",
            RatePer: "ut",
            Shift: "consequatur",
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