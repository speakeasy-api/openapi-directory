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

    req := operations.GameservicesProjectsLocationsGameServerDeploymentsGetIamPolicyRequest{
        Security: operations.GameservicesProjectsLocationsGameServerDeploymentsGetIamPolicySecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.GameservicesProjectsLocationsGameServerDeploymentsGetIamPolicyPathParams{
            Resource: "unde",
        },
        QueryParams: operations.GameservicesProjectsLocationsGameServerDeploymentsGetIamPolicyQueryParams{
            DollarXgafv: "2",
            AccessToken: "porro",
            Alt: "proto",
            Callback: "id",
            Fields: "vero",
            Key: "perspiciatis",
            OauthToken: "nulla",
            OptionsRequestedPolicyVersion: 423655,
            PrettyPrint: false,
            QuotaUser: "fuga",
            UploadType: "facilis",
            UploadProtocol: "eum",
        },
    }

    ctx := context.Background()
    res, err := s.Projects.GameservicesProjectsLocationsGameServerDeploymentsGetIamPolicy(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Policy != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->