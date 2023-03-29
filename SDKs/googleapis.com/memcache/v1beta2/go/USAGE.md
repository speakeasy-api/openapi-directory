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
            Name: "unde",
        },
        QueryParams: operations.MemcacheProjectsLocationsInstancesApplyParametersQueryParams{
            DollarXgafv: "2",
            AccessToken: "porro",
            Alt: "proto",
            Callback: "id",
            Fields: "vero",
            Key: "perspiciatis",
            OauthToken: "nulla",
            PrettyPrint: false,
            QuotaUser: "nihil",
            UploadType: "fuga",
            UploadProtocol: "facilis",
        },
        Request: &shared.ApplyParametersRequest{
            ApplyAll: false,
            NodeIds: []string{
                "iusto",
                "ullam",
            },
        },
    }

    ctx := context.Background()
    res, err := s.Projects.MemcacheProjectsLocationsInstancesApplyParameters(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->