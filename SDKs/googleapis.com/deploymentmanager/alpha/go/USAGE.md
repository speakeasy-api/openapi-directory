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
            CompositeType: "qui",
            Project: "voluptates",
        },
        QueryParams: operations.DeploymentmanagerCompositeTypesDeleteQueryParams{
            DollarXgafv: "1",
            AccessToken: "qui",
            Alt: "json",
            Callback: "consequuntur",
            Fields: "illo",
            Key: "quia",
            OauthToken: "sunt",
            PrettyPrint: true,
            QuotaUser: "ea",
            UploadType: "repellat",
            UploadProtocol: "explicabo",
        },
    }
    
    res, err := s.CompositeTypes.DeploymentmanagerCompositeTypesDelete(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->