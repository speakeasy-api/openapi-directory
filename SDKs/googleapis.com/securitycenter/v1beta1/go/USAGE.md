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
        Security: operations.SecuritycenterOrganizationsAssetsGroupSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.SecuritycenterOrganizationsAssetsGroupPathParams{
            Parent: "corrupti",
        },
        QueryParams: operations.SecuritycenterOrganizationsAssetsGroupQueryParams{
            DollarXgafv: "2",
            AccessToken: "distinctio",
            Alt: "proto",
            Callback: "unde",
            Fields: "nulla",
            Key: "corrupti",
            OauthToken: "illum",
            PrettyPrint: false,
            QuotaUser: "vel",
            UploadType: "error",
            UploadProtocol: "deserunt",
        },
        Request: &shared.GroupAssetsRequest{
            CompareDuration: "suscipit",
            Filter: "iure",
            GroupBy: "magnam",
            PageSize: 891773,
            PageToken: "ipsa",
            ReadTime: "delectus",
        },
    }

    ctx := context.Background()
    res, err := s.Organizations.SecuritycenterOrganizationsAssetsGroup(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GroupAssetsResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->