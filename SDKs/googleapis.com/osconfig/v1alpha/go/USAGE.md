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
            Parent: "quod",
        },
        QueryParams: operations.OsconfigProjectsLocationsInstanceOsPoliciesCompliancesListQueryParams{
            DollarXgafv: "1",
            AccessToken: "quibusdam",
            Alt: "proto",
            Callback: "itaque",
            Fields: "quae",
            Filter: "aliquid",
            Key: "ut",
            OauthToken: "magni",
            PageSize: 8068335479617984914,
            PageToken: "facilis",
            PrettyPrint: false,
            QuotaUser: "dolorem",
            UploadType: "quas",
            UploadProtocol: "sed",
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