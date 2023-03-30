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
        Security: operations.DeploymentmanagerCompositeTypesDeleteSecurity{
            Option1: &operations.DeploymentmanagerCompositeTypesDeleteSecurityOption1{
                Oauth2: shared.SchemeOauth2{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
                Oauth2c: shared.SchemeOauth2c{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
            },
        },
        PathParams: operations.DeploymentmanagerCompositeTypesDeletePathParams{
            CompositeType: "corrupti",
            Project: "provident",
        },
        QueryParams: operations.DeploymentmanagerCompositeTypesDeleteQueryParams{
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
    }

    ctx := context.Background()
    res, err := s.CompositeTypes.DeploymentmanagerCompositeTypesDelete(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->