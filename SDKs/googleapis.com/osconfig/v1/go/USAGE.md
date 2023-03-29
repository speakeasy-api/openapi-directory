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
            Parent: "unde",
        },
        QueryParams: operations.OsconfigProjectsLocationsInstancesInventoriesListQueryParams{
            DollarXgafv: "2",
            AccessToken: "porro",
            Alt: "proto",
            Callback: "id",
            Fields: "vero",
            Filter: "perspiciatis",
            Key: "nulla",
            OauthToken: "nihil",
            PageSize: 623564,
            PageToken: "facilis",
            PrettyPrint: false,
            QuotaUser: "eum",
            UploadType: "iusto",
            UploadProtocol: "ullam",
            View: "FULL",
        },
    }

    ctx := context.Background()
    res, err := s.Projects.OsconfigProjectsLocationsInstancesInventoriesList(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ListInventoriesResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->