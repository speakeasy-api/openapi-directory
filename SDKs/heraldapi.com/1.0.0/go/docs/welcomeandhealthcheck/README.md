# WelcomeAndHealthCheck

### Available Operations

* [Get](#get) - /

## Get

### Welcome & Health Check

Welcome to Herald! You can use the root endpoint to confirm HeraldAPI is available and you are able to successfully connect.

This endpoint does not require authentication.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BearerToken: "Bearer YOUR_BEARER_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.WelcomeAndHealthCheck.Get(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Get200ApplicationJSONObject != nil {
        // handle response
    }
}
```
