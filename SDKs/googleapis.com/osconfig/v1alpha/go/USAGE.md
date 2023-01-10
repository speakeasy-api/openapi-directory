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
    
    req := operations.OsconfigProjectsLocationsInstanceOsPoliciesCompliancesListRequest{
        Security: operations.OsconfigProjectsLocationsInstanceOsPoliciesCompliancesListSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.OsconfigProjectsLocationsInstanceOsPoliciesCompliancesListPathParams{
            Parent: "corrupti",
        },
        QueryParams: operations.OsconfigProjectsLocationsInstanceOsPoliciesCompliancesListQueryParams{
            DollarXgafv: "1",
            AccessToken: "aut",
            Alt: "json",
            Callback: "iure",
            Fields: "dignissimos",
            Filter: "occaecati",
            Key: "adipisci",
            OauthToken: "occaecati",
            PageSize: 2000460280673630150,
            PageToken: "enim",
            PrettyPrint: false,
            QuotaUser: "impedit",
            UploadType: "et",
            UploadProtocol: "voluptatem",
        },
    }
    
    res, err := s.Projects.OsconfigProjectsLocationsInstanceOsPoliciesCompliancesList(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ListInstanceOSPoliciesCompliancesResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->