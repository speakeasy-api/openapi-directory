# SDK

## Overview

Vonage provides an Application API to allow management of your Vonage Applications.

This API is backwards compatible with version 1. Applications created using version 1 of the API can also be managed using version 2 (this version) of the API.


### Available Operations

* [CreateApplication](#createapplication) - Create an application
* [DeleteApplication](#deleteapplication) - Delete an application
* [GetApplication](#getapplication) - Get an application
* [ListApplication](#listapplication) - List available applications
* [UpdateApplication](#updateapplication) - Update an application

## CreateApplication

Create an application

### Example Usage

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
    res, err := s.SDK.CreateApplication(ctx, operations.CreateApplicationRequestBody{
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
                Version: sdk.String("error"),
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
                "suscipit": "iure",
                "magnam": "debitis",
                "ipsa": "delectus",
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

## DeleteApplication

Deleting an application **cannot be undone**.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteApplication(ctx, operations.DeleteApplicationRequest{
        ID: "67cc8796-ed15-41a0-9dfc-2ddf7cc78ca1",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetApplication

Get an application

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetApplication(ctx, operations.GetApplicationRequest{
        ID: "ba928fc8-1674-42cb-b392-05929396fea7",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ApplicationResponse != nil {
        // handle response
    }
}
```

## ListApplication

List available applications

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListApplication(ctx, operations.ListApplicationRequest{
        Page: sdk.Int64(359508),
        PageSize: sdk.Int64(613064),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ApplicationResponseCollection != nil {
        // handle response
    }
}
```

## UpdateApplication

Update an application

### Example Usage

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
    res, err := s.SDK.UpdateApplication(ctx, operations.UpdateApplicationRequest{
        RequestBody: operations.UpdateApplicationRequestBody{
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
                    Version: sdk.String("iure"),
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
                    "quidem": "architecto",
                    "ipsa": "reiciendis",
                    "est": "mollitia",
                    "laborum": "dolores",
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
            Keys: &operations.UpdateApplicationRequestBodyKeys{
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
            Privacy: &operations.UpdateApplicationRequestBodyPrivacy{
                ImproveAi: sdk.Bool(true),
            },
        },
        ID: "52c59559-07af-4f1a-ba2f-a9467739251a",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateApplication200ApplicationJSONObject != nil {
        // handle response
    }
}
```
