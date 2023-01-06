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
            Parent: "quasi",
        },
        QueryParams: operations.FirebasedatabaseProjectsLocationsInstancesCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "ut",
            Alt: "proto",
            Callback: "labore",
            DatabaseID: "saepe",
            Fields: "culpa",
            Key: "sunt",
            OauthToken: "dolor",
            PrettyPrint: true,
            QuotaUser: "nihil",
            UploadType: "quam",
            UploadProtocol: "exercitationem",
            ValidateOnly: true,
        },
        Request: &shared.DatabaseInstanceInput{
            Name: "nesciunt",
            Type: "DEFAULT_DATABASE",
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