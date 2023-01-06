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
            Parent: "voluptatem",
        },
        QueryParams: operations.PolicyanalyzerProjectsLocationsActivityTypesActivitiesQueryQueryParams{
            DollarXgafv: "1",
            AccessToken: "distinctio",
            Alt: "json",
            Callback: "velit",
            Fields: "asperiores",
            Filter: "aut",
            Key: "debitis",
            OauthToken: "ea",
            PageSize: 4086791355352695466,
            PageToken: "dolorum",
            PrettyPrint: true,
            QuotaUser: "est",
            UploadType: "illo",
            UploadProtocol: "nihil",
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