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

    req := operations.AddUserToAccountRequest{
        PathParams: operations.AddUserToAccountPathParams{
            AccountID: "unde",
        },
        Request: operations.AddUserToAccountRequestBody{
            UserID: "deserunt",
        },
    }

    ctx := context.Background()
    res, err := s.Accounts.AddUserToAccount(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AddUserToAccount201ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->