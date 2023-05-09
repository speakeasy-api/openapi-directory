# SDK

## Overview

Personio Authentication API

### Available Operations

* [PostAuth](#postauth) - Request Authentication Token

## PostAuth

Request Authentication Token

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
    res, err := s.SDK.PostAuth(ctx, operations.PostAuthRequest{
        ClientID: "distinctio",
        ClientSecret: "quibusdam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AuthenticationTokenResponse != nil {
        // handle response
    }
}
```
