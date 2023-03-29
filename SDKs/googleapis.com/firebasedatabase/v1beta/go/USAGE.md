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
            Parent: "unde",
        },
        QueryParams: operations.FirebasedatabaseProjectsLocationsInstancesCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "porro",
            Alt: "proto",
            Callback: "id",
            DatabaseID: "vero",
            Fields: "perspiciatis",
            Key: "nulla",
            OauthToken: "nihil",
            PrettyPrint: false,
            QuotaUser: "fuga",
            UploadType: "facilis",
            UploadProtocol: "eum",
            ValidateOnly: false,
        },
        Request: &shared.DatabaseInstanceInput{
            Name: "iusto",
            Type: "DATABASE_INSTANCE_TYPE_UNSPECIFIED",
        },
    }

    ctx := context.Background()
    res, err := s.Projects.FirebasedatabaseProjectsLocationsInstancesCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.DatabaseInstance != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->