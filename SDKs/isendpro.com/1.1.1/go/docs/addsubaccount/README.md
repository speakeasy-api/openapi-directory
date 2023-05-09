# AddSubaccount

### Available Operations

* [SubaccountAdd](#subaccountadd) - Ajoute un sous compte

## SubaccountAdd

Ajoute un sous compte

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
    res, err := s.AddSubaccount.SubaccountAdd(ctx, shared.SubaccountAddRequest{
        Keyid: "unde",
        SubAccountEdit: shared.SubaccountAddRequestSubAccountEditEnumAddAccount,
        SubAccountLogin: "nulla",
        SubAccountPassword: "corrupti",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SubaccountAddResponse != nil {
        // handle response
    }
}
```
