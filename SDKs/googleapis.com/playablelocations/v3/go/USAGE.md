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
            AccessToken: "provident",
            Alt: "proto",
            Callback: "quibusdam",
            Fields: "unde",
            Key: "nulla",
            OauthToken: "corrupti",
            PrettyPrint: false,
            QuotaUser: "illum",
            UploadType: "vel",
            UploadProtocol: "error",
        },
        Request: &shared.GoogleMapsPlayablelocationsV3LogImpressionsRequest{
            ClientInfo: &shared.GoogleMapsUnityClientInfo{
                APIClient: "deserunt",
                ApplicationID: "suscipit",
                ApplicationVersion: "iure",
                DeviceModel: "magnam",
                LanguageCode: "debitis",
                OperatingSystem: "ipsa",
                OperatingSystemBuild: "delectus",
                Platform: "MAC_OS",
            },
            Impressions: []shared.GoogleMapsPlayablelocationsV3Impression{
                shared.GoogleMapsPlayablelocationsV3Impression{
                    GameObjectType: 477665,
                    ImpressionType: "INTERACTED",
                    LocationName: "placeat",
                },
                shared.GoogleMapsPlayablelocationsV3Impression{
                    GameObjectType: 528895,
                    ImpressionType: "PRESENTED",
                    LocationName: "excepturi",
                },
            },
            RequestID: "nisi",
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