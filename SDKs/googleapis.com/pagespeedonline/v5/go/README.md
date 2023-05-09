# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/pagespeedonline/v5/go
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Pagespeedapi](docs/pagespeedapi/README.md)

* [PagespeedonlinePagespeedapiRunpagespeed](docs/pagespeedapi/README.md#pagespeedonlinepagespeedapirunpagespeed) - Runs PageSpeed analysis on the page at the specified URL, and returns PageSpeed scores, a list of suggestions to make that page faster, and other information.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
