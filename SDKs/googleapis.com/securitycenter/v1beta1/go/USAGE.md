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
            Parent: "sit",
        },
        QueryParams: operations.SecuritycenterOrganizationsAssetsGroupQueryParams{
            DollarXgafv: "1",
            AccessToken: "culpa",
            Alt: "media",
            Callback: "consequuntur",
            Fields: "dolor",
            Key: "expedita",
            OauthToken: "voluptas",
            PrettyPrint: true,
            QuotaUser: "et",
            UploadType: "nihil",
            UploadProtocol: "rerum",
        },
        Request: &shared.GroupAssetsRequest{
            CompareDuration: "dicta",
            Filter: "debitis",
            GroupBy: "voluptatum",
            PageSize: 2339563716805116249,
            PageToken: "ut",
            ReadTime: "dolorem",
        },
    }
    
    res, err := s.Organizations.SecuritycenterOrganizationsAssetsGroup(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GroupAssetsResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->