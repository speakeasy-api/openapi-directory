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
            ConnectionPolicySid: "nam",
            FriendlyName: "repudiandae",
            FromDomainSid: "quia",
            StatusCallbackMethod: "DELETE",
            StatusCallbackURL: "voluptates",
            VoiceFallbackMethod: "PATCH",
            VoiceFallbackURL: "doloribus",
            VoiceMethod: "PATCH",
            VoiceURL: "quisquam",
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