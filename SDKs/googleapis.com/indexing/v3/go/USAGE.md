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

    req := operations.IndexingURLNotificationsGetMetadataRequest{
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
        URL: "deserunt",
    }

    ctx := context.Background()
    res, err := s.URLNotifications.IndexingURLNotificationsGetMetadata(ctx, req, operations.IndexingURLNotificationsGetMetadataSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.URLNotificationMetadata != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->