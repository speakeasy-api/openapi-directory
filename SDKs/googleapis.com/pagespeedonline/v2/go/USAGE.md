<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()
    
    req := operations.PagespeedonlinePagespeedapiRunpagespeedRequest{
        QueryParams: operations.PagespeedonlinePagespeedapiRunpagespeedQueryParams{
            Alt: "json",
            Fields: "est",
            FilterThirdPartyResources: false,
            Key: "dolores",
            Locale: "voluptas",
            OauthToken: "nam",
            PrettyPrint: false,
            QuotaUser: "sunt",
            Rule: []string{
                "sed",
                "voluptas",
                "dignissimos",
            },
            Screenshot: true,
            Strategy: "desktop",
            URL: "quos",
            UserIP: "sit",
        },
    }
    
    res, err := s.Pagespeedapi.PagespeedonlinePagespeedapiRunpagespeed(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->