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

    req := operations.NotebooksProjectsLocationsInstancesGetIamPolicyRequest{
        Security: operations.NotebooksProjectsLocationsInstancesGetIamPolicySecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.NotebooksProjectsLocationsInstancesGetIamPolicyPathParams{
            Resource: "corrupti",
        },
        QueryParams: operations.NotebooksProjectsLocationsInstancesGetIamPolicyQueryParams{
            DollarXgafv: "2",
            AccessToken: "distinctio",
            Alt: "proto",
            Callback: "unde",
            Fields: "nulla",
            Key: "corrupti",
            OauthToken: "illum",
            OptionsRequestedPolicyVersion: 423655,
            PrettyPrint: false,
            QuotaUser: "error",
            UploadType: "deserunt",
            UploadProtocol: "suscipit",
        },
    }

    ctx := context.Background()
    res, err := s.Projects.NotebooksProjectsLocationsInstancesGetIamPolicy(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Policy != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->