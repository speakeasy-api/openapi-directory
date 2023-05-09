# Serve

### Available Operations

* [DeleteAsset](#deleteasset) - Delete Asset
* [GetAsset](#getasset) - Get Asset
* [GetAssetByRenderID](#getassetbyrenderid) - Get Asset by Render ID

## DeleteAsset

Delete an asset by its asset id. If a render creates multiple assets, such as thumbnail and poster images, each asset must be deleted individually by the asset id.

**base URL:** https://api.shotstack.io/serve/{version}

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
    res, err := s.Serve.DeleteAsset(ctx, operations.DeleteAssetRequest{
        ID: "7aff1a3a-2fa9-4467-b392-51aa52c3f5ad",
    }, operations.DeleteAssetSecurity{
        DeveloperKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetAsset

The Serve API is used to interact with, and delete hosted assets including videos, images, audio files,  thumbnails and poster images. Use this endpoint to fetch an asset by asset id. Note that an asset id is unique for each asset and different from the render id.

**base URL:** https://api.shotstack.io/serve/{version}

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
    res, err := s.Serve.GetAsset(ctx, operations.GetAssetRequest{
        ID: "019da1ff-e78f-4097-b007-4f15471b5e6e",
    }, operations.GetAssetSecurity{
        DeveloperKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssetResponse != nil {
        // handle response
    }
}
```

## GetAssetByRenderID

A render may generate more than one file, such as a video, thumbnail and poster image. When the assets are created the only known id is the render id returned by the original [render request](#render-video), status  request or webhook. This endpoint lets you look up one or more assets by the render id.

**base URL:** https://api.shotstack.io/serve/{version}

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
    res, err := s.Serve.GetAssetByRenderID(ctx, operations.GetAssetByRenderIDRequest{
        ID: "13b99d48-8e1e-491e-850a-d2abd4426980",
    }, operations.GetAssetByRenderIDSecurity{
        DeveloperKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssetRenderResponse != nil {
        // handle response
    }
}
```
