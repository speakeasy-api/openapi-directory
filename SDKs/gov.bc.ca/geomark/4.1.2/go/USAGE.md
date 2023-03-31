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