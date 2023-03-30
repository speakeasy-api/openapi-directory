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
            Parent: "corrupti",
        },
        QueryParams: operations.PaymentsresellersubscriptionPartnersProductsListQueryParams{
            DollarXgafv: "2",
            AccessToken: "distinctio",
            Alt: "proto",
            Callback: "unde",
            Fields: "nulla",
            Filter: "corrupti",
            Key: "illum",
            OauthToken: "vel",
            PageSize: 623564,
            PageToken: "deserunt",
            PrettyPrint: false,
            QuotaUser: "suscipit",
            UploadType: "iure",
            UploadProtocol: "magnam",
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