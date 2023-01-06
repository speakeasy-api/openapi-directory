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
            Customer: "aut",
        },
        QueryParams: operations.ChromemanagementCustomersAppsCountChromeAppRequestsQueryParams{
            DollarXgafv: "2",
            AccessToken: "et",
            Alt: "json",
            Callback: "praesentium",
            Fields: "aliquid",
            Key: "eligendi",
            OauthToken: "repellendus",
            OrderBy: "repudiandae",
            OrgUnitID: "ab",
            PageSize: 6670278064183390255,
            PageToken: "explicabo",
            PrettyPrint: false,
            QuotaUser: "veritatis",
            UploadType: "facilis",
            UploadProtocol: "sit",
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