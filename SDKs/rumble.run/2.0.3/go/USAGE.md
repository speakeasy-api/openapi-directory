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
                "voluptas": "culpa",
            },
            Cidrs: "expedita",
            Global: true,
            Name: "dolor",
            Secret: map[string]interface{}{
                "voluptas": "fugit",
                "et": "nihil",
            },
            Type: "aws_access_secret",
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