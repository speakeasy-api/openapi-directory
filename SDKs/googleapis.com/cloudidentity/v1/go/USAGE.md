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
    
    req := operations.CloudidentityCustomersUserinvitationsCancelRequest{
        PathParams: operations.CloudidentityCustomersUserinvitationsCancelPathParams{
            Name: "vero",
        },
        QueryParams: operations.CloudidentityCustomersUserinvitationsCancelQueryParams{
            DollarXgafv: "1",
            AccessToken: "sit",
            Alt: "proto",
            Callback: "qui",
            Fields: "nulla",
            Key: "hic",
            OauthToken: "consequatur",
            PrettyPrint: false,
            QuotaUser: "dolorum",
            UploadType: "voluptas",
            UploadProtocol: "minus",
        },
        Request: map[string]interface{}{
            "laborum": "voluptatem",
            "est": "enim",
        },
    }
    
    res, err := s.Customers.CloudidentityCustomersUserinvitationsCancel(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->