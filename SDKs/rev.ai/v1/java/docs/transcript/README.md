# transcript

### Available Operations

* [getTranscriptById](#gettranscriptbyid) - Get Transcript By Id

## getTranscriptById

Returns the transcript for a completed transcription job. Transcript can be returned as either JSON or plaintext format. Transcript output format can be specified in the `Accept` header. Returns JSON by default.
***
Note: For streaming jobs, transient failure of our storage during a live session may prevent the final hypothesis elements from saving properly, resulting in an incomplete transcript. This is rare, but not impossible. To guarantee 100% completeness, we recommend capturing all final hypothesis when you receive them on the client.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTranscriptByIdRequest;
import org.openapis.openapi.models.operations.GetTranscriptByIdResponse;
import org.openapis.openapi.models.shared.AcceptTranscriptEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quod") {{
                    accessToken = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            GetTranscriptByIdRequest req = new GetTranscriptByIdRequest("esse") {{
                accept = AcceptTranscriptEnum.TEXT_PLAIN;
            }};            

            GetTranscriptByIdResponse res = sdk.transcript.getTranscriptById(req);

            if (res.transcript != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
