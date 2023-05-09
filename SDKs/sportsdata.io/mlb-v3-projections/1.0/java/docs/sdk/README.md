# SDK

## Overview

MLB projections API.

### Available Operations

* [depthCharts](#depthcharts) - Depth Charts
* [dfsSlatesByDate](#dfsslatesbydate) - DFS Slates by Date
* [injuredPlayers](#injuredplayers) - Injured Players
* [projectedPlayerGameStatsByDateWInjuriesDfsSalaries](#projectedplayergamestatsbydatewinjuriesdfssalaries) - Projected Player Game Stats by Date (w/ Injuries, DFS Salaries)
* [projectedPlayerGameStatsByPlayerWInjuriesDfsSalaries](#projectedplayergamestatsbyplayerwinjuriesdfssalaries) - Projected Player Game Stats by Player (w/ Injuries, DFS Salaries)
* [projectedPlayerSeasonStatsWithAdp](#projectedplayerseasonstatswithadp) - Projected Player Season Stats (with ADP)
* [startingLineupsByDate](#startinglineupsbydate) - Starting Lineups by Date

## depthCharts

Returns Depth Charts for all active MLB teams.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DepthChartsFormatEnum;
import org.openapis.openapi.models.operations.DepthChartsRequest;
import org.openapis.openapi.models.operations.DepthChartsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            DepthChartsRequest req = new DepthChartsRequest(DepthChartsFormatEnum.JSON);            

            DepthChartsResponse res = sdk.sdk.depthCharts(req);

            if (res.teamDepthCharts != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

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

This endpoint provides all currently injured MLB players, along with injury details.

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

            if (res.playerGameProjections != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## projectedPlayerSeasonStatsWithAdp

Projected Player Season Stats (with ADP)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProjectedPlayerSeasonStatsWithAdpFormatEnum;
import org.openapis.openapi.models.operations.ProjectedPlayerSeasonStatsWithAdpRequest;
import org.openapis.openapi.models.operations.ProjectedPlayerSeasonStatsWithAdpResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            ProjectedPlayerSeasonStatsWithAdpRequest req = new ProjectedPlayerSeasonStatsWithAdpRequest(ProjectedPlayerSeasonStatsWithAdpFormatEnum.JSON, "suscipit");            

            ProjectedPlayerSeasonStatsWithAdpResponse res = sdk.sdk.projectedPlayerSeasonStatsWithAdp(req);

            if (res.playerSeasonProjections != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startingLineupsByDate

Starting Lineups by Date

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartingLineupsByDateFormatEnum;
import org.openapis.openapi.models.operations.StartingLineupsByDateRequest;
import org.openapis.openapi.models.operations.StartingLineupsByDateResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartingLineupsByDateRequest req = new StartingLineupsByDateRequest("iure", StartingLineupsByDateFormatEnum.XML);            

            StartingLineupsByDateResponse res = sdk.sdk.startingLineupsByDate(req);

            if (res.startingLineups != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
