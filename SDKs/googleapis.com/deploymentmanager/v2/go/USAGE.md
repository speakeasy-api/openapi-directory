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
            Deployment: "sit",
            Project: "voluptas",
        },
        QueryParams: operations.DeploymentmanagerDeploymentsCancelPreviewQueryParams{
            DollarXgafv: "2",
            AccessToken: "expedita",
            Alt: "proto",
            Callback: "dolor",
            Fields: "expedita",
            Key: "voluptas",
            OauthToken: "fugit",
            PrettyPrint: false,
            QuotaUser: "nihil",
            UploadType: "rerum",
            UploadProtocol: "dicta",
        },
        Request: &shared.DeploymentsCancelPreviewRequest{
            Fingerprint: "debitis",
        },
    }
    
    res, err := s.Deployments.DeploymentmanagerDeploymentsCancelPreview(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->