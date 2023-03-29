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
            Fields: "deserunt",
            IncludeSubscribed: false,
            Key: "porro",
            MaxChangeIDCount: "nulla",
            OauthToken: "id",
            PrettyPrint: false,
            QuotaUser: "vero",
            StartChangeID: "perspiciatis",
            UserIP: "nulla",
        },
    }

    ctx := context.Background()
    res, err := s.About.DriveAboutGet(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.About != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->