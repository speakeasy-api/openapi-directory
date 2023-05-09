# EmployeeBenefitSetup

### Available Operations

* [UpdateOrAddEmployeeBenefitSetup](#updateoraddemployeebenefitsetup) - Add/update employee's benefit setup

## UpdateOrAddEmployeeBenefitSetup

Sends new or updated employee benefit setup information directly to Web Pay.

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
    res, err := s.EmployeeBenefitSetup.UpdateOrAddEmployeeBenefitSetup(ctx, operations.UpdateOrAddEmployeeBenefitSetupRequest{
        BenefitSetup: shared.BenefitSetup{
            BenefitClass: sdk.String("veritatis"),
            BenefitClassEffectiveDate: sdk.String("consequuntur"),
            BenefitSalary: sdk.Float64(944.58),
            BenefitSalaryEffectiveDate: sdk.String("similique"),
            DoNotApplyAdministrativePeriod: sdk.Bool(false),
            IsMeasureAcaEligibility: sdk.Bool(false),
        },
        CompanyID: "culpa",
        EmployeeID: "aliquid",
    }, operations.UpdateOrAddEmployeeBenefitSetupSecurity{
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
