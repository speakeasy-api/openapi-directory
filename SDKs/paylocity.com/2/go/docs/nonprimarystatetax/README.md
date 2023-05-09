# NonPrimaryStateTax

### Available Operations

* [AddOrUpdateNonPrimaryStateTax](#addorupdatenonprimarystatetax) - Add/update non-primary state tax

## AddOrUpdateNonPrimaryStateTax

Sends new or updated employee non-primary state tax information directly to Web Pay.

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
    res, err := s.NonPrimaryStateTax.AddOrUpdateNonPrimaryStateTax(ctx, operations.AddOrUpdateNonPrimaryStateTaxRequest{
        CompanyID: "illum",
        EmployeeID: "eaque",
        NonPrimaryStateTax: shared.NonPrimaryStateTax{
            Amount: sdk.Float64(9358.33),
            DeductionsAmount: sdk.Float64(5962.11),
            DependentsAmount: sdk.Float64(9834.27),
            Exemptions: sdk.Float64(8918.01),
            Exemptions2: sdk.Float64(3998.02),
            FilingStatus: sdk.String("porro"),
            HigherRate: sdk.Bool(false),
            OtherIncomeAmount: sdk.Float64(3803.35),
            Percentage: sdk.Float64(2115.34),
            ReciprocityCode: sdk.String("fugit"),
            SpecialCheckCalc: sdk.String("cumque"),
            TaxCalculationCode: sdk.String("fuga"),
            TaxCode: sdk.String("ratione"),
            W4FormYear: sdk.Int64(656762),
        },
    }, operations.AddOrUpdateNonPrimaryStateTaxSecurity{
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
