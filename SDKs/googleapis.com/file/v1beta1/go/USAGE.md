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
            Parent: "eius",
        },
        QueryParams: operations.FileProjectsLocationsBackupsCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "sunt",
            Alt: "json",
            BackupID: "consequuntur",
            Callback: "itaque",
            Fields: "architecto",
            Key: "magni",
            OauthToken: "repellat",
            PrettyPrint: false,
            QuotaUser: "ut",
            UploadType: "qui",
            UploadProtocol: "voluptas",
        },
        Request: &shared.BackupInput{
            Description: "sed",
            KmsKeyName: "odit",
            Labels: map[string]string{
                "minima": "dolores",
                "eum": "sapiente",
                "culpa": "et",
            },
            SourceFileShare: "molestiae",
            SourceInstance: "ex",
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