<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()
    
    req := operations.GetGeomarksGeomarkIDBoundingBoxFileFormatExtensionRequest{
        PathParams: operations.GetGeomarksGeomarkIDBoundingBoxFileFormatExtensionPathParams{
            FileFormatExtension: "shpz",
            GeomarkID: "quia",
        },
        QueryParams: operations.GetGeomarksGeomarkIDBoundingBoxFileFormatExtensionQueryParams{
            Srid: 1068448084495713022,
        },
    }
    
    res, err := s.BoundingBox.GetGeomarksGeomarkIDBoundingBoxFileFormatExtension(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->