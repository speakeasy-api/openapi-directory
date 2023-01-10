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
            DollarXgafv: "1",
            AccessToken: "sit",
            Alt: "json",
            Callback: "possimus",
            EnvironmentID: "illo",
            Fields: "perferendis",
            Key: "vitae",
            OauthToken: "aperiam",
            PrettyPrint: false,
            QuotaUser: "sit",
            UploadType: "et",
            UploadProtocol: "dolorum",
        },
        Request: &shared.EnvironmentInput{
            ContainerImage: &shared.ContainerImage{
                Repository: "et",
                Tag: "velit",
            },
            Description: "cupiditate",
            DisplayName: "ex",
            PostStartupScript: "sequi",
            VMImage: &shared.VMImage{
                ImageFamily: "laborum",
                ImageName: "reprehenderit",
                Project: "modi",
            },
        },
    }
    
    res, err := s.Projects.NotebooksProjectsLocationsEnvironmentsCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->