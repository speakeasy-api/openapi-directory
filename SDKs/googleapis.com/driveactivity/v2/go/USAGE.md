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

    req := operations.DriveactivityActivityQueryRequest{
        Security: operations.DriveactivityActivityQuerySecurity{
            Option1: &operations.DriveactivityActivityQuerySecurityOption1{
                Oauth2: shared.SchemeOauth2{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
                Oauth2c: shared.SchemeOauth2c{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
            },
        },
        QueryParams: operations.DriveactivityActivityQueryQueryParams{
            DollarXgafv: "2",
            AccessToken: "provident",
            Alt: "proto",
            Callback: "quibusdam",
            Fields: "unde",
            Key: "nulla",
            OauthToken: "corrupti",
            PrettyPrint: false,
            QuotaUser: "illum",
            UploadType: "vel",
            UploadProtocol: "error",
        },
        Request: &shared.QueryDriveActivityRequest{
            AncestorName: "deserunt",
            ConsolidationStrategy: &shared.ConsolidationStrategy{
                Legacy: map[string]interface{}{
                    "iure": "magnam",
                    "debitis": "ipsa",
                },
                None: map[string]interface{}{
                    "tempora": "suscipit",
                    "molestiae": "minus",
                    "placeat": "voluptatum",
                    "iusto": "excepturi",
                },
            },
            Filter: "nisi",
            ItemName: "recusandae",
            PageSize: 836079,
            PageToken: "ab",
        },
    }

    ctx := context.Background()
    res, err := s.Activity.DriveactivityActivityQuery(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.QueryDriveActivityResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->