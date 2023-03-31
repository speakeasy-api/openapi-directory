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

    req := operations.ChromemanagementCustomersAppsCountChromeAppRequestsRequest{
        DollarXgafv: "2",
        AccessToken: "provident",
        Alt: "proto",
        Callback: "quibusdam",
        Customer: "unde",
        Fields: "nulla",
        Key: "corrupti",
        OauthToken: "illum",
        OrderBy: "vel",
        OrgUnitID: "error",
        PageSize: 645894,
        PageToken: "suscipit",
        PrettyPrint: false,
        QuotaUser: "iure",
        UploadType: "magnam",
        UploadProtocol: "debitis",
    }

    ctx := context.Background()
    res, err := s.Customers.ChromemanagementCustomersAppsCountChromeAppRequests(ctx, req, operations.ChromemanagementCustomersAppsCountChromeAppRequestsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleChromeManagementV1CountChromeAppRequestsResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->