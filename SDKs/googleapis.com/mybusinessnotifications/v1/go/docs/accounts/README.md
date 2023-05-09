# Accounts

### Available Operations

* [MybusinessnotificationsAccountsGetNotificationSetting](#mybusinessnotificationsaccountsgetnotificationsetting) - Returns the pubsub notification settings for the account.
* [MybusinessnotificationsAccountsUpdateNotificationSetting](#mybusinessnotificationsaccountsupdatenotificationsetting) - Sets the pubsub notification setting for the account informing Google which topic to send pubsub notifications for. Use the notification_types field within notification_setting to manipulate the events an account wants to subscribe to. An account will only have one notification setting resource, and only one pubsub topic can be set. To delete the setting, update with an empty notification_types

## MybusinessnotificationsAccountsGetNotificationSetting

Returns the pubsub notification settings for the account.

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
    res, err := s.Accounts.MybusinessnotificationsAccountsGetNotificationSetting(ctx, operations.MybusinessnotificationsAccountsGetNotificationSettingRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("delectus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("suscipit"),
        Fields: sdk.String("molestiae"),
        Key: sdk.String("minus"),
        Name: "Ken Kshlerin",
        OauthToken: sdk.String("recusandae"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("temporibus"),
        UploadType: sdk.String("ab"),
        UploadProtocol: sdk.String("quis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NotificationSetting != nil {
        // handle response
    }
}
```

## MybusinessnotificationsAccountsUpdateNotificationSetting

Sets the pubsub notification setting for the account informing Google which topic to send pubsub notifications for. Use the notification_types field within notification_setting to manipulate the events an account wants to subscribe to. An account will only have one notification setting resource, and only one pubsub topic can be set. To delete the setting, update with an empty notification_types

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
    res, err := s.Accounts.MybusinessnotificationsAccountsUpdateNotificationSetting(ctx, operations.MybusinessnotificationsAccountsUpdateNotificationSettingRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        NotificationSetting: &shared.NotificationSetting{
            Name: sdk.String("Christopher Hills"),
            NotificationTypes: []shared.NotificationSettingNotificationTypesEnum{
                shared.NotificationSettingNotificationTypesEnumGoogleUpdate,
                shared.NotificationSettingNotificationTypesEnumLossOfVoiceOfMerchant,
                shared.NotificationSettingNotificationTypesEnumLossOfVoiceOfMerchant,
                shared.NotificationSettingNotificationTypesEnumVoiceOfMerchantUpdated,
            },
            PubsubTopic: sdk.String("molestiae"),
        },
        AccessToken: sdk.String("quod"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("esse"),
        Fields: sdk.String("totam"),
        Key: sdk.String("porro"),
        Name: "Samuel Reichel",
        OauthToken: sdk.String("fugit"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("deleniti"),
        UpdateMask: sdk.String("hic"),
        UploadType: sdk.String("optio"),
        UploadProtocol: sdk.String("totam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NotificationSetting != nil {
        // handle response
    }
}
```
