# PrimaryStateTax

### Available Operations

* [AddOrUpdatePrimaryStateTax](#addorupdateprimarystatetax) - Add/update primary state tax

## AddOrUpdatePrimaryStateTax

Sends new or updated employee primary state tax information directly to Web Pay.

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
    res, err := s.PrimaryStateTax.AddOrUpdatePrimaryStateTax(ctx, operations.AddOrUpdatePrimaryStateTaxRequest{
        CompanyID: "architecto",
        EmployeeID: "fugiat",
        StateTax: shared.StateTax{
            Amount: sdk.Float64(396.5),
            DeductionsAmount: sdk.Float64(1173.15),
            DependentsAmount: sdk.Float64(4837.06),
            Exemptions: sdk.Float64(2712.52),
            Exemptions2: sdk.Float64(4582.59),
            FilingStatus: sdk.String("ex"),
            HigherRate: sdk.Bool(false),
            OtherIncomeAmount: sdk.Float64(2352.63),
            Percentage: sdk.Float64(3998.12),
            SpecialCheckCalc: sdk.String("ipsa"),
            TaxCalculationCode: sdk.String("laborum"),
            TaxCode: sdk.String("sunt"),
            W4FormYear: sdk.Int64(344718),
        },
    }, operations.AddOrUpdatePrimaryStateTaxSecurity{
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
