<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.ManagedShortLinks.FirebasedynamiclinksManagedShortLinksCreate(ctx, operations.FirebasedynamiclinksManagedShortLinksCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        CreateManagedShortLinkRequest: &shared.CreateManagedShortLinkRequest{
            DynamicLinkInfo: &shared.DynamicLinkInfo{
                AnalyticsInfo: &shared.AnalyticsInfo{
                    GooglePlayAnalytics: &shared.GooglePlayAnalytics{
                        Gclid: sdk.String("provident"),
                        UtmCampaign: sdk.String("distinctio"),
                        UtmContent: sdk.String("quibusdam"),
                        UtmMedium: sdk.String("unde"),
                        UtmSource: sdk.String("nulla"),
                        UtmTerm: sdk.String("corrupti"),
                    },
                    ItunesConnectAnalytics: &shared.ITunesConnectAnalytics{
                        At: sdk.String("illum"),
                        Ct: sdk.String("vel"),
                        Mt: sdk.String("error"),
                        Pt: sdk.String("deserunt"),
                    },
                },
                AndroidInfo: &shared.AndroidInfo{
                    AndroidFallbackLink: sdk.String("suscipit"),
                    AndroidLink: sdk.String("iure"),
                    AndroidMinPackageVersionCode: sdk.String("magnam"),
                    AndroidPackageName: sdk.String("debitis"),
                },
                DesktopInfo: &shared.DesktopInfo{
                    DesktopFallbackLink: sdk.String("ipsa"),
                },
                DomainURIPrefix: sdk.String("delectus"),
                DynamicLinkDomain: sdk.String("tempora"),
                IosInfo: &shared.IosInfo{
                    IosAppStoreID: sdk.String("suscipit"),
                    IosBundleID: sdk.String("molestiae"),
                    IosCustomScheme: sdk.String("minus"),
                    IosFallbackLink: sdk.String("placeat"),
                    IosIpadBundleID: sdk.String("voluptatum"),
                    IosIpadFallbackLink: sdk.String("iusto"),
                    IosMinimumVersion: sdk.String("excepturi"),
                },
                Link: sdk.String("nisi"),
                NavigationInfo: &shared.NavigationInfo{
                    EnableForcedRedirect: sdk.Bool(false),
                },
                SocialMetaTagInfo: &shared.SocialMetaTagInfo{
                    SocialDescription: sdk.String("recusandae"),
                    SocialImageLink: sdk.String("temporibus"),
                    SocialTitle: sdk.String("ab"),
                },
            },
            LongDynamicLink: sdk.String("quis"),
            Name: sdk.String("Iris Aufderhar"),
            SDKVersion: sdk.String("sapiente"),
            Suffix: &shared.Suffix{
                CustomSuffix: sdk.String("quo"),
                Option: shared.SuffixOptionEnumOptionUnspecified.ToPointer(),
            },
        },
        AccessToken: sdk.String("at"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("maiores"),
        Fields: sdk.String("molestiae"),
        Key: sdk.String("quod"),
        OauthToken: sdk.String("quod"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("esse"),
        UploadType: sdk.String("totam"),
        UploadProtocol: sdk.String("porro"),
    }, operations.FirebasedynamiclinksManagedShortLinksCreateSecurity{
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