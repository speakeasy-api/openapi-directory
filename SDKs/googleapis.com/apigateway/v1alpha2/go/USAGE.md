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
            Resource: "corrupti",
        },
        QueryParams: operations.ApigatewayProjectsLocationsGatewaysGetIamPolicyQueryParams{
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
    res, err := s.Projects.ApigatewayProjectsLocationsGatewaysGetIamPolicy(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ApigatewayPolicy != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->