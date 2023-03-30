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
        Security: operations.FcmProjectsMessagesSendSecurity{
            Option1: &operations.FcmProjectsMessagesSendSecurityOption1{
                Oauth2: shared.SchemeOauth2{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
                Oauth2c: shared.SchemeOauth2c{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
            },
        },
        PathParams: operations.FcmProjectsMessagesSendPathParams{
            Parent: "corrupti",
        },
        QueryParams: operations.FcmProjectsMessagesSendQueryParams{
            DollarXgafv: "2",
            AccessToken: "distinctio",
            Alt: "proto",
            Callback: "unde",
            Fields: "nulla",
            Key: "corrupti",
            OauthToken: "illum",
            PrettyPrint: false,
            QuotaUser: "vel",
            UploadType: "error",
            UploadProtocol: "deserunt",
        },
        Request: &shared.SendMessageRequest{
            Message: &shared.Message{
                Android: &shared.AndroidConfig{
                    CollapseKey: "suscipit",
                    Data: map[string]string{
                        "magnam": "debitis",
                        "ipsa": "delectus",
                    },
                    DirectBootOk: false,
                    FcmOptions: &shared.AndroidFcmOptions{
                        AnalyticsLabel: "tempora",
                    },
                    Notification: &shared.AndroidNotification{
                        Body: "suscipit",
                        BodyLocArgs: []string{
                            "minus",
                            "placeat",
                        },
                        BodyLocKey: "voluptatum",
                        BypassProxyNotification: false,
                        ChannelID: "iusto",
                        ClickAction: "excepturi",
                        Color: "nisi",
                        DefaultLightSettings: false,
                        DefaultSound: false,
                        DefaultVibrateTimings: false,
                        EventTime: "recusandae",
                        Icon: "temporibus",
                        Image: "ab",
                        LightSettings: &shared.LightSettings{
                            Color: &shared.Color{
                                Alpha: 3373.96,
                                Blue: 871.29,
                                Green: 6481.72,
                                Red: 202.18,
                            },
                            LightOffDuration: "ipsam",
                            LightOnDuration: "repellendus",
                        },
                        LocalOnly: false,
                        NotificationCount: 957156,
                        NotificationPriority: "PRIORITY_HIGH",
                        Sound: "odit",
                        Sticky: false,
                        Tag: "at",
                        Ticker: "at",
                        Title: "Dr.",
                        TitleLocArgs: []string{
                            "quod",
                            "quod",
                        },
                        TitleLocKey: "esse",
                        VibrateTimings: []string{
                            "porro",
                            "dolorum",
                            "dicta",
                        },
                        Visibility: "PUBLIC",
                    },
                    Priority: "HIGH",
                    RestrictedPackageName: "occaecati",
                    TTL: "fugit",
                },
                Apns: &shared.ApnsConfig{
                    FcmOptions: &shared.ApnsFcmOptions{
                        AnalyticsLabel: "deleniti",
                        Image: "hic",
                    },
                    Headers: map[string]string{
                        "totam": "beatae",
                        "commodi": "molestiae",
                        "modi": "qui",
                        "impedit": "cum",
                    },
                    Payload: map[string]interface{}{
                        "ipsum": "excepturi",
                        "aspernatur": "perferendis",
                    },
                },
                Condition: "ad",
                Data: map[string]string{
                    "sed": "iste",
                    "dolor": "natus",
                    "laboriosam": "hic",
                },
                FcmOptions: &shared.FcmOptions{
                    AnalyticsLabel: "saepe",
                },
                Name: "fuga",
                Notification: &shared.Notification{
                    Body: "in",
                    Image: "corporis",
                    Title: "Miss",
                },
                Token: "iure",
                Topic: "saepe",
                Webpush: &shared.WebpushConfig{
                    Data: map[string]string{
                        "architecto": "ipsa",
                        "reiciendis": "est",
                        "mollitia": "laborum",
                    },
                    FcmOptions: &shared.WebpushFcmOptions{
                        AnalyticsLabel: "dolores",
                        Link: "dolorem",
                    },
                    Headers: map[string]string{
                        "explicabo": "nobis",
                        "enim": "omnis",
                    },
                    Notification: map[string]interface{}{
                        "minima": "excepturi",
                        "accusantium": "iure",
                    },
                },
            },
            ValidateOnly: false,
        },
    }

    ctx := context.Background()
    res, err := s.Projects.FcmProjectsMessagesSend(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Message != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->