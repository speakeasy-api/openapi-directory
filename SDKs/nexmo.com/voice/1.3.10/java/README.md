# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## SDK Available Operations


### calls

* `createCall` - Create an outbound call
* `getCall` - Get detail of a specific call
* `getCalls` - Get details of your calls
* `updateCall` - Modify an in progress call

### playDTMF

* `startDTMF` - Play DTMF tones into a call

### playTTS

* `startTalk` - Play text to speech into a call
* `stopTalk` - Stop text to speech in a call

### streamAudio

* `startStream` - Play an audio file into a call
* `stopStream` - Stop playing an audio file into a call
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
