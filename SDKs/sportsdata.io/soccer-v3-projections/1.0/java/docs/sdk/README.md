# SDK

### Available Operations

* [dfsSlatesByDate](#dfsslatesbydate) - Dfs Slates By Date
* [injuredPlayersByCompetition](#injuredplayersbycompetition) - Injured Players By Competition
* [projectedPlayerGameStatsByCompetitionWDfsSalaries](#projectedplayergamestatsbycompetitionwdfssalaries) - Projected Player Game Stats by Competition (w/ DFS Salaries)
* [projectedPlayerGameStatsByDateWDfsSalaries](#projectedplayergamestatsbydatewdfssalaries) - Projected Player Game Stats by Date (w/ DFS Salaries)
* [projectedPlayerGameStatsByPlayerWDfsSalaries](#projectedplayergamestatsbyplayerwdfssalaries) - Projected Player Game Stats by Player (w/ DFS Salaries)
* [upcomingDfsSlatesByCompetition](#upcomingdfsslatesbycompetition) - Upcoming Dfs Slates By Competition

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

## injuredPlayersByCompetition

This endpoint provides all currently injured soccer players by competition, along with injury details.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.InjuredPlayersByCompetitionFormatEnum;
import org.openapis.openapi.models.operations.InjuredPlayersByCompetitionRequest;
import org.openapis.openapi.models.operations.InjuredPlayersByCompetitionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            InjuredPlayersByCompetitionRequest req = new InjuredPlayersByCompetitionRequest("unde", InjuredPlayersByCompetitionFormatEnum.JSON);            

            InjuredPlayersByCompetitionResponse res = sdk.sdk.injuredPlayersByCompetition(req);

            if (res.players != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## projectedPlayerGameStatsByCompetitionWDfsSalaries

Projected Player Game Stats by Competition (w/ DFS Salaries)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProjectedPlayerGameStatsByCompetitionWDfsSalariesFormatEnum;
import org.openapis.openapi.models.operations.ProjectedPlayerGameStatsByCompetitionWDfsSalariesRequest;
import org.openapis.openapi.models.operations.ProjectedPlayerGameStatsByCompetitionWDfsSalariesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            ProjectedPlayerGameStatsByCompetitionWDfsSalariesRequest req = new ProjectedPlayerGameStatsByCompetitionWDfsSalariesRequest("corrupti", "illum", ProjectedPlayerGameStatsByCompetitionWDfsSalariesFormatEnum.XML);            

            ProjectedPlayerGameStatsByCompetitionWDfsSalariesResponse res = sdk.sdk.projectedPlayerGameStatsByCompetitionWDfsSalaries(req);

            if (res.playerGameProjections != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## projectedPlayerGameStatsByDateWDfsSalaries

Projected Player Game Stats by Date (w/ DFS Salaries)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProjectedPlayerGameStatsByDateWDfsSalariesFormatEnum;
import org.openapis.openapi.models.operations.ProjectedPlayerGameStatsByDateWDfsSalariesRequest;
import org.openapis.openapi.models.operations.ProjectedPlayerGameStatsByDateWDfsSalariesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            ProjectedPlayerGameStatsByDateWDfsSalariesRequest req = new ProjectedPlayerGameStatsByDateWDfsSalariesRequest("error", ProjectedPlayerGameStatsByDateWDfsSalariesFormatEnum.JSON);            

            ProjectedPlayerGameStatsByDateWDfsSalariesResponse res = sdk.sdk.projectedPlayerGameStatsByDateWDfsSalaries(req);

            if (res.playerGameProjections != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## projectedPlayerGameStatsByPlayerWDfsSalaries

Projected Player Game Stats by Player (w/ DFS Salaries)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProjectedPlayerGameStatsByPlayerWDfsSalariesFormatEnum;
import org.openapis.openapi.models.operations.ProjectedPlayerGameStatsByPlayerWDfsSalariesRequest;
import org.openapis.openapi.models.operations.ProjectedPlayerGameStatsByPlayerWDfsSalariesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            ProjectedPlayerGameStatsByPlayerWDfsSalariesRequest req = new ProjectedPlayerGameStatsByPlayerWDfsSalariesRequest("suscipit", ProjectedPlayerGameStatsByPlayerWDfsSalariesFormatEnum.XML, "magnam");            

            ProjectedPlayerGameStatsByPlayerWDfsSalariesResponse res = sdk.sdk.projectedPlayerGameStatsByPlayerWDfsSalaries(req);

            if (res.playerGameProjections != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## upcomingDfsSlatesByCompetition

Upcoming Dfs Slates By Competition

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpcomingDfsSlatesByCompetitionFormatEnum;
import org.openapis.openapi.models.operations.UpcomingDfsSlatesByCompetitionRequest;
import org.openapis.openapi.models.operations.UpcomingDfsSlatesByCompetitionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpcomingDfsSlatesByCompetitionRequest req = new UpcomingDfsSlatesByCompetitionRequest("debitis", UpcomingDfsSlatesByCompetitionFormatEnum.JSON);            

            UpcomingDfsSlatesByCompetitionResponse res = sdk.sdk.upcomingDfsSlatesByCompetition(req);

            if (res.dfsSlates != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
