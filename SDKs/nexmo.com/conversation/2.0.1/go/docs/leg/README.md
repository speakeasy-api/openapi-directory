# Leg

## Overview

A leg can be a video call, IP call, or PSTN call that users participate in using multiple platforms. With this endpoint you can retrieve the details about all of the legs that took place in your application.

### Available Operations

* [DeleteLeg](#deleteleg) - Delete a leg
* [ListLegs](#listlegs) - List legs

## DeleteLeg

Delete a leg

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Leg.DeleteLeg(ctx, operations.DeleteLegRequest{
        LegID: "voluptatum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteLeg200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ListLegs

List legs

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
    res, err := s.Leg.ListLegs(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.ListLegs200ApplicationJSONObject != nil {
        // handle response
    }
}
```
