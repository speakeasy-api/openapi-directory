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
            Fields: "libero",
            FilterThirdPartyResources: true,
            Key: "commodi",
            Locale: "rerum",
            OauthToken: "est",
            PrettyPrint: true,
            QuotaUser: "voluptatem",
            Rule: []string{
                "repudiandae",
            },
            Screenshot: true,
            Strategy: "mobile",
            URL: "a",
            UserIP: "sint",
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