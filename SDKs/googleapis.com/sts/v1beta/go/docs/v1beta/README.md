# V1beta

### Available Operations

* [StsToken](#ststoken) - Exchanges a credential for a Google OAuth 2.0 access token. The token asserts an external identity within a workload identity pool, or it applies a Credential Access Boundary to a Google access token. When you call this method, do not send the `Authorization` HTTP header in the request. This method does not require the `Authorization` header, and using the header can cause the request to fail.

## StsToken

Exchanges a credential for a Google OAuth 2.0 access token. The token asserts an external identity within a workload identity pool, or it applies a Credential Access Boundary to a Google access token. When you call this method, do not send the `Authorization` HTTP header in the request. This method does not require the `Authorization` header, and using the header can cause the request to fail.

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
    res, err := s.V1beta.StsToken(ctx, operations.StsTokenRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleIdentityStsV1betaExchangeTokenRequest: &shared.GoogleIdentityStsV1betaExchangeTokenRequest{
            Audience: sdk.String("suscipit"),
            GrantType: sdk.String("molestiae"),
            Options: sdk.String("minus"),
            RequestedTokenType: sdk.String("placeat"),
            Scope: sdk.String("voluptatum"),
            SubjectToken: sdk.String("iusto"),
            SubjectTokenType: sdk.String("excepturi"),
        },
        AccessToken: sdk.String("nisi"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("temporibus"),
        Fields: sdk.String("ab"),
        Key: sdk.String("quis"),
        OauthToken: sdk.String("veritatis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("deserunt"),
        UploadType: sdk.String("perferendis"),
        UploadProtocol: sdk.String("ipsam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleIdentityStsV1betaExchangeTokenResponse != nil {
        // handle response
    }
}
```
