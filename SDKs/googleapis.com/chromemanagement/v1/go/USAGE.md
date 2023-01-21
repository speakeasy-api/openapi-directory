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
            Customer: "sit",
        },
        QueryParams: operations.ChromemanagementCustomersAppsCountChromeAppRequestsQueryParams{
            DollarXgafv: "1",
            AccessToken: "culpa",
            Alt: "media",
            Callback: "consequuntur",
            Fields: "dolor",
            Key: "expedita",
            OauthToken: "voluptas",
            OrderBy: "fugit",
            OrgUnitID: "et",
            PageSize: 2661732831099943416,
            PageToken: "rerum",
            PrettyPrint: false,
            QuotaUser: "debitis",
            UploadType: "voluptatum",
            UploadProtocol: "et",
        },
    }
    
    res, err := s.Customers.ChromemanagementCustomersAppsCountChromeAppRequests(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleChromeManagementV1CountChromeAppRequestsResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->