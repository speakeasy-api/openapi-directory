<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.CreateAccountCredential(ctx, shared.CredentialOptions{
        ACL: map[string]interface{}{
            "provident": "distinctio",
            "quibusdam": "unde",
            "nulla": "corrupti",
        },
        Cidrs: sdk.String("10.0.0.17/32, 192.168.1.0/24"),
        Global: sdk.Bool(false),
        Name: sdk.String("credentials_name"),
        Secret: &shared.CredentialFields{},
        Type: shared.CredentialOptionsTypeEnumMiradoreAPIKeyV1.ToPointer(),
    }, operations.CreateAccountCredentialSecurity{
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