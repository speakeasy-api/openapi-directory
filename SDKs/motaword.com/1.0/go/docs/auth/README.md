# Auth

### Available Operations

* [GetAccessToken](#getaccesstoken) - Retrieve an access token

## GetAccessToken

MotaWord API is using OAuth2 procedures when authenticating or authorizing your API call.


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
    res, err := s.Auth.GetAccessToken(ctx, shared.TokenRequest{
        GrantType: "repellendus",
        Password: sdk.String("sapiente"),
        RefreshToken: sdk.String("quo"),
        Scope: "odit",
        UserID: sdk.Int64(870013),
        Username: sdk.String("Sarah_Wolff"),
    }, operations.GetAccessTokenSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Token != nil {
        // handle response
    }
}
```
