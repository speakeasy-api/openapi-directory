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
            Parent: "molestiae",
        },
        QueryParams: operations.FirebasedatabaseProjectsLocationsInstancesCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "facere",
            Alt: "media",
            Callback: "aut",
            DatabaseID: "cumque",
            Fields: "sint",
            Key: "repellendus",
            OauthToken: "cumque",
            PrettyPrint: true,
            QuotaUser: "asperiores",
            UploadType: "ut",
            UploadProtocol: "quia",
            ValidateOnly: false,
        },
        Request: &shared.DatabaseInstanceInput{
            Name: "impedit",
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