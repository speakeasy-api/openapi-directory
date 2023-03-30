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

    req := operations.CreateAccountCredentialRequest{
        Security: operations.CreateAccountCredentialSecurity{
            BearerAuth: shared.SchemeBearerAuth{
                Authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
            },
        },
        Request: shared.CredentialOptions{
            ACL: map[string]interface{}{
                "deserunt": "porro",
                "nulla": "id",
                "vero": "perspiciatis",
            },
            Cidrs: "10.0.0.17/32, 192.168.1.0/24",
            Global: false,
            Name: "credentials_name",
            Secret: &shared.CredentialFields{},
            Type: "miradore_api_key_v1",
        },
    }

    ctx := context.Background()
    res, err := s.Account.CreateAccountCredential(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Credential != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->