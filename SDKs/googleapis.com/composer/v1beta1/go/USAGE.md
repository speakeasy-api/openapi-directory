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
    
    req := operations.ComposerProjectsLocationsEnvironmentsCheckUpgradeRequest{
        Security: operations.ComposerProjectsLocationsEnvironmentsCheckUpgradeSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.ComposerProjectsLocationsEnvironmentsCheckUpgradePathParams{
            Environment: "animi",
        },
        QueryParams: operations.ComposerProjectsLocationsEnvironmentsCheckUpgradeQueryParams{
            DollarXgafv: "1",
            AccessToken: "vel",
            Alt: "json",
            Callback: "architecto",
            Fields: "autem",
            Key: "nesciunt",
            OauthToken: "ullam",
            PrettyPrint: true,
            QuotaUser: "aut",
            UploadType: "ducimus",
            UploadProtocol: "odit",
        },
        Request: &shared.CheckUpgradeRequest{
            ImageVersion: "tenetur",
        },
    }
    
    res, err := s.Projects.ComposerProjectsLocationsEnvironmentsCheckUpgrade(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->