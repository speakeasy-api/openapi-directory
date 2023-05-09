# DirectDeposit

### Available Operations

* [GetAllDirectDeposit](#getalldirectdeposit) - Get All Direct Deposit

## GetAllDirectDeposit

Get All Direct Deposit returns main direct deposit and all additional direct depositsfor the selected employee.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.DirectDeposit.GetAllDirectDeposit(ctx, operations.GetAllDirectDepositRequest{
        CompanyID: "sapiente",
        EmployeeID: "quo",
    }, operations.GetAllDirectDepositSecurity{
        PaylocityAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DirectDeposits != nil {
        // handle response
    }
}
```
