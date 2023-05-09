# SDK

## Overview

MLB play-by-play API.

### Available Operations

* [playByPlay](#playbyplay) - Play By Play
* [playByPlayDelta](#playbyplaydelta) - Play By Play Delta

## playByPlay

Play By Play

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PlayByPlayFormatEnum;
import org.openapis.openapi.models.operations.PlayByPlayRequest;
import org.openapis.openapi.models.operations.PlayByPlayResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            PlayByPlayRequest req = new PlayByPlayRequest(PlayByPlayFormatEnum.JSON, "quibusdam");            

            PlayByPlayResponse res = sdk.sdk.playByPlay(req);

            if (res.playByPlay != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## playByPlayDelta

Play By Play Delta

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PlayByPlayDeltaFormatEnum;
import org.openapis.openapi.models.operations.PlayByPlayDeltaRequest;
import org.openapis.openapi.models.operations.PlayByPlayDeltaResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            PlayByPlayDeltaRequest req = new PlayByPlayDeltaRequest("unde", PlayByPlayDeltaFormatEnum.JSON, "corrupti");            

            PlayByPlayDeltaResponse res = sdk.sdk.playByPlayDelta(req);

            if (res.playByPlays != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
