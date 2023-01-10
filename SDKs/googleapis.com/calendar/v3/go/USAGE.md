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
    
    req := operations.CalendarACLDeleteRequest{
        Security: operations.CalendarACLDeleteSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.CalendarACLDeletePathParams{
            CalendarID: "perferendis",
            RuleID: "ut",
        },
        QueryParams: operations.CalendarACLDeleteQueryParams{
            Alt: "json",
            Fields: "voluptate",
            Key: "in",
            OauthToken: "dolorem",
            PrettyPrint: false,
            QuotaUser: "mollitia",
            UserIP: "quasi",
        },
    }
    
    res, err := s.ACL.CalendarACLDelete(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->