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
            AccessToken: "vero",
            Alt: "media",
            Callback: "veniam",
            Fields: "et",
            Key: "et",
            OauthToken: "voluptatibus",
            PrettyPrint: false,
            QuotaUser: "similique",
            UploadType: "perspiciatis",
            UploadProtocol: "ipsa",
        },
        Request: &shared.BatchDeleteAlertsRequest{
            AlertID: []string{
                "voluptas",
                "ullam",
                "inventore",
            },
            CustomerID: "unde",
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