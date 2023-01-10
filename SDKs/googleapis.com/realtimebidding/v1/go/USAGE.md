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
            Parent: "autem",
        },
        QueryParams: operations.RealtimebiddingBiddersCreativesWatchQueryParams{
            DollarXgafv: "2",
            AccessToken: "quibusdam",
            Alt: "proto",
            Callback: "incidunt",
            Fields: "cupiditate",
            Key: "qui",
            OauthToken: "quidem",
            PrettyPrint: false,
            QuotaUser: "dolorum",
            UploadType: "iure",
            UploadProtocol: "doloribus",
        },
        Request: map[string]interface{}{
            "eum": "fuga",
            "natus": "voluptatem",
            "assumenda": "repellat",
        },
    }
    
    res, err := s.Bidders.RealtimebiddingBiddersCreativesWatch(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.WatchCreativesResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->