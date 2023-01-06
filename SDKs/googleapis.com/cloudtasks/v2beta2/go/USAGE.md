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
    
    req := operations.CloudtasksAPIQueueUpdateRequest{
        Security: operations.CloudtasksAPIQueueUpdateSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        QueryParams: operations.CloudtasksAPIQueueUpdateQueryParams{
            DollarXgafv: "2",
            AccessToken: "possimus",
            Alt: "proto",
            AppID: "qui",
            Callback: "laudantium",
            Fields: "repellendus",
            Key: "architecto",
            OauthToken: "pariatur",
            PrettyPrint: true,
            QuotaUser: "animi",
            UploadType: "error",
            UploadProtocol: "vel",
        },
        Request: &shared.HTTPBody{
            ContentType: "sit",
            Data: "tempore",
            Extensions: []map[string]interface{}{
                map[string]interface{}{
                    "sed": "consequatur",
                    "nulla": "officia",
                    "sunt": "accusamus",
                },
            },
        },
    }
    
    res, err := s.API.CloudtasksAPIQueueUpdate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->