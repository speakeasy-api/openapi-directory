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
    
    req := operations.FetchAlertRequest{
        Security: operations.FetchAlertSecurity{
            AccountSidAuthToken: shared.SchemeAccountSidAuthToken{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        },
        PathParams: operations.FetchAlertPathParams{
            Sid: "numquam",
        },
    }
    
    res, err := s.FetchAlert(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.MonitorV1AlertInstance != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->