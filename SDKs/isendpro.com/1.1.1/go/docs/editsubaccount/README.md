# EditSubaccount

### Available Operations

* [SubaccountEdit](#subaccountedit) - Edit a subaccount

## SubaccountEdit

Edit a subaccount

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EditSubaccount.SubaccountEdit(ctx, shared.SubaccountRequest{
        Keyid: "iusto",
        SubAccountAddCredit: sdk.String("excepturi"),
        SubAccountCountryCode: sdk.String("nisi"),
        SubAccountEdit: shared.SubaccountRequestSubAccountEditEnumSetRestriction,
        SubAccountKeyID: sdk.String("temporibus"),
        SubAccountPrice: sdk.String("ab"),
        SubAccountRestrictionStop: shared.SubaccountRequestSubAccountRestrictionStopEnumZero.ToPointer(),
        SubAccountRestrictionTime: shared.SubaccountRequestSubAccountRestrictionTimeEnumZero.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SubaccountResponse != nil {
        // handle response
    }
}
```
