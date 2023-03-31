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

    req := operations.DeploymentmanagerCompositeTypesDeleteRequest{
        DollarXgafv: "2",
        AccessToken: "provident",
        Alt: "proto",
        Callback: "quibusdam",
        CompositeType: "unde",
        Fields: "nulla",
        Key: "corrupti",
        OauthToken: "illum",
        PrettyPrint: false,
        Project: "vel",
        QuotaUser: "error",
        UploadType: "deserunt",
        UploadProtocol: "suscipit",
    }

    ctx := context.Background()
    res, err := s.CompositeTypes.DeploymentmanagerCompositeTypesDelete(ctx, req, operations.DeploymentmanagerCompositeTypesDeleteSecurity{
        Option1: &operations.DeploymentmanagerCompositeTypesDeleteSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->