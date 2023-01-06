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
            Parent: "ut",
        },
        QueryParams: operations.NotebooksProjectsLocationsEnvironmentsCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "ab",
            Alt: "json",
            Callback: "nam",
            EnvironmentID: "esse",
            Fields: "dolorem",
            Key: "sed",
            OauthToken: "doloremque",
            PrettyPrint: true,
            QuotaUser: "quas",
            UploadType: "accusamus",
            UploadProtocol: "dolores",
        },
        Request: &shared.EnvironmentInput{
            ContainerImage: &shared.ContainerImage{
                Repository: "officia",
                Tag: "eligendi",
            },
            Description: "et",
            DisplayName: "aut",
            PostStartupScript: "quo",
            VMImage: &shared.VMImage{
                ImageFamily: "aut",
                ImageName: "vitae",
                Project: "quis",
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