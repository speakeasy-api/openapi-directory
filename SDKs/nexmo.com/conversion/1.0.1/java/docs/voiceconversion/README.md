# voiceConversion

## Overview

Voice Conversion Request

### Available Operations

* [voiceConversion](#voiceconversion) - Tell Nexmo if your voice call was successful

## voiceConversion

Send a Conversion API request with information about the Call or Text-To-Speech identified by `message-id`. Nexmo uses your conversion data and internal information about `message-id` to help improve our routing of messages in the future.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VoiceConversionRequest;
import org.openapis.openapi.models.operations.VoiceConversionResponse;
import org.openapis.openapi.models.shared.DeliveredEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    option1 = new SecurityOption1("deserunt", "suscipit") {{
                        apiKey = "YOUR_API_KEY_HERE";
                        apiSecret = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            VoiceConversionRequest req = new VoiceConversionRequest(DeliveredEnum.FALSE, "magnam", "debitis");            

            VoiceConversionResponse res = sdk.voiceConversion.voiceConversion(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
