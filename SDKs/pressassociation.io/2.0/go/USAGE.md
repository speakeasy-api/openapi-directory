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

    req := operations.GetAssetRequest{
        Security: operations.GetAssetSecurity{
            Apikey: shared.SchemeApikey{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        PathParams: operations.GetAssetPathParams{
            AssetID: "unde",
        },
        QueryParams: operations.GetAssetQueryParams{
            Aliases: false,
        },
    }

    ctx := context.Background()
    res, err := s.Asset.GetAsset(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAsset200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->