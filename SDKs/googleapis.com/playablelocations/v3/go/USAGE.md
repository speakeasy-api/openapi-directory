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

    req := operations.PlayablelocationsLogImpressionsRequest{
        DollarXgafv: "2",
        GoogleMapsPlayablelocationsV3LogImpressionsRequest: &shared.GoogleMapsPlayablelocationsV3LogImpressionsRequest{
            ClientInfo: &shared.GoogleMapsUnityClientInfo{
                APIClient: "provident",
                ApplicationID: "distinctio",
                ApplicationVersion: "quibusdam",
                DeviceModel: "unde",
                LanguageCode: "nulla",
                OperatingSystem: "corrupti",
                OperatingSystemBuild: "illum",
                Platform: "WINDOWS",
            },
            Impressions: []shared.GoogleMapsPlayablelocationsV3Impression{
                shared.GoogleMapsPlayablelocationsV3Impression{
                    GameObjectType: 645894,
                    ImpressionType: "PRESENTED",
                    LocationName: "iure",
                },
                shared.GoogleMapsPlayablelocationsV3Impression{
                    GameObjectType: 297534,
                    ImpressionType: "INTERACTED",
                    LocationName: "ipsa",
                },
                shared.GoogleMapsPlayablelocationsV3Impression{
                    GameObjectType: 963663,
                    ImpressionType: "IMPRESSION_TYPE_UNSPECIFIED",
                    LocationName: "suscipit",
                },
            },
            RequestID: "molestiae",
        },
        AccessToken: "minus",
        Alt: "proto",
        Callback: "voluptatum",
        Fields: "iusto",
        Key: "excepturi",
        OauthToken: "nisi",
        PrettyPrint: false,
        QuotaUser: "recusandae",
        UploadType: "temporibus",
        UploadProtocol: "ab",
    }

    ctx := context.Background()
    res, err := s.V3.PlayablelocationsLogImpressions(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleMapsPlayablelocationsV3LogImpressionsResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->