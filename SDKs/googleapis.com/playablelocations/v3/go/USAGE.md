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