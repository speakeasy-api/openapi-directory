# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/pagespeedonline/v4/go
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
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("corrupti"),
        FilterThirdPartyResources: sdk.Bool(false),
        Key: sdk.String("provident"),
        Locale: sdk.String("distinctio"),
        OauthToken: sdk.String("quibusdam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("unde"),
        Rule: []string{
            "corrupti",
            "illum",
            "vel",
            "error",
        },
        Screenshot: sdk.Bool(false),
        Snapshots: sdk.Bool(false),
        Strategy: operations.PagespeedonlinePagespeedapiRunpagespeedStrategyEnumMobile.ToPointer(),
        URL: "suscipit",
        UserIP: sdk.String("iure"),
        UtmCampaign: sdk.String("magnam"),
        UtmSource: sdk.String("debitis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
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
