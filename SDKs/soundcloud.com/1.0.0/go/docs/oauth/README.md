# Oauth

## Overview

Authentication and Authorization Endpoints.

### Available Operations

* [GetConnect](#getconnect) - The OAuth2 authorization endpoint. Your app redirects a user to this endpoint, allowing them to delegate access to their account.

## GetConnect

<h3>Security Advice</h3>
* Using the [implicit OAuth authorization flow](https://tools.ietf.org/html/draft-ietf-oauth-security-topics-16#section-2.1.2) (`response_type=token`)  is **not recommended**. It can suffer from access token leakage and access token replay attacks. Use `response_type=code` instead.
* Use the `state` parameter for [CSRF protection](https://tools.ietf.org/html/draft-ietf-oauth-security-topics-16#section-4.7). Pass a sufficient  random nonce here and verify this nonce again after retrieving the token.


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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Oauth.GetConnect(ctx, operations.GetConnectRequest{
        ClientID: "molestiae",
        RedirectURI: "quod",
        ResponseType: shared.ResponseTypeEnumCodeAndToken,
        Scope: "esse",
        State: sdk.String("totam"),
    }, operations.GetConnectSecurity{
        AuthHeader: "YOUR_API_KEY_HERE",
        ClientID: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
