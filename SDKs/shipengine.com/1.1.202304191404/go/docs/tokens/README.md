# Tokens

### Available Operations

* [TokensGetEphemeralToken](#tokensgetephemeraltoken) - Get Ephemeral Token

## TokensGetEphemeralToken

This endpoint returns a token that can be passed to an application for authorized access.  The lifetime of this token is 10 seconds.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Tokens.TokensGetEphemeralToken(ctx, operations.TokensGetEphemeralTokenRequest{
        Redirect: shared.RedirectEnumShipengineDashboard.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TokensGetEphemeralTokenResponseBodyYaml != nil {
        // handle response
    }
}
```
