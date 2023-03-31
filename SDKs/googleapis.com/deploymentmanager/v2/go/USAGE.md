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

    req := operations.DeploymentmanagerDeploymentsCancelPreviewRequest{
        DollarXgafv: "2",
        DeploymentsCancelPreviewRequest: &shared.DeploymentsCancelPreviewRequest{
            Fingerprint: "provident",
        },
        AccessToken: "distinctio",
        Alt: "proto",
        Callback: "unde",
        Deployment: "nulla",
        Fields: "corrupti",
        Key: "illum",
        OauthToken: "vel",
        PrettyPrint: false,
        Project: "error",
        QuotaUser: "deserunt",
        UploadType: "suscipit",
        UploadProtocol: "iure",
    }

    ctx := context.Background()
    res, err := s.Deployments.DeploymentmanagerDeploymentsCancelPreview(ctx, req, operations.DeploymentmanagerDeploymentsCancelPreviewSecurity{
        Option1: &operations.DeploymentmanagerDeploymentsCancelPreviewSecurityOption1{
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