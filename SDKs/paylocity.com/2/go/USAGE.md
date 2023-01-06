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
            CompanyID: "quos",
            EmployeeID: "harum",
        },
        Request: shared.AdditionalRate{
            ChangeReason: "voluptas",
            CostCenter1: "nostrum",
            CostCenter2: "dolores",
            CostCenter3: "eum",
            EffectiveDate: "consequatur",
            EndCheckDate: "dignissimos",
            Job: "est",
            Rate: 1.200000,
            RateCode: "voluptate",
            RateNotes: "at",
            RatePer: "beatae",
            Shift: "sunt",
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