# Asset

### Available Operations

* [GetAsset](#getasset) - Asset Detail
* [GetAssetContributors](#getassetcontributors) - Asset Contributors
* [ListAssets](#listassets) - Asset Collection

## GetAsset

Return the content of the selected asset.

### Example Usage

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
        AssetID: "provident",
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

## GetAssetContributors

Return the contributors of the selected asset.

### Example Usage

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
    res, err := s.Asset.GetAssetContributors(ctx, operations.GetAssetContributorsRequest{
        Aliases: sdk.Bool(false),
        AssetID: "distinctio",
    }, operations.GetAssetContributorsSecurity{
        Apikey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAssetContributors200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ListAssets

Return a collection of Assets.

### Example Usage

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
    res, err := s.Asset.ListAssets(ctx, operations.ListAssetsRequest{
        Aliases: sdk.Bool(false),
        Limit: sdk.Int(844266),
        UpdatedAfter: sdk.String("unde"),
    }, operations.ListAssetsSecurity{
        Apikey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAssets200ApplicationJSONObject != nil {
        // handle response
    }
}
```
