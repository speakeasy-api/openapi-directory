# Pubsubnotificationsettings

### Available Operations

* [ContentPubsubnotificationsettingsGet](#contentpubsubnotificationsettingsget) - Retrieves a Merchant Center account's pubsub notification settings.
* [ContentPubsubnotificationsettingsUpdate](#contentpubsubnotificationsettingsupdate) - Register a Merchant Center account for pubsub notifications. Note that cloud topic name shouldn't be provided as part of the request.

## ContentPubsubnotificationsettingsGet

Retrieves a Merchant Center account's pubsub notification settings.

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
    res, err := s.Pubsubnotificationsettings.ContentPubsubnotificationsettingsGet(ctx, operations.ContentPubsubnotificationsettingsGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("nisi"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("eum"),
        Fields: sdk.String("vitae"),
        Key: sdk.String("animi"),
        MerchantID: "possimus",
        OauthToken: sdk.String("libero"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ullam"),
        UploadType: sdk.String("quaerat"),
        UploadProtocol: sdk.String("maiores"),
    }, operations.ContentPubsubnotificationsettingsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PubsubNotificationSettings != nil {
        // handle response
    }
}
```

## ContentPubsubnotificationsettingsUpdate

Register a Merchant Center account for pubsub notifications. Note that cloud topic name shouldn't be provided as part of the request.

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
    res, err := s.Pubsubnotificationsettings.ContentPubsubnotificationsettingsUpdate(ctx, operations.ContentPubsubnotificationsettingsUpdateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        PubsubNotificationSettings: &shared.PubsubNotificationSettings{
            CloudTopicName: sdk.String("accusamus"),
            Kind: sdk.String("ipsam"),
            RegisteredEvents: []string{
                "odio",
                "ullam",
                "inventore",
                "eligendi",
            },
        },
        AccessToken: sdk.String("occaecati"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("necessitatibus"),
        Fields: sdk.String("rem"),
        Key: sdk.String("a"),
        MerchantID: "nihil",
        OauthToken: sdk.String("veniam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("aut"),
        UploadType: sdk.String("magni"),
        UploadProtocol: sdk.String("rerum"),
    }, operations.ContentPubsubnotificationsettingsUpdateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PubsubNotificationSettings != nil {
        // handle response
    }
}
```
