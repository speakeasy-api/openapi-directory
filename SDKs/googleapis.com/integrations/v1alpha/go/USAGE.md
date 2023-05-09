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
    res, err := s.Callback.IntegrationsCallbackGenerateToken(ctx, operations.IntegrationsCallbackGenerateTokenRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("provident"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quibusdam"),
        Code: sdk.String("unde"),
        Fields: sdk.String("nulla"),
        GcpProjectID: sdk.String("corrupti"),
        Key: sdk.String("illum"),
        OauthToken: sdk.String("vel"),
        PrettyPrint: sdk.Bool(false),
        Product: operations.IntegrationsCallbackGenerateTokenProductEnumApigee.ToPointer(),
        QuotaUser: sdk.String("deserunt"),
        RedirectURI: sdk.String("suscipit"),
        State: sdk.String("iure"),
        UploadType: sdk.String("magnam"),
        UploadProtocol: sdk.String("debitis"),
    }, operations.IntegrationsCallbackGenerateTokenSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudIntegrationsV1alphaGenerateTokenResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->