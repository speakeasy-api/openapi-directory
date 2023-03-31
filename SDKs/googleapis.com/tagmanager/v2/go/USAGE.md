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

    req := operations.TagmanagerAccountsContainersCombineRequest{
        DollarXgafv: "2",
        AccessToken: "provident",
        AllowUserPermissionFeatureUpdate: false,
        Alt: "proto",
        Callback: "quibusdam",
        ContainerID: "unde",
        Fields: "nulla",
        Key: "corrupti",
        OauthToken: "illum",
        Path: "vel",
        PrettyPrint: false,
        QuotaUser: "error",
        SettingSource: "current",
        UploadType: "suscipit",
        UploadProtocol: "iure",
    }

    ctx := context.Background()
    res, err := s.Accounts.TagmanagerAccountsContainersCombine(ctx, req, operations.TagmanagerAccountsContainersCombineSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Container != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->