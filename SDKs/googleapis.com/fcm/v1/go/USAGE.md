<!-- Start SDK Example Usage -->
```go
package main

import (
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
            Parent: "sit",
        },
        QueryParams: operations.FcmProjectsMessagesSendQueryParams{
            DollarXgafv: "1",
            AccessToken: "culpa",
            Alt: "media",
            Callback: "consequuntur",
            Fields: "dolor",
            Key: "expedita",
            OauthToken: "voluptas",
            PrettyPrint: true,
            QuotaUser: "et",
            UploadType: "nihil",
            UploadProtocol: "rerum",
        },
        Request: &shared.SendMessageRequest{
            Message: &shared.Message{
                Android: &shared.AndroidConfig{
                    CollapseKey: "dicta",
                    Data: map[string]string{
                        "voluptatum": "et",
                    },
                    DirectBootOk: false,
                    FcmOptions: &shared.AndroidFcmOptions{
                        AnalyticsLabel: "dolorem",
                    },
                    Notification: &shared.AndroidNotification{
                        Body: "et",
                        BodyLocArgs: []string{
                            "iste",
                        },
                        BodyLocKey: "vitae",
                        BypassProxyNotification: true,
                        ChannelID: "dolores",
                        ClickAction: "illum",
                        Color: "debitis",
                        DefaultLightSettings: false,
                        DefaultSound: false,
                        DefaultVibrateTimings: true,
                        EventTime: "id",
                        Icon: "aspernatur",
                        Image: "accusantium",
                        LightSettings: &shared.LightSettings{
                            Color: &shared.Color{
                                Alpha: 45.099998,
                                Blue: 78.199997,
                                Green: 0.100000,
                                Red: 49.099998,
                            },
                            LightOffDuration: "omnis",
                            LightOnDuration: "aut",
                        },
                        LocalOnly: true,
                        NotificationCount: 5558237345453186302,
                        NotificationPriority: "PRIORITY_MIN",
                        Sound: "autem",
                        Sticky: true,
                        Tag: "nobis",
                        Ticker: "odio",
                        Title: "qui",
                        TitleLocArgs: []string{
                            "at",
                            "ipsum",
                            "eveniet",
                        },
                        TitleLocKey: "modi",
                        VibrateTimings: []string{
                            "inventore",
                        },
                        Visibility: "PUBLIC",
                    },
                    Priority: "NORMAL",
                    RestrictedPackageName: "aut",
                    TTL: "reprehenderit",
                },
                Apns: &shared.ApnsConfig{
                    FcmOptions: &shared.ApnsFcmOptions{
                        AnalyticsLabel: "tempore",
                        Image: "maiores",
                    },
                    Headers: map[string]string{
                        "dolor": "beatae",
                        "veritatis": "in",
                        "et": "omnis",
                    },
                    Payload: map[string]interface{}{
                        "ex": "dolores",
                    },
                },
                Condition: "placeat",
                Data: map[string]string{
                    "rerum": "mollitia",
                    "voluptas": "quam",
                },
                FcmOptions: &shared.FcmOptions{
                    AnalyticsLabel: "reprehenderit",
                },
                Name: "qui",
                Notification: &shared.Notification{
                    Body: "qui",
                    Image: "unde",
                    Title: "in",
                },
                Token: "autem",
                Topic: "qui",
                Webpush: &shared.WebpushConfig{
                    Data: map[string]string{
                        "itaque": "ab",
                        "neque": "ullam",
                        "et": "accusantium",
                    },
                    FcmOptions: &shared.WebpushFcmOptions{
                        AnalyticsLabel: "esse",
                        Link: "architecto",
                    },
                    Headers: map[string]string{
                        "velit": "cumque",
                    },
                    Notification: map[string]interface{}{
                        "sunt": "voluptates",
                    },
                },
            },
            ValidateOnly: false,
        },
    }
    
    res, err := s.Projects.FcmProjectsMessagesSend(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Message != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->