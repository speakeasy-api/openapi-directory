# playTTS

## Overview

Start or stop playing Text to Speech in to an active call

### Available Operations

* [startTalk](#starttalk) - Play text to speech into a call
* [stopTalk](#stoptalk) - Stop text to speech in a call

## startTalk

Play text to speech into a call

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartTalkRequest;
import org.openapis.openapi.models.operations.StartTalkResponse;
import org.openapis.openapi.models.operations.StartTalkSecurity;
import org.openapis.openapi.models.shared.LanguageEnum;
import org.openapis.openapi.models.shared.StartTalkRequest;
import org.openapis.openapi.models.shared.VoiceNameEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StartTalkRequest req = new StartTalkRequest("quo") {{
                startTalkRequest = new StartTalkRequest("Hello. How are you today?") {{
                    language = LanguageEnum.EN_AU;
                    level = "0.4";
                    loop = 949572L;
                    premium = false;
                    style = 368725L;
                    voiceName = VoiceNameEnum.MEI_JIA;
                }};;
            }};            

            StartTalkResponse res = sdk.playTTS.startTalk(req, new StartTalkSecurity("possimus") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.startTalkResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## stopTalk

Stop text to speech in a call

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StopTalkRequest;
import org.openapis.openapi.models.operations.StopTalkResponse;
import org.openapis.openapi.models.operations.StopTalkSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StopTalkRequest req = new StopTalkRequest("aut");            

            StopTalkResponse res = sdk.playTTS.stopTalk(req, new StopTalkSecurity("quasi") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.stopTalkResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
