# BroadcastServices

## Overview

Broadcast services can subscribe to content for multiple destinations.

### Available Operations

* [GetAPIV2Broadcastservices](#getapiv2broadcastservices) - Gets broadcast services matching the given criteria.
* [GetAPIV2BroadcastservicesID](#getapiv2broadcastservicesid) - Returns the broadcast service matching the given ID.

## GetAPIV2Broadcastservices

Gets broadcast services matching the given criteria.

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
    res, err := s.BroadcastServices.GetAPIV2Broadcastservices(ctx, operations.GetAPIV2BroadcastservicesRequest{
        OrderByID: operations.GetAPIV2BroadcastservicesOrderByIDEnumDesc.ToPointer(),
        PageSize: sdk.Int(602763),
        PageStart: sdk.Int(857946),
    }, operations.GetAPIV2BroadcastservicesSecurity{
        CdOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Episodes != nil {
        // handle response
    }
}
```

## GetAPIV2BroadcastservicesID

Returns the broadcast service matching the given ID.

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
    res, err := s.BroadcastServices.GetAPIV2BroadcastservicesID(ctx, operations.GetAPIV2BroadcastservicesIDRequest{
        ID: 544883,
    }, operations.GetAPIV2BroadcastservicesIDSecurity{
        CdOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BroadcastService != nil {
        // handle response
    }
}
```
