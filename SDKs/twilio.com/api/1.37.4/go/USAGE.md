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
    
    req := operations.CreateAccountRequest{
        Security: operations.CreateAccountSecurity{
            AccountSidAuthToken: shared.SchemeAccountSidAuthToken{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        },
        Request: &operations.CreateAccountCreateAccountRequest{
            FriendlyName: "rem",
        },
    }
    
    res, err := s.CreateAccount(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.APIV2010Account != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->