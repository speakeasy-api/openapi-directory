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

    req := operations.GetEventRequest{
        Security: operations.GetEventSecurity{
            BasicAuth: shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        },
        PathParams: operations.GetEventPathParams{
            ID: "unde",
        },
    }

    ctx := context.Background()
    res, err := s.GetEvent(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AuditEvent != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->