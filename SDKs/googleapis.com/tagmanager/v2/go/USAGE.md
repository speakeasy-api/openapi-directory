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
            Path: "sit",
        },
        QueryParams: operations.TagmanagerAccountsContainersCombineQueryParams{
            DollarXgafv: "1",
            AccessToken: "culpa",
            AllowUserPermissionFeatureUpdate: false,
            Alt: "proto",
            Callback: "dolor",
            ContainerID: "expedita",
            Fields: "voluptas",
            Key: "fugit",
            OauthToken: "et",
            PrettyPrint: true,
            QuotaUser: "rerum",
            SettingSource: "other",
            UploadType: "debitis",
            UploadProtocol: "voluptatum",
        },
    }
    
    res, err := s.Accounts.TagmanagerAccountsContainersCombine(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Container != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->