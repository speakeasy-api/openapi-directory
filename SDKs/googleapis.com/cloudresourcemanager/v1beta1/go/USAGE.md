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
    
    req := operations.CloudresourcemanagerOrganizationsGetRequest{
        Security: operations.CloudresourcemanagerOrganizationsGetSecurity{
            Option1: &operations.CloudresourcemanagerOrganizationsGetSecurityOption1{
                Oauth2: shared.SchemeOauth2{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
                Oauth2c: shared.SchemeOauth2c{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
            },
        },
        PathParams: operations.CloudresourcemanagerOrganizationsGetPathParams{
            Name: "voluptas",
        },
        QueryParams: operations.CloudresourcemanagerOrganizationsGetQueryParams{
            DollarXgafv: "1",
            AccessToken: "iure",
            Alt: "json",
            Callback: "porro",
            Fields: "quod",
            Key: "soluta",
            OauthToken: "eum",
            OrganizationID: "qui",
            PrettyPrint: true,
            QuotaUser: "nisi",
            UploadType: "id",
            UploadProtocol: "omnis",
        },
    }
    
    res, err := s.Organizations.CloudresourcemanagerOrganizationsGet(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Organization != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->