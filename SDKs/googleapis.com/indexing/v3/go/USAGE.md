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
            AccessToken: "assumenda",
            Alt: "proto",
            Callback: "voluptas",
            Fields: "ipsum",
            Key: "perferendis",
            OauthToken: "ipsa",
            PrettyPrint: false,
            QuotaUser: "facere",
            UploadType: "et",
            UploadProtocol: "libero",
            URL: "deleniti",
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