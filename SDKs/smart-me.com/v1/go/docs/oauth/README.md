# OAuth

### Available Operations

* [OAuthAuthorize](#oauthauthorize)
* [PostAPIOauthAuthorize](#postapioauthauthorize)

## OAuthAuthorize

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
    res, err := s.OAuth.OAuthAuthorize(ctx, operations.OAuthAuthorizeRequest{
        ClientID: "ex",
        ClientSecret: sdk.String("sed"),
        RedirectURI: "sit",
        Scope: sdk.String("vel"),
        State: "nostrum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Object != nil {
        // handle response
    }
}
```

## PostAPIOauthAuthorize

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
    res, err := s.OAuth.PostAPIOauthAuthorize(ctx, operations.PostAPIOauthAuthorizeRequest{
        ClientID: "saepe",
        ClientSecret: sdk.String("error"),
        RedirectURI: "consequatur",
        Scope: sdk.String("incidunt"),
        State: "reiciendis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Object != nil {
        // handle response
    }
}
```
