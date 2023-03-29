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
            Parent: "unde",
        },
        QueryParams: operations.NotebooksProjectsLocationsEnvironmentsCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "porro",
            Alt: "proto",
            Callback: "id",
            EnvironmentID: "vero",
            Fields: "perspiciatis",
            Key: "nulla",
            OauthToken: "nihil",
            PrettyPrint: false,
            QuotaUser: "fuga",
            UploadType: "facilis",
            UploadProtocol: "eum",
        },
        Request: &shared.EnvironmentInput{
            ContainerImage: &shared.ContainerImage{
                Repository: "iusto",
                Tag: "ullam",
            },
            Description: "saepe",
            DisplayName: "inventore",
            PostStartupScript: "sapiente",
            VMImage: &shared.VMImage{
                ImageFamily: "enim",
                ImageName: "eum",
                Project: "voluptatum",
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