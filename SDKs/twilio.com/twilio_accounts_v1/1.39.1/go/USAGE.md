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

    req := operations.CreateCredentialAwsRequest{
        Security: operations.CreateCredentialAwsSecurity{
            AccountSidAuthToken: shared.SchemeAccountSidAuthToken{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        },
        Request: &operations.CreateCredentialAwsCreateCredentialAwsRequest{
            AccountSid: "unde",
            Credentials: "deserunt",
            FriendlyName: "porro",
        },
    }

    ctx := context.Background()
    res, err := s.CreateCredentialAws(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AccountsV1CredentialCredentialAws != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->