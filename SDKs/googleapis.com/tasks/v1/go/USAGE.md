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
            Tasklist: "rerum",
        },
        QueryParams: operations.TasksTasklistsDeleteQueryParams{
            DollarXgafv: "2",
            AccessToken: "earum",
            Alt: "media",
            Callback: "voluptas",
            Fields: "sequi",
            Key: "quos",
            OauthToken: "molestias",
            PrettyPrint: true,
            QuotaUser: "fugiat",
            UploadType: "eos",
            UploadProtocol: "tempora",
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