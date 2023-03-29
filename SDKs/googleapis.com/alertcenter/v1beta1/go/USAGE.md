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
            DollarXgafv: "2",
            AccessToken: "deserunt",
            Alt: "proto",
            Callback: "nulla",
            Fields: "id",
            Key: "vero",
            OauthToken: "perspiciatis",
            PrettyPrint: false,
            QuotaUser: "nulla",
            UploadType: "nihil",
            UploadProtocol: "fuga",
        },
        Request: &shared.BatchDeleteAlertsRequest{
            AlertID: []string{
                "eum",
                "iusto",
                "ullam",
            },
            CustomerID: "saepe",
        },
    }

    ctx := context.Background()
    res, err := s.Alerts.AlertcenterAlertsBatchDelete(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchDeleteAlertsResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->