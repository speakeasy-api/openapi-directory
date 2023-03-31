<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateApplicationRequestBodyKeys;
import org.openapis.openapi.models.operations.CreateApplicationRequestBodyPrivacy;
import org.openapis.openapi.models.operations.CreateApplicationRequestBody;
import org.openapis.openapi.models.operations.CreateApplicationRequest;
import org.openapis.openapi.models.operations.CreateApplicationResponse;
import org.openapis.openapi.models.shared.Capabilities;
import org.openapis.openapi.models.shared.VoiceCapabilityPaymentsGatewaysModeEnum;
import org.openapis.openapi.models.shared.VoiceCapabilityPaymentsGateways;
import org.openapis.openapi.models.shared.VoiceCapabilityPayments;
import org.openapis.openapi.models.shared.VoiceCapabilityWebhooksAnswerUrlHttpMethodEnum;
import org.openapis.openapi.models.shared.VoiceCapabilityWebhooksAnswerUrl;
import org.openapis.openapi.models.shared.VoiceCapabilityWebhooksEventUrlHttpMethodEnum;
import org.openapis.openapi.models.shared.VoiceCapabilityWebhooksEventUrl;
import org.openapis.openapi.models.shared.VoiceCapabilityWebhooksFallbackAnswerUrlHttpMethodEnum;
import org.openapis.openapi.models.shared.VoiceCapabilityWebhooksFallbackAnswerUrl;
import org.openapis.openapi.models.shared.VoiceCapabilityWebhooks;
import org.openapis.openapi.models.shared.VoiceCapability;
import org.openapis.openapi.models.shared.VerifyCapabilityVersionEnum;
import org.openapis.openapi.models.shared.VerifyCapabilityWebhooksStatusUrlHttpMethodEnum;
import org.openapis.openapi.models.shared.VerifyCapabilityWebhooksStatusUrl;
import org.openapis.openapi.models.shared.VerifyCapabilityWebhooks;
import org.openapis.openapi.models.shared.VerifyCapability;
import org.openapis.openapi.models.shared.RtcCapabilityWebhooksEventUrlHttpMethodEnum;
import org.openapis.openapi.models.shared.RtcCapabilityWebhooksEventUrl;
import org.openapis.openapi.models.shared.RtcCapabilityWebhooks;
import org.openapis.openapi.models.shared.RtcCapability;
import org.openapis.openapi.models.shared.MessagesCapabilityWebhooksInboundUrlHttpMethodEnum;
import org.openapis.openapi.models.shared.MessagesCapabilityWebhooksInboundUrl;
import org.openapis.openapi.models.shared.MessagesCapabilityWebhooksStatusUrlHttpMethodEnum;
import org.openapis.openapi.models.shared.MessagesCapabilityWebhooksStatusUrl;
import org.openapis.openapi.models.shared.MessagesCapabilityWebhooks;
import org.openapis.openapi.models.shared.MessagesCapability;
import org.openapis.openapi.models.shared.MeetingsCapabilityWebhooksRecordingChangedHttpMethodEnum;
import org.openapis.openapi.models.shared.MeetingsCapabilityWebhooksRecordingChanged;
import org.openapis.openapi.models.shared.MeetingsCapabilityWebhooksRoomChangedHttpMethodEnum;
import org.openapis.openapi.models.shared.MeetingsCapabilityWebhooksRoomChanged;
import org.openapis.openapi.models.shared.MeetingsCapabilityWebhooksSessionChangedHttpMethodEnum;
import org.openapis.openapi.models.shared.MeetingsCapabilityWebhooksSessionChanged;
import org.openapis.openapi.models.shared.MeetingsCapabilityWebhooks;
import org.openapis.openapi.models.shared.MeetingsCapability;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth() {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            CreateApplicationRequest req = new CreateApplicationRequest() {{
                request = new CreateApplicationRequestBody() {{
                    capabilities = new Capabilities() {{
                        meetings = new MeetingsCapability() {{
                            webhooks = new MeetingsCapabilityWebhooks() {{
                                recordingChanged = new MeetingsCapabilityWebhooksRecordingChanged() {{
                                    address = "https://example.com/webhooks/event";
                                    httpMethod = "POST";
                                }};
                                roomChanged = new MeetingsCapabilityWebhooksRoomChanged() {{
                                    address = "https://example.com/webhooks/event";
                                    httpMethod = "POST";
                                }};
                                sessionChanged = new MeetingsCapabilityWebhooksSessionChanged() {{
                                    address = "https://example.com/webhooks/event";
                                    httpMethod = "POST";
                                }};
                            }};
                        }};
                        messages = new MessagesCapability() {{
                            version = "corrupti";
                            webhooks = new MessagesCapabilityWebhooks() {{
                                inboundUrl = new MessagesCapabilityWebhooksInboundUrl() {{
                                    address = "https://example.com/webhooks/inbound";
                                    httpMethod = "POST";
                                }};
                                statusUrl = new MessagesCapabilityWebhooksStatusUrl() {{
                                    address = "https://example.com/webhooks/status";
                                    httpMethod = "POST";
                                }};
                            }};
                        }};
                        rtc = new RtcCapability() {{
                            legPersistenceTime = 5;
                            signedCallbacks = true;
                            webhooks = new RtcCapabilityWebhooks() {{
                                eventUrl = new RtcCapabilityWebhooksEventUrl() {{
                                    address = "https://example.com/webhooks/event";
                                    httpMethod = "POST";
                                }};
                            }};
                        }};
                        vbc = new java.util.HashMap<String, Object>() {{
                            put("distinctio", "quibusdam");
                            put("unde", "nulla");
                            put("corrupti", "illum");
                        }};
                        verify = new VerifyCapability() {{
                            version = "v2";
                            webhooks = new VerifyCapabilityWebhooks() {{
                                statusUrl = new VerifyCapabilityWebhooksStatusUrl() {{
                                    address = "https://example.com/webhooks/event";
                                    httpMethod = "POST";
                                }};
                            }};
                        }};
                        voice = new VoiceCapability() {{
                            conversationTtl = 30;
                            payments = new VoiceCapabilityPayments() {{
                                gateways = new org.openapis.openapi.models.shared.VoiceCapabilityPaymentsGateways[]{{
                                    add(new VoiceCapabilityPaymentsGateways() {{
                                        credential = "26f2a89e-6fcd-11ed-a1eb-0242ac120002";
                                        mode = "live";
                                        type = "Stripe";
                                    }}),
                                    add(new VoiceCapabilityPaymentsGateways() {{
                                        credential = "26f2a89e-6fcd-11ed-a1eb-0242ac120002";
                                        mode = "live";
                                        type = "Stripe";
                                    }}),
                                }};
                            }};
                            signedCallbacks = true;
                            webhooks = new VoiceCapabilityWebhooks() {{
                                answerUrl = new VoiceCapabilityWebhooksAnswerUrl() {{
                                    address = "https://example.com/webhooks/answer";
                                    connectionTimeout = 500;
                                    httpMethod = "POST";
                                    socketTimeout = 3000;
                                }};
                                eventUrl = new VoiceCapabilityWebhooksEventUrl() {{
                                    address = "https://example.com/webhooks/event";
                                    connectionTimeout = 500;
                                    httpMethod = "POST";
                                    socketTimeout = 3000;
                                }};
                                fallbackAnswerUrl = new VoiceCapabilityWebhooksFallbackAnswerUrl() {{
                                    address = "https://fallback.example.com/webhooks/answer";
                                    connectionTimeout = 500;
                                    httpMethod = "POST";
                                    socketTimeout = 3000;
                                }};
                            }};
                        }};
                    }};
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
                    }};
                    name = "Demo Application";
                    privacy = new CreateApplicationRequestBodyPrivacy() {{
                        improveAi = true;
                    }};
                }};
            }};            

            CreateApplicationResponse res = sdk.createApplication(req);

            if (res.createApplication201ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->