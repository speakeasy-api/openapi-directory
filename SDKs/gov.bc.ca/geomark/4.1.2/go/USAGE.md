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
            FileFormatExtension: "json",
            GeomarkID: "voluptas",
        },
        QueryParams: operations.GetGeomarksGeomarkIDBoundingBoxFileFormatExtensionQueryParams{
            Srid: 6050128673802995827,
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