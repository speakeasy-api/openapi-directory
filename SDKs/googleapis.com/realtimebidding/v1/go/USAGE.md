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
        Security: operations.RealtimebiddingBiddersCreativesWatchSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.RealtimebiddingBiddersCreativesWatchPathParams{
            Parent: "corrupti",
        },
        QueryParams: operations.RealtimebiddingBiddersCreativesWatchQueryParams{
            DollarXgafv: "2",
            AccessToken: "distinctio",
            Alt: "proto",
            Callback: "unde",
            Fields: "nulla",
            Key: "corrupti",
            OauthToken: "illum",
            PrettyPrint: false,
            QuotaUser: "vel",
            UploadType: "error",
            UploadProtocol: "deserunt",
        },
        Request: map[string]interface{}{
            "iure": "magnam",
            "debitis": "ipsa",
        },
    }

    ctx := context.Background()
    res, err := s.Bidders.RealtimebiddingBiddersCreativesWatch(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.WatchCreativesResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->