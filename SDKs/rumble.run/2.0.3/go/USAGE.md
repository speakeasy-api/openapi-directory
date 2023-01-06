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
                "et": "mollitia",
            },
            Cidrs: "et",
            Global: true,
            Name: "ut",
            Secret: map[string]interface{}{
                "id": "dolores",
                "sapiente": "deserunt",
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