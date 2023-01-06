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
    
    req := operations.ServicebrokerGetIamPolicyRequest{
        Security: operations.ServicebrokerGetIamPolicySecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.ServicebrokerGetIamPolicyPathParams{
            Resource: "doloribus",
        },
        QueryParams: operations.ServicebrokerGetIamPolicyQueryParams{
            DollarXgafv: "1",
            AccessToken: "vel",
            Alt: "proto",
            Callback: "qui",
            Fields: "et",
            Key: "voluptate",
            OauthToken: "optio",
            OptionsRequestedPolicyVersion: 487420159489341447,
            PrettyPrint: false,
            QuotaUser: "quas",
            UploadType: "dolorum",
            UploadProtocol: "veritatis",
        },
    }
    
    res, err := s.V1.ServicebrokerGetIamPolicy(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->