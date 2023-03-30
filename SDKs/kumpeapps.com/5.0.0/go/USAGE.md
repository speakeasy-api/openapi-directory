<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.KkidAllowanceGetRequest{
        Security: operations.KkidAllowanceGetSecurity{
            AuthKey: shared.SchemeAuthKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        QueryParams: operations.KkidAllowanceGetQueryParams{
            KidUserID: 548814,
            TransactionDays: 592845,
        },
    }

    ctx := context.Background()
    res, err := s.KKid.KkidAllowanceGet(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Allowance != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->