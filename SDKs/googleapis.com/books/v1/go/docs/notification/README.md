# Notification

### Available Operations

* [BooksNotificationGet](#booksnotificationget) - Returns notification details for a given notification id.

## BooksNotificationGet

Returns notification details for a given notification id.

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
    res, err := s.Notification.BooksNotificationGet(ctx, operations.BooksNotificationGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("aliquam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("occaecati"),
        Fields: sdk.String("commodi"),
        Key: sdk.String("sapiente"),
        Locale: sdk.String("dolores"),
        NotificationID: "deserunt",
        OauthToken: sdk.String("molestiae"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("accusantium"),
        Source: sdk.String("porro"),
        UploadType: sdk.String("eum"),
        UploadProtocol: sdk.String("quas"),
    }, operations.BooksNotificationGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Notification != nil {
        // handle response
    }
}
```
