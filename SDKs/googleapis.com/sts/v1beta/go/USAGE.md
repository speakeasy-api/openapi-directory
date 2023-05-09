<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.V1beta.StsToken(ctx, operations.StsTokenRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleIdentityStsV1betaExchangeTokenRequest: &shared.GoogleIdentityStsV1betaExchangeTokenRequest{
            Audience: sdk.String("provident"),
            GrantType: sdk.String("distinctio"),
            Options: sdk.String("quibusdam"),
            RequestedTokenType: sdk.String("unde"),
            Scope: sdk.String("nulla"),
            SubjectToken: sdk.String("corrupti"),
            SubjectTokenType: sdk.String("illum"),
        },
        AccessToken: sdk.String("vel"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("deserunt"),
        Fields: sdk.String("suscipit"),
        Key: sdk.String("iure"),
        OauthToken: sdk.String("magnam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("debitis"),
        UploadType: sdk.String("ipsa"),
        UploadProtocol: sdk.String("delectus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleIdentityStsV1betaExchangeTokenResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->