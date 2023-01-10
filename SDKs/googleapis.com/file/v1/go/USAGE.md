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
            Parent: "sapiente",
        },
        QueryParams: operations.FileProjectsLocationsBackupsCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "accusamus",
            Alt: "media",
            BackupID: "voluptatem",
            Callback: "et",
            Fields: "asperiores",
            Key: "reprehenderit",
            OauthToken: "sequi",
            PrettyPrint: true,
            QuotaUser: "ea",
            UploadType: "ea",
            UploadProtocol: "facere",
        },
        Request: &shared.BackupInput{
            Description: "veritatis",
            Labels: map[string]string{
                "velit": "nostrum",
            },
            SourceFileShare: "minus",
            SourceInstance: "qui",
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