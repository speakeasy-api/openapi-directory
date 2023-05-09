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
        Strategy: operations.PagespeedonlinePagespeedapiRunpagespeedStrategyEnumMobile.ToPointer(),
        URL: "suscipit",
        UserIP: sdk.String("iure"),
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