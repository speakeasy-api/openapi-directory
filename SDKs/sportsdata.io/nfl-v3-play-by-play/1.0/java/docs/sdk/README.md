# SDK

## Overview

NFL play-by-play API.

### Available Operations

* [playByPlay](#playbyplay) - Play By Play
* [playByPlayDelta](#playbyplaydelta) - Play By Play Delta
* [playByPlaySimulation](#playbyplaysimulation) - Play By Play Simulation

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

            PlayByPlayRequest req = new PlayByPlayRequest(PlayByPlayFormatEnum.JSON, "nulla", "corrupti", "illum");            

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

            PlayByPlayDeltaRequest req = new PlayByPlayDeltaRequest(PlayByPlayDeltaFormatEnum.XML, "error", "deserunt", "suscipit");            

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

## playByPlaySimulation

Gets simulated live play-by-play of NFL games, covering the Conference Championship games on January 21, 2018.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PlayByPlaySimulationFormatEnum;
import org.openapis.openapi.models.operations.PlayByPlaySimulationRequest;
import org.openapis.openapi.models.operations.PlayByPlaySimulationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            PlayByPlaySimulationRequest req = new PlayByPlaySimulationRequest(PlayByPlaySimulationFormatEnum.XML, "magnam");            

            PlayByPlaySimulationResponse res = sdk.sdk.playByPlaySimulation(req);

            if (res.playByPlays != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
