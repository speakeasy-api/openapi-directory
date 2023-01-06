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
            Name: "et",
        },
        QueryParams: operations.MemcacheProjectsLocationsInstancesApplyParametersQueryParams{
            DollarXgafv: "1",
            AccessToken: "nobis",
            Alt: "media",
            Callback: "animi",
            Fields: "tempora",
            Key: "maxime",
            OauthToken: "aut",
            PrettyPrint: false,
            QuotaUser: "non",
            UploadType: "eligendi",
            UploadProtocol: "velit",
        },
        Request: &shared.ApplyParametersRequest{
            ApplyAll: true,
            NodeIds: []string{
                "blanditiis",
                "amet",
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