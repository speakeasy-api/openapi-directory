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

    req := operations.PaymentsresellersubscriptionPartnersProductsListRequest{
        PathParams: operations.PaymentsresellersubscriptionPartnersProductsListPathParams{
            Parent: "unde",
        },
        QueryParams: operations.PaymentsresellersubscriptionPartnersProductsListQueryParams{
            DollarXgafv: "2",
            AccessToken: "porro",
            Alt: "proto",
            Callback: "id",
            Fields: "vero",
            Filter: "perspiciatis",
            Key: "nulla",
            OauthToken: "nihil",
            PageSize: 623564,
            PageToken: "facilis",
            PrettyPrint: false,
            QuotaUser: "eum",
            UploadType: "iusto",
            UploadProtocol: "ullam",
        },
    }

    ctx := context.Background()
    res, err := s.Partners.PaymentsresellersubscriptionPartnersProductsList(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudPaymentsResellerSubscriptionV1ListProductsResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->