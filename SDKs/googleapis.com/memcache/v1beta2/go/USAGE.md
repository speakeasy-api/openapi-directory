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
    
    req := operations.MemcacheProjectsLocationsInstancesApplyParametersRequest{
        Security: operations.MemcacheProjectsLocationsInstancesApplyParametersSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.MemcacheProjectsLocationsInstancesApplyParametersPathParams{
            Name: "sit",
        },
        QueryParams: operations.MemcacheProjectsLocationsInstancesApplyParametersQueryParams{
            DollarXgafv: "1",
            AccessToken: "culpa",
            Alt: "media",
            Callback: "consequuntur",
            Fields: "dolor",
            Key: "expedita",
            OauthToken: "voluptas",
            PrettyPrint: true,
            QuotaUser: "et",
            UploadType: "nihil",
            UploadProtocol: "rerum",
        },
        Request: &shared.ApplyParametersRequest{
            ApplyAll: false,
            NodeIds: []string{
                "voluptatum",
            },
        },
    }
    
    res, err := s.Projects.MemcacheProjectsLocationsInstancesApplyParameters(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->