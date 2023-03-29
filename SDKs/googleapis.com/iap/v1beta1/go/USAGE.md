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
            Resource: "unde",
        },
        QueryParams: operations.IapGetIamPolicyQueryParams{
            DollarXgafv: "2",
            AccessToken: "porro",
            Alt: "proto",
            Callback: "id",
            Fields: "vero",
            Key: "perspiciatis",
            OauthToken: "nulla",
            PrettyPrint: false,
            QuotaUser: "nihil",
            UploadType: "fuga",
            UploadProtocol: "facilis",
        },
        Request: &shared.GetIamPolicyRequest{
            Options: &shared.GetPolicyOptions{
                RequestedPolicyVersion: 384382,
            },
        },
    }

    ctx := context.Background()
    res, err := s.V1beta1.IapGetIamPolicy(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Policy != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->