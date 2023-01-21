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
    
    req := operations.CreateSubAccountRequest{
        Security: operations.CreateSubAccountSecurity{
            BasicAuth: shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        },
        PathParams: operations.CreateSubAccountPathParams{
            APIKey: "sit",
        },
        Request: shared.NewSubaccountRequest{
            Name: "voluptas",
            Secret: "culpa",
            UsePrimaryAccountBalance: false,
        },
    }
    
    res, err := s.SubaccountManagement.CreateSubAccount(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.SubaccountCreateResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->