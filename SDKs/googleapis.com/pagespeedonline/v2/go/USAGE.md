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
            Fields: "consequatur",
            FilterThirdPartyResources: true,
            Key: "maiores",
            Locale: "fuga",
            OauthToken: "ab",
            PrettyPrint: true,
            QuotaUser: "fugiat",
            Rule: []string{
                "consequuntur",
            },
            Screenshot: false,
            Strategy: "mobile",
            URL: "rerum",
            UserIP: "cupiditate",
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