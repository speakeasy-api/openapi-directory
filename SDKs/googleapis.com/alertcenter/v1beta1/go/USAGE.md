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
    
    req := operations.AlertcenterAlertsBatchDeleteRequest{
        Security: operations.AlertcenterAlertsBatchDeleteSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        QueryParams: operations.AlertcenterAlertsBatchDeleteQueryParams{
            DollarXgafv: "1",
            AccessToken: "voluptas",
            Alt: "media",
            Callback: "expedita",
            Fields: "consequuntur",
            Key: "dolor",
            OauthToken: "expedita",
            PrettyPrint: true,
            QuotaUser: "fugit",
            UploadType: "et",
            UploadProtocol: "nihil",
        },
        Request: &shared.BatchDeleteAlertsRequest{
            AlertID: []string{
                "dicta",
                "debitis",
                "voluptatum",
            },
            CustomerID: "et",
        },
    }
    
    res, err := s.Alerts.AlertcenterAlertsBatchDelete(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchDeleteAlertsResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->