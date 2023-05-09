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
    res, err := s.CreateByocTrunk(ctx, operations.CreateByocTrunkCreateByocTrunkRequest{
        CnamLookupEnabled: sdk.Bool(false),
        ConnectionPolicySid: sdk.String("corrupti"),
        FriendlyName: sdk.String("provident"),
        FromDomainSid: sdk.String("distinctio"),
        StatusCallbackMethod: operations.CreateByocTrunkCreateByocTrunkRequestStatusCallbackMethodEnumDelete.ToPointer(),
        StatusCallbackURL: sdk.String("https://tidy-mascara.org"),
        VoiceFallbackMethod: operations.CreateByocTrunkCreateByocTrunkRequestVoiceFallbackMethodEnumPost.ToPointer(),
        VoiceFallbackURL: sdk.String("https://present-giggle.info"),
        VoiceMethod: operations.CreateByocTrunkCreateByocTrunkRequestVoiceMethodEnumGet.ToPointer(),
        VoiceURL: sdk.String("https://awesome-voter.biz"),
    }, operations.CreateByocTrunkSecurity{
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