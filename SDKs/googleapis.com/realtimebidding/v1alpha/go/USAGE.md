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
            Name: "magni",
        },
        QueryParams: operations.RealtimebiddingBiddersBiddingFunctionsActivateQueryParams{
            DollarXgafv: "1",
            AccessToken: "maiores",
            Alt: "proto",
            Callback: "quasi",
            Fields: "voluptas",
            Key: "et",
            OauthToken: "magni",
            PrettyPrint: true,
            QuotaUser: "occaecati",
            UploadType: "inventore",
            UploadProtocol: "accusamus",
        },
        Request: map[string]interface{}{
            "rerum": "animi",
            "ut": "ea",
            "nihil": "suscipit",
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