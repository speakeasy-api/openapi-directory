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

    req := operations.CreateAccountConfigCreateAccountConfigRequest{
        Key: "corrupti",
        Value: "provident",
    }

    ctx := context.Background()
    res, err := s.CreateAccountConfig(ctx, req, operations.CreateAccountConfigSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MicrovisorV1AccountConfig != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->