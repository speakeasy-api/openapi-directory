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

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.V3.PlayablelocationsLogImpressions(ctx, operations.PlayablelocationsLogImpressionsRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleMapsPlayablelocationsV3LogImpressionsRequest: &shared.GoogleMapsPlayablelocationsV3LogImpressionsRequest{
            ClientInfo: &shared.GoogleMapsUnityClientInfo{
                APIClient: sdk.String("provident"),
                ApplicationID: sdk.String("distinctio"),
                ApplicationVersion: sdk.String("quibusdam"),
                DeviceModel: sdk.String("unde"),
                LanguageCode: sdk.String("nulla"),
                OperatingSystem: sdk.String("corrupti"),
                OperatingSystemBuild: sdk.String("illum"),
                Platform: shared.GoogleMapsUnityClientInfoPlatformEnumWindows.ToPointer(),
            },
            Impressions: []shared.GoogleMapsPlayablelocationsV3Impression{
                shared.GoogleMapsPlayablelocationsV3Impression{
                    GameObjectType: sdk.Int(645894),
                    ImpressionType: shared.GoogleMapsPlayablelocationsV3ImpressionImpressionTypeEnumPresented.ToPointer(),
                    LocationName: sdk.String("iure"),
                },
                shared.GoogleMapsPlayablelocationsV3Impression{
                    GameObjectType: sdk.Int(297534),
                    ImpressionType: shared.GoogleMapsPlayablelocationsV3ImpressionImpressionTypeEnumInteracted.ToPointer(),
                    LocationName: sdk.String("ipsa"),
                },
                shared.GoogleMapsPlayablelocationsV3Impression{
                    GameObjectType: sdk.Int(963663),
                    ImpressionType: shared.GoogleMapsPlayablelocationsV3ImpressionImpressionTypeEnumImpressionTypeUnspecified.ToPointer(),
                    LocationName: sdk.String("suscipit"),
                },
            },
            RequestID: sdk.String("molestiae"),
        },
        AccessToken: sdk.String("minus"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("voluptatum"),
        Fields: sdk.String("iusto"),
        Key: sdk.String("excepturi"),
        OauthToken: sdk.String("nisi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("recusandae"),
        UploadType: sdk.String("temporibus"),
        UploadProtocol: sdk.String("ab"),
    })
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


### [V3](docs/v3/README.md)

* [PlayablelocationsLogImpressions](docs/v3/README.md#playablelocationslogimpressions) - Logs new events when playable locations are displayed, and when they are interacted with. Impressions are not partially saved; either all impressions are saved and this request succeeds, or no impressions are saved, and this request fails.
* [PlayablelocationsLogPlayerReports](docs/v3/README.md#playablelocationslogplayerreports) - Logs bad playable location reports submitted by players. Reports are not partially saved; either all reports are saved and this request succeeds, or no reports are saved, and this request fails.
* [PlayablelocationsSamplePlayableLocations](docs/v3/README.md#playablelocationssampleplayablelocations) - Returns a set of playable locations that lie within a specified area, that satisfy optional filter criteria. Note: Identical `SamplePlayableLocations` requests can return different results as the state of the world changes over time.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
