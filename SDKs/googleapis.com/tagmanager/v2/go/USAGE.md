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
        Security: operations.TagmanagerAccountsContainersCombineSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.TagmanagerAccountsContainersCombinePathParams{
            Path: "unde",
        },
        QueryParams: operations.TagmanagerAccountsContainersCombineQueryParams{
            DollarXgafv: "2",
            AccessToken: "porro",
            AllowUserPermissionFeatureUpdate: false,
            Alt: "proto",
            Callback: "id",
            ContainerID: "vero",
            Fields: "perspiciatis",
            Key: "nulla",
            OauthToken: "nihil",
            PrettyPrint: false,
            QuotaUser: "fuga",
            SettingSource: "current",
            UploadType: "eum",
            UploadProtocol: "iusto",
        },
    }

    ctx := context.Background()
    res, err := s.Accounts.TagmanagerAccountsContainersCombine(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Container != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->