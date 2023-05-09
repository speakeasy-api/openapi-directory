# SDK

### Available Operations

* [depthCharts](#depthcharts) - Depth Charts
* [dfsSlatesByDate](#dfsslatesbydate) - DFS Slates by Date
* [injuredPlayers](#injuredplayers) - Injured Players
* [projectedPlayerGameStatsByDateWInjuriesDfsSalaries](#projectedplayergamestatsbydatewinjuriesdfssalaries) - Projected Player Game Stats by Date (w/ Injuries, DFS Salaries)
* [projectedPlayerGameStatsByPlayerWInjuriesDfsSalaries](#projectedplayergamestatsbyplayerwinjuriesdfssalaries) - Projected Player Game Stats by Player (w/ Injuries, DFS Salaries)
* [projectedPlayerSeasonStats](#projectedplayerseasonstats) - Projected Player Season Stats
* [projectedPlayerSeasonStatsByPlayer](#projectedplayerseasonstatsbyplayer) - Projected Player Season Stats by Player
* [projectedPlayerSeasonStatsByTeam](#projectedplayerseasonstatsbyteam) - Projected Player Season Stats by Team
* [startingLineupsByDate](#startinglineupsbydate) - Starting Lineups by Date

## depthCharts

This endpoint provides a depth chart for each NBA team.

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

This endpoint provides all currently injured NBA players, along with injury details.

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

## projectedPlayerSeasonStats

Projected Player Season Stats

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProjectedPlayerSeasonStatsFormatEnum;
import org.openapis.openapi.models.operations.ProjectedPlayerSeasonStatsRequest;
import org.openapis.openapi.models.operations.ProjectedPlayerSeasonStatsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            ProjectedPlayerSeasonStatsRequest req = new ProjectedPlayerSeasonStatsRequest(ProjectedPlayerSeasonStatsFormatEnum.JSON, "suscipit");            

            ProjectedPlayerSeasonStatsResponse res = sdk.sdk.projectedPlayerSeasonStats(req);

            if (res.playerSeasonProjections != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## projectedPlayerSeasonStatsByPlayer

Projected Player Season Stats by Player

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProjectedPlayerSeasonStatsByPlayerFormatEnum;
import org.openapis.openapi.models.operations.ProjectedPlayerSeasonStatsByPlayerRequest;
import org.openapis.openapi.models.operations.ProjectedPlayerSeasonStatsByPlayerResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            ProjectedPlayerSeasonStatsByPlayerRequest req = new ProjectedPlayerSeasonStatsByPlayerRequest(ProjectedPlayerSeasonStatsByPlayerFormatEnum.XML, "magnam", "debitis");            

            ProjectedPlayerSeasonStatsByPlayerResponse res = sdk.sdk.projectedPlayerSeasonStatsByPlayer(req);

            if (res.playerSeasonProjection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## projectedPlayerSeasonStatsByTeam

Projected Player Season Stats by Team

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProjectedPlayerSeasonStatsByTeamFormatEnum;
import org.openapis.openapi.models.operations.ProjectedPlayerSeasonStatsByTeamRequest;
import org.openapis.openapi.models.operations.ProjectedPlayerSeasonStatsByTeamResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            ProjectedPlayerSeasonStatsByTeamRequest req = new ProjectedPlayerSeasonStatsByTeamRequest(ProjectedPlayerSeasonStatsByTeamFormatEnum.XML, "delectus", "tempora");            

            ProjectedPlayerSeasonStatsByTeamResponse res = sdk.sdk.projectedPlayerSeasonStatsByTeam(req);

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

This endpoint provides the projected & confirmed starting lineups for NBA games on a given date.

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

            StartingLineupsByDateRequest req = new StartingLineupsByDateRequest("suscipit", StartingLineupsByDateFormatEnum.XML);            

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
