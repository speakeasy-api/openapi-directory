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
    
    req := operations.CreateCredentialListRequest{
        Security: operations.CreateCredentialListSecurity{
            AccountSidAuthToken: shared.SchemeAccountSidAuthToken{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        },
        PathParams: operations.CreateCredentialListPathParams{
            TrunkSid: "sit",
        },
        Request: &operations.CreateCredentialListCreateCredentialListRequest{
            CredentialListSid: "voluptas",
        },
    }
    
    res, err := s.CreateCredentialList(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.TrunkingV1TrunkCredentialList != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->