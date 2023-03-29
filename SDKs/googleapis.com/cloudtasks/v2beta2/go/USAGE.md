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
            AccessToken: "deserunt",
            Alt: "proto",
            AppID: "nulla",
            Callback: "id",
            Fields: "vero",
            Key: "perspiciatis",
            OauthToken: "nulla",
            PrettyPrint: false,
            QuotaUser: "nihil",
            UploadType: "fuga",
            UploadProtocol: "facilis",
        },
        Request: &shared.HTTPBody{
            ContentType: "eum",
            Data: "iusto",
            Extensions: []map[string]interface{}{
                map[string]interface{}{
                    "inventore": "sapiente",
                    "enim": "eum",
                    "voluptatum": "autem",
                    "vel": "non",
                },
                map[string]interface{}{
                    "similique": "reprehenderit",
                    "molestiae": "quo",
                },
            },
        },
    }

    ctx := context.Background()
    res, err := s.API.CloudtasksAPIQueueUpdate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->