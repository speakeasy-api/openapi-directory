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
            Resource: "repudiandae",
        },
        QueryParams: operations.GameservicesProjectsLocationsGameServerDeploymentsGetIamPolicyQueryParams{
            DollarXgafv: "2",
            AccessToken: "odit",
            Alt: "media",
            Callback: "laborum",
            Fields: "placeat",
            Key: "voluptas",
            OauthToken: "voluptatem",
            OptionsRequestedPolicyVersion: 7740189181484371622,
            PrettyPrint: true,
            QuotaUser: "recusandae",
            UploadType: "minima",
            UploadProtocol: "est",
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