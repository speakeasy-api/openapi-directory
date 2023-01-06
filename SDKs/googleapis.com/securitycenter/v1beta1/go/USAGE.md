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
            Parent: "accusamus",
        },
        QueryParams: operations.SecuritycenterOrganizationsAssetsGroupQueryParams{
            DollarXgafv: "2",
            AccessToken: "aperiam",
            Alt: "proto",
            Callback: "id",
            Fields: "rerum",
            Key: "accusamus",
            OauthToken: "eum",
            PrettyPrint: true,
            QuotaUser: "repudiandae",
            UploadType: "ut",
            UploadProtocol: "aut",
        },
        Request: &shared.GroupAssetsRequest{
            CompareDuration: "ducimus",
            Filter: "sunt",
            GroupBy: "sunt",
            PageSize: 8223883550864745221,
            PageToken: "minus",
            ReadTime: "consectetur",
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