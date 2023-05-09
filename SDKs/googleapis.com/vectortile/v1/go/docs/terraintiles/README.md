# Terraintiles

### Available Operations

* [VectortileTerraintilesGet](#vectortileterraintilesget) - Gets a terrain tile by its tile resource name.

## VectortileTerraintilesGet

Gets a terrain tile by its tile resource name.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Terraintiles.VectortileTerraintilesGet(ctx, operations.VectortileTerraintilesGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("deserunt"),
        Alt: shared.AltEnumJSON.ToPointer(),
        AltitudePrecisionCentimeters: sdk.Int64(368241),
        Callback: sdk.String("repellendus"),
        ClientInfoAPIClient: sdk.String("sapiente"),
        ClientInfoApplicationID: sdk.String("quo"),
        ClientInfoApplicationVersion: sdk.String("odit"),
        ClientInfoDeviceModel: sdk.String("at"),
        ClientInfoOperatingSystem: sdk.String("at"),
        ClientInfoPlatform: operations.VectortileTerraintilesGetClientInfoPlatformEnumWebGl.ToPointer(),
        ClientInfoUserID: sdk.String("molestiae"),
        EnableModeledVolumes: sdk.Bool(false),
        EnablePoliticalFeatures: sdk.Bool(false),
        EnablePrivateRoads: sdk.Bool(false),
        EnableUnclippedBuildings: sdk.Bool(false),
        Fields: sdk.String("quod"),
        Key: sdk.String("quod"),
        LanguageCode: sdk.String("esse"),
        MaxElevationResolutionCells: sdk.Int64(520478),
        MinElevationResolutionCells: sdk.Int64(780529),
        Name: "Samuel Reichel",
        OauthToken: sdk.String("fugit"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("deleniti"),
        RegionCode: sdk.String("hic"),
        TerrainFormats: []VectortileTerraintilesGetTerrainFormatsEnum{
            operations.VectortileTerraintilesGetTerrainFormatsEnumFirstDerivative,
            operations.VectortileTerraintilesGetTerrainFormatsEnumTerrainFormatUnknown,
            operations.VectortileTerraintilesGetTerrainFormatsEnumFirstDerivative,
            operations.VectortileTerraintilesGetTerrainFormatsEnumFirstDerivative,
        },
        UploadType: sdk.String("modi"),
        UploadProtocol: sdk.String("qui"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TerrainTile != nil {
        // handle response
    }
}
```
