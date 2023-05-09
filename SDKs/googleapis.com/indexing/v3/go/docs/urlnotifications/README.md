# URLNotifications

### Available Operations

* [IndexingURLNotificationsGetMetadata](#indexingurlnotificationsgetmetadata) - Gets metadata about a Web Document. This method can _only_ be used to query URLs that were previously seen in successful Indexing API notifications. Includes the latest `UrlNotification` received via this API.
* [IndexingURLNotificationsPublish](#indexingurlnotificationspublish) - Notifies that a URL has been updated or deleted.

## IndexingURLNotificationsGetMetadata

Gets metadata about a Web Document. This method can _only_ be used to query URLs that were previously seen in successful Indexing API notifications. Includes the latest `UrlNotification` received via this API.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.URLNotifications.IndexingURLNotificationsGetMetadata(ctx, operations.IndexingURLNotificationsGetMetadataRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("iure"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("debitis"),
        Fields: sdk.String("ipsa"),
        Key: sdk.String("delectus"),
        OauthToken: sdk.String("tempora"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("suscipit"),
        UploadType: sdk.String("molestiae"),
        UploadProtocol: sdk.String("minus"),
        URL: sdk.String("placeat"),
    }, operations.IndexingURLNotificationsGetMetadataSecurity{
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

## IndexingURLNotificationsPublish

Notifies that a URL has been updated or deleted.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.URLNotifications.IndexingURLNotificationsPublish(ctx, operations.IndexingURLNotificationsPublishRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        URLNotification: &shared.URLNotification{
            NotifyTime: sdk.String("iusto"),
            Type: shared.URLNotificationTypeEnumURLUpdated.ToPointer(),
            URL: sdk.String("nisi"),
        },
        AccessToken: sdk.String("recusandae"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("ab"),
        Fields: sdk.String("quis"),
        Key: sdk.String("veritatis"),
        OauthToken: sdk.String("deserunt"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("perferendis"),
        UploadType: sdk.String("ipsam"),
        UploadProtocol: sdk.String("repellendus"),
    }, operations.IndexingURLNotificationsPublishSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PublishURLNotificationResponse != nil {
        // handle response
    }
}
```
