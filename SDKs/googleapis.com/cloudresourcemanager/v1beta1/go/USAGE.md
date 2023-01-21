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
            Name: "sit",
        },
        QueryParams: operations.CloudresourcemanagerOrganizationsGetQueryParams{
            DollarXgafv: "1",
            AccessToken: "culpa",
            Alt: "media",
            Callback: "consequuntur",
            Fields: "dolor",
            Key: "expedita",
            OauthToken: "voluptas",
            OrganizationID: "fugit",
            PrettyPrint: false,
            QuotaUser: "nihil",
            UploadType: "rerum",
            UploadProtocol: "dicta",
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