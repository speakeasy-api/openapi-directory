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
        Alt: "json",
        Fields: "corrupti",
        FilterThirdPartyResources: false,
        Key: "provident",
        Locale: "distinctio",
        OauthToken: "quibusdam",
        PrettyPrint: false,
        QuotaUser: "unde",
        Rule: []string{
            "corrupti",
            "illum",
            "vel",
            "error",
        },
        Screenshot: false,
        Strategy: "mobile",
        URL: "suscipit",
        UserIP: "iure",
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