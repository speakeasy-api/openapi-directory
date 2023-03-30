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

    req := operations.CreateByocTrunkRequest{
        Security: operations.CreateByocTrunkSecurity{
            AccountSidAuthToken: shared.SchemeAccountSidAuthToken{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        },
        Request: &operations.CreateByocTrunkCreateByocTrunkRequest{
            CnamLookupEnabled: false,
            ConnectionPolicySid: "corrupti",
            FriendlyName: "provident",
            FromDomainSid: "distinctio",
            StatusCallbackMethod: "DELETE",
            StatusCallbackURL: "https://tidy-mascara.org",
            VoiceFallbackMethod: "POST",
            VoiceFallbackURL: "https://present-giggle.info",
            VoiceMethod: "GET",
            VoiceURL: "https://awesome-voter.biz",
        },
    }

    ctx := context.Background()
    res, err := s.CreateByocTrunk(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.VoiceV1ByocTrunk != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->