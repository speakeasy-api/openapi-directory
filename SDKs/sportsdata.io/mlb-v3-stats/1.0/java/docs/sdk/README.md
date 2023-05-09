# SDK

## Overview

MLB scores, stats, and news API.

### Available Operations

* [areGamesInProgress](#aregamesinprogress) - Are Games In Progress
* [batterVsPitcherStats](#battervspitcherstats) - Batter vs. Pitcher Stats
* [boxScore](#boxscore) - Box Score
* [boxScoresByDate](#boxscoresbydate) - Box Scores by Date
* [boxScoresByDateDelta](#boxscoresbydatedelta) - Box Scores by Date Delta
* [currentSeason](#currentseason) - Current Season
* [dfsSlatesByDate](#dfsslatesbydate) - DFS Slates by Date
* [gamesByDate](#gamesbydate) - Games by Date
* [news](#news) - News
* [newsByDate](#newsbydate) - News by Date
* [newsByPlayer](#newsbyplayer) - News by Player
* [playerDetailsByActive](#playerdetailsbyactive) - Player Details by Active
* [playerDetailsByFreeAgents](#playerdetailsbyfreeagents) - Player Details by Free Agents
* [playerDetailsByPlayer](#playerdetailsbyplayer) - Player Details by Player
* [playerGameLogsBySeason](#playergamelogsbyseason) - Player Game Logs By Season
* [playerGameStatsByDate](#playergamestatsbydate) - Player Game Stats by Date
* [playerGameStatsByPlayer](#playergamestatsbyplayer) - Player Game Stats by Player
* [playerSeasonAwayStats](#playerseasonawaystats) - Player Season Away Stats
* [playerSeasonHomeStats](#playerseasonhomestats) - Player Season Home Stats
* [playerSeasonSplitStats](#playerseasonsplitstats) - Player Season Split Stats
* [playerSeasonStats](#playerseasonstats) - Player Season Stats
* [playerSeasonStatsByPlayer](#playerseasonstatsbyplayer) - Player Season Stats By Player
* [playerSeasonStatsByTeam](#playerseasonstatsbyteam) - Player Season Stats by Team
* [playerSeasonStatsSplitByTeam](#playerseasonstatssplitbyteam) - Player Season Stats Split By Team
* [playersByTeam](#playersbyteam) - Players by Team
* [schedules](#schedules) - Schedules
* [stadiums](#stadiums) - Stadiums
* [standings](#standings) - Standings
* [teamGameLogsBySeason](#teamgamelogsbyseason) - Team Game Logs By Season
* [teamGameStatsByDate](#teamgamestatsbydate) - Team Game Stats by Date
* [teamHittingVsStartingPitcher](#teamhittingvsstartingpitcher) - Team Hitting vs. Starting Pitcher
* [teamSeasonStats](#teamseasonstats) - Team Season Stats
* [teamsActive](#teamsactive) - Teams (Active)
* [teamsAll](#teamsall) - Teams (All)

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

## batterVsPitcherStats

Batter vs. Pitcher Stats

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatterVsPitcherStatsFormatEnum;
import org.openapis.openapi.models.operations.BatterVsPitcherStatsRequest;
import org.openapis.openapi.models.operations.BatterVsPitcherStatsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatterVsPitcherStatsRequest req = new BatterVsPitcherStatsRequest(BatterVsPitcherStatsFormatEnum.JSON, "quibusdam", "unde");            

            BatterVsPitcherStatsResponse res = sdk.sdk.batterVsPitcherStats(req);

            if (res.playerSeasons != null) {
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

            BoxScoreRequest req = new BoxScoreRequest(BoxScoreFormatEnum.JSON, "corrupti");            

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

            BoxScoresByDateRequest req = new BoxScoresByDateRequest("illum", BoxScoresByDateFormatEnum.XML);            

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

            BoxScoresByDateDeltaRequest req = new BoxScoresByDateDeltaRequest("error", BoxScoresByDateDeltaFormatEnum.JSON, "suscipit");            

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

            CurrentSeasonRequest req = new CurrentSeasonRequest(CurrentSeasonFormatEnum.XML);            

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

            DfsSlatesByDateRequest req = new DfsSlatesByDateRequest("magnam", DfsSlatesByDateFormatEnum.JSON);            

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

            GamesByDateRequest req = new GamesByDateRequest("ipsa", GamesByDateFormatEnum.JSON);            

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

## news

News

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NewsFormatEnum;
import org.openapis.openapi.models.operations.NewsRequest;
import org.openapis.openapi.models.operations.NewsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            NewsRequest req = new NewsRequest(NewsFormatEnum.XML);            

            NewsResponse res = sdk.sdk.news(req);

            if (res.news != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## newsByDate

News by Date

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NewsByDateFormatEnum;
import org.openapis.openapi.models.operations.NewsByDateRequest;
import org.openapis.openapi.models.operations.NewsByDateResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            NewsByDateRequest req = new NewsByDateRequest("suscipit", NewsByDateFormatEnum.XML);            

            NewsByDateResponse res = sdk.sdk.newsByDate(req);

            if (res.news != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## newsByPlayer

News by Player

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NewsByPlayerFormatEnum;
import org.openapis.openapi.models.operations.NewsByPlayerRequest;
import org.openapis.openapi.models.operations.NewsByPlayerResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            NewsByPlayerRequest req = new NewsByPlayerRequest(NewsByPlayerFormatEnum.JSON, "placeat");            

            NewsByPlayerResponse res = sdk.sdk.newsByPlayer(req);

            if (res.news != null) {
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

## playerDetailsByFreeAgents

Player Details by Free Agents

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PlayerDetailsByFreeAgentsFormatEnum;
import org.openapis.openapi.models.operations.PlayerDetailsByFreeAgentsRequest;
import org.openapis.openapi.models.operations.PlayerDetailsByFreeAgentsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            PlayerDetailsByFreeAgentsRequest req = new PlayerDetailsByFreeAgentsRequest(PlayerDetailsByFreeAgentsFormatEnum.XML);            

            PlayerDetailsByFreeAgentsResponse res = sdk.sdk.playerDetailsByFreeAgents(req);

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

            PlayerDetailsByPlayerRequest req = new PlayerDetailsByPlayerRequest(PlayerDetailsByPlayerFormatEnum.JSON, "nisi");            

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

            PlayerGameLogsBySeasonRequest req = new PlayerGameLogsBySeasonRequest(PlayerGameLogsBySeasonFormatEnum.XML, "temporibus", "ab", "quis");            

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

            PlayerGameStatsByDateRequest req = new PlayerGameStatsByDateRequest("veritatis", PlayerGameStatsByDateFormatEnum.JSON);            

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

            PlayerGameStatsByPlayerRequest req = new PlayerGameStatsByPlayerRequest("perferendis", PlayerGameStatsByPlayerFormatEnum.XML, "repellendus");            

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

## playerSeasonAwayStats

Player Season Away Stats

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PlayerSeasonAwayStatsFormatEnum;
import org.openapis.openapi.models.operations.PlayerSeasonAwayStatsRequest;
import org.openapis.openapi.models.operations.PlayerSeasonAwayStatsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            PlayerSeasonAwayStatsRequest req = new PlayerSeasonAwayStatsRequest(PlayerSeasonAwayStatsFormatEnum.JSON, "quo");            

            PlayerSeasonAwayStatsResponse res = sdk.sdk.playerSeasonAwayStats(req);

            if (res.playerSeasons != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## playerSeasonHomeStats

Player Season Home Stats

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PlayerSeasonHomeStatsFormatEnum;
import org.openapis.openapi.models.operations.PlayerSeasonHomeStatsRequest;
import org.openapis.openapi.models.operations.PlayerSeasonHomeStatsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            PlayerSeasonHomeStatsRequest req = new PlayerSeasonHomeStatsRequest(PlayerSeasonHomeStatsFormatEnum.XML, "at");            

            PlayerSeasonHomeStatsResponse res = sdk.sdk.playerSeasonHomeStats(req);

            if (res.playerSeasons != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## playerSeasonSplitStats

Player Season Split Stats

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PlayerSeasonSplitStatsFormatEnum;
import org.openapis.openapi.models.operations.PlayerSeasonSplitStatsRequest;
import org.openapis.openapi.models.operations.PlayerSeasonSplitStatsResponse;
import org.openapis.openapi.models.operations.PlayerSeasonSplitStatsSplitEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            PlayerSeasonSplitStatsRequest req = new PlayerSeasonSplitStatsRequest(PlayerSeasonSplitStatsFormatEnum.JSON, "maiores", PlayerSeasonSplitStatsSplitEnum.R);            

            PlayerSeasonSplitStatsResponse res = sdk.sdk.playerSeasonSplitStats(req);

            if (res.playerSeasons != null) {
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

            PlayerSeasonStatsRequest req = new PlayerSeasonStatsRequest(PlayerSeasonStatsFormatEnum.JSON, "quod");            

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

            PlayerSeasonStatsByPlayerRequest req = new PlayerSeasonStatsByPlayerRequest(PlayerSeasonStatsByPlayerFormatEnum.XML, "totam", "porro");            

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

            PlayerSeasonStatsByTeamRequest req = new PlayerSeasonStatsByTeamRequest(PlayerSeasonStatsByTeamFormatEnum.JSON, "dicta", "nam");            

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

## playerSeasonStatsSplitByTeam

Player Season Stats Split By Team

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PlayerSeasonStatsSplitByTeamFormatEnum;
import org.openapis.openapi.models.operations.PlayerSeasonStatsSplitByTeamRequest;
import org.openapis.openapi.models.operations.PlayerSeasonStatsSplitByTeamResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            PlayerSeasonStatsSplitByTeamRequest req = new PlayerSeasonStatsSplitByTeamRequest(PlayerSeasonStatsSplitByTeamFormatEnum.JSON, "occaecati");            

            PlayerSeasonStatsSplitByTeamResponse res = sdk.sdk.playerSeasonStatsSplitByTeam(req);

            if (res.playerSeasons != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## playersByTeam

Players by Team

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PlayersByTeamFormatEnum;
import org.openapis.openapi.models.operations.PlayersByTeamRequest;
import org.openapis.openapi.models.operations.PlayersByTeamResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            PlayersByTeamRequest req = new PlayersByTeamRequest(PlayersByTeamFormatEnum.XML, "deleniti");            

            PlayersByTeamResponse res = sdk.sdk.playersByTeam(req);

            if (res.players != null) {
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

            SchedulesRequest req = new SchedulesRequest(SchedulesFormatEnum.JSON, "optio");            

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

## standings

Standings

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StandingsFormatEnum;
import org.openapis.openapi.models.operations.StandingsRequest;
import org.openapis.openapi.models.operations.StandingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            StandingsRequest req = new StandingsRequest(StandingsFormatEnum.XML, "commodi");            

            StandingsResponse res = sdk.sdk.standings(req);

            if (res.standings != null) {
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

            TeamGameLogsBySeasonRequest req = new TeamGameLogsBySeasonRequest(TeamGameLogsBySeasonFormatEnum.JSON, "modi", "qui", "impedit");            

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

            TeamGameStatsByDateRequest req = new TeamGameStatsByDateRequest("cum", TeamGameStatsByDateFormatEnum.XML);            

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

## teamHittingVsStartingPitcher

Team Hitting vs. Starting Pitcher

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TeamHittingVsStartingPitcherFormatEnum;
import org.openapis.openapi.models.operations.TeamHittingVsStartingPitcherRequest;
import org.openapis.openapi.models.operations.TeamHittingVsStartingPitcherResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            TeamHittingVsStartingPitcherRequest req = new TeamHittingVsStartingPitcherRequest(TeamHittingVsStartingPitcherFormatEnum.XML, "excepturi", "aspernatur");            

            TeamHittingVsStartingPitcherResponse res = sdk.sdk.teamHittingVsStartingPitcher(req);

            if (res.playerSeasons != null) {
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

            TeamSeasonStatsRequest req = new TeamSeasonStatsRequest(TeamSeasonStatsFormatEnum.XML, "ad");            

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

## teamsActive

Teams (Active)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TeamsActiveFormatEnum;
import org.openapis.openapi.models.operations.TeamsActiveRequest;
import org.openapis.openapi.models.operations.TeamsActiveResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            TeamsActiveRequest req = new TeamsActiveRequest(TeamsActiveFormatEnum.JSON);            

            TeamsActiveResponse res = sdk.sdk.teamsActive(req);

            if (res.teams != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## teamsAll

Teams (All)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TeamsAllFormatEnum;
import org.openapis.openapi.models.operations.TeamsAllRequest;
import org.openapis.openapi.models.operations.TeamsAllResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            TeamsAllRequest req = new TeamsAllRequest(TeamsAllFormatEnum.XML);            

            TeamsAllResponse res = sdk.sdk.teamsAll(req);

            if (res.teams != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
