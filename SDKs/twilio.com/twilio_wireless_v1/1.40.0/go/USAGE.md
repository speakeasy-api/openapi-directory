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

    req := operations.CreateCommandCreateCommandRequest{
        CallbackMethod: "PATCH",
        CallbackURL: "https://salty-stag.name",
        Command: "nulla",
        CommandMode: "binary",
        DeliveryReceiptRequested: false,
        IncludeSid: "illum",
        Sim: "vel",
    }

    ctx := context.Background()
    res, err := s.CreateCommand(ctx, req, operations.CreateCommandSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WirelessV1Command != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->