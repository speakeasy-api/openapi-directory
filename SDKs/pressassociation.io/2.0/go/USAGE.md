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
        Aliases: false,
        AssetID: "corrupti",
    }

    ctx := context.Background()
    res, err := s.Asset.GetAsset(ctx, req, operations.GetAssetSecurity{
        Apikey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAsset200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->