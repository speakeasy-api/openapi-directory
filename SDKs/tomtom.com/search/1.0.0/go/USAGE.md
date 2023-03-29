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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: shared.SchemeAPIKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    req := operations.GetSearchVersionNumberAdditionalDataExtRequest{
        PathParams: operations.GetSearchVersionNumberAdditionalDataExtPathParams{
            Ext: "json",
            VersionNumber: "2",
        },
        QueryParams: operations.GetSearchVersionNumberAdditionalDataExtQueryParams{
            Geometries: "porro",
            GeometriesZoom: "19",
        },
    }

    ctx := context.Background()
    res, err := s.AdditionalData.GetSearchVersionNumberAdditionalDataExt(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->