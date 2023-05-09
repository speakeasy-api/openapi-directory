<!-- Start SDK Example Usage -->
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
        Token: "corrupti",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AccessTokenInfoResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->