<!-- Start SDK Example Usage -->
```go
package main

import (
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
                "voluptas": "iusto",
                "rerum": "non",
            },
            Cidrs: "possimus",
            Global: false,
            Name: "distinctio",
            Secret: map[string]interface{}{
                "accusamus": "voluptatum",
            },
            Type: "miradore_api_key_v1",
        },
    }
    
    res, err := s.Account.CreateAccountCredential(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Credential != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->