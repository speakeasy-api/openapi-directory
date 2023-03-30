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

    req := operations.FirebasedatabaseProjectsLocationsInstancesCreateRequest{
        Security: operations.FirebasedatabaseProjectsLocationsInstancesCreateSecurity{
            Option1: &operations.FirebasedatabaseProjectsLocationsInstancesCreateSecurityOption1{
                Oauth2: shared.SchemeOauth2{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
                Oauth2c: shared.SchemeOauth2c{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
            },
        },
        PathParams: operations.FirebasedatabaseProjectsLocationsInstancesCreatePathParams{
            Parent: "corrupti",
        },
        QueryParams: operations.FirebasedatabaseProjectsLocationsInstancesCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "distinctio",
            Alt: "proto",
            Callback: "unde",
            DatabaseID: "nulla",
            Fields: "corrupti",
            Key: "illum",
            OauthToken: "vel",
            PrettyPrint: false,
            QuotaUser: "error",
            UploadType: "deserunt",
            UploadProtocol: "suscipit",
            ValidateOnly: false,
        },
        Request: &shared.DatabaseInstanceInput{
            Name: "iure",
            Type: "DATABASE_INSTANCE_TYPE_UNSPECIFIED",
        },
    }

    ctx := context.Background()
    res, err := s.Projects.FirebasedatabaseProjectsLocationsInstancesCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.DatabaseInstance != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->