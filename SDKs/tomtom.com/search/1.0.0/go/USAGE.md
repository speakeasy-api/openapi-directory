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
            VersionNumber: 2259404117704393152,
        },
        QueryParams: operations.GetSearchVersionNumberAdditionalDataExtQueryParams{
            Geometries: "culpa",
            GeometriesZoom: 501233450539197794,
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