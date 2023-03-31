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

    req := operations.FetchAlertRequest{
        Sid: "corrupti",
    }

    ctx := context.Background()
    res, err := s.FetchAlert(ctx, req, operations.FetchAlertSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MonitorV1AlertInstance != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->