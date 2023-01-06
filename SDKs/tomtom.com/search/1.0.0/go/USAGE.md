<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    opts := []sdk.SDKOption{
        sdk.WithSecurity(
            shared.Security{
                APIKey: shared.SchemeAPIKey{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.GetSearchVersionNumberAdditionalDataExtRequest{
        PathParams: operations.GetSearchVersionNumberAdditionalDataExtPathParams{
            Ext: "json",
            VersionNumber: 2696926621411880175,
        },
        QueryParams: operations.GetSearchVersionNumberAdditionalDataExtQueryParams{
            Geometries: "est",
            GeometriesZoom: 7177763960018707098,
        },
    }
    
    res, err := s.AdditionalData.GetSearchVersionNumberAdditionalDataExt(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->