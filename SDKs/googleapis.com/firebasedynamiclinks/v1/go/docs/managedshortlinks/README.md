# ManagedShortLinks

### Available Operations

* [FirebasedynamiclinksManagedShortLinksCreate](#firebasedynamiclinksmanagedshortlinkscreate) - Creates a managed short Dynamic Link given either a valid long Dynamic Link or details such as Dynamic Link domain, Android and iOS app information. The created short Dynamic Link will not expire. This differs from CreateShortDynamicLink in the following ways: - The request will also contain a name for the link (non unique name for the front end). - The response must be authenticated with an auth token (generated with the admin service account). - The link will appear in the FDL list of links in the console front end. The Dynamic Link domain in the request must be owned by requester's Firebase project.

## FirebasedynamiclinksManagedShortLinksCreate

Creates a managed short Dynamic Link given either a valid long Dynamic Link or details such as Dynamic Link domain, Android and iOS app information. The created short Dynamic Link will not expire. This differs from CreateShortDynamicLink in the following ways: - The request will also contain a name for the link (non unique name for the front end). - The response must be authenticated with an auth token (generated with the admin service account). - The link will appear in the FDL list of links in the console front end. The Dynamic Link domain in the request must be owned by requester's Firebase project.

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
    res, err := s.ManagedShortLinks.FirebasedynamiclinksManagedShortLinksCreate(ctx, operations.FirebasedynamiclinksManagedShortLinksCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        CreateManagedShortLinkRequest: &shared.CreateManagedShortLinkRequest{
            DynamicLinkInfo: &shared.DynamicLinkInfo{
                AnalyticsInfo: &shared.AnalyticsInfo{
                    GooglePlayAnalytics: &shared.GooglePlayAnalytics{
                        Gclid: sdk.String("dicta"),
                        UtmCampaign: sdk.String("nam"),
                        UtmContent: sdk.String("officia"),
                        UtmMedium: sdk.String("occaecati"),
                        UtmSource: sdk.String("fugit"),
                        UtmTerm: sdk.String("deleniti"),
                    },
                    ItunesConnectAnalytics: &shared.ITunesConnectAnalytics{
                        At: sdk.String("hic"),
                        Ct: sdk.String("optio"),
                        Mt: sdk.String("totam"),
                        Pt: sdk.String("beatae"),
                    },
                },
                AndroidInfo: &shared.AndroidInfo{
                    AndroidFallbackLink: sdk.String("commodi"),
                    AndroidLink: sdk.String("molestiae"),
                    AndroidMinPackageVersionCode: sdk.String("modi"),
                    AndroidPackageName: sdk.String("qui"),
                },
                DesktopInfo: &shared.DesktopInfo{
                    DesktopFallbackLink: sdk.String("impedit"),
                },
                DomainURIPrefix: sdk.String("cum"),
                DynamicLinkDomain: sdk.String("esse"),
                IosInfo: &shared.IosInfo{
                    IosAppStoreID: sdk.String("ipsum"),
                    IosBundleID: sdk.String("excepturi"),
                    IosCustomScheme: sdk.String("aspernatur"),
                    IosFallbackLink: sdk.String("perferendis"),
                    IosIpadBundleID: sdk.String("ad"),
                    IosIpadFallbackLink: sdk.String("natus"),
                    IosMinimumVersion: sdk.String("sed"),
                },
                Link: sdk.String("iste"),
                NavigationInfo: &shared.NavigationInfo{
                    EnableForcedRedirect: sdk.Bool(false),
                },
                SocialMetaTagInfo: &shared.SocialMetaTagInfo{
                    SocialDescription: sdk.String("dolor"),
                    SocialImageLink: sdk.String("natus"),
                    SocialTitle: sdk.String("laboriosam"),
                },
            },
            LongDynamicLink: sdk.String("hic"),
            Name: sdk.String("Wilbur Kirlin"),
            SDKVersion: sdk.String("iure"),
            Suffix: &shared.Suffix{
                CustomSuffix: sdk.String("saepe"),
                Option: shared.SuffixOptionEnumShort.ToPointer(),
            },
        },
        AccessToken: sdk.String("architecto"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("reiciendis"),
        Fields: sdk.String("est"),
        Key: sdk.String("mollitia"),
        OauthToken: sdk.String("laborum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolores"),
        UploadType: sdk.String("dolorem"),
        UploadProtocol: sdk.String("corporis"),
    }, operations.FirebasedynamiclinksManagedShortLinksCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateManagedShortLinkResponse != nil {
        // handle response
    }
}
```
