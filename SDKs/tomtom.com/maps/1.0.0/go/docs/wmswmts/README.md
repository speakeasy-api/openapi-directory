# WmsWmts

### Available Operations

* [GetCapabilities](#getcapabilities) - GetCapabilities
* [GetMap](#getmap) - GetMap
* [GetMapVersionNumberWMTSKeyWMTSVersionWMTSCapabilitiesXML](#getmapversionnumberwmtskeywmtsversionwmtscapabilitiesxml) - WMTS

## GetCapabilities

The GetCapabilities call is part of TomTom's implementation of version 1.1.1
the Web Map Service (WMS). It provides descriptions of the other calls
that are available in the implementation.

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
    res, err := s.WmsWmts.GetCapabilities(ctx, operations.GetCapabilitiesRequest{
        Request: operations.GetCapabilitiesRequestEnumGetCapabilities,
        Service: operations.GetCapabilitiesServiceEnumWms,
        Version: operations.GetCapabilitiesVersionEnumOne11.ToPointer(),
        VersionNumber: operations.GetCapabilitiesVersionNumberEnumOne,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetMap

The GetMap call implements the Web Map Service 1.1.1 standard
to access TomTom raster map tiles. This service is described
in the response to the GetCapabilities API call.

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
    res, err := s.WmsWmts.GetMap(ctx, operations.GetMapRequest{
        Bbox: "maiores",
        Format: operations.GetMapFormatEnumImageJpeg,
        Height: 799159,
        Layers: operations.GetMapLayersEnumBasic,
        Request: operations.GetMapRequestEnumGetMap,
        Service: operations.GetMapServiceEnumWms.ToPointer(),
        Srs: operations.GetMapSrsEnumEpsg4326,
        Styles: operations.GetMapStylesEnumUnknown.ToPointer(),
        Version: operations.GetMapVersionEnumOne11,
        VersionNumber: operations.GetMapVersionNumberEnumOne,
        Width: 461479,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetMapVersionNumberWMTSKeyWMTSVersionWMTSCapabilitiesXML

The WMTS GetCapabilities call implements version 1.0.0 of
the <a href="http://www.opengeospatial.org/standards/wmts">Web Map Tile Service</a>
(WMTS) standard. It returns metadata that allows compatible calling systems to construct
calls to TomTom's raster map tile service. See the
<a href="/maps-api/maps-api-documentation-raster/wmts">documentation</a>
for more information on WMTS.

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
    res, err := s.WmsWmts.GetMapVersionNumberWMTSKeyWMTSVersionWMTSCapabilitiesXML(ctx, operations.GetMapVersionNumberWMTSKeyWMTSVersionWMTSCapabilitiesXMLRequest{
        Key: "totam",
        VersionNumber: operations.GetMapVersionNumberWMTSKeyWMTSVersionWMTSCapabilitiesXMLVersionNumberEnumOne,
        WmtsVersion: operations.GetMapVersionNumberWMTSKeyWMTSVersionWMTSCapabilitiesXMLWMTSVersionEnumOne00,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
