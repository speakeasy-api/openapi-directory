# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/fcm/v1/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
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
    res, err := s.Projects.FcmProjectsMessagesSend(ctx, operations.FcmProjectsMessagesSendRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        SendMessageRequest: &shared.SendMessageRequest{
            Message: &shared.Message{
                Android: &shared.AndroidConfig{
                    CollapseKey: sdk.String("provident"),
                    Data: map[string]string{
                        "quibusdam": "unde",
                        "nulla": "corrupti",
                        "illum": "vel",
                    },
                    DirectBootOk: sdk.Bool(false),
                    FcmOptions: &shared.AndroidFcmOptions{
                        AnalyticsLabel: sdk.String("error"),
                    },
                    Notification: &shared.AndroidNotification{
                        Body: sdk.String("deserunt"),
                        BodyLocArgs: []string{
                            "iure",
                            "magnam",
                        },
                        BodyLocKey: sdk.String("debitis"),
                        BypassProxyNotification: sdk.Bool(false),
                        ChannelID: sdk.String("ipsa"),
                        ClickAction: sdk.String("delectus"),
                        Color: sdk.String("tempora"),
                        DefaultLightSettings: sdk.Bool(false),
                        DefaultSound: sdk.Bool(false),
                        DefaultVibrateTimings: sdk.Bool(false),
                        EventTime: sdk.String("suscipit"),
                        Icon: sdk.String("molestiae"),
                        Image: sdk.String("minus"),
                        LightSettings: &shared.LightSettings{
                            Color: &shared.Color{
                                Alpha: sdk.Float32(8121.69),
                                Blue: sdk.Float32(5288.95),
                                Green: sdk.Float32(4799.77),
                                Red: sdk.Float32(5680.45),
                            },
                            LightOffDuration: sdk.String("nisi"),
                            LightOnDuration: sdk.String("recusandae"),
                        },
                        LocalOnly: sdk.Bool(false),
                        NotificationCount: sdk.Int(836079),
                        NotificationPriority: shared.AndroidNotificationNotificationPriorityEnumPriorityUnspecified.ToPointer(),
                        Proxy: shared.AndroidNotificationProxyEnumAllow.ToPointer(),
                        Sound: sdk.String("veritatis"),
                        Sticky: sdk.Bool(false),
                        Tag: sdk.String("deserunt"),
                        Ticker: sdk.String("perferendis"),
                        Title: sdk.String("Mrs."),
                        TitleLocArgs: []string{
                            "sapiente",
                            "quo",
                            "odit",
                            "at",
                        },
                        TitleLocKey: sdk.String("at"),
                        VibrateTimings: []string{
                            "molestiae",
                            "quod",
                            "quod",
                            "esse",
                        },
                        Visibility: shared.AndroidNotificationVisibilityEnumPublic.ToPointer(),
                    },
                    Priority: shared.AndroidConfigPriorityEnumHigh.ToPointer(),
                    RestrictedPackageName: sdk.String("dolorum"),
                    TTL: sdk.String("dicta"),
                },
                Apns: &shared.ApnsConfig{
                    FcmOptions: &shared.ApnsFcmOptions{
                        AnalyticsLabel: sdk.String("nam"),
                        Image: sdk.String("officia"),
                    },
                    Headers: map[string]string{
                        "fugit": "deleniti",
                        "hic": "optio",
                        "totam": "beatae",
                    },
                    Payload: map[string]interface{}{
                        "molestiae": "modi",
                        "qui": "impedit",
                    },
                },
                Condition: sdk.String("cum"),
                Data: map[string]string{
                    "ipsum": "excepturi",
                    "aspernatur": "perferendis",
                },
                FcmOptions: &shared.FcmOptions{
                    AnalyticsLabel: sdk.String("ad"),
                },
                Name: sdk.String("Louis Moore"),
                Notification: &shared.Notification{
                    Body: sdk.String("laboriosam"),
                    Image: sdk.String("hic"),
                    Title: sdk.String("Dr."),
                },
                Token: sdk.String("fuga"),
                Topic: sdk.String("in"),
                Webpush: &shared.WebpushConfig{
                    Data: map[string]string{
                        "iste": "iure",
                        "saepe": "quidem",
                    },
                    FcmOptions: &shared.WebpushFcmOptions{
                        AnalyticsLabel: sdk.String("architecto"),
                        Link: sdk.String("ipsa"),
                    },
                    Headers: map[string]string{
                        "est": "mollitia",
                        "laborum": "dolores",
                        "dolorem": "corporis",
                        "explicabo": "nobis",
                    },
                    Notification: map[string]interface{}{
                        "omnis": "nemo",
                        "minima": "excepturi",
                    },
                },
            },
            ValidateOnly: sdk.Bool(false),
        },
        AccessToken: sdk.String("accusantium"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("culpa"),
        Fields: sdk.String("doloribus"),
        Key: sdk.String("sapiente"),
        OauthToken: sdk.String("architecto"),
        Parent: "mollitia",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolorem"),
        UploadType: sdk.String("culpa"),
        UploadProtocol: sdk.String("consequuntur"),
    }, operations.FcmProjectsMessagesSendSecurity{
        Option1: &operations.FcmProjectsMessagesSendSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Message != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Projects](docs/projects/README.md)

* [FcmProjectsMessagesSend](docs/projects/README.md#fcmprojectsmessagessend) - Send a message to specified target (a registration token, topic or condition).
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
