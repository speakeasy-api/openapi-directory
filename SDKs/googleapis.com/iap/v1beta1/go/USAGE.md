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
        DollarXgafv: "2",
        GetIamPolicyRequest: &shared.GetIamPolicyRequest{
            Options: &shared.GetPolicyOptions{
                RequestedPolicyVersion: 592845,
            },
        },
        AccessToken: "distinctio",
        Alt: "proto",
        Callback: "unde",
        Fields: "nulla",
        Key: "corrupti",
        OauthToken: "illum",
        PrettyPrint: false,
        QuotaUser: "vel",
        Resource: "error",
        UploadType: "deserunt",
        UploadProtocol: "suscipit",
    }

    ctx := context.Background()
    res, err := s.V1beta1.IapGetIamPolicy(ctx, req, operations.IapGetIamPolicySecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Policy != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->