<!-- Start SDK Example Usage -->
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
    res, err := s.KKid.KkidAllowanceGet(ctx, operations.KkidAllowanceGetRequest{
        KidUserID: 548814,
        TransactionDays: sdk.Int64(592845),
    }, operations.KkidAllowanceGetSecurity{
        AuthKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Allowance != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->