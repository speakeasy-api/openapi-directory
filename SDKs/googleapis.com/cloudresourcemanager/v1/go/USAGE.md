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
    
    req := operations.CloudresourcemanagerLiensCreateRequest{
        Security: operations.CloudresourcemanagerLiensCreateSecurity{
            Option1: &operations.CloudresourcemanagerLiensCreateSecurityOption1{
                Oauth2: shared.SchemeOauth2{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
                Oauth2c: shared.SchemeOauth2c{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
            },
        },
        QueryParams: operations.CloudresourcemanagerLiensCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "nostrum",
            Alt: "media",
            Callback: "animi",
            Fields: "unde",
            Key: "expedita",
            OauthToken: "recusandae",
            PrettyPrint: true,
            QuotaUser: "possimus",
            UploadType: "et",
            UploadProtocol: "ea",
        },
        Request: &shared.Lien{
            CreateTime: "ut",
            Name: "magnam",
            Origin: "ea",
            Parent: "nostrum",
            Reason: "incidunt",
            Restrictions: []string{
                "unde",
            },
        },
    }
    
    res, err := s.Liens.CloudresourcemanagerLiensCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Lien != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->