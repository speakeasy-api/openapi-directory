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
            Fields: "nisi",
            FilterThirdPartyResources: true,
            Key: "facere",
            Locale: "pariatur",
            OauthToken: "voluptate",
            PrettyPrint: false,
            QuotaUser: "voluptatum",
            Rule: []string{
                "quis",
                "ab",
            },
            Screenshot: true,
            Strategy: "mobile",
            URL: "doloremque",
            UserIP: "voluptas",
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