# V1beta1

### Available Operations

* [AlertcenterGetSettings](#alertcentergetsettings) - Returns customer-level settings.
* [AlertcenterUpdateSettings](#alertcenterupdatesettings) - Updates the customer-level settings.

## AlertcenterGetSettings

Returns customer-level settings.

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
    res, err := s.V1beta1.AlertcenterGetSettings(ctx, operations.AlertcenterGetSettingsRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("voluptatibus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("omnis"),
        CustomerID: sdk.String("voluptate"),
        Fields: sdk.String("cum"),
        Key: sdk.String("perferendis"),
        OauthToken: sdk.String("doloremque"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("reprehenderit"),
        UploadType: sdk.String("ut"),
        UploadProtocol: sdk.String("maiores"),
    }, operations.AlertcenterGetSettingsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Settings != nil {
        // handle response
    }
}
```

## AlertcenterUpdateSettings

Updates the customer-level settings.

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
    res, err := s.V1beta1.AlertcenterUpdateSettings(ctx, operations.AlertcenterUpdateSettingsRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        Settings: &shared.Settings{
            Notifications: []shared.Notification{
                shared.Notification{
                    CloudPubsubTopic: &shared.CloudPubsubTopic{
                        PayloadFormat: shared.CloudPubsubTopicPayloadFormatEnumPayloadFormatUnspecified.ToPointer(),
                        TopicName: sdk.String("iusto"),
                    },
                },
                shared.Notification{
                    CloudPubsubTopic: &shared.CloudPubsubTopic{
                        PayloadFormat: shared.CloudPubsubTopicPayloadFormatEnumPayloadFormatUnspecified.ToPointer(),
                        TopicName: sdk.String("harum"),
                    },
                },
            },
        },
        AccessToken: sdk.String("enim"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("commodi"),
        CustomerID: sdk.String("repudiandae"),
        Fields: sdk.String("quae"),
        Key: sdk.String("ipsum"),
        OauthToken: sdk.String("quidem"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("molestias"),
        UploadType: sdk.String("excepturi"),
        UploadProtocol: sdk.String("pariatur"),
    }, operations.AlertcenterUpdateSettingsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Settings != nil {
        // handle response
    }
}
```
