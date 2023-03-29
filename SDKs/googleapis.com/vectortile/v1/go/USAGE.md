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

    req := operations.VectortileTerraintilesGetRequest{
        PathParams: operations.VectortileTerraintilesGetPathParams{
            Name: "unde",
        },
        QueryParams: operations.VectortileTerraintilesGetQueryParams{
            DollarXgafv: "2",
            AccessToken: "porro",
            Alt: "proto",
            AltitudePrecisionCentimeters: 602763,
            Callback: "vero",
            ClientInfoAPIClient: "perspiciatis",
            ClientInfoApplicationID: "nulla",
            ClientInfoApplicationVersion: "nihil",
            ClientInfoDeviceModel: "fuga",
            ClientInfoOperatingSystem: "facilis",
            ClientInfoPlatform: "WINDOWS",
            ClientInfoUserID: "iusto",
            EnableModeledVolumes: false,
            EnablePoliticalFeatures: false,
            EnablePrivateRoads: false,
            EnableUnclippedBuildings: false,
            Fields: "ullam",
            Key: "saepe",
            LanguageCode: "inventore",
            MaxElevationResolutionCells: 963663,
            MinElevationResolutionCells: 272656,
            OauthToken: "eum",
            PrettyPrint: false,
            QuotaUser: "voluptatum",
            RegionCode: "autem",
            TerrainFormats: []VectortileTerraintilesGetTerrainFormatsEnum{
                "FIRST_DERIVATIVE",
                "FIRST_DERIVATIVE",
                "FIRST_DERIVATIVE",
                "FIRST_DERIVATIVE",
            },
            UploadType: "molestiae",
            UploadProtocol: "quo",
        },
    }

    ctx := context.Background()
    res, err := s.Terraintiles.VectortileTerraintilesGet(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.TerrainTile != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->