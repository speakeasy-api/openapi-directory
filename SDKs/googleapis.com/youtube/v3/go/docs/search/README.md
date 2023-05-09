# Search

### Available Operations

* [YoutubeSearchList](#youtubesearchlist) - Retrieves a list of search resources

## YoutubeSearchList

Retrieves a list of search resources

### Example Usage

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
    res, err := s.Search.YoutubeSearchList(ctx, operations.YoutubeSearchListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("ratione"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("nisi"),
        ChannelID: sdk.String("dignissimos"),
        ChannelType: operations.YoutubeSearchListChannelTypeEnumShow.ToPointer(),
        EventType: operations.YoutubeSearchListEventTypeEnumCompleted.ToPointer(),
        Fields: sdk.String("vitae"),
        ForContentOwner: sdk.Bool(false),
        ForDeveloper: sdk.Bool(false),
        ForMine: sdk.Bool(false),
        Key: sdk.String("est"),
        Location: sdk.String("accusantium"),
        LocationRadius: sdk.String("quod"),
        MaxResults: sdk.Int64(796117),
        OauthToken: sdk.String("quos"),
        OnBehalfOfContentOwner: sdk.String("possimus"),
        Order: operations.YoutubeSearchListOrderEnumVideoCount.ToPointer(),
        PageToken: sdk.String("odio"),
        Part: []string{
            "sapiente",
            "aperiam",
            "similique",
        },
        PrettyPrint: sdk.Bool(false),
        PublishedAfter: sdk.String("nesciunt"),
        PublishedBefore: sdk.String("provident"),
        Q: sdk.String("ex"),
        QuotaUser: sdk.String("repellendus"),
        RegionCode: sdk.String("unde"),
        RelatedToVideoID: sdk.String("alias"),
        RelevanceLanguage: sdk.String("impedit"),
        SafeSearch: operations.YoutubeSearchListSafeSearchEnumSafeSearchSettingUnspecified.ToPointer(),
        TopicID: sdk.String("commodi"),
        Type: []string{
            "expedita",
            "in",
        },
        UploadType: sdk.String("quisquam"),
        UploadProtocol: sdk.String("sunt"),
        VideoCaption: operations.YoutubeSearchListVideoCaptionEnumAny.ToPointer(),
        VideoCategoryID: sdk.String("nulla"),
        VideoDefinition: operations.YoutubeSearchListVideoDefinitionEnumHigh.ToPointer(),
        VideoDimension: operations.YoutubeSearchListVideoDimensionEnumThreed.ToPointer(),
        VideoDuration: operations.YoutubeSearchListVideoDurationEnumMedium.ToPointer(),
        VideoEmbeddable: operations.YoutubeSearchListVideoEmbeddableEnumTrue.ToPointer(),
        VideoLicense: operations.YoutubeSearchListVideoLicenseEnumCreativeCommon.ToPointer(),
        VideoSyndicated: operations.YoutubeSearchListVideoSyndicatedEnumVideoSyndicatedUnspecified.ToPointer(),
        VideoType: operations.YoutubeSearchListVideoTypeEnumMovie.ToPointer(),
    }, operations.YoutubeSearchListSecurity{
        Option1: &operations.YoutubeSearchListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SearchListResponse != nil {
        // handle response
    }
}
```
