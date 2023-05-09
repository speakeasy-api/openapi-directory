# Raster

### Available Operations

* [GetMapVersionNumberStaticimage](#getmapversionnumberstaticimage) - Static Image
* [GetMapVersionNumberTileLayerStyleZoomXYFormat](#getmapversionnumbertilelayerstylezoomxyformat) - Tile

## GetMapVersionNumberStaticimage

The Static Image service renders a rectangular raster image
in the style, size, and zoom level specified. The image can be requested
using either a center point plus width and height or a bounding box.

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
        }),
    )

    ctx := context.Background()
    res, err := s.Raster.GetMapVersionNumberStaticimage(ctx, operations.GetMapVersionNumberStaticimageRequest{
        Bbox: sdk.String("tempora"),
        Center: sdk.String("suscipit"),
        Format: operations.GetMapVersionNumberStaticimageFormatEnumJpg.ToPointer(),
        Height: sdk.Int64(791725),
        Layer: operations.GetMapVersionNumberStaticimageLayerEnumLabels.ToPointer(),
        Style: operations.GetMapVersionNumberStaticimageStyleEnumNight.ToPointer(),
        VersionNumber: operations.GetMapVersionNumberStaticimageVersionNumberEnumOne,
        View: operations.GetMapVersionNumberStaticimageViewEnumUnified.ToPointer(),
        Width: sdk.Int64(568045),
        Zoom: operations.GetMapVersionNumberStaticimageZoomEnumNine.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetMapVersionNumberTileLayerStyleZoomXYFormat

The Maps API Raster Service delivers raster tiles, which are representations of square sections of map data.

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
        }),
    )

    ctx := context.Background()
    res, err := s.Raster.GetMapVersionNumberTileLayerStyleZoomXYFormat(ctx, operations.GetMapVersionNumberTileLayerStyleZoomXYFormatRequest{
        X: 925597,
        Y: 836079,
        Format: operations.GetMapVersionNumberTileLayerStyleZoomXYFormatFormatEnumJpg,
        Layer: operations.GetMapVersionNumberTileLayerStyleZoomXYFormatLayerEnumHybrid,
        Style: operations.GetMapVersionNumberTileLayerStyleZoomXYFormatStyleEnumMain,
        TileSize: operations.GetMapVersionNumberTileLayerStyleZoomXYFormatTileSizeEnumFiveHundredAndTwelve.ToPointer(),
        VersionNumber: operations.GetMapVersionNumberTileLayerStyleZoomXYFormatVersionNumberEnumOne,
        View: operations.GetMapVersionNumberTileLayerStyleZoomXYFormatViewEnumUnified.ToPointer(),
        Zoom: operations.GetMapVersionNumberTileLayerStyleZoomXYFormatZoomEnumEight,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
