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
            Name: "sit",
        },
        QueryParams: operations.CloudidentityCustomersUserinvitationsCancelQueryParams{
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
    
    res, err := s.Customers.CloudidentityCustomersUserinvitationsCancel(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->