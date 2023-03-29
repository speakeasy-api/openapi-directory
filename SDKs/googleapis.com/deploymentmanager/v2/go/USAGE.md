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
            Deployment: "unde",
            Project: "deserunt",
        },
        QueryParams: operations.DeploymentmanagerDeploymentsCancelPreviewQueryParams{
            DollarXgafv: "2",
            AccessToken: "nulla",
            Alt: "media",
            Callback: "vero",
            Fields: "perspiciatis",
            Key: "nulla",
            OauthToken: "nihil",
            PrettyPrint: false,
            QuotaUser: "fuga",
            UploadType: "facilis",
            UploadProtocol: "eum",
        },
        Request: &shared.DeploymentsCancelPreviewRequest{
            Fingerprint: "iusto",
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