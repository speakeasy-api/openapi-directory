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
        QueryParams: operations.PlayablelocationsLogImpressionsQueryParams{
            DollarXgafv: "2",
            AccessToken: "deserunt",
            Alt: "proto",
            Callback: "nulla",
            Fields: "id",
            Key: "vero",
            OauthToken: "perspiciatis",
            PrettyPrint: false,
            QuotaUser: "nulla",
            UploadType: "nihil",
            UploadProtocol: "fuga",
        },
        Request: &shared.GoogleMapsPlayablelocationsV3LogImpressionsRequest{
            ClientInfo: &shared.GoogleMapsUnityClientInfo{
                APIClient: "facilis",
                ApplicationID: "eum",
                ApplicationVersion: "iusto",
                DeviceModel: "ullam",
                LanguageCode: "saepe",
                OperatingSystem: "inventore",
                OperatingSystemBuild: "sapiente",
                Platform: "MAC_OS",
            },
            Impressions: []shared.GoogleMapsPlayablelocationsV3Impression{
                shared.GoogleMapsPlayablelocationsV3Impression{
                    GameObjectType: 477665,
                    ImpressionType: "INTERACTED",
                    LocationName: "vel",
                },
                shared.GoogleMapsPlayablelocationsV3Impression{
                    GameObjectType: 528895,
                    ImpressionType: "PRESENTED",
                    LocationName: "similique",
                },
            },
            RequestID: "reprehenderit",
        },
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