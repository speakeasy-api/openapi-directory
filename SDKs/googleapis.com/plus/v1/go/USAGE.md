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
    
    req := operations.PlusActivitiesGetRequest{
        Security: operations.PlusActivitiesGetSecurity{
            Option1: &operations.PlusActivitiesGetSecurityOption1{
                Oauth2: shared.SchemeOauth2{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
                Oauth2c: shared.SchemeOauth2c{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
            },
        },
        PathParams: operations.PlusActivitiesGetPathParams{
            ActivityID: "sit",
        },
        QueryParams: operations.PlusActivitiesGetQueryParams{
            Alt: "json",
            Fields: "culpa",
            Key: "expedita",
            OauthToken: "consequuntur",
            PrettyPrint: false,
            QuotaUser: "expedita",
            UserIP: "voluptas",
        },
    }
    
    res, err := s.Activities.PlusActivitiesGet(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Activity != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->