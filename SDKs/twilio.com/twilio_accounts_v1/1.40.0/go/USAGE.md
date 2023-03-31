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

    req := operations.CreateCredentialAwsCreateCredentialAwsRequest{
        AccountSid: "corrupti",
        Credentials: "provident",
        FriendlyName: "distinctio",
    }

    ctx := context.Background()
    res, err := s.CreateCredentialAws(ctx, req, operations.CreateCredentialAwsSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AccountsV1CredentialCredentialAws != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->