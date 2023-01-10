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
            Parent: "dolorum",
        },
        QueryParams: operations.SecuritycenterOrganizationsAssetsGroupQueryParams{
            DollarXgafv: "2",
            AccessToken: "qui",
            Alt: "media",
            Callback: "et",
            Fields: "aspernatur",
            Key: "sint",
            OauthToken: "voluptatum",
            PrettyPrint: true,
            QuotaUser: "porro",
            UploadType: "consequatur",
            UploadProtocol: "est",
        },
        Request: &shared.GroupAssetsRequest{
            CompareDuration: "quasi",
            Filter: "quaerat",
            GroupBy: "sint",
            PageSize: 1731799868784527392,
            PageToken: "dolor",
            ReadTime: "ratione",
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