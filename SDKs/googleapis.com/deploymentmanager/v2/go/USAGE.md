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
            Deployment: "incidunt",
            Project: "animi",
        },
        QueryParams: operations.DeploymentmanagerDeploymentsCancelPreviewQueryParams{
            DollarXgafv: "2",
            AccessToken: "eum",
            Alt: "proto",
            Callback: "doloribus",
            Fields: "officia",
            Key: "culpa",
            OauthToken: "non",
            PrettyPrint: true,
            QuotaUser: "facilis",
            UploadType: "mollitia",
            UploadProtocol: "commodi",
        },
        Request: &shared.DeploymentsCancelPreviewRequest{
            Fingerprint: "cum",
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