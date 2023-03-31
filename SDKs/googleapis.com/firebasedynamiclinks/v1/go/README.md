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

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.FirebasedynamiclinksManagedShortLinksCreateRequest{
        DollarXgafv: "2",
        CreateManagedShortLinkRequest: &shared.CreateManagedShortLinkRequest{
            DynamicLinkInfo: &shared.DynamicLinkInfo{
                AnalyticsInfo: &shared.AnalyticsInfo{
                    GooglePlayAnalytics: &shared.GooglePlayAnalytics{
                        Gclid: "provident",
                        UtmCampaign: "distinctio",
                        UtmContent: "quibusdam",
                        UtmMedium: "unde",
                        UtmSource: "nulla",
                        UtmTerm: "corrupti",
                    },
                    ItunesConnectAnalytics: &shared.ITunesConnectAnalytics{
                        At: "illum",
                        Ct: "vel",
                        Mt: "error",
                        Pt: "deserunt",
                    },
                },
                AndroidInfo: &shared.AndroidInfo{
                    AndroidFallbackLink: "suscipit",
                    AndroidLink: "iure",
                    AndroidMinPackageVersionCode: "magnam",
                    AndroidPackageName: "debitis",
                },
                DesktopInfo: &shared.DesktopInfo{
                    DesktopFallbackLink: "ipsa",
                },
                DomainURIPrefix: "delectus",
                DynamicLinkDomain: "tempora",
                IosInfo: &shared.IosInfo{
                    IosAppStoreID: "suscipit",
                    IosBundleID: "molestiae",
                    IosCustomScheme: "minus",
                    IosFallbackLink: "placeat",
                    IosIpadBundleID: "voluptatum",
                    IosIpadFallbackLink: "iusto",
                    IosMinimumVersion: "excepturi",
                },
                Link: "nisi",
                NavigationInfo: &shared.NavigationInfo{
                    EnableForcedRedirect: false,
                },
                SocialMetaTagInfo: &shared.SocialMetaTagInfo{
                    SocialDescription: "recusandae",
                    SocialImageLink: "temporibus",
                    SocialTitle: "ab",
                },
            },
            LongDynamicLink: "quis",
            Name: "veritatis",
            SDKVersion: "deserunt",
            Suffix: &shared.Suffix{
                CustomSuffix: "perferendis",
                Option: "UNGUESSABLE",
            },
        },
        AccessToken: "repellendus",
        Alt: "proto",
        Callback: "quo",
        Fields: "odit",
        Key: "at",
        OauthToken: "at",
        PrettyPrint: false,
        QuotaUser: "maiores",
        UploadType: "molestiae",
        UploadProtocol: "quod",
    }

    ctx := context.Background()
    res, err := s.ManagedShortLinks.FirebasedynamiclinksManagedShortLinksCreate(ctx, req, operations.FirebasedynamiclinksManagedShortLinksCreateSecurity{
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


### ManagedShortLinks

* `FirebasedynamiclinksManagedShortLinksCreate` - Creates a managed short Dynamic Link given either a valid long Dynamic Link or details such as Dynamic Link domain, Android and iOS app information. The created short Dynamic Link will not expire. This differs from CreateShortDynamicLink in the following ways: - The request will also contain a name for the link (non unique name for the front end). - The response must be authenticated with an auth token (generated with the admin service account). - The link will appear in the FDL list of links in the console front end. The Dynamic Link domain in the request must be owned by requester's Firebase project.

### ShortLinks

* `FirebasedynamiclinksShortLinksCreate` - Creates a short Dynamic Link given either a valid long Dynamic Link or details such as Dynamic Link domain, Android and iOS app information. The created short Dynamic Link will not expire. Repeated calls with the same long Dynamic Link or Dynamic Link information will produce the same short Dynamic Link. The Dynamic Link domain in the request must be owned by requester's Firebase project.

### V1

* `FirebasedynamiclinksGetLinkStats` - Fetches analytics stats of a short Dynamic Link for a given duration. Metrics include number of clicks, redirects, installs, app first opens, and app reopens.
* `FirebasedynamiclinksInstallAttribution` - Get iOS strong/weak-match info for post-install attribution.
* `FirebasedynamiclinksReopenAttribution` - Get iOS reopen attribution for app universal link open deeplinking.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
