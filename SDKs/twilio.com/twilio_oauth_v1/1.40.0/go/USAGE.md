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

    req := operations.CreateDeviceCodeCreateDeviceCodeRequest{
        Audiences: []string{
            "provident",
            "distinctio",
            "quibusdam",
        },
        ClientSid: "unde",
        Scopes: []string{
            "corrupti",
            "illum",
            "vel",
            "error",
        },
    }

    ctx := context.Background()
    res, err := s.CreateDeviceCode(ctx, req, operations.CreateDeviceCodeSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OauthV1DeviceCode != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->