# Projects

### Available Operations

* [FcmProjectsMessagesSend](#fcmprojectsmessagessend) - Send a message to specified target (a registration token, topic or condition).

## FcmProjectsMessagesSend

Send a message to specified target (a registration token, topic or condition).

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
    res, err := s.Projects.FcmProjectsMessagesSend(ctx, operations.FcmProjectsMessagesSendRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        SendMessageRequest: &shared.SendMessageRequest{
            Message: &shared.Message{
                Android: &shared.AndroidConfig{
                    CollapseKey: sdk.String("mollitia"),
                    Data: map[string]string{
                        "numquam": "commodi",
                        "quam": "molestiae",
                        "velit": "error",
                    },
                    DirectBootOk: sdk.Bool(false),
                    FcmOptions: &shared.AndroidFcmOptions{
                        AnalyticsLabel: sdk.String("quia"),
                    },
                    Notification: &shared.AndroidNotification{
                        Body: sdk.String("quis"),
                        BodyLocArgs: []string{
                            "laborum",
                        },
                        BodyLocKey: sdk.String("animi"),
                        BypassProxyNotification: sdk.Bool(false),
                        ChannelID: sdk.String("enim"),
                        ClickAction: sdk.String("odit"),
                        Color: sdk.String("quo"),
                        DefaultLightSettings: sdk.Bool(false),
                        DefaultSound: sdk.Bool(false),
                        DefaultVibrateTimings: sdk.Bool(false),
                        EventTime: sdk.String("sequi"),
                        Icon: sdk.String("tenetur"),
                        Image: sdk.String("ipsam"),
                        LightSettings: &shared.LightSettings{
                            Color: &shared.Color{
                                Alpha: sdk.Float32(6625.27),
                                Blue: sdk.Float32(8209.94),
                                Green: sdk.Float32(135.71),
                                Red: sdk.Float32(971.01),
                            },
                            LightOffDuration: sdk.String("error"),
                            LightOnDuration: sdk.String("temporibus"),
                        },
                        LocalOnly: sdk.Bool(false),
                        NotificationCount: sdk.Int(673660),
                        NotificationPriority: shared.AndroidNotificationNotificationPriorityEnumPriorityUnspecified.ToPointer(),
                        Proxy: shared.AndroidNotificationProxyEnumIfPriorityLowered.ToPointer(),
                        Sound: sdk.String("voluptatibus"),
                        Sticky: sdk.Bool(false),
                        Tag: sdk.String("vero"),
                        Ticker: sdk.String("nihil"),
                        Title: sdk.String("Ms."),
                        TitleLocArgs: []string{
                            "ipsa",
                            "omnis",
                            "voluptate",
                            "cum",
                        },
                        TitleLocKey: sdk.String("perferendis"),
                        VibrateTimings: []string{
                            "reprehenderit",
                        },
                        Visibility: shared.AndroidNotificationVisibilityEnumPrivate.ToPointer(),
                    },
                    Priority: shared.AndroidConfigPriorityEnumHigh.ToPointer(),
                    RestrictedPackageName: sdk.String("dicta"),
                    TTL: sdk.String("corporis"),
                },
                Apns: &shared.ApnsConfig{
                    FcmOptions: &shared.ApnsFcmOptions{
                        AnalyticsLabel: sdk.String("dolore"),
                        Image: sdk.String("iusto"),
                    },
                    Headers: map[string]string{
                        "harum": "enim",
                    },
                    Payload: map[string]interface{}{
                        "commodi": "repudiandae",
                        "quae": "ipsum",
                        "quidem": "molestias",
                        "excepturi": "pariatur",
                    },
                },
                Condition: sdk.String("modi"),
                Data: map[string]string{
                    "rem": "voluptates",
                    "quasi": "repudiandae",
                    "sint": "veritatis",
                },
                FcmOptions: &shared.FcmOptions{
                    AnalyticsLabel: sdk.String("itaque"),
                },
                Name: sdk.String("Erin Altenwerth"),
                Notification: &shared.Notification{
                    Body: sdk.String("explicabo"),
                    Image: sdk.String("deserunt"),
                    Title: sdk.String("Miss"),
                },
                Token: sdk.String("quibusdam"),
                Topic: sdk.String("labore"),
                Webpush: &shared.WebpushConfig{
                    Data: map[string]string{
                        "qui": "aliquid",
                        "cupiditate": "quos",
                    },
                    FcmOptions: &shared.WebpushFcmOptions{
                        AnalyticsLabel: sdk.String("perferendis"),
                        Link: sdk.String("magni"),
                    },
                    Headers: map[string]string{
                        "ipsam": "alias",
                        "fugit": "dolorum",
                        "excepturi": "tempora",
                        "facilis": "tempore",
                    },
                    Notification: map[string]interface{}{
                        "delectus": "eum",
                        "non": "eligendi",
                    },
                },
            },
            ValidateOnly: sdk.Bool(false),
        },
        AccessToken: sdk.String("sint"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("provident"),
        Fields: sdk.String("necessitatibus"),
        Key: sdk.String("sint"),
        OauthToken: sdk.String("officia"),
        Parent: "dolor",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("debitis"),
        UploadType: sdk.String("a"),
        UploadProtocol: sdk.String("dolorum"),
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
