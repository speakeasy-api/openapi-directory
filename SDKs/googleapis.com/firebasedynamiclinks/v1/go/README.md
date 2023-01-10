# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get openapi
```
<!-- End SDK Installation -->

## SDK Example Usage
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
            DollarXgafv: "1",
            AccessToken: "ullam",
            Alt: "media",
            Callback: "mollitia",
            Fields: "laborum",
            Key: "voluptatem",
            OauthToken: "libero",
            PrettyPrint: true,
            QuotaUser: "velit",
            UploadType: "rerum",
            UploadProtocol: "totam",
        },
        Request: &shared.CreateManagedShortLinkRequest{
            DynamicLinkInfo: &shared.DynamicLinkInfo{
                AnalyticsInfo: &shared.AnalyticsInfo{
                    GooglePlayAnalytics: &shared.GooglePlayAnalytics{
                        Gclid: "aut",
                        UtmCampaign: "libero",
                        UtmContent: "est",
                        UtmMedium: "eum",
                        UtmSource: "quibusdam",
                        UtmTerm: "quo",
                    },
                    ItunesConnectAnalytics: &shared.ITunesConnectAnalytics{
                        At: "enim",
                        Ct: "enim",
                        Mt: "reprehenderit",
                        Pt: "nisi",
                    },
                },
                AndroidInfo: &shared.AndroidInfo{
                    AndroidFallbackLink: "deleniti",
                    AndroidLink: "maiores",
                    AndroidMinPackageVersionCode: "cumque",
                    AndroidPackageName: "aut",
                },
                DesktopInfo: &shared.DesktopInfo{
                    DesktopFallbackLink: "quo",
                },
                DomainURIPrefix: "ad",
                DynamicLinkDomain: "ad",
                IosInfo: &shared.IosInfo{
                    IosAppStoreID: "praesentium",
                    IosBundleID: "ipsa",
                    IosCustomScheme: "maiores",
                    IosFallbackLink: "soluta",
                    IosIpadBundleID: "laboriosam",
                    IosIpadFallbackLink: "voluptas",
                    IosMinimumVersion: "officiis",
                },
                Link: "veritatis",
                NavigationInfo: &shared.NavigationInfo{
                    EnableForcedRedirect: false,
                },
                SocialMetaTagInfo: &shared.SocialMetaTagInfo{
                    SocialDescription: "id",
                    SocialImageLink: "rerum",
                    SocialTitle: "alias",
                },
            },
            LongDynamicLink: "enim",
            Name: "cupiditate",
            SdkVersion: "ut",
            Suffix: &shared.Suffix{
                CustomSuffix: "et",
                Option: "UNGUESSABLE",
            },
        },
    }
    
    res, err := s.ManagedShortLinks.FirebasedynamiclinksManagedShortLinksCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateManagedShortLinkResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### managedShortLinks

* `FirebasedynamiclinksManagedShortLinksCreate` - Creates a managed short Dynamic Link given either a valid long Dynamic Link or details such as Dynamic Link domain, Android and iOS app information. The created short Dynamic Link will not expire. This differs from CreateShortDynamicLink in the following ways: - The request will also contain a name for the link (non unique name for the front end). - The response must be authenticated with an auth token (generated with the admin service account). - The link will appear in the FDL list of links in the console front end. The Dynamic Link domain in the request must be owned by requester's Firebase project.

### shortLinks

* `FirebasedynamiclinksShortLinksCreate` - Creates a short Dynamic Link given either a valid long Dynamic Link or details such as Dynamic Link domain, Android and iOS app information. The created short Dynamic Link will not expire. Repeated calls with the same long Dynamic Link or Dynamic Link information will produce the same short Dynamic Link. The Dynamic Link domain in the request must be owned by requester's Firebase project.

### v1

* `FirebasedynamiclinksGetLinkStats` - Fetches analytics stats of a short Dynamic Link for a given duration. Metrics include number of clicks, redirects, installs, app first opens, and app reopens.
* `FirebasedynamiclinksInstallAttribution` - Get iOS strong/weak-match info for post-install attribution.
* `FirebasedynamiclinksReopenAttribution` - Get iOS reopen attribution for app universal link open deeplinking.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
