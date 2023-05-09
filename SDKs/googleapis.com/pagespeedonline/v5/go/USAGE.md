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
    res, err := s.Pagespeedapi.PagespeedonlinePagespeedapiRunpagespeed(ctx, operations.PagespeedonlinePagespeedapiRunpagespeedRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("provident"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quibusdam"),
        CaptchaToken: sdk.String("unde"),
        Category: []PagespeedonlinePagespeedapiRunpagespeedCategoryEnum{
            operations.PagespeedonlinePagespeedapiRunpagespeedCategoryEnumPerformance,
            operations.PagespeedonlinePagespeedapiRunpagespeedCategoryEnumSeo,
            operations.PagespeedonlinePagespeedapiRunpagespeedCategoryEnumBestPractices,
            operations.PagespeedonlinePagespeedapiRunpagespeedCategoryEnumPerformance,
        },
        Fields: sdk.String("deserunt"),
        Key: sdk.String("suscipit"),
        Locale: sdk.String("iure"),
        OauthToken: sdk.String("magnam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("debitis"),
        Strategy: operations.PagespeedonlinePagespeedapiRunpagespeedStrategyEnumStrategyUnspecified.ToPointer(),
        UploadType: sdk.String("delectus"),
        UploadProtocol: sdk.String("tempora"),
        URL: "suscipit",
        UtmCampaign: sdk.String("molestiae"),
        UtmSource: sdk.String("minus"),
    }, operations.PagespeedonlinePagespeedapiRunpagespeedSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PagespeedAPIPagespeedResponseV5 != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->