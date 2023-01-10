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
            Parent: "qui",
        },
        QueryParams: operations.OsconfigProjectsLocationsInstancesInventoriesListQueryParams{
            DollarXgafv: "1",
            AccessToken: "autem",
            Alt: "json",
            Callback: "tempora",
            Fields: "quaerat",
            Filter: "necessitatibus",
            Key: "aut",
            OauthToken: "voluptas",
            PageSize: 5135397023255952795,
            PageToken: "veritatis",
            PrettyPrint: false,
            QuotaUser: "sapiente",
            UploadType: "tenetur",
            UploadProtocol: "at",
            View: "FULL",
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