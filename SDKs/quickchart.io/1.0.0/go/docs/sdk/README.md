# SDK

## Overview

An API to generate charts and QR codes using QuickChart services.

### Available Operations

* [GetChart](#getchart) - Generate a chart (GET)
* [GetQr](#getqr) - Generate a QR code (GET)
* [PostChart](#postchart) - Generate a chart (POST)
* [PostQr](#postqr) - Generate a QR code (POST)

## GetChart

Generate a chart based on the provided parameters.

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
    res, err := s.SDK.GetChart(ctx, operations.GetChartRequest{
        BackgroundColor: sdk.String("nulla"),
        Chart: sdk.String("corrupti"),
        Format: sdk.String("illum"),
        Height: sdk.Int64(423655),
        Width: sdk.Int64(623564),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetChart200ImageJpegBinaryString != nil {
        // handle response
    }
}
```

## GetQr

Generate a QR code based on the provided parameters.

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
    res, err := s.SDK.GetQr(ctx, operations.GetQrRequest{
        Format: sdk.String("deserunt"),
        Height: sdk.Int64(384382),
        Margin: sdk.Int64(437587),
        Text: sdk.String("magnam"),
        Width: sdk.Int64(891773),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetQr200ImagePngBinaryString != nil {
        // handle response
    }
}
```

## PostChart

Generate a chart based on the provided configuration in the request body.

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
    res, err := s.SDK.PostChart(ctx, operations.PostChartRequestBody{
        BackgroundColor: sdk.String("ipsa"),
        Chart: map[string]interface{}{
            "tempora": "suscipit",
            "molestiae": "minus",
            "placeat": "voluptatum",
            "iusto": "excepturi",
        },
        Format: sdk.String("nisi"),
        Height: sdk.Int64(925597),
        Width: sdk.Int64(836079),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostChart200ImageJpegBinaryString != nil {
        // handle response
    }
}
```

## PostQr

Generate a QR code based on the provided configuration in the request body.

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
    res, err := s.SDK.PostQr(ctx, operations.PostQrRequestBody{
        Format: sdk.String("ab"),
        Height: sdk.Int64(337396),
        Margin: sdk.Int64(87129),
        Text: sdk.String("deserunt"),
        Width: sdk.Int64(20218),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostQr200ImagePngBinaryString != nil {
        // handle response
    }
}
```
