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

    req := operations.GetAccountBalanceRequest{
        APIKey: "abcd1234",
        APISecret: "ABCDEFGH01234abc",
    }

    ctx := context.Background()
    res, err := s.Balance.GetAccountBalance(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AccountBalance != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->