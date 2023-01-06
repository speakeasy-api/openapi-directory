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
            AccessToken: "sed",
            Alt: "proto",
            Callback: "adipisci",
            Fields: "iste",
            Key: "quod",
            OauthToken: "aliquid",
            PrettyPrint: true,
            QuotaUser: "deleniti",
            UploadType: "esse",
            UploadProtocol: "autem",
        },
        Request: &shared.CreateManagedShortLinkRequest{
            DynamicLinkInfo: &shared.DynamicLinkInfo{
                AnalyticsInfo: &shared.AnalyticsInfo{
                    GooglePlayAnalytics: &shared.GooglePlayAnalytics{
                        Gclid: "adipisci",
                        UtmCampaign: "aspernatur",
                        UtmContent: "dolorem",
                        UtmMedium: "sapiente",
                        UtmSource: "at",
                        UtmTerm: "et",
                    },
                    ItunesConnectAnalytics: &shared.ITunesConnectAnalytics{
                        At: "dolor",
                        Ct: "provident",
                        Mt: "reprehenderit",
                        Pt: "non",
                    },
                },
                AndroidInfo: &shared.AndroidInfo{
                    AndroidFallbackLink: "voluptatibus",
                    AndroidLink: "quis",
                    AndroidMinPackageVersionCode: "aut",
                    AndroidPackageName: "voluptatum",
                },
                DesktopInfo: &shared.DesktopInfo{
                    DesktopFallbackLink: "ea",
                },
                DomainURIPrefix: "necessitatibus",
                DynamicLinkDomain: "qui",
                IosInfo: &shared.IosInfo{
                    IosAppStoreID: "aut",
                    IosBundleID: "rem",
                    IosCustomScheme: "voluptatem",
                    IosFallbackLink: "aliquid",
                    IosIpadBundleID: "maxime",
                    IosIpadFallbackLink: "aut",
                    IosMinimumVersion: "quod",
                },
                Link: "voluptatum",
                NavigationInfo: &shared.NavigationInfo{
                    EnableForcedRedirect: true,
                },
                SocialMetaTagInfo: &shared.SocialMetaTagInfo{
                    SocialDescription: "aut",
                    SocialImageLink: "totam",
                    SocialTitle: "iusto",
                },
            },
            LongDynamicLink: "in",
            Name: "est",
            SdkVersion: "cum",
            Suffix: &shared.Suffix{
                CustomSuffix: "sed",
                Option: "SHORT",
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