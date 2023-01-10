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
            AccessToken: "enim",
            Alt: "json",
            AppID: "quisquam",
            Callback: "sit",
            Fields: "qui",
            Key: "voluptates",
            OauthToken: "voluptate",
            PrettyPrint: false,
            QuotaUser: "error",
            UploadType: "consequuntur",
            UploadProtocol: "illo",
        },
        Request: &shared.HTTPBody{
            ContentType: "quia",
            Data: "sunt",
            Extensions: []map[string]interface{}{
                map[string]interface{}{
                    "repellat": "explicabo",
                },
                map[string]interface{}{
                    "animi": "omnis",
                    "eum": "recusandae",
                    "doloribus": "officia",
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