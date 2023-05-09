# Oauth

### Available Operations

* [GetOauthAuthorize](#getoauthauthorize) - Displays an authorization form to the user. If approved, it will create and return an authorization code, then redirect to the desired redirect_uri, or show the authorization code if urn:ietf:wg:oauth:2.0:oob was requested. The authorization code can be used while requesting a token to obtain access to user-level methods.
* [PostOauthRevoke](#postoauthrevoke) - Revoke an access token to make it no longer valid for use.
* [PostOauthToken](#postoauthtoken) - Returns an access token, to be used during API calls that are not public.

## GetOauthAuthorize

Displays an authorization form to the user. If approved, it will create and return an authorization code, then redirect to the desired redirect_uri, or show the authorization code if urn:ietf:wg:oauth:2.0:oob was requested. The authorization code can be used while requesting a token to obtain access to user-level methods.

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
    res, err := s.Oauth.GetOauthAuthorize(ctx, operations.GetOauthAuthorizeRequest{
        ClientID: "perspiciatis",
        ForceLogin: sdk.Bool(false),
        RedirectURI: "hic",
        ResponseType: "cum",
        Scope: sdk.String("aspernatur"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostOauthRevoke

Revoke an access token to make it no longer valid for use.

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
    res, err := s.Oauth.PostOauthRevoke(ctx, []byte("libero"))
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostOauthToken

Returns an access token, to be used during API calls that are not public.

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
    res, err := s.Oauth.PostOauthToken(ctx, []byte("nam"))
    if err != nil {
        log.Fatal(err)
    }

    if res.PostOauthToken200ApplicationJSONObject != nil {
        // handle response
    }
}
```
