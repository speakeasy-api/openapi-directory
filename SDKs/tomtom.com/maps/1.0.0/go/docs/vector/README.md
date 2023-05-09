# Vector

### Available Operations

* [GetMapVersionNumberTileLayerStyleZoomXYPbf](#getmapversionnumbertilelayerstylezoomxypbf) - Tile

## GetMapVersionNumberTileLayerStyleZoomXYPbf

The Maps API Vector Service delivers vector tiles, which are representations of square sections of map data.

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
    res, err := s.Vector.GetMapVersionNumberTileLayerStyleZoomXYPbf(ctx, operations.GetMapVersionNumberTileLayerStyleZoomXYPbfRequest{
        X: 832620,
        Y: 957156,
        Language: sdk.String("quo"),
        Layer: operations.GetMapVersionNumberTileLayerStyleZoomXYPbfLayerEnumBasic,
        Style: operations.GetMapVersionNumberTileLayerStyleZoomXYPbfStyleEnumMain,
        VersionNumber: operations.GetMapVersionNumberTileLayerStyleZoomXYPbfVersionNumberEnumOne,
        View: operations.GetMapVersionNumberTileLayerStyleZoomXYPbfViewEnumIn.ToPointer(),
        Zoom: operations.GetMapVersionNumberTileLayerStyleZoomXYPbfZoomEnumTwenty,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
