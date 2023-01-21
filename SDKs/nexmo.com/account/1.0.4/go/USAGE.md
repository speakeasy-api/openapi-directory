<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()
    
    req := operations.GetAccountBalanceRequest{
        QueryParams: operations.GetAccountBalanceQueryParams{
            APIKey: "sit",
            APISecret: "voluptas",
        },
    }
    
    res, err := s.Balance.GetAccountBalance(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AccountBalance != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->