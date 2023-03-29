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
        QueryParams: operations.PagespeedonlinePagespeedapiRunpagespeedQueryParams{
            Alt: "json",
            Fields: "deserunt",
            FilterThirdPartyResources: false,
            Key: "porro",
            Locale: "nulla",
            OauthToken: "id",
            PrettyPrint: false,
            QuotaUser: "vero",
            Rule: []string{
                "nulla",
                "nihil",
                "fuga",
            },
            Screenshot: false,
            Snapshots: false,
            Strategy: "mobile",
            URL: "eum",
            UserIP: "iusto",
            UtmCampaign: "ullam",
            UtmSource: "saepe",
        },
    }

    ctx := context.Background()
    res, err := s.Pagespeedapi.PagespeedonlinePagespeedapiRunpagespeed(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->