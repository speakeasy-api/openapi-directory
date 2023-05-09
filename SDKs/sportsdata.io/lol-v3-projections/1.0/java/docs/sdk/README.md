# SDK

## Overview

LoL v3 Projections

### Available Operations

* [dfsSlatesByDate](#dfsslatesbydate) - Dfs Slates By Date
* [projectedPlayerGameStatsByDate](#projectedplayergamestatsbydate) - Projected Player Game Stats by Date
* [projectedPlayerGameStatsByPlayer](#projectedplayergamestatsbyplayer) - Projected Player Game Stats by Player

## dfsSlatesByDate

Dfs Slates By Date

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfsSlatesByDateFormatEnum;
import org.openapis.openapi.models.operations.DfsSlatesByDateRequest;
import org.openapis.openapi.models.operations.DfsSlatesByDateResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            DfsSlatesByDateRequest req = new DfsSlatesByDateRequest("distinctio", DfsSlatesByDateFormatEnum.XML);            

            DfsSlatesByDateResponse res = sdk.sdk.dfsSlatesByDate(req);

            if (res.dfsSlates != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## projectedPlayerGameStatsByDate

Projected Player Game Stats by Date

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProjectedPlayerGameStatsByDateFormatEnum;
import org.openapis.openapi.models.operations.ProjectedPlayerGameStatsByDateRequest;
import org.openapis.openapi.models.operations.ProjectedPlayerGameStatsByDateResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            ProjectedPlayerGameStatsByDateRequest req = new ProjectedPlayerGameStatsByDateRequest("unde", ProjectedPlayerGameStatsByDateFormatEnum.JSON);            

            ProjectedPlayerGameStatsByDateResponse res = sdk.sdk.projectedPlayerGameStatsByDate(req);

            if (res.playerGameProjections != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## projectedPlayerGameStatsByPlayer

Projected Player Game Stats by Date

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProjectedPlayerGameStatsByPlayerFormatEnum;
import org.openapis.openapi.models.operations.ProjectedPlayerGameStatsByPlayerRequest;
import org.openapis.openapi.models.operations.ProjectedPlayerGameStatsByPlayerResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            ProjectedPlayerGameStatsByPlayerRequest req = new ProjectedPlayerGameStatsByPlayerRequest("corrupti", ProjectedPlayerGameStatsByPlayerFormatEnum.JSON, "vel");            

            ProjectedPlayerGameStatsByPlayerResponse res = sdk.sdk.projectedPlayerGameStatsByPlayer(req);

            if (res.playerGameProjections != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
