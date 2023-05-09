# Authorization

## Overview

Resources that manage authorization tokens.

### Available Operations

* [GenerateTokenV2](#generatetokenv2) - Generate an OAuth Token
* [RevokeRefreshTokenV2](#revokerefreshtokenv2) - Delete a Refresh Token

## GenerateTokenV2

Returns an OAuth access token or a refresh token. You must pass a valid access token in the header of each API call.

authentication guid
<https://metamind.readme.io/docs/generate-an-oauth-access-token>

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
    res, err := s.Authorization.GenerateTokenV2(ctx, operations.GenerateTokenV2RequestBody{
        Assertion: sdk.String("SOME_ASSERTION_STRING"),
        GrantType: operations.GenerateTokenV2RequestBodyGrantTypeEnumUrnIetfParamsOauthGrantTypeJwtBearer.ToPointer(),
        RefreshToken: sdk.String("SomeRefreshToken"),
        Scope: sdk.String("offline"),
        ValidFor: sdk.Int(120),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GenerateAccessTokenResponse != nil {
        // handle response
    }
}
```

## RevokeRefreshTokenV2

Delete a Refresh Token

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
    res, err := s.Authorization.RevokeRefreshTokenV2(ctx, operations.RevokeRefreshTokenV2Request{
        Token: "corrupti",
    }, operations.RevokeRefreshTokenV2Security{
        BearerToken: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
