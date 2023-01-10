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
            Name: "natus",
        },
        QueryParams: operations.CloudidentityCustomersUserinvitationsCancelQueryParams{
            DollarXgafv: "1",
            AccessToken: "dolor",
            Alt: "proto",
            Callback: "consequatur",
            Fields: "quo",
            Key: "ipsum",
            OauthToken: "suscipit",
            PrettyPrint: false,
            QuotaUser: "nisi",
            UploadType: "aspernatur",
            UploadProtocol: "animi",
        },
        Request: map[string]interface{}{
            "voluptas": "voluptas",
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