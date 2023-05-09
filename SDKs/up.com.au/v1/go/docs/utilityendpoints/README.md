# UtilityEndpoints

## Overview

Some endpoints exist not to expose data, but to test the API
itself. Currently there is only one endpoint in this group: ping!


### Available Operations

* [GetUtilPing](#getutilping) - Ping

## GetUtilPing

Make a basic ping request to the API. This is useful to verify that
authentication is functioning correctly. On authentication success an
HTTP `200` status is returned. On failure an HTTP `401` error response
is returned.


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
            BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.UtilityEndpoints.GetUtilPing(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.PingResponse != nil {
        // handle response
    }
}
```
