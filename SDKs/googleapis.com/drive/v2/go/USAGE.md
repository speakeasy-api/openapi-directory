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
    
    req := operations.DriveAboutGetRequest{
        Security: operations.DriveAboutGetSecurity{
            Option1: &operations.DriveAboutGetSecurityOption1{
                Oauth2: shared.SchemeOauth2{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
                Oauth2c: shared.SchemeOauth2c{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
            },
        },
        QueryParams: operations.DriveAboutGetQueryParams{
            Alt: "json",
            Fields: "architecto",
            IncludeSubscribed: true,
            Key: "quaerat",
            MaxChangeIDCount: "in",
            OauthToken: "quae",
            PrettyPrint: false,
            QuotaUser: "omnis",
            StartChangeID: "incidunt",
            UserIP: "eius",
        },
    }
    
    res, err := s.About.DriveAboutGet(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.About != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->