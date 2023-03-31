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

    req := operations.YoutubeAnalyticsGroupItemsDeleteRequest{
        DollarXgafv: "2",
        AccessToken: "provident",
        Alt: "proto",
        Callback: "quibusdam",
        Fields: "unde",
        ID: "nulla",
        Key: "corrupti",
        OauthToken: "illum",
        OnBehalfOfContentOwner: "vel",
        PrettyPrint: false,
        QuotaUser: "error",
        UploadType: "deserunt",
        UploadProtocol: "suscipit",
    }

    ctx := context.Background()
    res, err := s.GroupItems.YoutubeAnalyticsGroupItemsDelete(ctx, req, operations.YoutubeAnalyticsGroupItemsDeleteSecurity{
        Option1: &operations.YoutubeAnalyticsGroupItemsDeleteSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EmptyResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->