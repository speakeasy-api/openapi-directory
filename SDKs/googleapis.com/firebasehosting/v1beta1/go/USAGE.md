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
    
    req := operations.FirebasehostingProjectsSitesCreateRequest{
        Security: operations.FirebasehostingProjectsSitesCreateSecurity{
            Option1: &operations.FirebasehostingProjectsSitesCreateSecurityOption1{
                Oauth2: shared.SchemeOauth2{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
                Oauth2c: shared.SchemeOauth2c{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
            },
        },
        PathParams: operations.FirebasehostingProjectsSitesCreatePathParams{
            Parent: "quia",
        },
        QueryParams: operations.FirebasehostingProjectsSitesCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "sit",
            Alt: "json",
            Callback: "nesciunt",
            Fields: "vero",
            Key: "quae",
            OauthToken: "modi",
            PrettyPrint: false,
            QuotaUser: "ad",
            SiteID: "animi",
            UploadType: "iusto",
            UploadProtocol: "laudantium",
        },
        Request: &shared.SiteInput{
            AppID: "repellendus",
            Labels: map[string]string{
                "facilis": "vitae",
            },
        },
    }
    
    res, err := s.Projects.FirebasehostingProjectsSitesCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Site != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->