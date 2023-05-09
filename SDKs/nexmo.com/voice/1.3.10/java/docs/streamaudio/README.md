# streamAudio

## Overview

Start or stop streaming audio in to an active call

### Available Operations

* [startStream](#startstream) - Play an audio file into a call
* [stopStream](#stopstream) - Stop playing an audio file into a call

## startStream

Play an audio file into a call

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartStreamRequest;
import org.openapis.openapi.models.operations.StartStreamResponse;
import org.openapis.openapi.models.operations.StartStreamSecurity;
import org.openapis.openapi.models.shared.StartStreamRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StartStreamRequest req = new StartStreamRequest(                new StartStreamRequest(                new String[]{{
                                                add("temporibus"),
                                                add("laborum"),
                                                add("quasi"),
                                            }}) {{
                                level = "0.4";
                                loop = 971945L;
                            }};, "voluptatibus");            

            StartStreamResponse res = sdk.streamAudio.startStream(req, new StartStreamSecurity("vero") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.startStreamResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## stopStream

Stop playing an audio file into a call

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StopStreamRequest;
import org.openapis.openapi.models.operations.StopStreamResponse;
import org.openapis.openapi.models.operations.StopStreamSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StopStreamRequest req = new StopStreamRequest("nihil");            

            StopStreamResponse res = sdk.streamAudio.stopStream(req, new StopStreamSecurity("praesentium") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.stopStreamResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
