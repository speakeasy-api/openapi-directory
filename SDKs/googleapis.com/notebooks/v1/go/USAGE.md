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

    req := operations.NotebooksProjectsLocationsEnvironmentsCreateRequest{
        DollarXgafv: "2",
        EnvironmentInput: &shared.EnvironmentInput{
            ContainerImage: &shared.ContainerImage{
                Repository: "provident",
                Tag: "distinctio",
            },
            Description: "quibusdam",
            DisplayName: "unde",
            PostStartupScript: "nulla",
            VMImage: &shared.VMImage{
                ImageFamily: "corrupti",
                ImageName: "illum",
                Project: "vel",
            },
        },
        AccessToken: "error",
        Alt: "media",
        Callback: "suscipit",
        EnvironmentID: "iure",
        Fields: "magnam",
        Key: "debitis",
        OauthToken: "ipsa",
        Parent: "delectus",
        PrettyPrint: false,
        QuotaUser: "tempora",
        UploadType: "suscipit",
        UploadProtocol: "molestiae",
    }

    ctx := context.Background()
    res, err := s.Projects.NotebooksProjectsLocationsEnvironmentsCreate(ctx, req, operations.NotebooksProjectsLocationsEnvironmentsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
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