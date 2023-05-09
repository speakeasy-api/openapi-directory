<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.CreateCredentialList(ctx, operations.CreateCredentialListRequest{
        RequestBody: &operations.CreateCredentialListCreateCredentialListRequest{
            CredentialListSid: "corrupti",
        },
        TrunkSid: "provident",
    }, operations.CreateCredentialListSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TrunkingV1TrunkCredentialList != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->