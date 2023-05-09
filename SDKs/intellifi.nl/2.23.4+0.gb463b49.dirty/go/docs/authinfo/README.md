# Authinfo

## Overview

Read-only route providing information about how the requesting client is authenticated on the API, as well as corresponding permissions.


### Available Operations

* [GetAuthinfo](#getauthinfo) - Authentication information

## GetAuthinfo

Authentication information

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
            CookieSid: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.Authinfo.GetAuthinfo(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAuthinfo200ApplicationJSONObject != nil {
        // handle response
    }
}
```
