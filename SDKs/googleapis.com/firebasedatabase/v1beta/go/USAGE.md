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
    
    req := operations.FirebasedatabaseProjectsLocationsInstancesCreateRequest{
        Security: operations.FirebasedatabaseProjectsLocationsInstancesCreateSecurity{
            Option1: &operations.FirebasedatabaseProjectsLocationsInstancesCreateSecurityOption1{
                Oauth2: shared.SchemeOauth2{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
                Oauth2c: shared.SchemeOauth2c{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
            },
        },
        PathParams: operations.FirebasedatabaseProjectsLocationsInstancesCreatePathParams{
            Parent: "sit",
        },
        QueryParams: operations.FirebasedatabaseProjectsLocationsInstancesCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "culpa",
            Alt: "media",
            Callback: "consequuntur",
            DatabaseID: "dolor",
            Fields: "expedita",
            Key: "voluptas",
            OauthToken: "fugit",
            PrettyPrint: false,
            QuotaUser: "nihil",
            UploadType: "rerum",
            UploadProtocol: "dicta",
            ValidateOnly: true,
        },
        Request: &shared.DatabaseInstanceInput{
            Name: "voluptatum",
            Type: "DATABASE_INSTANCE_TYPE_UNSPECIFIED",
        },
    }
    
    res, err := s.Projects.FirebasedatabaseProjectsLocationsInstancesCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.DatabaseInstance != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->