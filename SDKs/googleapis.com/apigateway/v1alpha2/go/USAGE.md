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
            Resource: "sit",
        },
        QueryParams: operations.ApigatewayProjectsLocationsGatewaysGetIamPolicyQueryParams{
            DollarXgafv: "1",
            AccessToken: "culpa",
            Alt: "media",
            Callback: "consequuntur",
            Fields: "dolor",
            Key: "expedita",
            OauthToken: "voluptas",
            OptionsRequestedPolicyVersion: 8274930044578894929,
            PrettyPrint: false,
            QuotaUser: "nihil",
            UploadType: "rerum",
            UploadProtocol: "dicta",
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