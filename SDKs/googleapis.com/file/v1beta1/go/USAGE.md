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
            Parent: "corrupti",
        },
        QueryParams: operations.FileProjectsLocationsBackupsCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "sint",
            Alt: "proto",
            BackupID: "ducimus",
            Callback: "debitis",
            Fields: "ex",
            Key: "nam",
            OauthToken: "ex",
            PrettyPrint: false,
            QuotaUser: "vero",
            UploadType: "repellendus",
            UploadProtocol: "qui",
        },
        Request: &shared.BackupInput{
            Description: "veniam",
            KmsKeyName: "assumenda",
            Labels: map[string]string{
                "eius": "nisi",
                "aliquid": "fugiat",
                "sit": "dignissimos",
            },
            SourceFileShare: "cumque",
            SourceInstance: "sit",
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