<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateApplicationRequestBody;
import org.openapis.openapi.models.operations.CreateApplicationRequestBodyKeys;
import org.openapis.openapi.models.operations.CreateApplicationRequestBodyPrivacy;
import org.openapis.openapi.models.operations.CreateApplicationResponse;
import org.openapis.openapi.models.shared.Capabilities;
import org.openapis.openapi.models.shared.MeetingsCapability;
import org.openapis.openapi.models.shared.MeetingsCapabilityWebhooks;
import org.openapis.openapi.models.shared.MeetingsCapabilityWebhooksRecordingChanged;
import org.openapis.openapi.models.shared.MeetingsCapabilityWebhooksRecordingChangedHttpMethodEnum;
import org.openapis.openapi.models.shared.MeetingsCapabilityWebhooksRoomChanged;
import org.openapis.openapi.models.shared.MeetingsCapabilityWebhooksRoomChangedHttpMethodEnum;
import org.openapis.openapi.models.shared.MeetingsCapabilityWebhooksSessionChanged;
import org.openapis.openapi.models.shared.MeetingsCapabilityWebhooksSessionChangedHttpMethodEnum;
import org.openapis.openapi.models.shared.MessagesCapability;
import org.openapis.openapi.models.shared.MessagesCapabilityWebhooks;
import org.openapis.openapi.models.shared.MessagesCapabilityWebhooksInboundUrl;
import org.openapis.openapi.models.shared.MessagesCapabilityWebhooksInboundUrlHttpMethodEnum;
import org.openapis.openapi.models.shared.MessagesCapabilityWebhooksStatusUrl;
import org.openapis.openapi.models.shared.MessagesCapabilityWebhooksStatusUrlHttpMethodEnum;
import org.openapis.openapi.models.shared.RtcCapability;
import org.openapis.openapi.models.shared.RtcCapabilityWebhooks;
import org.openapis.openapi.models.shared.RtcCapabilityWebhooksEventUrl;
import org.openapis.openapi.models.shared.RtcCapabilityWebhooksEventUrlHttpMethodEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.VerifyCapability;
import org.openapis.openapi.models.shared.VerifyCapabilityVersionEnum;
import org.openapis.openapi.models.shared.VerifyCapabilityWebhooks;
import org.openapis.openapi.models.shared.VerifyCapabilityWebhooksStatusUrl;
import org.openapis.openapi.models.shared.VerifyCapabilityWebhooksStatusUrlHttpMethodEnum;
import org.openapis.openapi.models.shared.VoiceCapability;
import org.openapis.openapi.models.shared.VoiceCapabilityPayments;
import org.openapis.openapi.models.shared.VoiceCapabilityPaymentsGateways;
import org.openapis.openapi.models.shared.VoiceCapabilityPaymentsGatewaysModeEnum;
import org.openapis.openapi.models.shared.VoiceCapabilityWebhooks;
import org.openapis.openapi.models.shared.VoiceCapabilityWebhooksAnswerUrl;
import org.openapis.openapi.models.shared.VoiceCapabilityWebhooksAnswerUrlHttpMethodEnum;
import org.openapis.openapi.models.shared.VoiceCapabilityWebhooksEventUrl;
import org.openapis.openapi.models.shared.VoiceCapabilityWebhooksEventUrlHttpMethodEnum;
import org.openapis.openapi.models.shared.VoiceCapabilityWebhooksFallbackAnswerUrl;
import org.openapis.openapi.models.shared.VoiceCapabilityWebhooksFallbackAnswerUrlHttpMethodEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti", "provident") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            CreateApplicationRequestBody req = new CreateApplicationRequestBody("Demo Application") {{
                capabilities = new Capabilities() {{
                    meetings = new MeetingsCapability() {{
                        webhooks = new MeetingsCapabilityWebhooks() {{
                            recordingChanged = new MeetingsCapabilityWebhooksRecordingChanged() {{
                                address = "https://example.com/webhooks/event";
                                httpMethod = MeetingsCapabilityWebhooksRecordingChangedHttpMethodEnum.POST;
                            }};;
                            roomChanged = new MeetingsCapabilityWebhooksRoomChanged() {{
                                address = "https://example.com/webhooks/event";
                                httpMethod = MeetingsCapabilityWebhooksRoomChangedHttpMethodEnum.POST;
                            }};;
                            sessionChanged = new MeetingsCapabilityWebhooksSessionChanged() {{
                                address = "https://example.com/webhooks/event";
                                httpMethod = MeetingsCapabilityWebhooksSessionChangedHttpMethodEnum.POST;
                            }};;
                        }};;
                    }};;
                    messages = new MessagesCapability() {{
                        version = "distinctio";
                        webhooks = new MessagesCapabilityWebhooks() {{
                            inboundUrl = new MessagesCapabilityWebhooksInboundUrl() {{
                                address = "https://example.com/webhooks/inbound";
                                httpMethod = MessagesCapabilityWebhooksInboundUrlHttpMethodEnum.POST;
                            }};;
                            statusUrl = new MessagesCapabilityWebhooksStatusUrl() {{
                                address = "https://example.com/webhooks/status";
                                httpMethod = MessagesCapabilityWebhooksStatusUrlHttpMethodEnum.POST;
                            }};;
                        }};;
                    }};;
                    rtc = new RtcCapability() {{
                        legPersistenceTime = 5;
                        signedCallbacks = true;
                        webhooks = new RtcCapabilityWebhooks() {{
                            eventUrl = new RtcCapabilityWebhooksEventUrl() {{
                                address = "https://example.com/webhooks/event";
                                httpMethod = RtcCapabilityWebhooksEventUrlHttpMethodEnum.POST;
                            }};;
                        }};;
                    }};;
                    vbc = new java.util.HashMap<String, Object>() {{
                        put("unde", "nulla");
                        put("corrupti", "illum");
                        put("vel", "error");
                        put("deserunt", "suscipit");
                    }};
                    verify = new VerifyCapability() {{
                        version = VerifyCapabilityVersionEnum.V2;
                        webhooks = new VerifyCapabilityWebhooks() {{
                            statusUrl = new VerifyCapabilityWebhooksStatusUrl() {{
                                address = "https://example.com/webhooks/event";
                                httpMethod = VerifyCapabilityWebhooksStatusUrlHttpMethodEnum.POST;
                            }};;
                        }};;
                    }};;
                    voice = new VoiceCapability() {{
                        conversationTtl = 30L;
                        payments = new VoiceCapabilityPayments() {{
                            gateways = new org.openapis.openapi.models.shared.VoiceCapabilityPaymentsGateways[]{{
                                add(new VoiceCapabilityPaymentsGateways() {{
                                    credential = "26f2a89e-6fcd-11ed-a1eb-0242ac120002";
                                    mode = VoiceCapabilityPaymentsGatewaysModeEnum.LIVE;
                                    type = "Stripe";
                                }}),
                                add(new VoiceCapabilityPaymentsGateways() {{
                                    credential = "26f2a89e-6fcd-11ed-a1eb-0242ac120002";
                                    mode = VoiceCapabilityPaymentsGatewaysModeEnum.LIVE;
                                    type = "Stripe";
                                }}),
                            }};
                        }};;
                        signedCallbacks = true;
                        webhooks = new VoiceCapabilityWebhooks() {{
                            answerUrl = new VoiceCapabilityWebhooksAnswerUrl() {{
                                address = "https://example.com/webhooks/answer";
                                connectionTimeout = 500L;
                                httpMethod = VoiceCapabilityWebhooksAnswerUrlHttpMethodEnum.POST;
                                socketTimeout = 3000L;
                            }};;
                            eventUrl = new VoiceCapabilityWebhooksEventUrl() {{
                                address = "https://example.com/webhooks/event";
                                connectionTimeout = 500L;
                                httpMethod = VoiceCapabilityWebhooksEventUrlHttpMethodEnum.POST;
                                socketTimeout = 3000L;
                            }};;
                            fallbackAnswerUrl = new VoiceCapabilityWebhooksFallbackAnswerUrl() {{
                                address = "https://fallback.example.com/webhooks/answer";
                                connectionTimeout = 500L;
                                httpMethod = VoiceCapabilityWebhooksFallbackAnswerUrlHttpMethodEnum.POST;
                                socketTimeout = 3000L;
                            }};;
                        }};;
                    }};;
                }};;
                keys = new CreateApplicationRequestBodyKeys() {{
                    publicKey = "-----BEGIN PUBLIC KEY-----
                MIIBIjANBgkqhkiG9w0BAQEFAAOCA
                KOxjsU4pf/sMFi9N0jqcSLcjxu33G
                d/vynKnlw9SENi+UZR44GdjGdmfm1
                tL1eA7IBh2HNnkYXnAwYzKJoa4eO3
                0kYWekeIZawIwe/g9faFgkev+1xsO
                OUNhPx2LhuLmgwWSRS4L5W851Xe3f
                UQIDAQAB
                -----END PUBLIC KEY-----
                ";
                }};;
                privacy = new CreateApplicationRequestBodyPrivacy() {{
                    improveAi = true;
                }};;
            }};            

            CreateApplicationResponse res = sdk.createApplication(req);

            if (res.createApplication201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->