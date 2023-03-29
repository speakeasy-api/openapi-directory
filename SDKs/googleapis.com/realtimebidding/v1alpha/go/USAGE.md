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

    req := operations.RealtimebiddingBiddersBiddingFunctionsActivateRequest{
        Security: operations.RealtimebiddingBiddersBiddingFunctionsActivateSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.RealtimebiddingBiddersBiddingFunctionsActivatePathParams{
            Name: "unde",
        },
        QueryParams: operations.RealtimebiddingBiddersBiddingFunctionsActivateQueryParams{
            DollarXgafv: "2",
            AccessToken: "porro",
            Alt: "proto",
            Callback: "id",
            Fields: "vero",
            Key: "perspiciatis",
            OauthToken: "nulla",
            PrettyPrint: false,
            QuotaUser: "nihil",
            UploadType: "fuga",
            UploadProtocol: "facilis",
        },
        Request: map[string]interface{}{
            "iusto": "ullam",
            "saepe": "inventore",
        },
    }

    ctx := context.Background()
    res, err := s.Bidders.RealtimebiddingBiddersBiddingFunctionsActivate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.BiddingFunction != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->