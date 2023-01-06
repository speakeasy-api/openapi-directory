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
    
    req := operations.IapGetIamPolicyRequest{
        Security: operations.IapGetIamPolicySecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.IapGetIamPolicyPathParams{
            Resource: "voluptas",
        },
        QueryParams: operations.IapGetIamPolicyQueryParams{
            DollarXgafv: "1",
            AccessToken: "architecto",
            Alt: "proto",
            Callback: "tempora",
            Fields: "officiis",
            Key: "nulla",
            OauthToken: "sed",
            PrettyPrint: false,
            QuotaUser: "provident",
            UploadType: "illum",
            UploadProtocol: "in",
        },
        Request: &shared.GetIamPolicyRequest{
            Options: &shared.GetPolicyOptions{
                RequestedPolicyVersion: 8585898852305933883,
            },
        },
    }
    
    res, err := s.V1beta1.IapGetIamPolicy(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Policy != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->