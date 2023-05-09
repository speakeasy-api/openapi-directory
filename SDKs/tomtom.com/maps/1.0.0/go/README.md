# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/tomtom.com/maps/1.0.0/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
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
        Callback: sdk.String("corrupti"),
        Format: operations.GetMapVersionNumberCopyrightsFormatFormatEnumJsonp,
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
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Copyrights](docs/copyrights/README.md)

* [GetMapVersionNumberCopyrightsFormat](docs/copyrights/README.md#getmapversionnumbercopyrightsformat) - Copyrights whole world
* [GetMapVersionNumberCopyrightsCaptionFormat](docs/copyrights/README.md#getmapversionnumbercopyrightscaptionformat) - Captions
* [GetMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormat](docs/copyrights/README.md#getmapversionnumbercopyrightsminlonminlatmaxlonmaxlatformat) - Copyrights bounding box
* [GetMapVersionNumberCopyrightsZoomXYFormat](docs/copyrights/README.md#getmapversionnumbercopyrightszoomxyformat) - Copyrights tile

### [Raster](docs/raster/README.md)

* [GetMapVersionNumberStaticimage](docs/raster/README.md#getmapversionnumberstaticimage) - Static Image
* [GetMapVersionNumberTileLayerStyleZoomXYFormat](docs/raster/README.md#getmapversionnumbertilelayerstylezoomxyformat) - Tile

### [Vector](docs/vector/README.md)

* [GetMapVersionNumberTileLayerStyleZoomXYPbf](docs/vector/README.md#getmapversionnumbertilelayerstylezoomxypbf) - Tile

### [WmsWmts](docs/wmswmts/README.md)

* [GetCapabilities](docs/wmswmts/README.md#getcapabilities) - GetCapabilities
* [GetMap](docs/wmswmts/README.md#getmap) - GetMap
* [GetMapVersionNumberWMTSKeyWMTSVersionWMTSCapabilitiesXML](docs/wmswmts/README.md#getmapversionnumberwmtskeywmtsversionwmtscapabilitiesxml) - WMTS
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
