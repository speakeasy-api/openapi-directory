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
    
    req := operations.OsconfigProjectsLocationsInstancesInventoriesListRequest{
        Security: operations.OsconfigProjectsLocationsInstancesInventoriesListSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.OsconfigProjectsLocationsInstancesInventoriesListPathParams{
            Parent: "saepe",
        },
        QueryParams: operations.OsconfigProjectsLocationsInstancesInventoriesListQueryParams{
            DollarXgafv: "2",
            AccessToken: "esse",
            Alt: "media",
            Callback: "dolor",
            Fields: "deleniti",
            Filter: "debitis",
            Key: "assumenda",
            OauthToken: "quos",
            PageSize: 2868899680822707227,
            PageToken: "voluptas",
            PrettyPrint: true,
            QuotaUser: "sapiente",
            UploadType: "atque",
            UploadProtocol: "quisquam",
            View: "INVENTORY_VIEW_UNSPECIFIED",
        },
    }
    
    res, err := s.Projects.OsconfigProjectsLocationsInstancesInventoriesList(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ListInventoriesResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->