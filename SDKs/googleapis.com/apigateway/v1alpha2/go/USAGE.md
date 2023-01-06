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
            Resource: "non",
        },
        QueryParams: operations.ApigatewayProjectsLocationsGatewaysGetIamPolicyQueryParams{
            DollarXgafv: "1",
            AccessToken: "eveniet",
            Alt: "proto",
            Callback: "quam",
            Fields: "molestiae",
            Key: "et",
            OauthToken: "et",
            OptionsRequestedPolicyVersion: 8994970182006412596,
            PrettyPrint: false,
            QuotaUser: "perspiciatis",
            UploadType: "libero",
            UploadProtocol: "quis",
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