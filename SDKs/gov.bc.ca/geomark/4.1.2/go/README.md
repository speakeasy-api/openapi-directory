# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/gov.bc.ca/geomark/4.1.2/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.GetGeomarksGeomarkIDBoundingBoxFileFormatExtensionRequest{
        FileFormatExtension: "shpz",
        GeomarkID: "provident",
        Srid: "26909",
    }

    ctx := context.Background()
    res, err := s.BoundingBox.GetGeomarksGeomarkIDBoundingBoxFileFormatExtension(ctx, req)
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


### BoundingBox

* `GetGeomarksGeomarkIDBoundingBoxFileFormatExtension` - Gets the bounding box of the geomark

### Create

* `PostGeomarksCopy` - Create a new geomark by copying the geometries from one or more existing geomarks from the current server.
* `PostGeomarksNew` - Create a new geomark

### Feature

* `GetGeomarksGeomarkIDFeatureFileFormatExtension` - Get the feature and attribution of the geomark

### Info

* `GetGeomarksGeomarkIDFileFormatExtension` - Get information about a particular geomark

### Parts

* `GetGeomarksGeomarkIDPartsFileFormatExtension` - Get the individual geometries within a multi-part geometry

### Point

* `GetGeomarksGeomarkIDPointFileFormatExtension` - Gets a single spatial point representative of the geomark.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
