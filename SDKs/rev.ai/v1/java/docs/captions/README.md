# captions

### Available Operations

* [getCaptions](#getcaptions) - Get Captions

## getCaptions

Returns the caption output for a transcription job. We currently support SubRip (SRT) and Web Video Text Tracks (VTT) output.
Caption output format can be specified in the `Accept` header. Returns SRT by default.
***
Note: For streaming jobs, transient failure of our storage during a live session may prevent the final hypothesis elements from saving properly, resulting in an incomplete caption file. This is rare, but not impossible.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCaptionsRequest;
import org.openapis.openapi.models.operations.GetCaptionsResponse;
import org.openapis.openapi.models.shared.AcceptCaptionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("distinctio") {{
                    accessToken = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            GetCaptionsRequest req = new GetCaptionsRequest("quibusdam") {{
                accept = AcceptCaptionEnum.TEXT_VTT;
                speakerChannel = 857946L;
            }};            

            GetCaptionsResponse res = sdk.captions.getCaptions(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
