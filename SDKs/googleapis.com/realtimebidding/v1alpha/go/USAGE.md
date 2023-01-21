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
            Name: "sit",
        },
        QueryParams: operations.RealtimebiddingBiddersBiddingFunctionsActivateQueryParams{
            DollarXgafv: "1",
            AccessToken: "culpa",
            Alt: "media",
            Callback: "consequuntur",
            Fields: "dolor",
            Key: "expedita",
            OauthToken: "voluptas",
            PrettyPrint: true,
            QuotaUser: "et",
            UploadType: "nihil",
            UploadProtocol: "rerum",
        },
        Request: map[string]interface{}{
            "debitis": "voluptatum",
            "et": "ut",
            "dolorem": "et",
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