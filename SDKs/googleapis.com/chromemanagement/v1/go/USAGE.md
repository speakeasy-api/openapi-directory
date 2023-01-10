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
            Customer: "sed",
        },
        QueryParams: operations.ChromemanagementCustomersAppsCountChromeAppRequestsQueryParams{
            DollarXgafv: "2",
            AccessToken: "ut",
            Alt: "media",
            Callback: "nulla",
            Fields: "ipsa",
            Key: "quia",
            OauthToken: "veniam",
            OrderBy: "cumque",
            OrgUnitID: "quae",
            PageSize: 7705353118515142715,
            PageToken: "est",
            PrettyPrint: true,
            QuotaUser: "dolore",
            UploadType: "odit",
            UploadProtocol: "ipsum",
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