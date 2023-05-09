# Credit

### Available Operations

* [GetCredit](#getcredit) - Interrogation credit

## GetCredit

Retourne le credit existant associe au compte.


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
    res, err := s.Credit.GetCredit(ctx, operations.GetCreditRequest{
        Credit: operations.GetCreditCreditEnumOne,
        Keyid: "minus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreditResponse != nil {
        // handle response
    }
}
```
