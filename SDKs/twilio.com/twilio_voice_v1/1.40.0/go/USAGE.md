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

    req := operations.CreateByocTrunkCreateByocTrunkRequest{
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
    }

    ctx := context.Background()
    res, err := s.CreateByocTrunk(ctx, req, operations.CreateByocTrunkSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VoiceV1ByocTrunk != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->