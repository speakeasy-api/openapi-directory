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
            Parent: "delectus",
        },
        QueryParams: operations.FcmProjectsMessagesSendQueryParams{
            DollarXgafv: "1",
            AccessToken: "eum",
            Alt: "media",
            Callback: "praesentium",
            Fields: "nulla",
            Key: "blanditiis",
            OauthToken: "blanditiis",
            PrettyPrint: true,
            QuotaUser: "voluptas",
            UploadType: "rerum",
            UploadProtocol: "quibusdam",
        },
        Request: &shared.SendMessageRequest{
            Message: &shared.Message{
                Android: &shared.AndroidConfig{
                    CollapseKey: "et",
                    Data: map[string]string{
                        "ut": "dolorem",
                        "quos": "exercitationem",
                    },
                    DirectBootOk: false,
                    FcmOptions: &shared.AndroidFcmOptions{
                        AnalyticsLabel: "enim",
                    },
                    Notification: &shared.AndroidNotification{
                        Body: "quaerat",
                        BodyLocArgs: []string{
                            "ab",
                        },
                        BodyLocKey: "architecto",
                        BypassProxyNotification: false,
                        ChannelID: "quas",
                        ClickAction: "sed",
                        Color: "eum",
                        DefaultLightSettings: true,
                        DefaultSound: false,
                        DefaultVibrateTimings: true,
                        EventTime: "ipsam",
                        Icon: "repellat",
                        Image: "consequuntur",
                        LightSettings: &shared.LightSettings{
                            Color: &shared.Color{
                                Alpha: 97.199997,
                                Blue: 39.200001,
                                Green: 73.199997,
                                Red: 22.100000,
                            },
                            LightOffDuration: "corrupti",
                            LightOnDuration: "est",
                        },
                        LocalOnly: false,
                        NotificationCount: 2801199715974625794,
                        NotificationPriority: "PRIORITY_UNSPECIFIED",
                        Sound: "reprehenderit",
                        Sticky: false,
                        Tag: "sed",
                        Ticker: "voluptatem",
                        Title: "sit",
                        TitleLocArgs: []string{
                            "earum",
                        },
                        TitleLocKey: "animi",
                        VibrateTimings: []string{
                            "ex",
                        },
                        Visibility: "VISIBILITY_UNSPECIFIED",
                    },
                    Priority: "NORMAL",
                    RestrictedPackageName: "non",
                    TTL: "consequatur",
                },
                Apns: &shared.ApnsConfig{
                    FcmOptions: &shared.ApnsFcmOptions{
                        AnalyticsLabel: "cumque",
                        Image: "autem",
                    },
                    Headers: map[string]string{
                        "deserunt": "iure",
                        "exercitationem": "molestiae",
                        "neque": "deleniti",
                    },
                    Payload: map[string]interface{}{
                        "commodi": "ut",
                        "esse": "nam",
                    },
                },
                Condition: "eius",
                Data: map[string]string{
                    "et": "velit",
                },
                FcmOptions: &shared.FcmOptions{
                    AnalyticsLabel: "quas",
                },
                Name: "nostrum",
                Notification: &shared.Notification{
                    Body: "eligendi",
                    Image: "veritatis",
                    Title: "quis",
                },
                Token: "quidem",
                Topic: "ratione",
                Webpush: &shared.WebpushConfig{
                    Data: map[string]string{
                        "perferendis": "enim",
                        "natus": "repudiandae",
                        "aperiam": "minus",
                    },
                    FcmOptions: &shared.WebpushFcmOptions{
                        AnalyticsLabel: "esse",
                        Link: "molestias",
                    },
                    Headers: map[string]string{
                        "ut": "neque",
                        "sed": "dolores",
                        "reprehenderit": "est",
                    },
                    Notification: map[string]interface{}{
                        "dolores": "officia",
                        "consequatur": "et",
                    },
                },
            },
            ValidateOnly: true,
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