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

    req := operations.CreateCommandRequest{
        Security: operations.CreateCommandSecurity{
            AccountSidAuthToken: shared.SchemeAccountSidAuthToken{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        },
        Request: &operations.CreateCommandCreateCommandRequest{
            CallbackMethod: "PATCH",
            CallbackURL: "https://michale.org",
            Command: "id",
            CommandMode: "binary",
            DeliveryReceiptRequested: false,
            IncludeSid: "perspiciatis",
            Sim: "nulla",
        },
    }

    ctx := context.Background()
    res, err := s.CreateCommand(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.WirelessV1Command != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->