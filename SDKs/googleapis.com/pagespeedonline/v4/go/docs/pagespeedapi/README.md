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
        Fields: sdk.String("ipsa"),
        FilterThirdPartyResources: sdk.Bool(false),
        Key: sdk.String("delectus"),
        Locale: sdk.String("tempora"),
        OauthToken: sdk.String("suscipit"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("molestiae"),
        Rule: []string{
            "placeat",
            "voluptatum",
            "iusto",
            "excepturi",
        },
        Screenshot: sdk.Bool(false),
        Snapshots: sdk.Bool(false),
        Strategy: operations.PagespeedonlinePagespeedapiRunpagespeedStrategyEnumDesktop.ToPointer(),
        URL: "recusandae",
        UserIP: sdk.String("temporibus"),
        UtmCampaign: sdk.String("ab"),
        UtmSource: sdk.String("quis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
