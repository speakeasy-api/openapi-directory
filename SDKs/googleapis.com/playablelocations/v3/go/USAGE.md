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
    
    req := operations.PlayablelocationsLogImpressionsRequest{
        QueryParams: operations.PlayablelocationsLogImpressionsQueryParams{
            DollarXgafv: "1",
            AccessToken: "voluptas",
            Alt: "media",
            Callback: "expedita",
            Fields: "consequuntur",
            Key: "dolor",
            OauthToken: "expedita",
            PrettyPrint: true,
            QuotaUser: "fugit",
            UploadType: "et",
            UploadProtocol: "nihil",
        },
        Request: &shared.GoogleMapsPlayablelocationsV3LogImpressionsRequest{
            ClientInfo: &shared.GoogleMapsUnityClientInfo{
                APIClient: "rerum",
                ApplicationID: "dicta",
                ApplicationVersion: "debitis",
                DeviceModel: "voluptatum",
                LanguageCode: "et",
                OperatingSystem: "ut",
                OperatingSystemBuild: "dolorem",
                Platform: "MAC_OS",
            },
            Impressions: []shared.GoogleMapsPlayablelocationsV3Impression{
                shared.GoogleMapsPlayablelocationsV3Impression{
                    GameObjectType: 3287288577352441706,
                    ImpressionType: "IMPRESSION_TYPE_UNSPECIFIED",
                    LocationName: "totam",
                },
            },
            RequestID: "dolores",
        },
    }
    
    res, err := s.V3.PlayablelocationsLogImpressions(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleMapsPlayablelocationsV3LogImpressionsResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->