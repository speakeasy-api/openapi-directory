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
        Security: operations.ChromemanagementCustomersAppsCountChromeAppRequestsSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.ChromemanagementCustomersAppsCountChromeAppRequestsPathParams{
            Customer: "corrupti",
        },
        QueryParams: operations.ChromemanagementCustomersAppsCountChromeAppRequestsQueryParams{
            DollarXgafv: "2",
            AccessToken: "distinctio",
            Alt: "proto",
            Callback: "unde",
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
        },
    }

    ctx := context.Background()
    res, err := s.Customers.ChromemanagementCustomersAppsCountChromeAppRequests(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleChromeManagementV1CountChromeAppRequestsResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->