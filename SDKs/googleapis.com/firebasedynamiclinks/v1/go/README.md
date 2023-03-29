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
        Security: operations.FirebasedynamiclinksManagedShortLinksCreateSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        QueryParams: operations.FirebasedynamiclinksManagedShortLinksCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "deserunt",
            Alt: "proto",
            Callback: "nulla",
            Fields: "id",
            Key: "vero",
            OauthToken: "perspiciatis",
            PrettyPrint: false,
            QuotaUser: "nulla",
            UploadType: "nihil",
            UploadProtocol: "fuga",
        },
        Request: &shared.CreateManagedShortLinkRequest{
            DynamicLinkInfo: &shared.DynamicLinkInfo{
                AnalyticsInfo: &shared.AnalyticsInfo{
                    GooglePlayAnalytics: &shared.GooglePlayAnalytics{
                        Gclid: "facilis",
                        UtmCampaign: "eum",
                        UtmContent: "iusto",
                        UtmMedium: "ullam",
                        UtmSource: "saepe",
                        UtmTerm: "inventore",
                    },
                    ItunesConnectAnalytics: &shared.ITunesConnectAnalytics{
                        At: "sapiente",
                        Ct: "enim",
                        Mt: "eum",
                        Pt: "voluptatum",
                    },
                },
                AndroidInfo: &shared.AndroidInfo{
                    AndroidFallbackLink: "autem",
                    AndroidLink: "vel",
                    AndroidMinPackageVersionCode: "non",
                    AndroidPackageName: "deleniti",
                },
                DesktopInfo: &shared.DesktopInfo{
                    DesktopFallbackLink: "similique",
                },
                DomainURIPrefix: "reprehenderit",
                DynamicLinkDomain: "molestiae",
                IosInfo: &shared.IosInfo{
                    IosAppStoreID: "quo",
                    IosBundleID: "quasi",
                    IosCustomScheme: "laboriosam",
                    IosFallbackLink: "dicta",
                    IosIpadBundleID: "est",
                    IosIpadFallbackLink: "voluptatem",
                    IosMinimumVersion: "consequatur",
                },
                Link: "fugiat",
                NavigationInfo: &shared.NavigationInfo{
                    EnableForcedRedirect: false,
                },
                SocialMetaTagInfo: &shared.SocialMetaTagInfo{
                    SocialDescription: "a",
                    SocialImageLink: "omnis",
                    SocialTitle: "eos",
                },
            },
            LongDynamicLink: "accusamus",
            Name: "accusamus",
            SDKVersion: "reiciendis",
            Suffix: &shared.Suffix{
                CustomSuffix: "rem",
                Option: "CUSTOM",
            },
        },
    }

    ctx := context.Background()
    res, err := s.ManagedShortLinks.FirebasedynamiclinksManagedShortLinksCreate(ctx, req)
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
## SDK Available Operations


### ManagedShortLinks

* `FirebasedynamiclinksManagedShortLinksCreate` - Creates a managed short Dynamic Link given either a valid long Dynamic Link or details such as Dynamic Link domain, Android and iOS app information. The created short Dynamic Link will not expire. This differs from CreateShortDynamicLink in the following ways: - The request will also contain a name for the link (non unique name for the front end). - The response must be authenticated with an auth token (generated with the admin service account). - The link will appear in the FDL list of links in the console front end. The Dynamic Link domain in the request must be owned by requester's Firebase project.

### ShortLinks

* `FirebasedynamiclinksShortLinksCreate` - Creates a short Dynamic Link given either a valid long Dynamic Link or details such as Dynamic Link domain, Android and iOS app information. The created short Dynamic Link will not expire. Repeated calls with the same long Dynamic Link or Dynamic Link information will produce the same short Dynamic Link. The Dynamic Link domain in the request must be owned by requester's Firebase project.

### V1

* `FirebasedynamiclinksGetLinkStats` - Fetches analytics stats of a short Dynamic Link for a given duration. Metrics include number of clicks, redirects, installs, app first opens, and app reopens.
* `FirebasedynamiclinksInstallAttribution` - Get iOS strong/weak-match info for post-install attribution.
* `FirebasedynamiclinksReopenAttribution` - Get iOS reopen attribution for app universal link open deeplinking.
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
