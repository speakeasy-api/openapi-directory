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
    
    req := operations.IndexingURLNotificationsGetMetadataRequest{
        Security: operations.IndexingURLNotificationsGetMetadataSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        QueryParams: operations.IndexingURLNotificationsGetMetadataQueryParams{
            DollarXgafv: "1",
            AccessToken: "voluptate",
            Alt: "json",
            Callback: "corporis",
            Fields: "quod",
            Key: "et",
            OauthToken: "nisi",
            PrettyPrint: true,
            QuotaUser: "incidunt",
            UploadType: "error",
            UploadProtocol: "incidunt",
            URL: "odit",
        },
    }
    
    res, err := s.URLNotifications.IndexingURLNotificationsGetMetadata(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.URLNotificationMetadata != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->