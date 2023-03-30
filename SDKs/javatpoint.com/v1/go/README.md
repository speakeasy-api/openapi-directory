# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/javatpoint.com/v1/go
```
<!-- End SDK Installation -->

## SDK Example Usage
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
            Parent: "unde",
        },
        QueryParams: operations.FcmProjectsMessagesSendQueryParams{
            DollarXgafv: "2",
            AccessToken: "porro",
            Alt: "proto",
            Callback: "id",
            Fields: "vero",
            Key: "perspiciatis",
            OauthToken: "nulla",
            PrettyPrint: false,
            QuotaUser: "nihil",
            UploadType: "fuga",
            UploadProtocol: "facilis",
        },
        Request: &shared.SendMessageRequest{
            Message: &shared.Message{
                Android: &shared.AndroidConfig{
                    CollapseKey: "eum",
                    Data: map[string]string{
                        "ullam": "saepe",
                        "inventore": "sapiente",
                    },
                    DirectBootOk: false,
                    FcmOptions: &shared.AndroidFcmOptions{
                        AnalyticsLabel: "enim",
                    },
                    Notification: &shared.AndroidNotification{
                        Body: "eum",
                        BodyLocArgs: []string{
                            "autem",
                            "vel",
                        },
                        BodyLocKey: "non",
                        BypassProxyNotification: false,
                        ChannelID: "deleniti",
                        ClickAction: "similique",
                        Color: "reprehenderit",
                        DefaultLightSettings: false,
                        DefaultSound: false,
                        DefaultVibrateTimings: false,
                        EventTime: "molestiae",
                        Icon: "quo",
                        Image: "quasi",
                        LightSettings: &shared.LightSettings{
                            Color: &shared.Color{
                                Alpha: 3373.96,
                                Blue: 871.29,
                                Green: 6481.72,
                                Red: 202.18,
                            },
                            LightOffDuration: "consequatur",
                            LightOnDuration: "fugiat",
                        },
                        LocalOnly: false,
                        NotificationCount: 957156,
                        NotificationPriority: "PRIORITY_HIGH",
                        Sound: "eos",
                        Sticky: false,
                        Tag: "accusamus",
                        Ticker: "accusamus",
                        Title: "Principal Applications Consultant",
                        TitleLocArgs: []string{
                            "praesentium",
                            "occaecati",
                            "dolor",
                            "soluta",
                        },
                        TitleLocKey: "sed",
                        VibrateTimings: []string{
                            "rerum",
                            "culpa",
                            "qui",
                        },
                        Visibility: "PUBLIC",
                    },
                    Priority: "HIGH",
                    RestrictedPackageName: "possimus",
                    TTL: "occaecati",
                },
                Apns: &shared.ApnsConfig{
                    FcmOptions: &shared.ApnsFcmOptions{
                        AnalyticsLabel: "odit",
                        Image: "esse",
                    },
                    Headers: map[string]string{
                        "voluptatem": "amet",
                        "est": "id",
                    },
                    Payload: map[string]interface{}{
                        "numquam": "similique",
                        "dolores": "sit",
                    },
                },
                Condition: "quia",
                Data: map[string]string{
                    "voluptatem": "laborum",
                    "modi": "et",
                    "iure": "earum",
                },
                FcmOptions: &shared.FcmOptions{
                    AnalyticsLabel: "ut",
                },
                Name: "soluta",
                Notification: &shared.Notification{
                    Body: "qui",
                    Image: "ea",
                    Title: "Investor Division Agent",
                },
                Token: "optio",
                Topic: "aspernatur",
                Webpush: &shared.WebpushConfig{
                    Data: map[string]string{
                        "ut": "libero",
                    },
                    FcmOptions: &shared.WebpushFcmOptions{
                        AnalyticsLabel: "et",
                        Link: "libero",
                    },
                    Headers: map[string]string{
                        "non": "ea",
                    },
                    Notification: map[string]interface{}{
                        "placeat": "ipsam",
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

<!-- Start SDK Available Operations -->
## SDK Available Operations


### Projects

* `FcmProjectsMessagesSend` - Send a message to specified target (a registration token, topic or condition).
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
