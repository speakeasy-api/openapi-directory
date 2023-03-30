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
        Security: operations.DeploymentmanagerDeploymentsCancelPreviewSecurity{
            Option1: &operations.DeploymentmanagerDeploymentsCancelPreviewSecurityOption1{
                Oauth2: shared.SchemeOauth2{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
                Oauth2c: shared.SchemeOauth2c{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
            },
        },
        PathParams: operations.DeploymentmanagerDeploymentsCancelPreviewPathParams{
            Deployment: "corrupti",
            Project: "provident",
        },
        QueryParams: operations.DeploymentmanagerDeploymentsCancelPreviewQueryParams{
            DollarXgafv: "2",
            AccessToken: "quibusdam",
            Alt: "media",
            Callback: "nulla",
            Fields: "corrupti",
            Key: "illum",
            OauthToken: "vel",
            PrettyPrint: false,
            QuotaUser: "error",
            UploadType: "deserunt",
            UploadProtocol: "suscipit",
        },
        Request: &shared.DeploymentsCancelPreviewRequest{
            Fingerprint: "iure",
        },
    }

    ctx := context.Background()
    res, err := s.Deployments.DeploymentmanagerDeploymentsCancelPreview(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->