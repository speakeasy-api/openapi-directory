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
    
    req := operations.CreateByocTrunkRequest{
        Security: operations.CreateByocTrunkSecurity{
            AccountSidAuthToken: shared.SchemeAccountSidAuthToken{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        },
        Request: &operations.CreateByocTrunkCreateByocTrunkRequest{
            CnamLookupEnabled: false,
            ConnectionPolicySid: "error",
            FriendlyName: "assumenda",
            FromDomainSid: "quia",
            StatusCallbackMethod: "HEAD",
            StatusCallbackURL: "totam",
            VoiceFallbackMethod: "DELETE",
            VoiceFallbackURL: "aut",
            VoiceMethod: "PATCH",
            VoiceURL: "ducimus",
        },
    }
    
    res, err := s.CreateByocTrunk(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.VoiceV1ByocTrunk != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->