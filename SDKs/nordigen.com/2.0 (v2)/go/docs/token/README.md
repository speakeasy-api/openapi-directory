# Token

### Available Operations

* [JWTObtain](#jwtobtain) - Obtain JWT pair
* [JWTRefresh](#jwtrefresh) - Refresh access token

## JWTObtain

Obtain JWT pair

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            JwtAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Token.JWTObtain(ctx, shared.JWTObtainPairRequest{
        SecretID: "provident",
        SecretKey: "aspernatur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SpectacularJWTObtain != nil {
        // handle response
    }
}
```

## JWTRefresh

Refresh access token

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            JwtAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Token.JWTRefresh(ctx, shared.JWTRefreshRequest{
        Refresh: "ullam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SpectacularJWTRefresh != nil {
        // handle response
    }
}
```
