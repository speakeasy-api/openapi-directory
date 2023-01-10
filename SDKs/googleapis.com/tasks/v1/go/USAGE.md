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
    
    req := operations.TasksTasklistsDeleteRequest{
        Security: operations.TasksTasklistsDeleteSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.TasksTasklistsDeletePathParams{
            Tasklist: "enim",
        },
        QueryParams: operations.TasksTasklistsDeleteQueryParams{
            DollarXgafv: "1",
            AccessToken: "reiciendis",
            Alt: "media",
            Callback: "ex",
            Fields: "veritatis",
            Key: "sit",
            OauthToken: "nisi",
            PrettyPrint: true,
            QuotaUser: "omnis",
            UploadType: "ex",
            UploadProtocol: "ipsum",
        },
    }
    
    res, err := s.Tasklists.TasksTasklistsDelete(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->