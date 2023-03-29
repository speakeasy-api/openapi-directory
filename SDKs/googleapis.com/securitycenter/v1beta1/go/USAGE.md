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
            Parent: "unde",
        },
        QueryParams: operations.SecuritycenterOrganizationsAssetsGroupQueryParams{
            DollarXgafv: "2",
            AccessToken: "porro",
            Alt: "proto",
            Callback: "id",
            Fields: "vero",
            Key: "perspiciatis",
            OauthToken: "nulla",
            PrettyPrint: false,
            QuotaUser: "nihil",
            UploadType: "fuga",
            UploadProtocol: "facilis",
        },
        Request: &shared.GroupAssetsRequest{
            CompareDuration: "eum",
            Filter: "iusto",
            GroupBy: "ullam",
            PageSize: 891773,
            PageToken: "inventore",
            ReadTime: "sapiente",
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