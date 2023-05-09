# SDK

### Available Operations

* [areGamesInProgress](#aregamesinprogress) - Are Games In Progress
* [boxScore](#boxscore) - Box Score
* [boxScoresByDate](#boxscoresbydate) - Box Scores by Date
* [boxScoresByDateDelta](#boxscoresbydatedelta) - Box Scores by Date Delta
* [currentSeason](#currentseason) - Current Season
* [gamesByDate](#gamesbydate) - Games by Date
* [injuredPlayers](#injuredplayers) - Injured Players
* [leagueHierarchy](#leaguehierarchy) - League Hierarchy
* [playerDetailsByActive](#playerdetailsbyactive) - Player Details by Active
* [playerDetailsByPlayer](#playerdetailsbyplayer) - Player Details by Player
* [playerDetailsByTeam](#playerdetailsbyteam) - Player Details by Team
* [playerGameLogsBySeason](#playergamelogsbyseason) - Player Game Logs By Season
* [playerGameStatsByDate](#playergamestatsbydate) - Player Game Stats by Date
* [playerGameStatsByPlayer](#playergamestatsbyplayer) - Player Game Stats by Player
* [playerSeasonStats](#playerseasonstats) - Player Season Stats
* [playerSeasonStatsByPlayer](#playerseasonstatsbyplayer) - Player Season Stats By Player
* [playerSeasonStatsByTeam](#playerseasonstatsbyteam) - Player Season Stats by Team
* [projectedPlayerGameStatsByDate](#projectedplayergamestatsbydate) - Projected Player Game Stats by Date
* [projectedPlayerGameStatsByPlayer](#projectedplayergamestatsbyplayer) - Projected Player Game Stats by Player
* [schedules](#schedules) - Schedules
* [stadiums](#stadiums) - Stadiums
* [teamGameLogsBySeason](#teamgamelogsbyseason) - Team Game Logs By Season
* [teamGameStatsByDate](#teamgamestatsbydate) - Team Game Stats by Date
* [teamSeasonStats](#teamseasonstats) - Team Season Stats
* [teams](#teams) - Teams
* [tournamentHierarchy](#tournamenthierarchy) - Tournament Hierarchy

## areGamesInProgress

Returns <code>true</code> if there is at least one game being played at the time of the request or <code>false</code> if there are none.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AreGamesInProgressFormatEnum;
import org.openapis.openapi.models.operations.AreGamesInProgressRequest;
import org.openapis.openapi.models.operations.AreGamesInProgressResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            AreGamesInProgressRequest req = new AreGamesInProgressRequest(AreGamesInProgressFormatEnum.JSON);            

            AreGamesInProgressResponse res = sdk.sdk.areGamesInProgress(req);

            if (res.areGamesInProgress200ApplicationJSONBoolean != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## boxScore

Box Score

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BoxScoreFormatEnum;
import org.openapis.openapi.models.operations.BoxScoreRequest;
import org.openapis.openapi.models.operations.BoxScoreResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            BoxScoreRequest req = new BoxScoreRequest(BoxScoreFormatEnum.JSON, "quibusdam");            

            BoxScoreResponse res = sdk.sdk.boxScore(req);

            if (res.boxScore != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## boxScoresByDate

Box Scores by Date

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BoxScoresByDateFormatEnum;
import org.openapis.openapi.models.operations.BoxScoresByDateRequest;
import org.openapis.openapi.models.operations.BoxScoresByDateResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            BoxScoresByDateRequest req = new BoxScoresByDateRequest("unde", BoxScoresByDateFormatEnum.JSON);            

            BoxScoresByDateResponse res = sdk.sdk.boxScoresByDate(req);

            if (res.boxScores != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## boxScoresByDateDelta

Box Scores by Date Delta

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BoxScoresByDateDeltaFormatEnum;
import org.openapis.openapi.models.operations.BoxScoresByDateDeltaRequest;
import org.openapis.openapi.models.operations.BoxScoresByDateDeltaResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            BoxScoresByDateDeltaRequest req = new BoxScoresByDateDeltaRequest("corrupti", BoxScoresByDateDeltaFormatEnum.JSON, "vel");            

            BoxScoresByDateDeltaResponse res = sdk.sdk.boxScoresByDateDelta(req);

            if (res.boxScores != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## currentSeason

Current Season

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CurrentSeasonFormatEnum;
import org.openapis.openapi.models.operations.CurrentSeasonRequest;
import org.openapis.openapi.models.operations.CurrentSeasonResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            CurrentSeasonRequest req = new CurrentSeasonRequest(CurrentSeasonFormatEnum.JSON);            

            CurrentSeasonResponse res = sdk.sdk.currentSeason(req);

            if (res.season != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## gamesByDate

Games by Date

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GamesByDateFormatEnum;
import org.openapis.openapi.models.operations.GamesByDateRequest;
import org.openapis.openapi.models.operations.GamesByDateResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            GamesByDateRequest req = new GamesByDateRequest("deserunt", GamesByDateFormatEnum.XML);            

            GamesByDateResponse res = sdk.sdk.gamesByDate(req);

            if (res.games != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## injuredPlayers

This endpoint provides all currently injured college basketball players, along with injury details.

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

            InjuredPlayersRequest req = new InjuredPlayersRequest(InjuredPlayersFormatEnum.XML);            

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

## leagueHierarchy

League Hierarchy

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LeagueHierarchyFormatEnum;
import org.openapis.openapi.models.operations.LeagueHierarchyRequest;
import org.openapis.openapi.models.operations.LeagueHierarchyResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            LeagueHierarchyRequest req = new LeagueHierarchyRequest(LeagueHierarchyFormatEnum.XML);            

            LeagueHierarchyResponse res = sdk.sdk.leagueHierarchy(req);

            if (res.conferences != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## playerDetailsByActive

Player Details by Active

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PlayerDetailsByActiveFormatEnum;
import org.openapis.openapi.models.operations.PlayerDetailsByActiveRequest;
import org.openapis.openapi.models.operations.PlayerDetailsByActiveResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            PlayerDetailsByActiveRequest req = new PlayerDetailsByActiveRequest(PlayerDetailsByActiveFormatEnum.JSON);            

            PlayerDetailsByActiveResponse res = sdk.sdk.playerDetailsByActive(req);

            if (res.players != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## playerDetailsByPlayer

Player Details by Player

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PlayerDetailsByPlayerFormatEnum;
import org.openapis.openapi.models.operations.PlayerDetailsByPlayerRequest;
import org.openapis.openapi.models.operations.PlayerDetailsByPlayerResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            PlayerDetailsByPlayerRequest req = new PlayerDetailsByPlayerRequest(PlayerDetailsByPlayerFormatEnum.XML, "delectus");            

            PlayerDetailsByPlayerResponse res = sdk.sdk.playerDetailsByPlayer(req);

            if (res.player != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## playerDetailsByTeam

Player Details by Team

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PlayerDetailsByTeamFormatEnum;
import org.openapis.openapi.models.operations.PlayerDetailsByTeamRequest;
import org.openapis.openapi.models.operations.PlayerDetailsByTeamResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            PlayerDetailsByTeamRequest req = new PlayerDetailsByTeamRequest(PlayerDetailsByTeamFormatEnum.XML, "suscipit");            

            PlayerDetailsByTeamResponse res = sdk.sdk.playerDetailsByTeam(req);

            if (res.players != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## playerGameLogsBySeason

Player Game Logs By Season

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PlayerGameLogsBySeasonFormatEnum;
import org.openapis.openapi.models.operations.PlayerGameLogsBySeasonRequest;
import org.openapis.openapi.models.operations.PlayerGameLogsBySeasonResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            PlayerGameLogsBySeasonRequest req = new PlayerGameLogsBySeasonRequest(PlayerGameLogsBySeasonFormatEnum.XML, "minus", "placeat", "voluptatum");            

            PlayerGameLogsBySeasonResponse res = sdk.sdk.playerGameLogsBySeason(req);

            if (res.playerGames != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## playerGameStatsByDate

Player Game Stats by Date

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PlayerGameStatsByDateFormatEnum;
import org.openapis.openapi.models.operations.PlayerGameStatsByDateRequest;
import org.openapis.openapi.models.operations.PlayerGameStatsByDateResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            PlayerGameStatsByDateRequest req = new PlayerGameStatsByDateRequest("iusto", PlayerGameStatsByDateFormatEnum.JSON);            

            PlayerGameStatsByDateResponse res = sdk.sdk.playerGameStatsByDate(req);

            if (res.playerGames != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## playerGameStatsByPlayer

Player Game Stats by Player

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PlayerGameStatsByPlayerFormatEnum;
import org.openapis.openapi.models.operations.PlayerGameStatsByPlayerRequest;
import org.openapis.openapi.models.operations.PlayerGameStatsByPlayerResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            PlayerGameStatsByPlayerRequest req = new PlayerGameStatsByPlayerRequest("nisi", PlayerGameStatsByPlayerFormatEnum.JSON, "temporibus");            

            PlayerGameStatsByPlayerResponse res = sdk.sdk.playerGameStatsByPlayer(req);

            if (res.playerGame != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## playerSeasonStats

Player Season Stats

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PlayerSeasonStatsFormatEnum;
import org.openapis.openapi.models.operations.PlayerSeasonStatsRequest;
import org.openapis.openapi.models.operations.PlayerSeasonStatsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            PlayerSeasonStatsRequest req = new PlayerSeasonStatsRequest(PlayerSeasonStatsFormatEnum.XML, "quis");            

            PlayerSeasonStatsResponse res = sdk.sdk.playerSeasonStats(req);

            if (res.playerSeasons != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## playerSeasonStatsByPlayer

Player Season Stats By Player

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PlayerSeasonStatsByPlayerFormatEnum;
import org.openapis.openapi.models.operations.PlayerSeasonStatsByPlayerRequest;
import org.openapis.openapi.models.operations.PlayerSeasonStatsByPlayerResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            PlayerSeasonStatsByPlayerRequest req = new PlayerSeasonStatsByPlayerRequest(PlayerSeasonStatsByPlayerFormatEnum.XML, "deserunt", "perferendis");            

            PlayerSeasonStatsByPlayerResponse res = sdk.sdk.playerSeasonStatsByPlayer(req);

            if (res.playerSeason != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## playerSeasonStatsByTeam

Player Season Stats by Team

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PlayerSeasonStatsByTeamFormatEnum;
import org.openapis.openapi.models.operations.PlayerSeasonStatsByTeamRequest;
import org.openapis.openapi.models.operations.PlayerSeasonStatsByTeamResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            PlayerSeasonStatsByTeamRequest req = new PlayerSeasonStatsByTeamRequest(PlayerSeasonStatsByTeamFormatEnum.XML, "repellendus", "sapiente");            

            PlayerSeasonStatsByTeamResponse res = sdk.sdk.playerSeasonStatsByTeam(req);

            if (res.playerSeasons != null) {
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

            ProjectedPlayerGameStatsByDateRequest req = new ProjectedPlayerGameStatsByDateRequest("quo", ProjectedPlayerGameStatsByDateFormatEnum.XML);            

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

Projected Player Game Stats by Player

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

            ProjectedPlayerGameStatsByPlayerRequest req = new ProjectedPlayerGameStatsByPlayerRequest("at", ProjectedPlayerGameStatsByPlayerFormatEnum.JSON, "maiores");            

            ProjectedPlayerGameStatsByPlayerResponse res = sdk.sdk.projectedPlayerGameStatsByPlayer(req);

            if (res.playerGameProjection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## schedules

Schedules

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SchedulesFormatEnum;
import org.openapis.openapi.models.operations.SchedulesRequest;
import org.openapis.openapi.models.operations.SchedulesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            SchedulesRequest req = new SchedulesRequest(SchedulesFormatEnum.XML, "quod");            

            SchedulesResponse res = sdk.sdk.schedules(req);

            if (res.games != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## stadiums

Stadiums

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StadiumsFormatEnum;
import org.openapis.openapi.models.operations.StadiumsRequest;
import org.openapis.openapi.models.operations.StadiumsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            StadiumsRequest req = new StadiumsRequest(StadiumsFormatEnum.JSON);            

            StadiumsResponse res = sdk.sdk.stadiums(req);

            if (res.stadiums != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## teamGameLogsBySeason

Game by game log of total team statistics.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TeamGameLogsBySeasonFormatEnum;
import org.openapis.openapi.models.operations.TeamGameLogsBySeasonRequest;
import org.openapis.openapi.models.operations.TeamGameLogsBySeasonResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            TeamGameLogsBySeasonRequest req = new TeamGameLogsBySeasonRequest(TeamGameLogsBySeasonFormatEnum.XML, "totam", "porro", "dolorum");            

            TeamGameLogsBySeasonResponse res = sdk.sdk.teamGameLogsBySeason(req);

            if (res.teamGames != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## teamGameStatsByDate

Team Game Stats by Date

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TeamGameStatsByDateFormatEnum;
import org.openapis.openapi.models.operations.TeamGameStatsByDateRequest;
import org.openapis.openapi.models.operations.TeamGameStatsByDateResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            TeamGameStatsByDateRequest req = new TeamGameStatsByDateRequest("dicta", TeamGameStatsByDateFormatEnum.JSON);            

            TeamGameStatsByDateResponse res = sdk.sdk.teamGameStatsByDate(req);

            if (res.teamGames != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## teamSeasonStats

Team Season Stats

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TeamSeasonStatsFormatEnum;
import org.openapis.openapi.models.operations.TeamSeasonStatsRequest;
import org.openapis.openapi.models.operations.TeamSeasonStatsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            TeamSeasonStatsRequest req = new TeamSeasonStatsRequest(TeamSeasonStatsFormatEnum.JSON, "occaecati");            

            TeamSeasonStatsResponse res = sdk.sdk.teamSeasonStats(req);

            if (res.teamSeasons != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## teams

Teams

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TeamsFormatEnum;
import org.openapis.openapi.models.operations.TeamsRequest;
import org.openapis.openapi.models.operations.TeamsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            TeamsRequest req = new TeamsRequest(TeamsFormatEnum.XML);            

            TeamsResponse res = sdk.sdk.teams(req);

            if (res.teams != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tournamentHierarchy

Tournament Hierarchy

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TournamentHierarchyFormatEnum;
import org.openapis.openapi.models.operations.TournamentHierarchyRequest;
import org.openapis.openapi.models.operations.TournamentHierarchyResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            TournamentHierarchyRequest req = new TournamentHierarchyRequest(TournamentHierarchyFormatEnum.JSON, "hic");            

            TournamentHierarchyResponse res = sdk.sdk.tournamentHierarchy(req);

            if (res.tournament != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
