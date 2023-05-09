# SDK

### Available Operations

* [dfsSlatesByDate](#dfsslatesbydate) - DFS Slates by Date
* [injuredPlayers](#injuredplayers) - Injured Players
* [projectedPlayerGameStatsByDateWInjuriesDfsSalaries](#projectedplayergamestatsbydatewinjuriesdfssalaries) - Projected Player Game Stats by Date (w/ Injuries, DFS Salaries)
* [projectedPlayerGameStatsByPlayerWInjuriesDfsSalaries](#projectedplayergamestatsbyplayerwinjuriesdfssalaries) - Projected Player Game Stats by Player (w/ Injuries, DFS Salaries)
* [startingGoaltendersByDate](#startinggoaltendersbydate) - Starting Goaltenders by Date

## dfsSlatesByDate

DFS Slates by Date

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

            DfsSlatesByDateRequest req = new DfsSlatesByDateRequest("distinctio", DfsSlatesByDateFormatEnum.JSON);            

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

## injuredPlayers

This endpoint provides all currently injured NHL players, along with injury details.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.InjuredPlayersFormatEnum;
import org.openapis.openapi.models.operations.InjuredPlayersRequest;
import org.openapis.openapi.models.operations.InjuredPlayersResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            InjuredPlayersRequest req = new InjuredPlayersRequest(InjuredPlayersFormatEnum.JSON);            

            InjuredPlayersResponse res = sdk.sdk.injuredPlayers(req);

            if (res.players != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## projectedPlayerGameStatsByDateWInjuriesDfsSalaries

Projected Player Game Stats by Date (w/ Injuries, DFS Salaries)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProjectedPlayerGameStatsByDateWInjuriesDfsSalariesFormatEnum;
import org.openapis.openapi.models.operations.ProjectedPlayerGameStatsByDateWInjuriesDfsSalariesRequest;
import org.openapis.openapi.models.operations.ProjectedPlayerGameStatsByDateWInjuriesDfsSalariesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            ProjectedPlayerGameStatsByDateWInjuriesDfsSalariesRequest req = new ProjectedPlayerGameStatsByDateWInjuriesDfsSalariesRequest("nulla", ProjectedPlayerGameStatsByDateWInjuriesDfsSalariesFormatEnum.JSON);            

            ProjectedPlayerGameStatsByDateWInjuriesDfsSalariesResponse res = sdk.sdk.projectedPlayerGameStatsByDateWInjuriesDfsSalaries(req);

            if (res.playerGameProjections != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## projectedPlayerGameStatsByPlayerWInjuriesDfsSalaries

Projected Player Game Stats by Player (w/ Injuries, DFS Salaries)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProjectedPlayerGameStatsByPlayerWInjuriesDfsSalariesFormatEnum;
import org.openapis.openapi.models.operations.ProjectedPlayerGameStatsByPlayerWInjuriesDfsSalariesRequest;
import org.openapis.openapi.models.operations.ProjectedPlayerGameStatsByPlayerWInjuriesDfsSalariesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            ProjectedPlayerGameStatsByPlayerWInjuriesDfsSalariesRequest req = new ProjectedPlayerGameStatsByPlayerWInjuriesDfsSalariesRequest("illum", ProjectedPlayerGameStatsByPlayerWInjuriesDfsSalariesFormatEnum.XML, "error");            

            ProjectedPlayerGameStatsByPlayerWInjuriesDfsSalariesResponse res = sdk.sdk.projectedPlayerGameStatsByPlayerWInjuriesDfsSalaries(req);

            if (res.playerGameProjection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startingGoaltendersByDate

This endpoint provides the projected & confirmed starting goaltenders for NHL games on a given date.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartingGoaltendersByDateFormatEnum;
import org.openapis.openapi.models.operations.StartingGoaltendersByDateRequest;
import org.openapis.openapi.models.operations.StartingGoaltendersByDateResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartingGoaltendersByDateRequest req = new StartingGoaltendersByDateRequest("deserunt", StartingGoaltendersByDateFormatEnum.XML);            

            StartingGoaltendersByDateResponse res = sdk.sdk.startingGoaltendersByDate(req);

            if (res.startingGoaltenders != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
