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
            Name: "aut",
        },
        QueryParams: operations.VectortileTerraintilesGetQueryParams{
            DollarXgafv: "2",
            AccessToken: "impedit",
            Alt: "proto",
            AltitudePrecisionCentimeters: 8709645707623077778,
            Callback: "placeat",
            ClientInfoAPIClient: "quis",
            ClientInfoApplicationID: "temporibus",
            ClientInfoApplicationVersion: "repudiandae",
            ClientInfoDeviceModel: "quam",
            ClientInfoOperatingSystem: "deleniti",
            ClientInfoPlatform: "WINDOWS",
            ClientInfoUserID: "et",
            EnableModeledVolumes: false,
            EnablePoliticalFeatures: true,
            EnablePrivateRoads: true,
            EnableUnclippedBuildings: true,
            Fields: "placeat",
            Key: "voluptates",
            LanguageCode: "at",
            MaxElevationResolutionCells: 8449147394238145881,
            MinElevationResolutionCells: 6525754203162737448,
            OauthToken: "ullam",
            PrettyPrint: true,
            QuotaUser: "sint",
            RegionCode: "rerum",
            TerrainFormats: []VectortileTerraintilesGetTerrainFormatsEnum{
                "TERRAIN_FORMAT_UNKNOWN",
                "SECOND_DERIVATIVE",
            },
            UploadType: "impedit",
            UploadProtocol: "amet",
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