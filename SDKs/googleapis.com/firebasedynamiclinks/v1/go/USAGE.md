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