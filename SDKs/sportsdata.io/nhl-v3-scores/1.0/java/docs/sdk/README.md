# SDK

### Available Operations

* [areGamesInProgress](#aregamesinprogress) - Are Games In Progress
* [currentSeason](#currentseason) - Current Season
* [gamesByDate](#gamesbydate) - Games by Date
* [gamesByDateBasic](#gamesbydatebasic) - Games by Date (Basic)
* [news](#news) - News
* [newsByDate](#newsbydate) - News by Date
* [newsByPlayer](#newsbyplayer) - News by Player
* [playerDetailsByActive](#playerdetailsbyactive) - Player Details by Active
* [playerDetailsByFreeAgent](#playerdetailsbyfreeagent) - Player Details by Free Agent
* [playerDetailsByPlayer](#playerdetailsbyplayer) - Player Details by Player
* [playersByTeam](#playersbyteam) - Players by Team
* [playersByTeamBasic](#playersbyteambasic) - Players by Team (Basic)
* [schedules](#schedules) - Schedules
* [schedulesBasic](#schedulesbasic) - Schedules (Basic)
* [stadiums](#stadiums) - Stadiums
* [standings](#standings) - Standings
* [teamGameLogsBySeason](#teamgamelogsbyseason) - Team Game Logs By Season
* [teamGameStatsByDate](#teamgamestatsbydate) - Team Game Stats by Date
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

            GamesByDateRequest req = new GamesByDateRequest("quibusdam", GamesByDateFormatEnum.JSON);            

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

## gamesByDateBasic

Games by Date (Basic)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GamesByDateBasicFormatEnum;
import org.openapis.openapi.models.operations.GamesByDateBasicRequest;
import org.openapis.openapi.models.operations.GamesByDateBasicResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            GamesByDateBasicRequest req = new GamesByDateBasicRequest("nulla", GamesByDateBasicFormatEnum.JSON);            

            GamesByDateBasicResponse res = sdk.sdk.gamesByDateBasic(req);

            if (res.scoreBasics != null) {
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

            NewsRequest req = new NewsRequest(NewsFormatEnum.JSON);            

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

            NewsByDateRequest req = new NewsByDateRequest("vel", NewsByDateFormatEnum.JSON);            

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

            NewsByPlayerRequest req = new NewsByPlayerRequest(NewsByPlayerFormatEnum.JSON, "suscipit");            

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

            PlayerDetailsByActiveRequest req = new PlayerDetailsByActiveRequest(PlayerDetailsByActiveFormatEnum.XML);            

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

## playerDetailsByFreeAgent

Player Details by Free Agent

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PlayerDetailsByFreeAgentFormatEnum;
import org.openapis.openapi.models.operations.PlayerDetailsByFreeAgentRequest;
import org.openapis.openapi.models.operations.PlayerDetailsByFreeAgentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            PlayerDetailsByFreeAgentRequest req = new PlayerDetailsByFreeAgentRequest(PlayerDetailsByFreeAgentFormatEnum.XML);            

            PlayerDetailsByFreeAgentResponse res = sdk.sdk.playerDetailsByFreeAgent(req);

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

            PlayerDetailsByPlayerRequest req = new PlayerDetailsByPlayerRequest(PlayerDetailsByPlayerFormatEnum.JSON, "ipsa");            

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

            PlayersByTeamRequest req = new PlayersByTeamRequest(PlayersByTeamFormatEnum.JSON, "tempora");            

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

## playersByTeamBasic

Players by Team (Basic)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PlayersByTeamBasicFormatEnum;
import org.openapis.openapi.models.operations.PlayersByTeamBasicRequest;
import org.openapis.openapi.models.operations.PlayersByTeamBasicResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            PlayersByTeamBasicRequest req = new PlayersByTeamBasicRequest(PlayersByTeamBasicFormatEnum.XML, "molestiae");            

            PlayersByTeamBasicResponse res = sdk.sdk.playersByTeamBasic(req);

            if (res.playerBasics != null) {
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

            SchedulesRequest req = new SchedulesRequest(SchedulesFormatEnum.JSON, "placeat");            

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

## schedulesBasic

Schedules (Basic)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SchedulesBasicFormatEnum;
import org.openapis.openapi.models.operations.SchedulesBasicRequest;
import org.openapis.openapi.models.operations.SchedulesBasicResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            SchedulesBasicRequest req = new SchedulesBasicRequest(SchedulesBasicFormatEnum.JSON, "iusto");            

            SchedulesBasicResponse res = sdk.sdk.schedulesBasic(req);

            if (res.scheduleBasics != null) {
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

            StandingsRequest req = new StandingsRequest(StandingsFormatEnum.XML, "recusandae");            

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

Team Game Logs By Season

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

            TeamGameLogsBySeasonRequest req = new TeamGameLogsBySeasonRequest(TeamGameLogsBySeasonFormatEnum.JSON, "ab", "quis", "veritatis");            

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

            TeamGameStatsByDateRequest req = new TeamGameStatsByDateRequest("deserunt", TeamGameStatsByDateFormatEnum.XML);            

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

            TeamSeasonStatsRequest req = new TeamSeasonStatsRequest(TeamSeasonStatsFormatEnum.XML, "repellendus");            

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

            TeamsAllRequest req = new TeamsAllRequest(TeamsAllFormatEnum.JSON);            

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
