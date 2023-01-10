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
            Fields: "dicta",
            FilterThirdPartyResources: true,
            Key: "velit",
            Locale: "et",
            OauthToken: "nemo",
            PrettyPrint: false,
            QuotaUser: "ipsam",
            Rule: []string{
                "ipsam",
                "iure",
                "tempora",
            },
            Screenshot: false,
            Snapshots: true,
            Strategy: "desktop",
            URL: "cum",
            UserIP: "quod",
            UtmCampaign: "ullam",
            UtmSource: "expedita",
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