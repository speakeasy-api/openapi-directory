# AccessTokens

### Available Operations

* [GetOauthV1AccessTokensTokenGet](#getoauthv1accesstokenstokenget)

## GetOauthV1AccessTokensTokenGet

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
    res, err := s.AccessTokens.GetOauthV1AccessTokensTokenGet(ctx, operations.GetOauthV1AccessTokensTokenGetRequest{
        Token: "provident",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AccessTokenInfoResponse != nil {
        // handle response
    }
}
```
