# MobileAuthorization

### Available Operations

* [CreateMobileAuthorizationCode](#createmobileauthorizationcode) - CreateMobileAuthorizationCode

## CreateMobileAuthorizationCode

Generates code to authorize a mobile application to connect to a Square card reader

Authorization codes are one-time-use and expire __60 minutes__ after being issued.

__Important:__ The `Authorization` header you provide to this endpoint must have the following format:

```
Authorization: Bearer ACCESS_TOKEN
```

Replace `ACCESS_TOKEN` with a
[valid production authorization credential](https://developer.squareup.com/docs/build-basics/access-tokens).

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
    res, err := s.MobileAuthorization.CreateMobileAuthorizationCode(ctx, shared.CreateMobileAuthorizationCodeRequest{
        LocationID: sdk.String("ad"),
    }, operations.CreateMobileAuthorizationCodeSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateMobileAuthorizationCodeResponse != nil {
        // handle response
    }
}
```
