# ShortLinks

### Available Operations

* [FirebasedynamiclinksShortLinksCreate](#firebasedynamiclinksshortlinkscreate) - Creates a short Dynamic Link given either a valid long Dynamic Link or details such as Dynamic Link domain, Android and iOS app information. The created short Dynamic Link will not expire. Repeated calls with the same long Dynamic Link or Dynamic Link information will produce the same short Dynamic Link. The Dynamic Link domain in the request must be owned by requester's Firebase project.

## FirebasedynamiclinksShortLinksCreate

Creates a short Dynamic Link given either a valid long Dynamic Link or details such as Dynamic Link domain, Android and iOS app information. The created short Dynamic Link will not expire. Repeated calls with the same long Dynamic Link or Dynamic Link information will produce the same short Dynamic Link. The Dynamic Link domain in the request must be owned by requester's Firebase project.

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
    res, err := s.ShortLinks.FirebasedynamiclinksShortLinksCreate(ctx, operations.FirebasedynamiclinksShortLinksCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        CreateShortDynamicLinkRequest: &shared.CreateShortDynamicLinkRequest{
            DynamicLinkInfo: &shared.DynamicLinkInfo{
                AnalyticsInfo: &shared.AnalyticsInfo{
                    GooglePlayAnalytics: &shared.GooglePlayAnalytics{
                        Gclid: sdk.String("nobis"),
                        UtmCampaign: sdk.String("enim"),
                        UtmContent: sdk.String("omnis"),
                        UtmMedium: sdk.String("nemo"),
                        UtmSource: sdk.String("minima"),
                        UtmTerm: sdk.String("excepturi"),
                    },
                    ItunesConnectAnalytics: &shared.ITunesConnectAnalytics{
                        At: sdk.String("accusantium"),
                        Ct: sdk.String("iure"),
                        Mt: sdk.String("culpa"),
                        Pt: sdk.String("doloribus"),
                    },
                },
                AndroidInfo: &shared.AndroidInfo{
                    AndroidFallbackLink: sdk.String("sapiente"),
                    AndroidLink: sdk.String("architecto"),
                    AndroidMinPackageVersionCode: sdk.String("mollitia"),
                    AndroidPackageName: sdk.String("dolorem"),
                },
                DesktopInfo: &shared.DesktopInfo{
                    DesktopFallbackLink: sdk.String("culpa"),
                },
                DomainURIPrefix: sdk.String("consequuntur"),
                DynamicLinkDomain: sdk.String("repellat"),
                IosInfo: &shared.IosInfo{
                    IosAppStoreID: sdk.String("mollitia"),
                    IosBundleID: sdk.String("occaecati"),
                    IosCustomScheme: sdk.String("numquam"),
                    IosFallbackLink: sdk.String("commodi"),
                    IosIpadBundleID: sdk.String("quam"),
                    IosIpadFallbackLink: sdk.String("molestiae"),
                    IosMinimumVersion: sdk.String("velit"),
                },
                Link: sdk.String("error"),
                NavigationInfo: &shared.NavigationInfo{
                    EnableForcedRedirect: sdk.Bool(false),
                },
                SocialMetaTagInfo: &shared.SocialMetaTagInfo{
                    SocialDescription: sdk.String("quia"),
                    SocialImageLink: sdk.String("quis"),
                    SocialTitle: sdk.String("vitae"),
                },
            },
            LongDynamicLink: sdk.String("laborum"),
            SDKVersion: sdk.String("animi"),
            Suffix: &shared.Suffix{
                CustomSuffix: sdk.String("enim"),
                Option: shared.SuffixOptionEnumOptionUnspecified.ToPointer(),
            },
        },
        AccessToken: sdk.String("quo"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("tenetur"),
        Fields: sdk.String("ipsam"),
        Key: sdk.String("id"),
        OauthToken: sdk.String("possimus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("aut"),
        UploadType: sdk.String("quasi"),
        UploadProtocol: sdk.String("error"),
    }, operations.FirebasedynamiclinksShortLinksCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateShortDynamicLinkResponse != nil {
        // handle response
    }
}
```
