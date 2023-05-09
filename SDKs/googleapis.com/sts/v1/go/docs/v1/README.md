# V1

### Available Operations

* [StsIntrospect](#stsintrospect) - Gets information about a Google OAuth 2.0 access token issued by the Google Cloud [Security Token Service API](https://cloud.google.com/iam/docs/reference/sts/rest).
* [StsOauthtoken](#stsoauthtoken) - Exchanges a credential that represents the resource owner's authorization for a Google-generated [OAuth 2.0 access token] (https://www.rfc-editor.org/rfc/rfc6749#section-5) or [refreshes an accesstoken] (https://www.rfc-editor.org/rfc/rfc6749#section-6) following [the OAuth 2.0 authorization framework] (https://tools.ietf.org/html/rfc8693) The credential can be one of the following: - An authorization code issued by the workforce identity federation authorization endpoint - A [refresh token](https://www.rfc-editor.org/rfc/rfc6749#section-10.4) issued by this endpoint This endpoint is only meant to be called by the Google Cloud CLI. Also note that this API only accepts the authorization code issued for workforce pools.
* [StsToken](#ststoken) - Exchanges a credential for a Google OAuth 2.0 access token. The token asserts an external identity within an identity pool, or it applies a Credential Access Boundary to a Google access token. Note that workforce pools do not support Credential Access Boundaries. When you call this method, do not send the `Authorization` HTTP header in the request. This method does not require the `Authorization` header, and using the header can cause the request to fail.

## StsIntrospect

Gets information about a Google OAuth 2.0 access token issued by the Google Cloud [Security Token Service API](https://cloud.google.com/iam/docs/reference/sts/rest).

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
    res, err := s.V1.StsIntrospect(ctx, operations.StsIntrospectRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleIdentityStsV1IntrospectTokenRequest: &shared.GoogleIdentityStsV1IntrospectTokenRequest{
            Token: sdk.String("magnam"),
            TokenTypeHint: sdk.String("debitis"),
        },
        AccessToken: sdk.String("ipsa"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("tempora"),
        Fields: sdk.String("suscipit"),
        Key: sdk.String("molestiae"),
        OauthToken: sdk.String("minus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("placeat"),
        UploadType: sdk.String("voluptatum"),
        UploadProtocol: sdk.String("iusto"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleIdentityStsV1IntrospectTokenResponse != nil {
        // handle response
    }
}
```

## StsOauthtoken

Exchanges a credential that represents the resource owner's authorization for a Google-generated [OAuth 2.0 access token] (https://www.rfc-editor.org/rfc/rfc6749#section-5) or [refreshes an accesstoken] (https://www.rfc-editor.org/rfc/rfc6749#section-6) following [the OAuth 2.0 authorization framework] (https://tools.ietf.org/html/rfc8693) The credential can be one of the following: - An authorization code issued by the workforce identity federation authorization endpoint - A [refresh token](https://www.rfc-editor.org/rfc/rfc6749#section-10.4) issued by this endpoint This endpoint is only meant to be called by the Google Cloud CLI. Also note that this API only accepts the authorization code issued for workforce pools.

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
    res, err := s.V1.StsOauthtoken(ctx, operations.StsOauthtokenRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleIdentityStsV1ExchangeOauthTokenRequest: &shared.GoogleIdentityStsV1ExchangeOauthTokenRequest{
            ClientID: sdk.String("nisi"),
            Code: sdk.String("recusandae"),
            CodeVerifier: sdk.String("temporibus"),
            GrantType: sdk.String("ab"),
            RedirectURI: sdk.String("quis"),
            RefreshToken: sdk.String("veritatis"),
            Scope: sdk.String("deserunt"),
        },
        AccessToken: sdk.String("perferendis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("repellendus"),
        Fields: sdk.String("sapiente"),
        Key: sdk.String("quo"),
        OauthToken: sdk.String("odit"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("at"),
        UploadType: sdk.String("at"),
        UploadProtocol: sdk.String("maiores"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleIdentityStsV1ExchangeOauthTokenResponse != nil {
        // handle response
    }
}
```

## StsToken

Exchanges a credential for a Google OAuth 2.0 access token. The token asserts an external identity within an identity pool, or it applies a Credential Access Boundary to a Google access token. Note that workforce pools do not support Credential Access Boundaries. When you call this method, do not send the `Authorization` HTTP header in the request. This method does not require the `Authorization` header, and using the header can cause the request to fail.

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
    res, err := s.V1.StsToken(ctx, operations.StsTokenRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleIdentityStsV1ExchangeTokenRequest: &shared.GoogleIdentityStsV1ExchangeTokenRequest{
            Audience: sdk.String("quod"),
            GrantType: sdk.String("quod"),
            Options: sdk.String("esse"),
            RequestedTokenType: sdk.String("totam"),
            Scope: sdk.String("porro"),
            SubjectToken: sdk.String("dolorum"),
            SubjectTokenType: sdk.String("dicta"),
        },
        AccessToken: sdk.String("nam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("occaecati"),
        Fields: sdk.String("fugit"),
        Key: sdk.String("deleniti"),
        OauthToken: sdk.String("hic"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("optio"),
        UploadType: sdk.String("totam"),
        UploadProtocol: sdk.String("beatae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleIdentityStsV1ExchangeTokenResponse != nil {
        // handle response
    }
}
```
