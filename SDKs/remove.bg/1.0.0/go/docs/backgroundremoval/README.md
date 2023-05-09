# BackgroundRemoval

### Available Operations

* [PostRemovebgForm](#postremovebgform) - Remove the background of an image
* [PostRemovebgJSON](#postremovebgjson) - Remove the background of an image
* [PostRemovebgMultipart](#postremovebgmultipart) - Remove the background of an image

## PostRemovebgForm

Removes the background of a JPG/PNG image.

* File size: up to 12 MB
* Image source: File upload (binary or as base64 encoded string) or download from URL
* Image Content: Any photo with a foreground [(e.g. people, products, animals, cars, etc.)](/supported-images)
* Output resolutions available: Preview (up to 0.25 megapixels), Full (up to 25 megapixels)

Requires either an API Key to be provided in the `X-API-Key` request header or an OAuth 2.0 access token to be provided in the `Authorization` request header.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyHeader: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.BackgroundRemoval.PostRemovebgForm(ctx, shared.RemoveBgJSON{
        AddShadow: sdk.Bool(false),
        BgColor: sdk.String("iure"),
        BgImageURL: sdk.String("magnam"),
        Channels: shared.RemoveBgJSONChannelsEnumAlpha.ToPointer(),
        Crop: sdk.Bool(false),
        CropMargin: sdk.String("ipsa"),
        Format: shared.RemoveBgJSONFormatEnumZip.ToPointer(),
        ImageFileB64: sdk.String("tempora"),
        ImageURL: sdk.String("https://www.remove.bg/example-hd.jpg"),
        Position: sdk.String("suscipit"),
        Roi: sdk.String("molestiae"),
        Scale: sdk.String("minus"),
        Semitransparency: sdk.Bool(false),
        Size: shared.RemoveBgJSONSizeEnumAuto.ToPointer(),
        Type: shared.RemoveBgJSONTypeEnumProduct.ToPointer(),
        TypeLevel: shared.RemoveBgJSONTypeLevelEnumOne.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RemoveBgJSONResponse != nil {
        // handle response
    }
}
```

## PostRemovebgJSON

Removes the background of a JPG/PNG image.

* File size: up to 12 MB
* Image source: File upload (binary or as base64 encoded string) or download from URL
* Image Content: Any photo with a foreground [(e.g. people, products, animals, cars, etc.)](/supported-images)
* Output resolutions available: Preview (up to 0.25 megapixels), Full (up to 25 megapixels)

Requires either an API Key to be provided in the `X-API-Key` request header or an OAuth 2.0 access token to be provided in the `Authorization` request header.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyHeader: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.BackgroundRemoval.PostRemovebgJSON(ctx, shared.RemoveBgJSON{
        AddShadow: sdk.Bool(false),
        BgColor: sdk.String("excepturi"),
        BgImageURL: sdk.String("nisi"),
        Channels: shared.RemoveBgJSONChannelsEnumAlpha.ToPointer(),
        Crop: sdk.Bool(false),
        CropMargin: sdk.String("temporibus"),
        Format: shared.RemoveBgJSONFormatEnumAuto.ToPointer(),
        ImageFileB64: sdk.String("quis"),
        ImageURL: sdk.String("https://www.remove.bg/example-hd.jpg"),
        Position: sdk.String("veritatis"),
        Roi: sdk.String("deserunt"),
        Scale: sdk.String("perferendis"),
        Semitransparency: sdk.Bool(false),
        Size: shared.RemoveBgJSONSizeEnumFull.ToPointer(),
        Type: shared.RemoveBgJSONTypeEnumCar.ToPointer(),
        TypeLevel: shared.RemoveBgJSONTypeLevelEnumLatest.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RemoveBgJSONResponse != nil {
        // handle response
    }
}
```

## PostRemovebgMultipart

Removes the background of a JPG/PNG image.

* File size: up to 12 MB
* Image source: File upload (binary or as base64 encoded string) or download from URL
* Image Content: Any photo with a foreground [(e.g. people, products, animals, cars, etc.)](/supported-images)
* Output resolutions available: Preview (up to 0.25 megapixels), Full (up to 25 megapixels)

Requires either an API Key to be provided in the `X-API-Key` request header or an OAuth 2.0 access token to be provided in the `Authorization` request header.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyHeader: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.BackgroundRemoval.PostRemovebgMultipart(ctx, shared.RemoveBgMultipart{
        AddShadow: sdk.Bool(false),
        BgColor: sdk.String("quo"),
        BgImageFile: &shared.RemoveBgMultipartBgImageFile{
            BgImageFile: "odit",
            Content: []byte("at"),
        },
        BgImageURL: sdk.String("at"),
        Channels: shared.RemoveBgMultipartChannelsEnumAlpha.ToPointer(),
        Crop: sdk.Bool(false),
        CropMargin: sdk.String("molestiae"),
        Format: shared.RemoveBgMultipartFormatEnumZip.ToPointer(),
        ImageFile: &shared.RemoveBgMultipartImageFile{
            Content: []byte("quod"),
            ImageFile: "esse",
        },
        ImageFileB64: sdk.String("totam"),
        ImageURL: sdk.String("https://www.remove.bg/example-hd.jpg"),
        Position: sdk.String("porro"),
        Roi: sdk.String("dolorum"),
        Scale: sdk.String("dicta"),
        Semitransparency: sdk.Bool(false),
        Size: shared.RemoveBgMultipartSizeEnumAuto.ToPointer(),
        Type: shared.RemoveBgMultipartTypeEnumProduct.ToPointer(),
        TypeLevel: shared.RemoveBgMultipartTypeLevelEnumTwo.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RemoveBgJSONResponse != nil {
        // handle response
    }
}
```
