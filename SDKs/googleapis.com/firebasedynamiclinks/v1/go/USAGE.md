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