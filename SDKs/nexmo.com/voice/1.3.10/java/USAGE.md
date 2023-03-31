<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.CreateCallSecurity;
import org.openapis.openapi.models.operations.CreateCallRequest;
import org.openapis.openapi.models.operations.CreateCallResponse;
import org.openapis.openapi.models.shared.CreateCallRequestNccoEventMethodEnum;
import org.openapis.openapi.models.shared.CreateCallRequestNccoMachineDetectionEnum;
import org.openapis.openapi.models.shared.CreateCallRequestNcco;
import org.openapis.openapi.models.shared.EndpointPhoneTo;
import org.openapis.openapi.models.shared.EndpointSip;
import org.openapis.openapi.models.shared.EndpointWebsocketContentTypeEnum;
import org.openapis.openapi.models.shared.EndpointWebsocketHeaders;
import org.openapis.openapi.models.shared.EndpointWebsocket;
import org.openapis.openapi.models.shared.EndpointVBCExtension;
import org.openapis.openapi.models.shared.EndpointPhoneFrom;
import org.openapis.openapi.models.shared.CreateCallRequestAnswerUrlAnswerMethodEnum;
import org.openapis.openapi.models.shared.CreateCallRequestAnswerUrlEventMethodEnum;
import org.openapis.openapi.models.shared.CreateCallRequestAnswerUrlMachineDetectionEnum;
import org.openapis.openapi.models.shared.CreateCallRequestAnswerUrl;
import org.openapis.openapi.models.shared.SchemeBearerAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateCallRequest req = new CreateCallRequest() {{
                security = new CreateCallSecurity() {{
                    bearerAuth = new SchemeBearerAuth() {{
                        authorization = "Bearer YOUR_BEARER_TOKEN_HERE";
                    }};
                }};
                request = new CreateCallRequestAnswerUrl() {{
                    answerMethod = "GET";
                    answerUrl = new String[]{{
                        add("quibusdam"),
                        add("unde"),
                        add("nulla"),
                    }};
                    eventMethod = "GET";
                    eventUrl = new String[]{{
                        add("http://physical-pegboard.info"),
                        add("http://fond-teen.com"),
                        add("https://fatherly-geyser.info"),
                        add("https://studious-lynx.info"),
                    }};
                    from = new EndpointPhoneFrom() {{
                        number = "14155550100";
                        type = "phone";
                    }};
                    lengthTimer = 568045;
                    machineDetection = "continue";
                    randomFromNumber = false;
                    ringingTimer = 392785;
                    to = new Object[]{{
                        add(new EndpointVBCExtension() {{
                            extension = "1234";
                            type = "vbc";
                        }}),
                        add(new EndpointPhoneTo() {{
                            dtmfAnswer = "p*123#";
                            number = "14155550100";
                            type = "phone";
                        }}),
                        add(new EndpointSip() {{
                            type = "sip";
                            uri = "sip:rebekka@sip.example.com";
                        }}),
                        add(new EndpointPhoneTo() {{
                            dtmfAnswer = "p*123#";
                            number = "14155550100";
                            type = "phone";
                        }}),
                    }};
                }};
            }};            

            CreateCallResponse res = sdk.calls.createCall(req);

            if (res.createCallResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->