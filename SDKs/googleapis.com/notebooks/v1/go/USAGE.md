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
            Parent: "sit",
        },
        QueryParams: operations.NotebooksProjectsLocationsEnvironmentsCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "culpa",
            Alt: "media",
            Callback: "consequuntur",
            EnvironmentID: "dolor",
            Fields: "expedita",
            Key: "voluptas",
            OauthToken: "fugit",
            PrettyPrint: false,
            QuotaUser: "nihil",
            UploadType: "rerum",
            UploadProtocol: "dicta",
        },
        Request: &shared.EnvironmentInput{
            ContainerImage: &shared.ContainerImage{
                Repository: "debitis",
                Tag: "voluptatum",
            },
            Description: "et",
            DisplayName: "ut",
            PostStartupScript: "dolorem",
            VMImage: &shared.VMImage{
                ImageFamily: "et",
                ImageName: "voluptate",
                Project: "iste",
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