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
        DollarXgafv: "2",
        DatabaseInstanceInput: &shared.DatabaseInstanceInput{
            Name: "provident",
            Type: "USER_DATABASE",
        },
        AccessToken: "quibusdam",
        Alt: "media",
        Callback: "nulla",
        DatabaseID: "corrupti",
        Fields: "illum",
        Key: "vel",
        OauthToken: "error",
        Parent: "deserunt",
        PrettyPrint: false,
        QuotaUser: "suscipit",
        UploadType: "iure",
        UploadProtocol: "magnam",
        ValidateOnly: false,
    }

    ctx := context.Background()
    res, err := s.Projects.FirebasedatabaseProjectsLocationsInstancesCreate(ctx, req, operations.FirebasedatabaseProjectsLocationsInstancesCreateSecurity{
        Option1: &operations.FirebasedatabaseProjectsLocationsInstancesCreateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DatabaseInstance != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->