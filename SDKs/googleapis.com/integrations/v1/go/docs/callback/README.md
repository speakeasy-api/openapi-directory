# Callback

### Available Operations

* [IntegrationsCallbackGenerateToken](#integrationscallbackgeneratetoken) - Receives the auth code and auth config id to combine that with the client id and secret to retrieve access tokens from the token endpoint. Returns either a success or error message when it's done.

## IntegrationsCallbackGenerateToken

Receives the auth code and auth config id to combine that with the client id and secret to retrieve access tokens from the token endpoint. Returns either a success or error message when it's done.

### Example Usage

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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("delectus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("suscipit"),
        Code: sdk.String("molestiae"),
        Fields: sdk.String("minus"),
        GcpProjectID: sdk.String("placeat"),
        Key: sdk.String("voluptatum"),
        OauthToken: sdk.String("iusto"),
        PrettyPrint: sdk.Bool(false),
        Product: operations.IntegrationsCallbackGenerateTokenProductEnumApigee.ToPointer(),
        QuotaUser: sdk.String("nisi"),
        RedirectURI: sdk.String("recusandae"),
        State: sdk.String("temporibus"),
        UploadType: sdk.String("ab"),
        UploadProtocol: sdk.String("quis"),
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
