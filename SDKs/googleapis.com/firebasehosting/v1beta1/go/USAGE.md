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
            Parent: "similique",
        },
        QueryParams: operations.FirebasehostingProjectsSitesCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "adipisci",
            Alt: "proto",
            Callback: "commodi",
            Fields: "quae",
            Key: "et",
            OauthToken: "doloribus",
            PrettyPrint: true,
            QuotaUser: "nam",
            SiteID: "sint",
            UploadType: "repudiandae",
            UploadProtocol: "voluptatem",
        },
        Request: &shared.SiteInput{
            AppID: "voluptas",
            Labels: map[string]string{
                "eos": "qui",
                "odit": "qui",
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