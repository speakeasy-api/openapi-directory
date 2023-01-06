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
            Name: "quos",
        },
        QueryParams: operations.CloudidentityCustomersUserinvitationsCancelQueryParams{
            DollarXgafv: "1",
            AccessToken: "fugit",
            Alt: "media",
            Callback: "praesentium",
            Fields: "est",
            Key: "eius",
            OauthToken: "nostrum",
            PrettyPrint: true,
            QuotaUser: "tempora",
            UploadType: "ut",
            UploadProtocol: "deserunt",
        },
        Request: map[string]interface{}{
            "provident": "magni",
            "et": "consectetur",
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