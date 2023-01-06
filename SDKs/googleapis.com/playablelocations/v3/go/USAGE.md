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
            DollarXgafv: "2",
            AccessToken: "non",
            Alt: "media",
            Callback: "vero",
            Fields: "debitis",
            Key: "velit",
            OauthToken: "dolor",
            PrettyPrint: false,
            QuotaUser: "consequuntur",
            UploadType: "quasi",
            UploadProtocol: "harum",
        },
        Request: &shared.GoogleMapsPlayablelocationsV3LogImpressionsRequest{
            ClientInfo: &shared.GoogleMapsUnityClientInfo{
                APIClient: "et",
                ApplicationID: "repellat",
                ApplicationVersion: "perspiciatis",
                DeviceModel: "aliquam",
                LanguageCode: "pariatur",
                OperatingSystem: "inventore",
                OperatingSystemBuild: "nisi",
                Platform: "IOS",
            },
            Impressions: []shared.GoogleMapsPlayablelocationsV3Impression{
                shared.GoogleMapsPlayablelocationsV3Impression{
                    GameObjectType: 1606281224283722532,
                    ImpressionType: "IMPRESSION_TYPE_UNSPECIFIED",
                    LocationName: "qui",
                },
                shared.GoogleMapsPlayablelocationsV3Impression{
                    GameObjectType: 6628722372745603133,
                    ImpressionType: "INTERACTED",
                    LocationName: "cum",
                },
                shared.GoogleMapsPlayablelocationsV3Impression{
                    GameObjectType: 2951276526110041873,
                    ImpressionType: "IMPRESSION_TYPE_UNSPECIFIED",
                    LocationName: "blanditiis",
                },
            },
            RequestID: "sapiente",
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