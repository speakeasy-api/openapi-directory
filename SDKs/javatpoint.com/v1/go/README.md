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
                        Sound: sdk.String("quis"),
                        Sticky: sdk.Bool(false),
                        Tag: sdk.String("veritatis"),
                        Ticker: sdk.String("deserunt"),
                        Title: sdk.String("Mr."),
                        TitleLocArgs: []string{
                            "repellendus",
                            "sapiente",
                        },
                        TitleLocKey: sdk.String("quo"),
                        VibrateTimings: []string{
                            "at",
                        },
                        Visibility: shared.AndroidNotificationVisibilityEnumSecret.ToPointer(),
                    },
                    Priority: shared.AndroidConfigPriorityEnumHigh.ToPointer(),
                    RestrictedPackageName: sdk.String("molestiae"),
                    TTL: sdk.String("quod"),
                },
                Apns: &shared.ApnsConfig{
                    FcmOptions: &shared.ApnsFcmOptions{
                        AnalyticsLabel: sdk.String("quod"),
                        Image: sdk.String("esse"),
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
                Condition: sdk.String("optio"),
                Data: map[string]string{
                    "beatae": "commodi",
                    "molestiae": "modi",
                    "qui": "impedit",
                },
                FcmOptions: &shared.FcmOptions{
                    AnalyticsLabel: sdk.String("cum"),
                },
                Name: sdk.String("Edna Mante II"),
                Notification: &shared.Notification{
                    Body: sdk.String("natus"),
                    Image: sdk.String("sed"),
                    Title: sdk.String("Miss"),
                },
                Token: sdk.String("dolor"),
                Topic: sdk.String("natus"),
                Webpush: &shared.WebpushConfig{
                    Data: map[string]string{
                        "hic": "saepe",
                        "fuga": "in",
                    },
                    FcmOptions: &shared.WebpushFcmOptions{
                        AnalyticsLabel: sdk.String("corporis"),
                        Link: sdk.String("iste"),
                    },
                    Headers: map[string]string{
                        "saepe": "quidem",
                        "architecto": "ipsa",
                    },
                    Notification: map[string]interface{}{
                        "est": "mollitia",
                        "laborum": "dolores",
                        "dolorem": "corporis",
                        "explicabo": "nobis",
                    },
                },
            },
            ValidateOnly: sdk.Bool(false),
        },
        AccessToken: sdk.String("enim"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("nemo"),
        Fields: sdk.String("minima"),
        Key: sdk.String("excepturi"),
        OauthToken: sdk.String("accusantium"),
        Parent: "iure",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("culpa"),
        UploadType: sdk.String("doloribus"),
        UploadProtocol: sdk.String("sapiente"),
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
