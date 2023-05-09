# Authentication

## Overview

Sakari uses OAuth2 for authentication. After you have created an account at [https://hub.sakari.io](https://hub.sakari.io), you can retrieve your client id and secret from the 'Account Details' screen (click on the 'cog' icon in the top right corner and scroll down to API Credentials)

Using your client id and secret, you can exchange these for a JWT ([JSON Web Token](https://en.wikipedia.org/wiki/JSON_Web_Token))

The JWT should then be used when accessing any of the core API's. It should be passed in the `Authorization` header.

For example:

``Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImt....``


### Available Operations

* [AuthToken](#authtoken) - Get token for accessing APIs

## AuthToken

Get token for accessing APIs

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
    res, err := s.Authentication.AuthToken(ctx, shared.TokenRequest{
        ClientID: sdk.String("00000000-0000-0000-0000-00000000000"),
        ClientSecret: sdk.String("00000000-0000-0000-0000-00000000000"),
        GrantType: sdk.String("client_credentials"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TokenResponse != nil {
        // handle response
    }
}
```
