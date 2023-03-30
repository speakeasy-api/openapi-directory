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
            BasicAuth: shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    req := operations.CreateApplicationRequest{
        Request: operations.CreateApplicationRequestBody{
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