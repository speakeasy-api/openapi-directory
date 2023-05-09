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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        SendMessageRequest: &shared.SendMessageRequest{
            Message: &shared.Message{
                Android: &shared.AndroidConfig{
                    CollapseKey: sdk.String("mollitia"),
                    Data: map[string]string{
                        "culpa": "consequuntur",
                    },
                    DirectBootOk: sdk.Bool(false),
                    FcmOptions: &shared.AndroidFcmOptions{
                        AnalyticsLabel: sdk.String("repellat"),
                    },
                    Notification: &shared.AndroidNotification{
                        Body: sdk.String("mollitia"),
                        BodyLocArgs: []string{
                            "numquam",
                            "commodi",
                            "quam",
                        },
                        BodyLocKey: sdk.String("molestiae"),
                        BypassProxyNotification: sdk.Bool(false),
                        ChannelID: sdk.String("velit"),
                        ClickAction: sdk.String("error"),
                        Color: sdk.String("quia"),
                        DefaultLightSettings: sdk.Bool(false),
                        DefaultSound: sdk.Bool(false),
                        DefaultVibrateTimings: sdk.Bool(false),
                        EventTime: sdk.String("quis"),
                        Icon: sdk.String("vitae"),
                        Image: sdk.String("laborum"),
                        LightSettings: &shared.LightSettings{
                            Color: &shared.Color{
                                Alpha: sdk.Float32(6563.3),
                                Blue: sdk.Float32(3172.02),
                                Green: sdk.Float32(1381.83),
                                Red: sdk.Float32(7783.46),
                            },
                            LightOffDuration: sdk.String("sequi"),
                            LightOnDuration: sdk.String("tenetur"),
                        },
                        LocalOnly: sdk.Bool(false),
                        NotificationCount: sdk.Int(368725),
                        NotificationPriority: shared.AndroidNotificationNotificationPriorityEnumPriorityDefault.ToPointer(),
                        Sound: sdk.String("possimus"),
                        Sticky: sdk.Bool(false),
                        Tag: sdk.String("aut"),
                        Ticker: sdk.String("quasi"),
                        Title: sdk.String("Miss"),
                        TitleLocArgs: []string{
                            "laborum",
                            "quasi",
                            "reiciendis",
                            "voluptatibus",
                        },
                        TitleLocKey: sdk.String("vero"),
                        VibrateTimings: []string{
                            "praesentium",
                            "voluptatibus",
                        },
                        Visibility: shared.AndroidNotificationVisibilityEnumVisibilityUnspecified.ToPointer(),
                    },
                    Priority: shared.AndroidConfigPriorityEnumHigh.ToPointer(),
                    RestrictedPackageName: sdk.String("voluptate"),
                    TTL: sdk.String("cum"),
                },
                Apns: &shared.ApnsConfig{
                    FcmOptions: &shared.ApnsFcmOptions{
                        AnalyticsLabel: sdk.String("perferendis"),
                        Image: sdk.String("doloremque"),
                    },
                    Headers: map[string]string{
                        "ut": "maiores",
                        "dicta": "corporis",
                    },
                    Payload: map[string]interface{}{
                        "iusto": "dicta",
                        "harum": "enim",
                    },
                },
                Condition: sdk.String("accusamus"),
                Data: map[string]string{
                    "repudiandae": "quae",
                    "ipsum": "quidem",
                },
                FcmOptions: &shared.FcmOptions{
                    AnalyticsLabel: sdk.String("molestias"),
                },
                Name: sdk.String("Ervin Gleason"),
                Notification: &shared.Notification{
                    Body: sdk.String("voluptates"),
                    Image: sdk.String("quasi"),
                    Title: sdk.String("Dr."),
                },
                Token: sdk.String("sint"),
                Topic: sdk.String("veritatis"),
                Webpush: &shared.WebpushConfig{
                    Data: map[string]string{
                        "incidunt": "enim",
                        "consequatur": "est",
                        "quibusdam": "explicabo",
                        "deserunt": "distinctio",
                    },
                    FcmOptions: &shared.WebpushFcmOptions{
                        AnalyticsLabel: sdk.String("quibusdam"),
                        Link: sdk.String("labore"),
                    },
                    Headers: map[string]string{
                        "qui": "aliquid",
                        "cupiditate": "quos",
                    },
                    Notification: map[string]interface{}{
                        "magni": "assumenda",
                    },
                },
            },
            ValidateOnly: sdk.Bool(false),
        },
        AccessToken: sdk.String("ipsam"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("fugit"),
        Fields: sdk.String("dolorum"),
        Key: sdk.String("excepturi"),
        OauthToken: sdk.String("tempora"),
        Parent: "facilis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("tempore"),
        UploadType: sdk.String("labore"),
        UploadProtocol: sdk.String("delectus"),
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
