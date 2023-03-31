<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.FcmProjectsMessagesSendRequest{
        DollarXgafv: "2",
        SendMessageRequest: &shared.SendMessageRequest{
            Message: &shared.Message{
                Android: &shared.AndroidConfig{
                    CollapseKey: "provident",
                    Data: map[string]string{
                        "quibusdam": "unde",
                        "nulla": "corrupti",
                        "illum": "vel",
                    },
                    DirectBootOk: false,
                    FcmOptions: &shared.AndroidFcmOptions{
                        AnalyticsLabel: "error",
                    },
                    Notification: &shared.AndroidNotification{
                        Body: "deserunt",
                        BodyLocArgs: []string{
                            "iure",
                            "magnam",
                        },
                        BodyLocKey: "debitis",
                        BypassProxyNotification: false,
                        ChannelID: "ipsa",
                        ClickAction: "delectus",
                        Color: "tempora",
                        DefaultLightSettings: false,
                        DefaultSound: false,
                        DefaultVibrateTimings: false,
                        EventTime: "suscipit",
                        Icon: "molestiae",
                        Image: "minus",
                        LightSettings: &shared.LightSettings{
                            Color: &shared.Color{
                                Alpha: 8121.69,
                                Blue: 5288.95,
                                Green: 4799.77,
                                Red: 5680.45,
                            },
                            LightOffDuration: "nisi",
                            LightOnDuration: "recusandae",
                        },
                        LocalOnly: false,
                        NotificationCount: 836079,
                        NotificationPriority: "PRIORITY_UNSPECIFIED",
                        Sound: "quis",
                        Sticky: false,
                        Tag: "veritatis",
                        Ticker: "deserunt",
                        Title: "Mr.",
                        TitleLocArgs: []string{
                            "repellendus",
                            "sapiente",
                        },
                        TitleLocKey: "quo",
                        VibrateTimings: []string{
                            "at",
                        },
                        Visibility: "SECRET",
                    },
                    Priority: "HIGH",
                    RestrictedPackageName: "molestiae",
                    TTL: "quod",
                },
                Apns: &shared.ApnsConfig{
                    FcmOptions: &shared.ApnsFcmOptions{
                        AnalyticsLabel: "quod",
                        Image: "esse",
                    },
                    Headers: map[string]string{
                        "porro": "dolorum",
                        "dicta": "nam",
                        "officia": "occaecati",
                    },
                    Payload: map[string]interface{}{
                        "deleniti": "hic",
                    },
                },
                Condition: "optio",
                Data: map[string]string{
                    "beatae": "commodi",
                    "molestiae": "modi",
                    "qui": "impedit",
                },
                FcmOptions: &shared.FcmOptions{
                    AnalyticsLabel: "cum",
                },
                Name: "esse",
                Notification: &shared.Notification{
                    Body: "ipsum",
                    Image: "excepturi",
                    Title: "Mr.",
                },
                Token: "perferendis",
                Topic: "ad",
                Webpush: &shared.WebpushConfig{
                    Data: map[string]string{
                        "sed": "iste",
                        "dolor": "natus",
                        "laboriosam": "hic",
                    },
                    FcmOptions: &shared.WebpushFcmOptions{
                        AnalyticsLabel: "saepe",
                        Link: "fuga",
                    },
                    Headers: map[string]string{
                        "corporis": "iste",
                        "iure": "saepe",
                    },
                    Notification: map[string]interface{}{
                        "architecto": "ipsa",
                        "reiciendis": "est",
                        "mollitia": "laborum",
                    },
                },
            },
            ValidateOnly: false,
        },
        AccessToken: "dolores",
        Alt: "json",
        Callback: "corporis",
        Fields: "explicabo",
        Key: "nobis",
        OauthToken: "enim",
        Parent: "omnis",
        PrettyPrint: false,
        QuotaUser: "nemo",
        UploadType: "minima",
        UploadProtocol: "excepturi",
    }

    ctx := context.Background()
    res, err := s.Projects.FcmProjectsMessagesSend(ctx, req, operations.FcmProjectsMessagesSendSecurity{
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