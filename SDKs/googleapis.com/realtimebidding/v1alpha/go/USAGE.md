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
            Name: "molestiae",
        },
        QueryParams: operations.RealtimebiddingBiddersBiddingFunctionsActivateQueryParams{
            DollarXgafv: "2",
            AccessToken: "voluptas",
            Alt: "json",
            Callback: "ut",
            Fields: "consectetur",
            Key: "qui",
            OauthToken: "consectetur",
            PrettyPrint: false,
            QuotaUser: "labore",
            UploadType: "est",
            UploadProtocol: "animi",
        },
        Request: map[string]interface{}{
            "enim": "sed",
            "ullam": "reprehenderit",
        },
    }
    
    res, err := s.Bidders.RealtimebiddingBiddersBiddingFunctionsActivate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.BiddingFunction != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->