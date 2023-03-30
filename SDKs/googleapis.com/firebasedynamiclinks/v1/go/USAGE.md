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
            AccessToken: "provident",
            Alt: "proto",
            Callback: "quibusdam",
            Fields: "unde",
            Key: "nulla",
            OauthToken: "corrupti",
            PrettyPrint: false,
            QuotaUser: "illum",
            UploadType: "vel",
            UploadProtocol: "error",
        },
        Request: &shared.CreateManagedShortLinkRequest{
            DynamicLinkInfo: &shared.DynamicLinkInfo{
                AnalyticsInfo: &shared.AnalyticsInfo{
                    GooglePlayAnalytics: &shared.GooglePlayAnalytics{
                        Gclid: "deserunt",
                        UtmCampaign: "suscipit",
                        UtmContent: "iure",
                        UtmMedium: "magnam",
                        UtmSource: "debitis",
                        UtmTerm: "ipsa",
                    },
                    ItunesConnectAnalytics: &shared.ITunesConnectAnalytics{
                        At: "delectus",
                        Ct: "tempora",
                        Mt: "suscipit",
                        Pt: "molestiae",
                    },
                },
                AndroidInfo: &shared.AndroidInfo{
                    AndroidFallbackLink: "minus",
                    AndroidLink: "placeat",
                    AndroidMinPackageVersionCode: "voluptatum",
                    AndroidPackageName: "iusto",
                },
                DesktopInfo: &shared.DesktopInfo{
                    DesktopFallbackLink: "excepturi",
                },
                DomainURIPrefix: "nisi",
                DynamicLinkDomain: "recusandae",
                IosInfo: &shared.IosInfo{
                    IosAppStoreID: "temporibus",
                    IosBundleID: "ab",
                    IosCustomScheme: "quis",
                    IosFallbackLink: "veritatis",
                    IosIpadBundleID: "deserunt",
                    IosIpadFallbackLink: "perferendis",
                    IosMinimumVersion: "ipsam",
                },
                Link: "repellendus",
                NavigationInfo: &shared.NavigationInfo{
                    EnableForcedRedirect: false,
                },
                SocialMetaTagInfo: &shared.SocialMetaTagInfo{
                    SocialDescription: "sapiente",
                    SocialImageLink: "quo",
                    SocialTitle: "odit",
                },
            },
            LongDynamicLink: "at",
            Name: "at",
            SDKVersion: "maiores",
            Suffix: &shared.Suffix{
                CustomSuffix: "molestiae",
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