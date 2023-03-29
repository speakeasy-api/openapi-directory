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
            Name: "unde",
        },
        QueryParams: operations.CloudresourcemanagerOrganizationsGetQueryParams{
            DollarXgafv: "2",
            AccessToken: "porro",
            Alt: "proto",
            Callback: "id",
            Fields: "vero",
            Key: "perspiciatis",
            OauthToken: "nulla",
            OrganizationID: "nihil",
            PrettyPrint: false,
            QuotaUser: "fuga",
            UploadType: "facilis",
            UploadProtocol: "eum",
        },
    }

    ctx := context.Background()
    res, err := s.Organizations.CloudresourcemanagerOrganizationsGet(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Organization != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->