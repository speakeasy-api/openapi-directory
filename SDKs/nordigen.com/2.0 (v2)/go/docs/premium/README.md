# Premium

### Available Operations

* [RetrieveAccountTransactionsV2](#retrieveaccounttransactionsv2) - Access account premium transactions.

## RetrieveAccountTransactionsV2

Access account premium transactions.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            JwtAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Premium.RetrieveAccountTransactionsV2(ctx, operations.RetrieveAccountTransactionsV2Request{
        Country: sdk.String("Mongolia"),
        DateFrom: types.MustDateFromString("2020-02-11"),
        DateTo: types.MustDateFromString("2022-12-13"),
        ID: "ab7da8a5-0ce1-487f-86bc-173d689eee95",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RetrieveAccountTransactionsV2200ApplicationJSONObject != nil {
        // handle response
    }
}
```
