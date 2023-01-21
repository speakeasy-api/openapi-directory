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
            AccessToken: "voluptas",
            Alt: "media",
            Callback: "expedita",
            Fields: "consequuntur",
            Key: "dolor",
            OauthToken: "expedita",
            PrettyPrint: true,
            QuotaUser: "fugit",
            UploadType: "et",
            UploadProtocol: "nihil",
        },
        Request: &shared.CreateManagedShortLinkRequest{
            DynamicLinkInfo: &shared.DynamicLinkInfo{
                AnalyticsInfo: &shared.AnalyticsInfo{
                    GooglePlayAnalytics: &shared.GooglePlayAnalytics{
                        Gclid: "rerum",
                        UtmCampaign: "dicta",
                        UtmContent: "debitis",
                        UtmMedium: "voluptatum",
                        UtmSource: "et",
                        UtmTerm: "ut",
                    },
                    ItunesConnectAnalytics: &shared.ITunesConnectAnalytics{
                        At: "dolorem",
                        Ct: "et",
                        Mt: "voluptate",
                        Pt: "iste",
                    },
                },
                AndroidInfo: &shared.AndroidInfo{
                    AndroidFallbackLink: "vitae",
                    AndroidLink: "totam",
                    AndroidMinPackageVersionCode: "dolores",
                    AndroidPackageName: "illum",
                },
                DesktopInfo: &shared.DesktopInfo{
                    DesktopFallbackLink: "debitis",
                },
                DomainURIPrefix: "vel",
                DynamicLinkDomain: "odio",
                IosInfo: &shared.IosInfo{
                    IosAppStoreID: "dolore",
                    IosBundleID: "id",
                    IosCustomScheme: "aspernatur",
                    IosFallbackLink: "accusantium",
                    IosIpadBundleID: "totam",
                    IosIpadFallbackLink: "commodi",
                    IosMinimumVersion: "quis",
                },
                Link: "est",
                NavigationInfo: &shared.NavigationInfo{
                    EnableForcedRedirect: true,
                },
                SocialMetaTagInfo: &shared.SocialMetaTagInfo{
                    SocialDescription: "odit",
                    SocialImageLink: "non",
                    SocialTitle: "voluptas",
                },
            },
            LongDynamicLink: "omnis",
            Name: "aut",
            SdkVersion: "illo",
            Suffix: &shared.Suffix{
                CustomSuffix: "sed",
                Option: "CUSTOM",
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
