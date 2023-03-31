# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/playablelocations/v3/go
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### V3

* `PlayablelocationsLogImpressions` - Logs new events when playable locations are displayed, and when they are interacted with. Impressions are not partially saved; either all impressions are saved and this request succeeds, or no impressions are saved, and this request fails.
* `PlayablelocationsLogPlayerReports` - Logs bad playable location reports submitted by players. Reports are not partially saved; either all reports are saved and this request succeeds, or no reports are saved, and this request fails.
* `PlayablelocationsSamplePlayableLocations` - Returns a set of playable locations that lie within a specified area, that satisfy optional filter criteria. Note: Identical `SamplePlayableLocations` requests can return different results as the state of the world changes over time.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
