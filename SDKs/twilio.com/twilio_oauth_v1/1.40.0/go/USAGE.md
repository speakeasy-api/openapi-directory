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

    req := operations.CreateDeviceCodeRequest{
        Security: operations.CreateDeviceCodeSecurity{
            AccountSidAuthToken: shared.SchemeAccountSidAuthToken{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        },
        Request: &operations.CreateDeviceCodeCreateDeviceCodeRequest{
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
        },
    }

    ctx := context.Background()
    res, err := s.CreateDeviceCode(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.OauthV1DeviceCode != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->