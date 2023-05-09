# Server

## Overview

Server information

### Available Operations

* [GetServer](#getserver) - Fetch Server information
* [PutServer](#putserver) - Update Server information

## GetServer

Fetch Server information

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
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Server.GetServer(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Server != nil {
        // handle response
    }
}
```

## PutServer

Update Server information

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Server.PutServer(ctx, shared.Server{
        Attributes: map[string]interface{}{
            "omnis": "necessitatibus",
            "distinctio": "asperiores",
            "nihil": "ipsum",
        },
        BingKey: sdk.String("voluptate"),
        CoordinateFormat: sdk.String("id"),
        DeviceReadonly: sdk.Bool(false),
        ForceSettings: sdk.Bool(false),
        ID: sdk.Int64(906418),
        Latitude: sdk.Float64(2633.22),
        LimitCommands: sdk.Bool(false),
        Longitude: sdk.Float64(1372.2),
        Map: sdk.String("perferendis"),
        MapURL: sdk.String("amet"),
        PoiLayer: sdk.String("optio"),
        Readonly: sdk.Bool(false),
        Registration: sdk.Bool(false),
        TwelveHourFormat: sdk.Bool(false),
        Version: sdk.String("accusamus"),
        Zoom: sdk.Int64(320017),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Server != nil {
        // handle response
    }
}
```
