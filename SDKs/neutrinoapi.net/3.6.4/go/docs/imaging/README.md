# Imaging

### Available Operations

* [HTMLRender](#htmlrender) - HTML Render
* [ImageResize](#imageresize) - Image Resize
* [ImageWatermark](#imagewatermark) - Image Watermark
* [QRCode](#qrcode) - QR Code

## HTMLRender

Render HTML content to PDF, JPG or PNG

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
            APIKey: "YOUR_API_KEY_HERE",
            UserID: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Imaging.HTMLRender(ctx, operations.HTMLRenderRequestBody{
        Content: "esse",
        CSS: sdk.String("ipsum"),
        Delay: sdk.Int(568434),
        Footer: sdk.String("aspernatur"),
        Format: sdk.String("perferendis"),
        Grayscale: sdk.Bool(false),
        Header: sdk.String("ad"),
        IgnoreCertificateErrors: sdk.Bool(false),
        ImageHeight: sdk.Int(617636),
        ImageWidth: sdk.Int(149675),
        Landscape: sdk.Bool(false),
        Margin: sdk.Float64(6120.96),
        MarginBottom: sdk.Float64(2223.21),
        MarginLeft: sdk.Float64(6169.34),
        MarginRight: sdk.Float64(3864.89),
        MarginTop: sdk.Float64(9437.49),
        PageHeight: sdk.Float64(9025.99),
        PageSize: sdk.String("fuga"),
        PageWidth: sdk.Float64(4499.5),
        Timeout: sdk.Int(359508),
        Title: sdk.String("Miss"),
        Zoom: sdk.Float64(4370.32),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.HTMLRender200ApplicationJSONBinaryString != nil {
        // handle response
    }
}
```

## ImageResize

Resize an image and output as either JPEG or PNG

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
            APIKey: "YOUR_API_KEY_HERE",
            UserID: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Imaging.ImageResize(ctx, operations.ImageResizeRequestBody{
        BgColor: sdk.String("saepe"),
        Format: sdk.String("quidem"),
        Height: sdk.Int(99280),
        ImageURL: "ipsa",
        ResizeMode: sdk.String("reiciendis"),
        Width: 666767,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ImageResize200ApplicationJSONBinaryString != nil {
        // handle response
    }
}
```

## ImageWatermark

Watermark one image with another image

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
            APIKey: "YOUR_API_KEY_HERE",
            UserID: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Imaging.ImageWatermark(ctx, operations.ImageWatermarkRequestBody{
        BgColor: sdk.String("mollitia"),
        Format: sdk.String("laborum"),
        Height: sdk.Int(170909),
        ImageURL: "dolorem",
        Opacity: sdk.Int(358152),
        Position: sdk.String("explicabo"),
        ResizeMode: sdk.String("nobis"),
        WatermarkURL: "enim",
        Width: sdk.Int(607831),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ImageWatermark200ApplicationJSONBinaryString != nil {
        // handle response
    }
}
```

## QRCode

Generate a QR code as a PNG image

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
            APIKey: "YOUR_API_KEY_HERE",
            UserID: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Imaging.QRCode(ctx, operations.QRCodeRequestBody{
        BgColor: sdk.String("nemo"),
        Content: "minima",
        FgColor: sdk.String("excepturi"),
        Height: sdk.Int(38425),
        Width: sdk.Int(438601),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.QRCode200ApplicationJSONBinaryString != nil {
        // handle response
    }
}
```
