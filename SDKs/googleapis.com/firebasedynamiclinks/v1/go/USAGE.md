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