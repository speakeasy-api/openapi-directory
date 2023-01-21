<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()
    
    req := operations.VectortileTerraintilesGetRequest{
        PathParams: operations.VectortileTerraintilesGetPathParams{
            Name: "sit",
        },
        QueryParams: operations.VectortileTerraintilesGetQueryParams{
            DollarXgafv: "1",
            AccessToken: "culpa",
            Alt: "media",
            AltitudePrecisionCentimeters: 3390393562759376202,
            Callback: "dolor",
            ClientInfoAPIClient: "expedita",
            ClientInfoApplicationID: "voluptas",
            ClientInfoApplicationVersion: "fugit",
            ClientInfoDeviceModel: "et",
            ClientInfoOperatingSystem: "nihil",
            ClientInfoPlatform: "WINDOWS",
            ClientInfoUserID: "dicta",
            EnableModeledVolumes: true,
            EnablePoliticalFeatures: true,
            EnablePrivateRoads: false,
            EnableUnclippedBuildings: false,
            Fields: "dolorem",
            Key: "et",
            LanguageCode: "voluptate",
            MaxElevationResolutionCells: 3287288577352441706,
            MinElevationResolutionCells: 3930927879439176946,
            OauthToken: "totam",
            PrettyPrint: true,
            QuotaUser: "illum",
            RegionCode: "debitis",
            TerrainFormats: []VectortileTerraintilesGetTerrainFormatsEnum{
                "TERRAIN_FORMAT_UNKNOWN",
                "FIRST_DERIVATIVE",
            },
            UploadType: "id",
            UploadProtocol: "aspernatur",
        },
    }
    
    res, err := s.Terraintiles.VectortileTerraintilesGet(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.TerrainTile != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->