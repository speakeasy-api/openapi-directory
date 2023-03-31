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

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.PagespeedonlinePagespeedapiRunpagespeedRequest{
        DollarXgafv: "2",
        AccessToken: "provident",
        Alt: "proto",
        Callback: "quibusdam",
        CaptchaToken: "unde",
        Category: []PagespeedonlinePagespeedapiRunpagespeedCategoryEnum{
            "PERFORMANCE",
            "SEO",
            "BEST_PRACTICES",
            "PERFORMANCE",
        },
        Fields: "deserunt",
        Key: "suscipit",
        Locale: "iure",
        OauthToken: "magnam",
        PrettyPrint: false,
        QuotaUser: "debitis",
        Strategy: "STRATEGY_UNSPECIFIED",
        UploadType: "delectus",
        UploadProtocol: "tempora",
        URL: "suscipit",
        UtmCampaign: "molestiae",
        UtmSource: "minus",
    }

    ctx := context.Background()
    res, err := s.Pagespeedapi.PagespeedonlinePagespeedapiRunpagespeed(ctx, req, operations.PagespeedonlinePagespeedapiRunpagespeedSecurity{
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


### Pagespeedapi

* `PagespeedonlinePagespeedapiRunpagespeed` - Runs PageSpeed analysis on the page at the specified URL, and returns PageSpeed scores, a list of suggestions to make that page faster, and other information.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
