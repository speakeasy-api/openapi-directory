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
        DollarXgafv: "2",
        BatchDeleteAlertsRequest: &shared.BatchDeleteAlertsRequest{
            AlertID: []string{
                "distinctio",
                "quibusdam",
                "unde",
            },
            CustomerID: "nulla",
        },
        AccessToken: "corrupti",
        Alt: "proto",
        Callback: "vel",
        Fields: "error",
        Key: "deserunt",
        OauthToken: "suscipit",
        PrettyPrint: false,
        QuotaUser: "iure",
        UploadType: "magnam",
        UploadProtocol: "debitis",
    }

    ctx := context.Background()
    res, err := s.Alerts.AlertcenterAlertsBatchDelete(ctx, req, operations.AlertcenterAlertsBatchDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchDeleteAlertsResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->