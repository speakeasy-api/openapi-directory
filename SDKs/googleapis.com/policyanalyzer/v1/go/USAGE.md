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
            Parent: "sed",
        },
        QueryParams: operations.PolicyanalyzerProjectsLocationsActivityTypesActivitiesQueryQueryParams{
            DollarXgafv: "1",
            AccessToken: "repudiandae",
            Alt: "media",
            Callback: "harum",
            Fields: "quia",
            Filter: "ut",
            Key: "modi",
            OauthToken: "eius",
            PageSize: 1788581625906585932,
            PageToken: "accusamus",
            PrettyPrint: true,
            QuotaUser: "cumque",
            UploadType: "quas",
            UploadProtocol: "neque",
        },
    }
    
    res, err := s.Projects.PolicyanalyzerProjectsLocationsActivityTypesActivitiesQuery(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudPolicyanalyzerV1QueryActivityResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->