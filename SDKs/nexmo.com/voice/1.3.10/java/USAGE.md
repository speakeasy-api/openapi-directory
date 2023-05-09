<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateCallResponse;
import org.openapis.openapi.models.operations.CreateCallSecurity;
import org.openapis.openapi.models.shared.CreateCallRequestAnswerUrl;
import org.openapis.openapi.models.shared.CreateCallRequestAnswerUrlAnswerMethodEnum;
import org.openapis.openapi.models.shared.CreateCallRequestAnswerUrlEventMethodEnum;
import org.openapis.openapi.models.shared.CreateCallRequestAnswerUrlMachineDetectionEnum;
import org.openapis.openapi.models.shared.CreateCallRequestNcco;
import org.openapis.openapi.models.shared.CreateCallRequestNccoEventMethodEnum;
import org.openapis.openapi.models.shared.CreateCallRequestNccoMachineDetectionEnum;
import org.openapis.openapi.models.shared.EndpointPhoneFrom;
import org.openapis.openapi.models.shared.EndpointPhoneTo;
import org.openapis.openapi.models.shared.EndpointSip;
import org.openapis.openapi.models.shared.EndpointVBCExtension;
import org.openapis.openapi.models.shared.EndpointWebsocket;
import org.openapis.openapi.models.shared.EndpointWebsocketContentTypeEnum;
import org.openapis.openapi.models.shared.EndpointWebsocketHeaders;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = new CreateCallRequestAnswerUrl(                new String[]{{
                                add("perferendis"),
                                add("ipsam"),
                                add("repellendus"),
                            }},                 new EndpointPhoneFrom("14155550100", "phone");,                 new Object[]{{
                                add(new EndpointVBCExtension("1234", "vbc") {{
                                    extension = "1234";
                                    type = "vbc";
                                }}),
                                add(new EndpointPhoneTo("14155550100", "phone") {{
                                    dtmfAnswer = "p*123#";
                                    number = "14155550100";
                                    type = "phone";
                                }}),
                                add(new EndpointVBCExtension("1234", "vbc") {{
                                    extension = "1234";
                                    type = "vbc";
                                }}),
                                add(new EndpointVBCExtension("1234", "vbc") {{
                                    extension = "1234";
                                    type = "vbc";
                                }}),
                            }}) {{
                answerMethod = CreateCallRequestAnswerUrlAnswerMethodEnum.GET;
                answerUrl = new String[]{{
                    add("quibusdam"),
                    add("unde"),
                    add("nulla"),
                }};
                eventMethod = CreateCallRequestAnswerUrlEventMethodEnum.GET;
                eventUrl = new String[]{{
                    add("http://physical-pegboard.info"),
                    add("http://fond-teen.com"),
                    add("https://fatherly-geyser.info"),
                    add("https://studious-lynx.info"),
                }};
                from = new EndpointPhoneFrom("14155550100", "phone") {{
                    number = "14155550100";
                    type = "phone";
                }};
                lengthTimer = 568045L;
                machineDetection = CreateCallRequestAnswerUrlMachineDetectionEnum.CONTINUE_;
                randomFromNumber = false;
                ringingTimer = 392785L;
                to = new Object[]{{
                    add(new EndpointVBCExtension("1234", "vbc") {{
                        extension = "1234";
                        type = "vbc";
                    }}),
                    add(new EndpointPhoneTo("14155550100", "phone") {{
                        dtmfAnswer = "p*123#";
                        number = "14155550100";
                        type = "phone";
                    }}),
                    add(new EndpointSip("sip") {{
                        type = "sip";
                        uri = "sip:rebekka@sip.example.com";
                    }}),
                    add(new EndpointPhoneTo("14155550100", "phone") {{
                        dtmfAnswer = "p*123#";
                        number = "14155550100";
                        type = "phone";
                    }}),
                }};
            }}            

            CreateCallResponse res = sdk.calls.createCall(req, new CreateCallSecurity("maiores") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.createCallResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->