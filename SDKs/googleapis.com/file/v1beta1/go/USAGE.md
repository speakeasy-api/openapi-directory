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

    req := operations.FileProjectsLocationsBackupsCreateRequest{
        DollarXgafv: "2",
        BackupInput: &shared.BackupInput{
            Description: "provident",
            KmsKeyName: "distinctio",
            Labels: map[string]string{
                "unde": "nulla",
                "corrupti": "illum",
                "vel": "error",
                "deserunt": "suscipit",
            },
            SourceFileShare: "iure",
            SourceInstance: "magnam",
        },
        AccessToken: "debitis",
        Alt: "json",
        BackupID: "delectus",
        Callback: "tempora",
        Fields: "suscipit",
        Key: "molestiae",
        OauthToken: "minus",
        Parent: "placeat",
        PrettyPrint: false,
        QuotaUser: "voluptatum",
        UploadType: "iusto",
        UploadProtocol: "excepturi",
    }

    ctx := context.Background()
    res, err := s.Projects.FileProjectsLocationsBackupsCreate(ctx, req, operations.FileProjectsLocationsBackupsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->