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
            Fields: "voluptas",
            FilterThirdPartyResources: true,
            Key: "expedita",
            Locale: "consequuntur",
            OauthToken: "dolor",
            PrettyPrint: true,
            QuotaUser: "voluptas",
            Rule: []string{
                "et",
            },
            Screenshot: true,
            Snapshots: true,
            Strategy: "mobile",
            URL: "debitis",
            UserIP: "voluptatum",
            UtmCampaign: "et",
            UtmSource: "ut",
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