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

    req := operations.RealtimebiddingBiddersCreativesWatchRequest{
        DollarXgafv: "2",
        RequestBody: map[string]interface{}{
            "distinctio": "quibusdam",
            "unde": "nulla",
            "corrupti": "illum",
        },
        AccessToken: "vel",
        Alt: "media",
        Callback: "deserunt",
        Fields: "suscipit",
        Key: "iure",
        OauthToken: "magnam",
        Parent: "debitis",
        PrettyPrint: false,
        QuotaUser: "ipsa",
        UploadType: "delectus",
        UploadProtocol: "tempora",
    }

    ctx := context.Background()
    res, err := s.Bidders.RealtimebiddingBiddersCreativesWatch(ctx, req, operations.RealtimebiddingBiddersCreativesWatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WatchCreativesResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->