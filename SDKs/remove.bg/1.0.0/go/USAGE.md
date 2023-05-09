<!-- Start SDK Example Usage -->
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
        BgColor: sdk.String("corrupti"),
        BgImageURL: sdk.String("provident"),
        Channels: shared.RemoveBgJSONChannelsEnumAlpha.ToPointer(),
        Crop: sdk.Bool(false),
        CropMargin: sdk.String("quibusdam"),
        Format: shared.RemoveBgJSONFormatEnumJpg.ToPointer(),
        ImageFileB64: sdk.String("nulla"),
        ImageURL: sdk.String("https://www.remove.bg/example-hd.jpg"),
        Position: sdk.String("corrupti"),
        Roi: sdk.String("illum"),
        Scale: sdk.String("vel"),
        Semitransparency: sdk.Bool(false),
        Size: shared.RemoveBgJSONSizeEnumFull.ToPointer(),
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
<!-- End SDK Example Usage -->