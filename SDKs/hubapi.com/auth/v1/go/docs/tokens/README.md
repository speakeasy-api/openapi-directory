# Tokens

### Available Operations

* [PostOauthV1TokenCreate](#postoauthv1tokencreate)

## PostOauthV1TokenCreate

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
    res, err := s.Tokens.PostOauthV1TokenCreate(ctx, operations.PostOauthV1TokenCreateRequestBody{
        ClientID: sdk.String("unde"),
        ClientSecret: sdk.String("nulla"),
        Code: sdk.String("corrupti"),
        GrantType: operations.PostOauthV1TokenCreateRequestBodyGrantTypeEnumRefreshToken.ToPointer(),
        RedirectURI: sdk.String("vel"),
        RefreshToken: sdk.String("error"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TokenResponseIF != nil {
        // handle response
    }
}
```
