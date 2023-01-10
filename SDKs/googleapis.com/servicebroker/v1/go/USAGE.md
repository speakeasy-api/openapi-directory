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
            Resource: "tempora",
        },
        QueryParams: operations.ServicebrokerGetIamPolicyQueryParams{
            DollarXgafv: "2",
            AccessToken: "eveniet",
            Alt: "media",
            Callback: "quo",
            Fields: "quam",
            Key: "perspiciatis",
            OauthToken: "saepe",
            OptionsRequestedPolicyVersion: 7684993788770030621,
            PrettyPrint: false,
            QuotaUser: "sunt",
            UploadType: "vero",
            UploadProtocol: "aut",
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