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
    
    req := operations.CloudresourcemanagerFoldersCreateRequest{
        Security: operations.CloudresourcemanagerFoldersCreateSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        QueryParams: operations.CloudresourcemanagerFoldersCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "aliquid",
            Alt: "json",
            Callback: "et",
            Fields: "molestiae",
            Key: "id",
            OauthToken: "perferendis",
            Parent: "consequatur",
            PrettyPrint: true,
            QuotaUser: "nemo",
            UploadType: "minus",
            UploadProtocol: "voluptatem",
        },
        Request: &shared.FolderInput{
            DisplayName: "amet",
            Parent: "rem",
        },
    }
    
    res, err := s.Folders.CloudresourcemanagerFoldersCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->