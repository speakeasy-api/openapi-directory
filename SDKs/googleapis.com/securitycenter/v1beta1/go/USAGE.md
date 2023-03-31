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

    req := operations.SecuritycenterOrganizationsAssetsGroupRequest{
        DollarXgafv: "2",
        GroupAssetsRequest: &shared.GroupAssetsRequest{
            CompareDuration: "provident",
            Filter: "distinctio",
            GroupBy: "quibusdam",
            PageSize: 602763,
            PageToken: "nulla",
            ReadTime: "corrupti",
        },
        AccessToken: "illum",
        Alt: "media",
        Callback: "error",
        Fields: "deserunt",
        Key: "suscipit",
        OauthToken: "iure",
        Parent: "magnam",
        PrettyPrint: false,
        QuotaUser: "debitis",
        UploadType: "ipsa",
        UploadProtocol: "delectus",
    }

    ctx := context.Background()
    res, err := s.Organizations.SecuritycenterOrganizationsAssetsGroup(ctx, req, operations.SecuritycenterOrganizationsAssetsGroupSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GroupAssetsResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->