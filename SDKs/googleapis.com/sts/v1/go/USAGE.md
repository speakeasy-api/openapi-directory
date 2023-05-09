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
    res, err := s.V1.StsIntrospect(ctx, operations.StsIntrospectRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleIdentityStsV1IntrospectTokenRequest: &shared.GoogleIdentityStsV1IntrospectTokenRequest{
            Token: sdk.String("provident"),
            TokenTypeHint: sdk.String("distinctio"),
        },
        AccessToken: sdk.String("quibusdam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("nulla"),
        Fields: sdk.String("corrupti"),
        Key: sdk.String("illum"),
        OauthToken: sdk.String("vel"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("error"),
        UploadType: sdk.String("deserunt"),
        UploadProtocol: sdk.String("suscipit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleIdentityStsV1IntrospectTokenResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->