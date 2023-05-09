<!-- Start SDK Example Usage -->
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("provident"),
        Alt: shared.AltEnumProto.ToPointer(),
        AltitudePrecisionCentimeters: sdk.Int64(844266),
        Callback: sdk.String("unde"),
        ClientInfoAPIClient: sdk.String("nulla"),
        ClientInfoApplicationID: sdk.String("corrupti"),
        ClientInfoApplicationVersion: sdk.String("illum"),
        ClientInfoDeviceModel: sdk.String("vel"),
        ClientInfoOperatingSystem: sdk.String("error"),
        ClientInfoPlatform: operations.VectortileTerraintilesGetClientInfoPlatformEnumAndroid.ToPointer(),
        ClientInfoUserID: sdk.String("suscipit"),
        EnableModeledVolumes: sdk.Bool(false),
        EnablePoliticalFeatures: sdk.Bool(false),
        EnablePrivateRoads: sdk.Bool(false),
        EnableUnclippedBuildings: sdk.Bool(false),
        Fields: sdk.String("iure"),
        Key: sdk.String("magnam"),
        LanguageCode: sdk.String("debitis"),
        MaxElevationResolutionCells: sdk.Int64(56713),
        MinElevationResolutionCells: sdk.Int64(963663),
        Name: "Laurie Kreiger",
        OauthToken: sdk.String("voluptatum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iusto"),
        RegionCode: sdk.String("excepturi"),
        TerrainFormats: []VectortileTerraintilesGetTerrainFormatsEnum{
            operations.VectortileTerraintilesGetTerrainFormatsEnumSecondDerivative,
            operations.VectortileTerraintilesGetTerrainFormatsEnumSecondDerivative,
        },
        UploadType: sdk.String("ab"),
        UploadProtocol: sdk.String("quis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TerrainTile != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->