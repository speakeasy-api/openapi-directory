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

    req := operations.PolicyanalyzerProjectsLocationsActivityTypesActivitiesQueryRequest{
        Security: operations.PolicyanalyzerProjectsLocationsActivityTypesActivitiesQuerySecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.PolicyanalyzerProjectsLocationsActivityTypesActivitiesQueryPathParams{
            Parent: "corrupti",
        },
        QueryParams: operations.PolicyanalyzerProjectsLocationsActivityTypesActivitiesQueryQueryParams{
            DollarXgafv: "2",
            AccessToken: "distinctio",
            Alt: "proto",
            Callback: "unde",
            Fields: "nulla",
            Filter: "corrupti",
            Key: "illum",
            OauthToken: "vel",
            PageSize: 623564,
            PageToken: "deserunt",
            PrettyPrint: false,
            QuotaUser: "suscipit",
            UploadType: "iure",
            UploadProtocol: "magnam",
        },
    }

    ctx := context.Background()
    res, err := s.Projects.PolicyanalyzerProjectsLocationsActivityTypesActivitiesQuery(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudPolicyanalyzerV1QueryActivityResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->