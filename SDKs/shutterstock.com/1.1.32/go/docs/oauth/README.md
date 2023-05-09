# Oauth

### Available Operations

* [Authorize](#authorize) - Authorize applications
* [CreateAccessTokenForm](#createaccesstokenform) - Get access tokens
* [CreateAccessTokenJSON](#createaccesstokenjson) - Get access tokens

## Authorize

This endpoint returns a redirect URI (in the 'Location' header) that the customer uses to authorize your application and, together with POST /v2/oauth/access_token, generate an access token that represents that authorization.

### Example Usage

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
    res, err := s.Oauth.Authorize(ctx, operations.AuthorizeRequest{
        ClientID: "assumenda",
        Realm: operations.AuthorizeRealmEnumContributor.ToPointer(),
        RedirectURI: "doloribus",
        ResponseType: operations.AuthorizeResponseTypeEnumCode,
        Scope: sdk.String("impedit"),
        State: "porro",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## CreateAccessTokenForm

This endpoint returns an access token for the specified user and with the specified scopes. The token does not expire until the user changes their password. The body parameters must be encoded as form data.

### Example Usage

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
    res, err := s.Oauth.CreateAccessTokenForm(ctx, operations.CreateAccessTokenApplicationXWwwFormUrlencoded{
        ClientID: "accusamus",
        ClientSecret: sdk.String("totam"),
        Code: sdk.String("reiciendis"),
        Expires: operations.CreateAccessTokenApplicationXWwwFormUrlencodedExpiresEnumTrue.ToPointer(),
        GrantType: operations.CreateAccessTokenApplicationXWwwFormUrlencodedGrantTypeEnumClientCredentials,
        Realm: operations.CreateAccessTokenApplicationXWwwFormUrlencodedRealmEnumCustomer.ToPointer(),
        RefreshToken: sdk.String("esse"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OauthAccessTokenResponse != nil {
        // handle response
    }
}
```

## CreateAccessTokenJSON

This endpoint returns an access token for the specified user and with the specified scopes. The token does not expire until the user changes their password. The body parameters must be encoded as form data.

### Example Usage

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
    res, err := s.Oauth.CreateAccessTokenJSON(ctx, operations.CreateAccessTokenApplicationJSON{
        ClientID: "iure",
        ClientSecret: sdk.String("odio"),
        Code: sdk.String("nesciunt"),
        Expires: sdk.Bool(false),
        GrantType: operations.CreateAccessTokenApplicationJSONGrantTypeEnumRefreshToken,
        Realm: operations.CreateAccessTokenApplicationJSONRealmEnumCustomer.ToPointer(),
        RefreshToken: sdk.String("neque"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OauthAccessTokenResponse != nil {
        // handle response
    }
}
```
