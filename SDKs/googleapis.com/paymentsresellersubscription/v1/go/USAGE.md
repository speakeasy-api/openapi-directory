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
            Parent: "rerum",
        },
        QueryParams: operations.PaymentsresellersubscriptionPartnersProductsListQueryParams{
            DollarXgafv: "2",
            AccessToken: "totam",
            Alt: "media",
            Callback: "repellendus",
            Fields: "non",
            Filter: "minus",
            Key: "provident",
            OauthToken: "temporibus",
            PageSize: 4602029307121648680,
            PageToken: "magni",
            PrettyPrint: true,
            QuotaUser: "libero",
            UploadType: "eos",
            UploadProtocol: "rerum",
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