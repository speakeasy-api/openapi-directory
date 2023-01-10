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