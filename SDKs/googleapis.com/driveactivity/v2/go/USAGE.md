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
        DollarXgafv: "2",
        QueryDriveActivityRequest: &shared.QueryDriveActivityRequest{
            AncestorName: "provident",
            ConsolidationStrategy: &shared.ConsolidationStrategy{
                Legacy: map[string]interface{}{
                    "quibusdam": "unde",
                    "nulla": "corrupti",
                    "illum": "vel",
                },
                None: map[string]interface{}{
                    "deserunt": "suscipit",
                    "iure": "magnam",
                    "debitis": "ipsa",
                },
            },
            Filter: "delectus",
            ItemName: "tempora",
            PageSize: 383441,
            PageToken: "molestiae",
        },
        AccessToken: "minus",
        Alt: "proto",
        Callback: "voluptatum",
        Fields: "iusto",
        Key: "excepturi",
        OauthToken: "nisi",
        PrettyPrint: false,
        QuotaUser: "recusandae",
        UploadType: "temporibus",
        UploadProtocol: "ab",
    }

    ctx := context.Background()
    res, err := s.Activity.DriveactivityActivityQuery(ctx, req, operations.DriveactivityActivityQuerySecurity{
        Option1: &operations.DriveactivityActivityQuerySecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.QueryDriveActivityResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->