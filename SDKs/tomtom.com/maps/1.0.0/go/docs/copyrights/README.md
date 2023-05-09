# Copyrights

### Available Operations

* [GetMapVersionNumberCopyrightsFormat](#getmapversionnumbercopyrightsformat) - Copyrights whole world
* [GetMapVersionNumberCopyrightsCaptionFormat](#getmapversionnumbercopyrightscaptionformat) - Captions
* [GetMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormat](#getmapversionnumbercopyrightsminlonminlatmaxlonmaxlatformat) - Copyrights bounding box
* [GetMapVersionNumberCopyrightsZoomXYFormat](#getmapversionnumbercopyrightszoomxyformat) - Copyrights tile

## GetMapVersionNumberCopyrightsFormat

The Copyrights API returns copyright information for
the Maps API Raster Tile Service in JSON, JSONP, or XML format.
This call returns copyright information for the whole world.

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
    res, err := s.Copyrights.GetMapVersionNumberCopyrightsFormat(ctx, operations.GetMapVersionNumberCopyrightsFormatRequest{
        Callback: sdk.String("distinctio"),
        Format: operations.GetMapVersionNumberCopyrightsFormatFormatEnumXML,
        VersionNumber: operations.GetMapVersionNumberCopyrightsFormatVersionNumberEnumOne,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetMapVersionNumberCopyrightsCaptionFormat

This API returns copyright captions for the map service.

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
    res, err := s.Copyrights.GetMapVersionNumberCopyrightsCaptionFormat(ctx, operations.GetMapVersionNumberCopyrightsCaptionFormatRequest{
        Callback: sdk.String("unde"),
        Format: operations.GetMapVersionNumberCopyrightsCaptionFormatFormatEnumXML,
        VersionNumber: operations.GetMapVersionNumberCopyrightsCaptionFormatVersionNumberEnumOne,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormat

The Copyrights API returns copyright information for
the Maps API Raster Tile Service in JSON, JSONP, or XML format.
This call returns copyright information for a specific bounding box.

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
    res, err := s.Copyrights.GetMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormat(ctx, operations.GetMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatRequest{
        Callback: sdk.String("corrupti"),
        Format: operations.GetMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatFormatEnumXML,
        MaxLat: 4236.55,
        MaxLon: 6235.64,
        MinLat: 6458.94,
        MinLon: 3843.82,
        VersionNumber: operations.GetMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatVersionNumberEnumOne,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetMapVersionNumberCopyrightsZoomXYFormat

The Copyrights API returns copyright information for
the Maps API Raster Tile Service in JSON, JSONP, or XML format.
This call returns copyright information for the a specific map tile.

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
    res, err := s.Copyrights.GetMapVersionNumberCopyrightsZoomXYFormat(ctx, operations.GetMapVersionNumberCopyrightsZoomXYFormatRequest{
        X: 437587,
        Y: 297534,
        Callback: sdk.String("debitis"),
        Format: operations.GetMapVersionNumberCopyrightsZoomXYFormatFormatEnumJSON,
        VersionNumber: operations.GetMapVersionNumberCopyrightsZoomXYFormatVersionNumberEnumOne,
        Zoom: operations.GetMapVersionNumberCopyrightsZoomXYFormatZoomEnumEighteen,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
