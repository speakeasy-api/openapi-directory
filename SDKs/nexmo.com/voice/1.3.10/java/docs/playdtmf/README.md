# playDTMF

## Overview

Play DTMF tones in to an active call

### Available Operations

* [startDTMF](#startdtmf) - Play DTMF tones into a call

## startDTMF

Play DTMF tones into a call

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartDTMFRequest;
import org.openapis.openapi.models.operations.StartDTMFResponse;
import org.openapis.openapi.models.operations.StartDTMFSecurity;
import org.openapis.openapi.models.shared.DTMFRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StartDTMFRequest req = new StartDTMFRequest(                new DTMFRequest() {{
                                digits = "1713";
                            }};, "enim");            

            StartDTMFResponse res = sdk.playDTMF.startDTMF(req, new StartDTMFSecurity("odit") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.dtmfResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
