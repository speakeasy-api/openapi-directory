# Platform

### Available Operations

* [GetPlatform](#getplatform) - Platform Detail
* [ListPlatformRegions](#listplatformregions) - Platform Region Collection
* [ListPlatforms](#listplatforms) - Platform Collection

## GetPlatform

Return the content of the selected platform.

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
    res, err := s.Platform.GetPlatform(ctx, operations.GetPlatformRequest{
        PlatformID: "quis",
    }, operations.GetPlatformSecurity{
        Apikey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetPlatform200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ListPlatformRegions

Return a list of regions for a platform.

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
    res, err := s.Platform.ListPlatformRegions(ctx, operations.ListPlatformRegionsRequest{
        Aliases: sdk.Bool(false),
        PlatformID: "veritatis",
    }, operations.ListPlatformRegionsSecurity{
        Apikey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListPlatformRegions200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ListPlatforms

Return a list of available platforms.

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
    res, err := s.Platform.ListPlatforms(ctx, operations.ListPlatformsRequest{
        Aliases: sdk.Bool(false),
    }, operations.ListPlatformsSecurity{
        Apikey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListPlatforms200ApplicationJSONObject != nil {
        // handle response
    }
}
```
