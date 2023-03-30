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
        Security: operations.NotebooksProjectsLocationsEnvironmentsCreateSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.NotebooksProjectsLocationsEnvironmentsCreatePathParams{
            Parent: "corrupti",
        },
        QueryParams: operations.NotebooksProjectsLocationsEnvironmentsCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "distinctio",
            Alt: "proto",
            Callback: "unde",
            EnvironmentID: "nulla",
            Fields: "corrupti",
            Key: "illum",
            OauthToken: "vel",
            PrettyPrint: false,
            QuotaUser: "error",
            UploadType: "deserunt",
            UploadProtocol: "suscipit",
        },
        Request: &shared.EnvironmentInput{
            ContainerImage: &shared.ContainerImage{
                Repository: "iure",
                Tag: "magnam",
            },
            Description: "debitis",
            DisplayName: "ipsa",
            PostStartupScript: "delectus",
            VMImage: &shared.VMImage{
                ImageFamily: "tempora",
                ImageName: "suscipit",
                Project: "molestiae",
            },
        },
    }

    ctx := context.Background()
    res, err := s.Projects.NotebooksProjectsLocationsEnvironmentsCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->