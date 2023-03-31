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
        DollarXgafv: "2",
        HTTPBody: &shared.HTTPBody{
            ContentType: "provident",
            Data: "distinctio",
            Extensions: []map[string]interface{}{
                map[string]interface{}{
                    "nulla": "corrupti",
                    "illum": "vel",
                    "error": "deserunt",
                },
                map[string]interface{}{
                    "iure": "magnam",
                    "debitis": "ipsa",
                },
                map[string]interface{}{
                    "tempora": "suscipit",
                    "molestiae": "minus",
                    "placeat": "voluptatum",
                    "iusto": "excepturi",
                },
                map[string]interface{}{
                    "recusandae": "temporibus",
                    "ab": "quis",
                },
            },
        },
        AccessToken: "veritatis",
        Alt: "media",
        AppID: "perferendis",
        Callback: "ipsam",
        Fields: "repellendus",
        Key: "sapiente",
        OauthToken: "quo",
        PrettyPrint: false,
        QuotaUser: "odit",
        UploadType: "at",
        UploadProtocol: "at",
    }

    ctx := context.Background()
    res, err := s.API.CloudtasksAPIQueueUpdate(ctx, req, operations.CloudtasksAPIQueueUpdateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->