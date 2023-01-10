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
    
    req := operations.PaymentsresellersubscriptionPartnersProductsListRequest{
        PathParams: operations.PaymentsresellersubscriptionPartnersProductsListPathParams{
            Parent: "velit",
        },
        QueryParams: operations.PaymentsresellersubscriptionPartnersProductsListQueryParams{
            DollarXgafv: "2",
            AccessToken: "sint",
            Alt: "json",
            Callback: "fuga",
            Fields: "modi",
            Filter: "illo",
            Key: "autem",
            OauthToken: "dolores",
            PageSize: 4740378950094471264,
            PageToken: "blanditiis",
            PrettyPrint: true,
            QuotaUser: "fuga",
            UploadType: "alias",
            UploadProtocol: "quas",
        },
    }
    
    res, err := s.Partners.PaymentsresellersubscriptionPartnersProductsList(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudPaymentsResellerSubscriptionV1ListProductsResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->