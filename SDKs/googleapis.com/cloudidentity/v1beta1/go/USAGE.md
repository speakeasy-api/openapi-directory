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
            Name: "dolor",
        },
        QueryParams: operations.CloudidentityCustomersUserinvitationsCancelQueryParams{
            DollarXgafv: "1",
            AccessToken: "ut",
            Alt: "proto",
            Callback: "nobis",
            Fields: "ut",
            Key: "autem",
            OauthToken: "praesentium",
            PrettyPrint: true,
            QuotaUser: "est",
            UploadType: "et",
            UploadProtocol: "et",
        },
        Request: map[string]interface{}{
            "ex": "optio",
            "perferendis": "vel",
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