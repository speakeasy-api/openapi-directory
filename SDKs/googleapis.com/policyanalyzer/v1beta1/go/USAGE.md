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
            Parent: "placeat",
        },
        QueryParams: operations.PolicyanalyzerProjectsLocationsActivityTypesActivitiesQueryQueryParams{
            DollarXgafv: "1",
            AccessToken: "modi",
            Alt: "json",
            Callback: "facere",
            Fields: "ut",
            Filter: "doloremque",
            Key: "perferendis",
            OauthToken: "ut",
            PageSize: 8880236891396588061,
            PageToken: "reiciendis",
            PrettyPrint: false,
            QuotaUser: "nihil",
            UploadType: "minima",
            UploadProtocol: "eaque",
        },
    }
    
    res, err := s.Projects.PolicyanalyzerProjectsLocationsActivityTypesActivitiesQuery(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudPolicyanalyzerV1beta1QueryActivityResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->