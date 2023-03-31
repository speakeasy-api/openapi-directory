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
        DollarXgafv: "2",
        AccessToken: "provident",
        Alt: "proto",
        AltitudePrecisionCentimeters: 844266,
        Callback: "unde",
        ClientInfoAPIClient: "nulla",
        ClientInfoApplicationID: "corrupti",
        ClientInfoApplicationVersion: "illum",
        ClientInfoDeviceModel: "vel",
        ClientInfoOperatingSystem: "error",
        ClientInfoPlatform: "ANDROID",
        ClientInfoUserID: "suscipit",
        EnableModeledVolumes: false,
        EnablePoliticalFeatures: false,
        EnablePrivateRoads: false,
        EnableUnclippedBuildings: false,
        Fields: "iure",
        Key: "magnam",
        LanguageCode: "debitis",
        MaxElevationResolutionCells: 56713,
        MinElevationResolutionCells: 963663,
        Name: "tempora",
        OauthToken: "suscipit",
        PrettyPrint: false,
        QuotaUser: "molestiae",
        RegionCode: "minus",
        TerrainFormats: []VectortileTerraintilesGetTerrainFormatsEnum{
            "FIRST_DERIVATIVE",
            "FIRST_DERIVATIVE",
            "FIRST_DERIVATIVE",
            "FIRST_DERIVATIVE",
        },
        UploadType: "recusandae",
        UploadProtocol: "temporibus",
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