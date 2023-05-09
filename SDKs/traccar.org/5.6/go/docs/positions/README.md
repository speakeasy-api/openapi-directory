# Positions

## Overview

Retrieving raw location information

### Available Operations

* [GetPositions](#getpositions) - Fetches a list of Positions

## GetPositions

We strongly recommend using [Traccar WebSocket API](https://www.traccar.org/traccar-api/) instead of periodically polling positions endpoint. Without any params, it returns a list of last known positions for all the user's Devices. _from_ and _to_ fields are not required with _id_.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Positions.GetPositions(ctx, operations.GetPositionsRequest{
        DeviceID: sdk.Int64(463451),
        From: types.MustTimeFromString("2022-02-15T18:44:26.943Z"),
        ID: sdk.Int64(345352),
        To: types.MustTimeFromString("2020-03-20T18:01:24.992Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
