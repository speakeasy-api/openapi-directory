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
            Parent: "ipsum",
        },
        QueryParams: operations.FcmProjectsMessagesSendQueryParams{
            DollarXgafv: "1",
            AccessToken: "magni",
            Alt: "json",
            Callback: "et",
            Fields: "qui",
            Key: "quibusdam",
            OauthToken: "vero",
            PrettyPrint: false,
            QuotaUser: "non",
            UploadType: "quae",
            UploadProtocol: "architecto",
        },
        Request: &shared.SendMessageRequest{
            Message: &shared.Message{
                Android: &shared.AndroidConfig{
                    CollapseKey: "labore",
                    Data: map[string]string{
                        "harum": "qui",
                    },
                    DirectBootOk: true,
                    FcmOptions: &shared.AndroidFcmOptions{
                        AnalyticsLabel: "occaecati",
                    },
                    Notification: &shared.AndroidNotification{
                        Body: "dignissimos",
                        BodyLocArgs: []string{
                            "dignissimos",
                            "omnis",
                            "quae",
                        },
                        BodyLocKey: "nisi",
                        BypassProxyNotification: false,
                        ChannelID: "necessitatibus",
                        ClickAction: "voluptatem",
                        Color: "tempora",
                        DefaultLightSettings: true,
                        DefaultSound: true,
                        DefaultVibrateTimings: true,
                        EventTime: "illo",
                        Icon: "in",
                        Image: "voluptas",
                        LightSettings: &shared.LightSettings{
                            Color: &shared.Color{
                                Alpha: 73.199997,
                                Blue: 74.099998,
                                Green: 17.100000,
                                Red: 40.099998,
                            },
                            LightOffDuration: "voluptates",
                            LightOnDuration: "cupiditate",
                        },
                        LocalOnly: true,
                        NotificationCount: 8167081647083032097,
                        NotificationPriority: "PRIORITY_DEFAULT",
                        Sound: "non",
                        Sticky: false,
                        Tag: "similique",
                        Ticker: "esse",
                        Title: "enim",
                        TitleLocArgs: []string{
                            "rem",
                        },
                        TitleLocKey: "eius",
                        VibrateTimings: []string{
                            "sint",
                        },
                        Visibility: "VISIBILITY_UNSPECIFIED",
                    },
                    Priority: "NORMAL",
                    RestrictedPackageName: "natus",
                    TTL: "voluptates",
                },
                Apns: &shared.ApnsConfig{
                    FcmOptions: &shared.ApnsFcmOptions{
                        AnalyticsLabel: "dolore",
                        Image: "recusandae",
                    },
                    Headers: map[string]string{
                        "quasi": "esse",
                        "laborum": "soluta",
                    },
                    Payload: map[string]interface{}{
                        "amet": "et",
                    },
                },
                Condition: "voluptatem",
                Data: map[string]string{
                    "eaque": "maiores",
                    "perferendis": "aut",
                    "labore": "qui",
                },
                FcmOptions: &shared.FcmOptions{
                    AnalyticsLabel: "quidem",
                },
                Name: "ut",
                Notification: &shared.Notification{
                    Body: "ut",
                    Image: "quo",
                    Title: "consectetur",
                },
                Token: "nostrum",
                Topic: "doloribus",
                Webpush: &shared.WebpushConfig{
                    Data: map[string]string{
                        "officia": "incidunt",
                        "minima": "iste",
                        "sit": "maiores",
                    },
                    FcmOptions: &shared.WebpushFcmOptions{
                        AnalyticsLabel: "molestiae",
                        Link: "rerum",
                    },
                    Headers: map[string]string{
                        "consequatur": "quo",
                    },
                    Notification: map[string]interface{}{
                        "assumenda": "ipsam",
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