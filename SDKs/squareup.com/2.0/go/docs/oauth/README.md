# OAuth

### Available Operations

* [ObtainToken](#obtaintoken) - ObtainToken
* [RenewToken](#renewtoken) - RenewToken
* [RevokeToken](#revoketoken) - RevokeToken

## ObtainToken

Returns an OAuth access token.

The endpoint supports distinct methods of obtaining OAuth access tokens.
Applications specify a method by adding the `grant_type` parameter
in the request and also provide relevant information.

__Note:__ Regardless of the method application specified,
the endpoint always returns two items; an OAuth access token and
a refresh token in the response.

__OAuth tokens should only live on secure servers. Application clients
should never interact directly with OAuth tokens__.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.OAuth.ObtainToken(ctx, shared.ObtainTokenRequest{
        ClientID: "cum",
        ClientSecret: "dolorum",
        Code: sdk.String("quod"),
        GrantType: "nihil",
        MigrationToken: sdk.String("quae"),
        RedirectURI: sdk.String("ducimus"),
        RefreshToken: sdk.String("tenetur"),
        Scopes: []string{
            "ex",
        },
        ShortLived: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ObtainTokenResponse != nil {
        // handle response
    }
}
```

## RenewToken

`RenewToken` is deprecated. For information about refreshing OAuth access tokens, see
[Migrate from Renew to Refresh OAuth Tokens](https://developer.squareup.com/docs/oauth-api/migrate-to-refresh-tokens).


Renews an OAuth access token before it expires.

OAuth access tokens besides your application's personal access token expire after __30 days__.
You can also renew expired tokens within __15 days__ of their expiration.
You cannot renew an access token that has been expired for more than 15 days.
Instead, the associated user must re-complete the OAuth flow from the beginning.

__Important:__ The `Authorization` header for this endpoint must have the
following format:

```
Authorization: Client APPLICATION_SECRET
```

Replace `APPLICATION_SECRET` with the application secret on the Credentials
page in the [developer dashboard](https://developer.squareup.com/apps).

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
    res, err := s.OAuth.RenewToken(ctx, operations.RenewTokenRequest{
        RenewTokenRequest: shared.RenewTokenRequest{
            AccessToken: sdk.String("rerum"),
        },
        ClientID: "magni",
    }, operations.RenewTokenSecurity{
        Oauth2ClientSecret: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RenewTokenResponse != nil {
        // handle response
    }
}
```

## RevokeToken

Revokes an access token generated with the OAuth flow.

If an account has more than one OAuth access token for your application, this
endpoint revokes all of them, regardless of which token you specify. When an
OAuth access token is revoked, all of the active subscriptions associated
with that OAuth token are canceled immediately.

__Important:__ The `Authorization` header for this endpoint must have the
following format:

```
Authorization: Client APPLICATION_SECRET
```

Replace `APPLICATION_SECRET` with the application secret on the OAuth
page in the [developer dashboard](https://developer.squareup.com/apps).

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.OAuth.RevokeToken(ctx, shared.RevokeTokenRequest{
        AccessToken: sdk.String("laudantium"),
        ClientID: sdk.String("repudiandae"),
        MerchantID: sdk.String("minus"),
        RevokeOnlyAccessToken: sdk.Bool(false),
    }, operations.RevokeTokenSecurity{
        Oauth2ClientSecret: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RevokeTokenResponse != nil {
        // handle response
    }
}
```
