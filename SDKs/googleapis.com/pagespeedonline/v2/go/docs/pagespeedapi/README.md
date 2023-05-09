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
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("magnam"),
        FilterThirdPartyResources: sdk.Bool(false),
        Key: sdk.String("debitis"),
        Locale: sdk.String("ipsa"),
        OauthToken: sdk.String("delectus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("tempora"),
        Rule: []string{
            "molestiae",
            "minus",
        },
        Screenshot: sdk.Bool(false),
        Strategy: operations.PagespeedonlinePagespeedapiRunpagespeedStrategyEnumMobile.ToPointer(),
        URL: "voluptatum",
        UserIP: sdk.String("iusto"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
