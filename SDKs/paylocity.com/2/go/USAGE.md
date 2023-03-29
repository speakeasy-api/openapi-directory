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
            CompanyID: "unde",
            EmployeeID: "deserunt",
        },
        Request: shared.AdditionalRate{
            ChangeReason: "porro",
            CostCenter1: "nulla",
            CostCenter2: "id",
            CostCenter3: "vero",
            EffectiveDate: "perspiciatis",
            EndCheckDate: "nulla",
            Job: "nihil",
            Rate: 6235.64,
            RateCode: "facilis",
            RateNotes: "eum",
            RatePer: "iusto",
            Shift: "ullam",
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