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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.CreateApplication(ctx, operations.CreateApplicationRequestBody{
        Capabilities: &shared.Capabilities{
            Meetings: &shared.MeetingsCapability{
                Webhooks: &shared.MeetingsCapabilityWebhooks{
                    RecordingChanged: &shared.MeetingsCapabilityWebhooksRecordingChanged{
                        Address: sdk.String("https://example.com/webhooks/event"),
                        HTTPMethod: shared.MeetingsCapabilityWebhooksRecordingChangedHTTPMethodEnumPost.ToPointer(),
                    },
                    RoomChanged: &shared.MeetingsCapabilityWebhooksRoomChanged{
                        Address: sdk.String("https://example.com/webhooks/event"),
                        HTTPMethod: shared.MeetingsCapabilityWebhooksRoomChangedHTTPMethodEnumPost.ToPointer(),
                    },
                    SessionChanged: &shared.MeetingsCapabilityWebhooksSessionChanged{
                        Address: sdk.String("https://example.com/webhooks/event"),
                        HTTPMethod: shared.MeetingsCapabilityWebhooksSessionChangedHTTPMethodEnumPost.ToPointer(),
                    },
                },
            },
            Messages: &shared.MessagesCapability{
                Version: sdk.String("corrupti"),
                Webhooks: &shared.MessagesCapabilityWebhooks{
                    InboundURL: &shared.MessagesCapabilityWebhooksInboundURL{
                        Address: sdk.String("https://example.com/webhooks/inbound"),
                        HTTPMethod: shared.MessagesCapabilityWebhooksInboundURLHTTPMethodEnumPost.ToPointer(),
                    },
                    StatusURL: &shared.MessagesCapabilityWebhooksStatusURL{
                        Address: sdk.String("https://example.com/webhooks/status"),
                        HTTPMethod: shared.MessagesCapabilityWebhooksStatusURLHTTPMethodEnumPost.ToPointer(),
                    },
                },
            },
            Rtc: &shared.RtcCapability{
                LegPersistenceTime: sdk.Int(5),
                SignedCallbacks: sdk.Bool(true),
                Webhooks: &shared.RtcCapabilityWebhooks{
                    EventURL: &shared.RtcCapabilityWebhooksEventURL{
                        Address: sdk.String("https://example.com/webhooks/event"),
                        HTTPMethod: shared.RtcCapabilityWebhooksEventURLHTTPMethodEnumPost.ToPointer(),
                    },
                },
            },
            Vbc: map[string]interface{}{
                "distinctio": "quibusdam",
                "unde": "nulla",
                "corrupti": "illum",
            },
            Verify: &shared.VerifyCapability{
                Version: shared.VerifyCapabilityVersionEnumV2.ToPointer(),
                Webhooks: &shared.VerifyCapabilityWebhooks{
                    StatusURL: &shared.VerifyCapabilityWebhooksStatusURL{
                        Address: sdk.String("https://example.com/webhooks/event"),
                        HTTPMethod: shared.VerifyCapabilityWebhooksStatusURLHTTPMethodEnumPost.ToPointer(),
                    },
                },
            },
            Voice: &shared.VoiceCapability{
                ConversationTTL: sdk.Int64(30),
                Payments: &shared.VoiceCapabilityPayments{
                    Gateways: []shared.VoiceCapabilityPaymentsGateways{
                        shared.VoiceCapabilityPaymentsGateways{
                            Credential: sdk.String("26f2a89e-6fcd-11ed-a1eb-0242ac120002"),
                            Mode: shared.VoiceCapabilityPaymentsGatewaysModeEnumLive.ToPointer(),
                            Type: sdk.String("Stripe"),
                        },
                        shared.VoiceCapabilityPaymentsGateways{
                            Credential: sdk.String("26f2a89e-6fcd-11ed-a1eb-0242ac120002"),
                            Mode: shared.VoiceCapabilityPaymentsGatewaysModeEnumLive.ToPointer(),
                            Type: sdk.String("Stripe"),
                        },
                    },
                },
                SignedCallbacks: sdk.Bool(true),
                Webhooks: &shared.VoiceCapabilityWebhooks{
                    AnswerURL: &shared.VoiceCapabilityWebhooksAnswerURL{
                        Address: sdk.String("https://example.com/webhooks/answer"),
                        ConnectionTimeout: sdk.Int64(500),
                        HTTPMethod: shared.VoiceCapabilityWebhooksAnswerURLHTTPMethodEnumPost.ToPointer(),
                        SocketTimeout: sdk.Int64(3000),
                    },
                    EventURL: &shared.VoiceCapabilityWebhooksEventURL{
                        Address: sdk.String("https://example.com/webhooks/event"),
                        ConnectionTimeout: sdk.Int64(500),
                        HTTPMethod: shared.VoiceCapabilityWebhooksEventURLHTTPMethodEnumPost.ToPointer(),
                        SocketTimeout: sdk.Int64(3000),
                    },
                    FallbackAnswerURL: &shared.VoiceCapabilityWebhooksFallbackAnswerURL{
                        Address: sdk.String("https://fallback.example.com/webhooks/answer"),
                        ConnectionTimeout: sdk.Int64(500),
                        HTTPMethod: shared.VoiceCapabilityWebhooksFallbackAnswerURLHTTPMethodEnumPost.ToPointer(),
                        SocketTimeout: sdk.Int64(3000),
                    },
                },
            },
        },
        Keys: &operations.CreateApplicationRequestBodyKeys{
            PublicKey: sdk.String("-----BEGIN PUBLIC KEY-----
        MIIBIjANBgkqhkiG9w0BAQEFAAOCA
        KOxjsU4pf/sMFi9N0jqcSLcjxu33G
        d/vynKnlw9SENi+UZR44GdjGdmfm1
        tL1eA7IBh2HNnkYXnAwYzKJoa4eO3
        0kYWekeIZawIwe/g9faFgkev+1xsO
        OUNhPx2LhuLmgwWSRS4L5W851Xe3f
        UQIDAQAB
        -----END PUBLIC KEY-----
        "),
        },
        Name: "Demo Application",
        Privacy: &operations.CreateApplicationRequestBodyPrivacy{
            ImproveAi: sdk.Bool(true),
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateApplication201ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->