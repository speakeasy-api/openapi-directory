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
    
    req := operations.ApigatewayProjectsLocationsGatewaysGetIamPolicyRequest{
        Security: operations.ApigatewayProjectsLocationsGatewaysGetIamPolicySecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.ApigatewayProjectsLocationsGatewaysGetIamPolicyPathParams{
            Resource: "rem",
        },
        QueryParams: operations.ApigatewayProjectsLocationsGatewaysGetIamPolicyQueryParams{
            DollarXgafv: "2",
            AccessToken: "qui",
            Alt: "proto",
            Callback: "sunt",
            Fields: "quod",
            Key: "quod",
            OauthToken: "eum",
            OptionsRequestedPolicyVersion: 6698909092157368366,
            PrettyPrint: false,
            QuotaUser: "ut",
            UploadType: "eligendi",
            UploadProtocol: "est",
        },
    }
    
    res, err := s.Projects.ApigatewayProjectsLocationsGatewaysGetIamPolicy(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ApigatewayPolicy != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->