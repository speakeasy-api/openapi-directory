<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Asset.GetAsset(ctx, operations.GetAssetRequest{
        Aliases: sdk.Bool(false),
        AssetID: "corrupti",
    }, operations.GetAssetSecurity{
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