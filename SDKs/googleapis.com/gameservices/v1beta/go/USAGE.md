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
            Resource: "sint",
        },
        QueryParams: operations.GameservicesProjectsLocationsGameServerDeploymentsGetIamPolicyQueryParams{
            DollarXgafv: "1",
            AccessToken: "aut",
            Alt: "media",
            Callback: "debitis",
            Fields: "neque",
            Key: "inventore",
            OauthToken: "quasi",
            OptionsRequestedPolicyVersion: 1791742271808730576,
            PrettyPrint: false,
            QuotaUser: "nobis",
            UploadType: "rerum",
            UploadProtocol: "eaque",
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