# Sessions

### Available Operations

* [GetV05WellKnownOpenidConfiguration](#getv05wellknownopenidconfiguration) - Get openid configuration
* [GetV05Certs](#getv05certs) - Get certs for JWT verification
* [PostV05SessionsJSON](#postv05sessionsjson) - Get access token
* [PostV05SessionsRaw](#postv05sessionsraw) - Get access token

## GetV05WellKnownOpenidConfiguration

Get openid configuration

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Sessions.GetV05WellKnownOpenidConfiguration(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.OpenIDConfiguration != nil {
        // handle response
    }
}
```

## GetV05Certs

Get certs for JWT verification

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Sessions.GetV05Certs(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Certs != nil {
        // handle response
    }
}
```

## PostV05SessionsJSON

Get access token

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
    res, err := s.Sessions.PostV05SessionsJSON(ctx, shared.SessionRequest{
        ClientID: "sequi",
        ClientSecret: "recusandae",
        GrantType: shared.SessionRequestGrantTypeEnumClientCredentials,
        RefreshToken: sdk.String("adipisci"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SessionResponse != nil {
        // handle response
    }
}
```

## PostV05SessionsRaw

Get access token

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
    res, err := s.Sessions.PostV05SessionsRaw(ctx, []byte("magni"))
    if err != nil {
        log.Fatal(err)
    }

    if res.SessionResponse != nil {
        // handle response
    }
}
```
