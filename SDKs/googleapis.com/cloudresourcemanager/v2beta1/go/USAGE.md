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

    req := operations.CloudresourcemanagerFoldersCreateRequest{
        DollarXgafv: "2",
        FolderInput: &shared.FolderInput{
            DisplayName: "provident",
            Parent: "distinctio",
        },
        AccessToken: "quibusdam",
        Alt: "media",
        Callback: "nulla",
        Fields: "corrupti",
        Key: "illum",
        OauthToken: "vel",
        Parent: "error",
        PrettyPrint: false,
        QuotaUser: "deserunt",
        UploadType: "suscipit",
        UploadProtocol: "iure",
    }

    ctx := context.Background()
    res, err := s.Folders.CloudresourcemanagerFoldersCreate(ctx, req, operations.CloudresourcemanagerFoldersCreateSecurity{
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