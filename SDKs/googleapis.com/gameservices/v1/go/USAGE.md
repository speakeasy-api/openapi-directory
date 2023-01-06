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
            Resource: "perspiciatis",
        },
        QueryParams: operations.GameservicesProjectsLocationsGameServerDeploymentsGetIamPolicyQueryParams{
            DollarXgafv: "2",
            AccessToken: "qui",
            Alt: "json",
            Callback: "consequatur",
            Fields: "pariatur",
            Key: "sapiente",
            OauthToken: "non",
            OptionsRequestedPolicyVersion: 241938975567923643,
            PrettyPrint: false,
            QuotaUser: "neque",
            UploadType: "cupiditate",
            UploadProtocol: "eius",
        },
    }
    
    res, err := s.Projects.GameservicesProjectsLocationsGameServerDeploymentsGetIamPolicy(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Policy != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->