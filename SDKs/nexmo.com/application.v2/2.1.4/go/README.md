# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/nexmo.com/application.v2/2.1.4/go
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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    req := operations.CreateApplicationRequestBody{
        Capabilities: &shared.Capabilities{
            Meetings: &shared.MeetingsCapability{
                Webhooks: &shared.MeetingsCapabilityWebhooks{
                    RecordingChanged: &shared.MeetingsCapabilityWebhooksRecordingChanged{
                        Address: "https://example.com/webhooks/event",
                        HTTPMethod: "POST",
                    },
                    RoomChanged: &shared.MeetingsCapabilityWebhooksRoomChanged{
                        Address: "https://example.com/webhooks/event",
                        HTTPMethod: "POST",
                    },
                    SessionChanged: &shared.MeetingsCapabilityWebhooksSessionChanged{
                        Address: "https://example.com/webhooks/event",
                        HTTPMethod: "POST",
                    },
                },
            },
            Messages: &shared.MessagesCapability{
                Version: "corrupti",
                Webhooks: &shared.MessagesCapabilityWebhooks{
                    InboundURL: &shared.MessagesCapabilityWebhooksInboundURL{
                        Address: "https://example.com/webhooks/inbound",
                        HTTPMethod: "POST",
                    },
                    StatusURL: &shared.MessagesCapabilityWebhooksStatusURL{
                        Address: "https://example.com/webhooks/status",
                        HTTPMethod: "POST",
                    },
                },
            },
            Rtc: &shared.RtcCapability{
                LegPersistenceTime: 5,
                SignedCallbacks: true,
                Webhooks: &shared.RtcCapabilityWebhooks{
                    EventURL: &shared.RtcCapabilityWebhooksEventURL{
                        Address: "https://example.com/webhooks/event",
                        HTTPMethod: "POST",
                    },
                },
            },
            Vbc: map[string]interface{}{
                "distinctio": "quibusdam",
                "unde": "nulla",
                "corrupti": "illum",
            },
            Verify: &shared.VerifyCapability{
                Version: "v2",
                Webhooks: &shared.VerifyCapabilityWebhooks{
                    StatusURL: &shared.VerifyCapabilityWebhooksStatusURL{
                        Address: "https://example.com/webhooks/event",
                        HTTPMethod: "POST",
                    },
                },
            },
            Voice: &shared.VoiceCapability{
                ConversationTTL: 30,
                Payments: &shared.VoiceCapabilityPayments{
                    Gateways: []shared.VoiceCapabilityPaymentsGateways{
                        shared.VoiceCapabilityPaymentsGateways{
                            Credential: "26f2a89e-6fcd-11ed-a1eb-0242ac120002",
                            Mode: "live",
                            Type: "Stripe",
                        },
                        shared.VoiceCapabilityPaymentsGateways{
                            Credential: "26f2a89e-6fcd-11ed-a1eb-0242ac120002",
                            Mode: "live",
                            Type: "Stripe",
                        },
                    },
                },
                SignedCallbacks: true,
                Webhooks: &shared.VoiceCapabilityWebhooks{
                    AnswerURL: &shared.VoiceCapabilityWebhooksAnswerURL{
                        Address: "https://example.com/webhooks/answer",
                        ConnectionTimeout: 500,
                        HTTPMethod: "POST",
                        SocketTimeout: 3000,
                    },
                    EventURL: &shared.VoiceCapabilityWebhooksEventURL{
                        Address: "https://example.com/webhooks/event",
                        ConnectionTimeout: 500,
                        HTTPMethod: "POST",
                        SocketTimeout: 3000,
                    },
                    FallbackAnswerURL: &shared.VoiceCapabilityWebhooksFallbackAnswerURL{
                        Address: "https://fallback.example.com/webhooks/answer",
                        ConnectionTimeout: 500,
                        HTTPMethod: "POST",
                        SocketTimeout: 3000,
                    },
                },
            },
        },
        Keys: &operations.CreateApplicationRequestBodyKeys{
            PublicKey: "-----BEGIN PUBLIC KEY-----
        MIIBIjANBgkqhkiG9w0BAQEFAAOCA
        KOxjsU4pf/sMFi9N0jqcSLcjxu33G
        d/vynKnlw9SENi+UZR44GdjGdmfm1
        tL1eA7IBh2HNnkYXnAwYzKJoa4eO3
        0kYWekeIZawIwe/g9faFgkev+1xsO
        OUNhPx2LhuLmgwWSRS4L5W851Xe3f
        UQIDAQAB
        -----END PUBLIC KEY-----
        ",
        },
        Name: "Demo Application",
        Privacy: &operations.CreateApplicationRequestBodyPrivacy{
            ImproveAi: true,
        },
    }

    ctx := context.Background()
    res, err := s.CreateApplication(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateApplication201ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `CreateApplication` - Create an application
* `DeleteApplication` - Delete an application
* `GetApplication` - Get an application
* `ListApplication` - List available applications
* `UpdateApplication` - Update an application
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
