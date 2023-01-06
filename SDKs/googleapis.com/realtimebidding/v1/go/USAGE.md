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
            Parent: "iste",
        },
        QueryParams: operations.RealtimebiddingBiddersCreativesWatchQueryParams{
            DollarXgafv: "2",
            AccessToken: "occaecati",
            Alt: "proto",
            Callback: "quam",
            Fields: "ut",
            Key: "eum",
            OauthToken: "consectetur",
            PrettyPrint: false,
            QuotaUser: "dignissimos",
            UploadType: "molestias",
            UploadProtocol: "quis",
        },
        Request: map[string]interface{}{
            "minima": "minima",
            "quidem": "eum",
            "enim": "expedita",
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