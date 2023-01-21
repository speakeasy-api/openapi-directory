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
            Parent: "sit",
        },
        QueryParams: operations.FileProjectsLocationsBackupsCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "culpa",
            Alt: "media",
            BackupID: "consequuntur",
            Callback: "dolor",
            Fields: "expedita",
            Key: "voluptas",
            OauthToken: "fugit",
            PrettyPrint: false,
            QuotaUser: "nihil",
            UploadType: "rerum",
            UploadProtocol: "dicta",
        },
        Request: &shared.BackupInput{
            Description: "debitis",
            KmsKeyName: "voluptatum",
            Labels: map[string]string{
                "ut": "dolorem",
            },
            SourceFileShare: "et",
            SourceInstance: "voluptate",
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