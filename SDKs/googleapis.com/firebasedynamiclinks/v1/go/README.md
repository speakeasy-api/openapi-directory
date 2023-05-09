# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/firebasedynamiclinks/v1/go
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
    res, err := s.ManagedShortLinks.FirebasedynamiclinksManagedShortLinksCreate(ctx, operations.FirebasedynamiclinksManagedShortLinksCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        CreateManagedShortLinkRequest: &shared.CreateManagedShortLinkRequest{
            DynamicLinkInfo: &shared.DynamicLinkInfo{
                AnalyticsInfo: &shared.AnalyticsInfo{
                    GooglePlayAnalytics: &shared.GooglePlayAnalytics{
                        Gclid: sdk.String("provident"),
                        UtmCampaign: sdk.String("distinctio"),
                        UtmContent: sdk.String("quibusdam"),
                        UtmMedium: sdk.String("unde"),
                        UtmSource: sdk.String("nulla"),
                        UtmTerm: sdk.String("corrupti"),
                    },
                    ItunesConnectAnalytics: &shared.ITunesConnectAnalytics{
                        At: sdk.String("illum"),
                        Ct: sdk.String("vel"),
                        Mt: sdk.String("error"),
                        Pt: sdk.String("deserunt"),
                    },
                },
                AndroidInfo: &shared.AndroidInfo{
                    AndroidFallbackLink: sdk.String("suscipit"),
                    AndroidLink: sdk.String("iure"),
                    AndroidMinPackageVersionCode: sdk.String("magnam"),
                    AndroidPackageName: sdk.String("debitis"),
                },
                DesktopInfo: &shared.DesktopInfo{
                    DesktopFallbackLink: sdk.String("ipsa"),
                },
                DomainURIPrefix: sdk.String("delectus"),
                DynamicLinkDomain: sdk.String("tempora"),
                IosInfo: &shared.IosInfo{
                    IosAppStoreID: sdk.String("suscipit"),
                    IosBundleID: sdk.String("molestiae"),
                    IosCustomScheme: sdk.String("minus"),
                    IosFallbackLink: sdk.String("placeat"),
                    IosIpadBundleID: sdk.String("voluptatum"),
                    IosIpadFallbackLink: sdk.String("iusto"),
                    IosMinimumVersion: sdk.String("excepturi"),
                },
                Link: sdk.String("nisi"),
                NavigationInfo: &shared.NavigationInfo{
                    EnableForcedRedirect: sdk.Bool(false),
                },
                SocialMetaTagInfo: &shared.SocialMetaTagInfo{
                    SocialDescription: sdk.String("recusandae"),
                    SocialImageLink: sdk.String("temporibus"),
                    SocialTitle: sdk.String("ab"),
                },
            },
            LongDynamicLink: sdk.String("quis"),
            Name: sdk.String("Iris Aufderhar"),
            SDKVersion: sdk.String("sapiente"),
            Suffix: &shared.Suffix{
                CustomSuffix: sdk.String("quo"),
                Option: shared.SuffixOptionEnumOptionUnspecified.ToPointer(),
            },
        },
        AccessToken: sdk.String("at"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("maiores"),
        Fields: sdk.String("molestiae"),
        Key: sdk.String("quod"),
        OauthToken: sdk.String("quod"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("esse"),
        UploadType: sdk.String("totam"),
        UploadProtocol: sdk.String("porro"),
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
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [ManagedShortLinks](docs/managedshortlinks/README.md)

* [FirebasedynamiclinksManagedShortLinksCreate](docs/managedshortlinks/README.md#firebasedynamiclinksmanagedshortlinkscreate) - Creates a managed short Dynamic Link given either a valid long Dynamic Link or details such as Dynamic Link domain, Android and iOS app information. The created short Dynamic Link will not expire. This differs from CreateShortDynamicLink in the following ways: - The request will also contain a name for the link (non unique name for the front end). - The response must be authenticated with an auth token (generated with the admin service account). - The link will appear in the FDL list of links in the console front end. The Dynamic Link domain in the request must be owned by requester's Firebase project.

### [ShortLinks](docs/shortlinks/README.md)

* [FirebasedynamiclinksShortLinksCreate](docs/shortlinks/README.md#firebasedynamiclinksshortlinkscreate) - Creates a short Dynamic Link given either a valid long Dynamic Link or details such as Dynamic Link domain, Android and iOS app information. The created short Dynamic Link will not expire. Repeated calls with the same long Dynamic Link or Dynamic Link information will produce the same short Dynamic Link. The Dynamic Link domain in the request must be owned by requester's Firebase project.

### [V1](docs/v1/README.md)

* [FirebasedynamiclinksGetLinkStats](docs/v1/README.md#firebasedynamiclinksgetlinkstats) - Fetches analytics stats of a short Dynamic Link for a given duration. Metrics include number of clicks, redirects, installs, app first opens, and app reopens.
* [FirebasedynamiclinksInstallAttribution](docs/v1/README.md#firebasedynamiclinksinstallattribution) - Get iOS strong/weak-match info for post-install attribution.
* [FirebasedynamiclinksReopenAttribution](docs/v1/README.md#firebasedynamiclinksreopenattribution) - Get iOS reopen attribution for app universal link open deeplinking.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
