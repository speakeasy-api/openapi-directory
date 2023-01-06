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
    
    req := operations.FileProjectsLocationsBackupsCreateRequest{
        Security: operations.FileProjectsLocationsBackupsCreateSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.FileProjectsLocationsBackupsCreatePathParams{
            Parent: "neque",
        },
        QueryParams: operations.FileProjectsLocationsBackupsCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "laboriosam",
            Alt: "json",
            BackupID: "magnam",
            Callback: "reiciendis",
            Fields: "in",
            Key: "voluptatum",
            OauthToken: "et",
            PrettyPrint: true,
            QuotaUser: "quo",
            UploadType: "autem",
            UploadProtocol: "eos",
        },
        Request: &shared.BackupInput{
            Description: "voluptas",
            Labels: map[string]string{
                "et": "ut",
            },
            SourceFileShare: "impedit",
            SourceInstance: "cupiditate",
        },
    }
    
    res, err := s.Projects.FileProjectsLocationsBackupsCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->