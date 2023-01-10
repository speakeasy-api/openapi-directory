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
            AccessToken: "voluptatibus",
            Alt: "media",
            Callback: "mollitia",
            Fields: "adipisci",
            Key: "aut",
            OauthToken: "eaque",
            PrettyPrint: true,
            QuotaUser: "ut",
            UploadType: "explicabo",
            UploadProtocol: "impedit",
        },
        Request: &shared.GoogleMapsPlayablelocationsV3LogImpressionsRequest{
            ClientInfo: &shared.GoogleMapsUnityClientInfo{
                APIClient: "quia",
                ApplicationID: "quia",
                ApplicationVersion: "odit",
                DeviceModel: "nihil",
                LanguageCode: "beatae",
                OperatingSystem: "corporis",
                OperatingSystemBuild: "voluptas",
                Platform: "LINUX",
            },
            Impressions: []shared.GoogleMapsPlayablelocationsV3Impression{
                shared.GoogleMapsPlayablelocationsV3Impression{
                    GameObjectType: 9144622778787384569,
                    ImpressionType: "IMPRESSION_TYPE_UNSPECIFIED",
                    LocationName: "impedit",
                },
            },
            RequestID: "odit",
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