# Miscellaneous

## Overview

Miscellaneous Endpoints.

### Available Operations

* [GetResolve](#getresolve) - Resolves soundcloud.com URLs to Resource URLs to use with the API.

## GetResolve

Resolves soundcloud.com URLs to Resource URLs to use with the API.

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
    res, err := s.Miscellaneous.GetResolve(ctx, operations.GetResolveRequest{
        URL: "maiores",
    }, operations.GetResolveSecurity{
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
