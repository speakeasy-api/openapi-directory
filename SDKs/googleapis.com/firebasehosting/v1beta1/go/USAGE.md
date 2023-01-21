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
            Parent: "sit",
        },
        QueryParams: operations.FirebasehostingProjectsSitesCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "culpa",
            Alt: "media",
            Callback: "consequuntur",
            Fields: "dolor",
            Key: "expedita",
            OauthToken: "voluptas",
            PrettyPrint: true,
            QuotaUser: "et",
            SiteID: "nihil",
            UploadType: "rerum",
            UploadProtocol: "dicta",
        },
        Request: &shared.SiteInput{
            AppID: "debitis",
            Labels: map[string]string{
                "et": "ut",
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