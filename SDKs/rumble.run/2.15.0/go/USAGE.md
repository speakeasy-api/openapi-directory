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

    req := shared.CredentialOptions{
        ACL: map[string]interface{}{
            "provident": "distinctio",
            "quibusdam": "unde",
            "nulla": "corrupti",
        },
        Cidrs: "10.0.0.17/32, 192.168.1.0/24",
        Global: false,
        Name: "credentials_name",
        Secret: &shared.CredentialFields{},
        Type: "miradore_api_key_v1",
    }

    ctx := context.Background()
    res, err := s.Account.CreateAccountCredential(ctx, req, operations.CreateAccountCredentialSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Credential != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->