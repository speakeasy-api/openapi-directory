# Pagespeedapi

### Available Operations

* [PagespeedonlinePagespeedapiRunpagespeed](#pagespeedonlinepagespeedapirunpagespeed) - Runs PageSpeed analysis on the page at the specified URL, and returns PageSpeed scores, a list of suggestions to make that page faster, and other information.

## PagespeedonlinePagespeedapiRunpagespeed

Runs PageSpeed analysis on the page at the specified URL, and returns PageSpeed scores, a list of suggestions to make that page faster, and other information.

### Example Usage

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
        AccessToken: sdk.String("voluptatum"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("excepturi"),
        CaptchaToken: sdk.String("nisi"),
        Category: []PagespeedonlinePagespeedapiRunpagespeedCategoryEnum{
            operations.PagespeedonlinePagespeedapiRunpagespeedCategoryEnumSeo,
            operations.PagespeedonlinePagespeedapiRunpagespeedCategoryEnumCategoryUnspecified,
            operations.PagespeedonlinePagespeedapiRunpagespeedCategoryEnumBestPractices,
            operations.PagespeedonlinePagespeedapiRunpagespeedCategoryEnumCategoryUnspecified,
        },
        Fields: sdk.String("deserunt"),
        Key: sdk.String("perferendis"),
        Locale: sdk.String("ipsam"),
        OauthToken: sdk.String("repellendus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sapiente"),
        Strategy: operations.PagespeedonlinePagespeedapiRunpagespeedStrategyEnumMobile.ToPointer(),
        UploadType: sdk.String("odit"),
        UploadProtocol: sdk.String("at"),
        URL: "at",
        UtmCampaign: sdk.String("maiores"),
        UtmSource: sdk.String("molestiae"),
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
