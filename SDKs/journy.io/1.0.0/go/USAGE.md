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
    
    req := operations.AddUserToAccountRequest{
        PathParams: operations.AddUserToAccountPathParams{
            AccountID: "et",
        },
        Request: operations.AddUserToAccountRequestBody{
            UserID: "aut",
        },
    }
    
    res, err := s.Accounts.AddUserToAccount(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AddUserToAccount201ApplicationJSONObject != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->