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

    req := operations.CloudassetIamPoliciesSearchAllRequest{
        DollarXgafv: "2",
        AccessToken: "provident",
        Alt: "proto",
        Callback: "quibusdam",
        Fields: "unde",
        Key: "nulla",
        OauthToken: "corrupti",
        PageSize: 847252,
        PageToken: "vel",
        PrettyPrint: false,
        Query: "error",
        QuotaUser: "deserunt",
        Scope: "suscipit",
        UploadType: "iure",
        UploadProtocol: "magnam",
    }

    ctx := context.Background()
    res, err := s.IamPolicies.CloudassetIamPoliciesSearchAll(ctx, req, operations.CloudassetIamPoliciesSearchAllSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SearchAllIamPoliciesResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->