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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [calls](docs/calls/README.md)

* [createCall](docs/calls/README.md#createcall) - Create an outbound call
* [getCall](docs/calls/README.md#getcall) - Get detail of a specific call
* [getCalls](docs/calls/README.md#getcalls) - Get details of your calls
* [updateCall](docs/calls/README.md#updatecall) - Modify an in progress call

### [playDTMF](docs/playdtmf/README.md)

* [startDTMF](docs/playdtmf/README.md#startdtmf) - Play DTMF tones into a call

### [playTTS](docs/playtts/README.md)

* [startTalk](docs/playtts/README.md#starttalk) - Play text to speech into a call
* [stopTalk](docs/playtts/README.md#stoptalk) - Stop text to speech in a call

### [streamAudio](docs/streamaudio/README.md)

* [startStream](docs/streamaudio/README.md#startstream) - Play an audio file into a call
* [stopStream](docs/streamaudio/README.md#stopstream) - Stop playing an audio file into a call
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
