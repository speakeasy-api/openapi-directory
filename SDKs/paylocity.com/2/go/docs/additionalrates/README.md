# AdditionalRates

### Available Operations

* [AddOrUpdateAdditionalRates](#addorupdateadditionalrates) - Add/update additional rates

## AddOrUpdateAdditionalRates

Sends new or updated employee additional rates information directly to Web Pay.

### Example Usage

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
            ChangeReason: sdk.String("debitis"),
            CostCenter1: sdk.String("ipsa"),
            CostCenter2: sdk.String("delectus"),
            CostCenter3: sdk.String("tempora"),
            EffectiveDate: sdk.String("suscipit"),
            EndCheckDate: sdk.String("molestiae"),
            Job: sdk.String("minus"),
            Rate: sdk.Float64(8121.69),
            RateCode: sdk.String("voluptatum"),
            RateNotes: sdk.String("iusto"),
            RatePer: sdk.String("excepturi"),
            Shift: sdk.String("nisi"),
        },
        CompanyID: "recusandae",
        EmployeeID: "temporibus",
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
