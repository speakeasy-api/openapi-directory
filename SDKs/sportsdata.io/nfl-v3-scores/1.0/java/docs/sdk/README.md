# SDK

## Overview

NFL schedules, scores, odds, weather, and news API.

### Available Operations

* [areGamesInProgress](#aregamesinprogress) - Are Games In Progress
* [byeWeeks](#byeweeks) - Bye Weeks
* [depthCharts](#depthcharts) - Depth Charts
* [gameStatsBySeasonDeprecatedUseTeamGameStatsInstead](#gamestatsbyseasondeprecateduseteamgamestatsinstead) - Game Stats by Season (Deprecated, use Team Game Stats instead)
* [gameStatsByWeekDeprecatedUseTeamGameStatsInstead](#gamestatsbyweekdeprecateduseteamgamestatsinstead) - Game Stats by Week (Deprecated, use Team Game Stats instead)
* [news](#news) - News
* [newsByDate](#newsbydate) - News by Date
* [newsByPlayer](#newsbyplayer) - News by Player
* [newsByTeam](#newsbyteam) - News by Team
* [playerDetailsByAvailable](#playerdetailsbyavailable) - Player Details by Available
* [playerDetailsByFreeAgents](#playerdetailsbyfreeagents) - Player Details by Free Agents
* [playerDetailsByPlayer](#playerdetailsbyplayer) - Player Details by Player
* [playerDetailsByRookieDraftYear](#playerdetailsbyrookiedraftyear) - Player Details by Rookie Draft Year
* [playerDetailsByTeam](#playerdetailsbyteam) - Player Details by Team
* [playersByTeamBasic](#playersbyteambasic) - Players by Team (Basic)
* [referees](#referees) - Referees
* [schedule](#schedule) - Schedule
* [scheduleBasic](#schedulebasic) - Schedule (Basic)
* [scoresByDate](#scoresbydate) - Scores by Date
* [scoresBySeason](#scoresbyseason) - Scores by Season 
* [scoresByWeek](#scoresbyweek) - Scores by Week
* [scoresByWeekBasic](#scoresbyweekbasic) - Scores by Week (Basic)
* [scoresByWeekSimulation](#scoresbyweeksimulation) - Scores by Week Simulation
* [seasonCurrent](#seasoncurrent) - Season Current
* [seasonLastCompleted](#seasonlastcompleted) - Season Last Completed
* [seasonUpcoming](#seasonupcoming) - Season Upcoming
* [stadiums](#stadiums) - Stadiums
* [standings](#standings) - Standings
* [teamGameLogsBySeason](#teamgamelogsbyseason) - Team Game Logs By Season
* [teamGameStats](#teamgamestats) - Team Game Stats
* [teamSeasonStats](#teamseasonstats) - Team Season Stats
* [teamsActive](#teamsactive) - Teams (Active)
* [teamsAll](#teamsall) - Teams (All)
* [teamsBasic](#teamsbasic) - Teams (Basic)
* [teamsBySeason](#teamsbyseason) - Teams by Season
* [timeframes](#timeframes) - Timeframes
* [weekCurrent](#weekcurrent) - Week Current
* [weekLastCompleted](#weeklastcompleted) - Week Last Completed
* [weekUpcoming](#weekupcoming) - Week Upcoming
* [xPing](#xping) - X Ping

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

## byeWeeks

Get bye weeks for the teams during a specified NFL season. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ByeWeeksFormatEnum;
import org.openapis.openapi.models.operations.ByeWeeksRequest;
import org.openapis.openapi.models.operations.ByeWeeksResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            ByeWeeksRequest req = new ByeWeeksRequest(ByeWeeksFormatEnum.JSON, "quibusdam");            

            ByeWeeksResponse res = sdk.sdk.byeWeeks(req);

            if (res.byes != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## depthCharts

Depth charts for all NFL teams split by offensive, defensive, and special teams position groupings.

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

## gameStatsBySeasonDeprecatedUseTeamGameStatsInstead

Game Stats by Season (Deprecated, use Team Game Stats instead)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GameStatsBySeasonDeprecatedUseTeamGameStatsInsteadFormatEnum;
import org.openapis.openapi.models.operations.GameStatsBySeasonDeprecatedUseTeamGameStatsInsteadRequest;
import org.openapis.openapi.models.operations.GameStatsBySeasonDeprecatedUseTeamGameStatsInsteadResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            GameStatsBySeasonDeprecatedUseTeamGameStatsInsteadRequest req = new GameStatsBySeasonDeprecatedUseTeamGameStatsInsteadRequest(GameStatsBySeasonDeprecatedUseTeamGameStatsInsteadFormatEnum.JSON, "corrupti");            

            GameStatsBySeasonDeprecatedUseTeamGameStatsInsteadResponse res = sdk.sdk.gameStatsBySeasonDeprecatedUseTeamGameStatsInstead(req);

            if (res.games != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## gameStatsByWeekDeprecatedUseTeamGameStatsInstead

Game Stats by Week (Deprecated, use Team Game Stats instead)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GameStatsByWeekDeprecatedUseTeamGameStatsInsteadFormatEnum;
import org.openapis.openapi.models.operations.GameStatsByWeekDeprecatedUseTeamGameStatsInsteadRequest;
import org.openapis.openapi.models.operations.GameStatsByWeekDeprecatedUseTeamGameStatsInsteadResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            GameStatsByWeekDeprecatedUseTeamGameStatsInsteadRequest req = new GameStatsByWeekDeprecatedUseTeamGameStatsInsteadRequest(GameStatsByWeekDeprecatedUseTeamGameStatsInsteadFormatEnum.JSON, "vel", "error");            

            GameStatsByWeekDeprecatedUseTeamGameStatsInsteadResponse res = sdk.sdk.gameStatsByWeekDeprecatedUseTeamGameStatsInstead(req);

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

            NewsByPlayerRequest req = new NewsByPlayerRequest(NewsByPlayerFormatEnum.XML, "debitis");            

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

## newsByTeam

News by Team

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NewsByTeamFormatEnum;
import org.openapis.openapi.models.operations.NewsByTeamRequest;
import org.openapis.openapi.models.operations.NewsByTeamResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            NewsByTeamRequest req = new NewsByTeamRequest(NewsByTeamFormatEnum.XML, "delectus");            

            NewsByTeamResponse res = sdk.sdk.newsByTeam(req);

            if (res.news != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## playerDetailsByAvailable

Player Details by Available

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PlayerDetailsByAvailableFormatEnum;
import org.openapis.openapi.models.operations.PlayerDetailsByAvailableRequest;
import org.openapis.openapi.models.operations.PlayerDetailsByAvailableResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            PlayerDetailsByAvailableRequest req = new PlayerDetailsByAvailableRequest(PlayerDetailsByAvailableFormatEnum.XML);            

            PlayerDetailsByAvailableResponse res = sdk.sdk.playerDetailsByAvailable(req);

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

            PlayerDetailsByPlayerRequest req = new PlayerDetailsByPlayerRequest(PlayerDetailsByPlayerFormatEnum.XML, "minus");            

            PlayerDetailsByPlayerResponse res = sdk.sdk.playerDetailsByPlayer(req);

            if (res.playerDetail != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## playerDetailsByRookieDraftYear

Player Details by Rookie Draft Year

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PlayerDetailsByRookieDraftYearFormatEnum;
import org.openapis.openapi.models.operations.PlayerDetailsByRookieDraftYearRequest;
import org.openapis.openapi.models.operations.PlayerDetailsByRookieDraftYearResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            PlayerDetailsByRookieDraftYearRequest req = new PlayerDetailsByRookieDraftYearRequest(PlayerDetailsByRookieDraftYearFormatEnum.JSON, "voluptatum");            

            PlayerDetailsByRookieDraftYearResponse res = sdk.sdk.playerDetailsByRookieDraftYear(req);

            if (res.players != null) {
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

            PlayerDetailsByTeamRequest req = new PlayerDetailsByTeamRequest(PlayerDetailsByTeamFormatEnum.XML, "excepturi");            

            PlayerDetailsByTeamResponse res = sdk.sdk.playerDetailsByTeam(req);

            if (res.playerDetails != null) {
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

            PlayersByTeamBasicRequest req = new PlayersByTeamBasicRequest(PlayersByTeamBasicFormatEnum.XML, "recusandae");            

            PlayersByTeamBasicResponse res = sdk.sdk.playersByTeamBasic(req);

            if (res.playersByTeamBasic200ApplicationJSONAny != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## referees

Returns full list of NFL Referees

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RefereesFormatEnum;
import org.openapis.openapi.models.operations.RefereesRequest;
import org.openapis.openapi.models.operations.RefereesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            RefereesRequest req = new RefereesRequest(RefereesFormatEnum.JSON);            

            RefereesResponse res = sdk.sdk.referees(req);

            if (res.referees != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## schedule

Game schedule for a specified season.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ScheduleFormatEnum;
import org.openapis.openapi.models.operations.ScheduleRequest;
import org.openapis.openapi.models.operations.ScheduleResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            ScheduleRequest req = new ScheduleRequest(ScheduleFormatEnum.XML, "quis");            

            ScheduleResponse res = sdk.sdk.schedule(req);

            if (res.schedules != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## scheduleBasic

Game schedule for a specified season.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ScheduleBasicFormatEnum;
import org.openapis.openapi.models.operations.ScheduleBasicRequest;
import org.openapis.openapi.models.operations.ScheduleBasicResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            ScheduleBasicRequest req = new ScheduleBasicRequest(ScheduleBasicFormatEnum.XML, "deserunt");            

            ScheduleBasicResponse res = sdk.sdk.scheduleBasic(req);

            if (res.scheduleBasics != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## scoresByDate

Get game scores for a specified week of a season.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ScoresByDateFormatEnum;
import org.openapis.openapi.models.operations.ScoresByDateRequest;
import org.openapis.openapi.models.operations.ScoresByDateResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            ScoresByDateRequest req = new ScoresByDateRequest("perferendis", ScoresByDateFormatEnum.XML);            

            ScoresByDateResponse res = sdk.sdk.scoresByDate(req);

            if (res.scores != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## scoresBySeason

Game scores for a specified season.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ScoresBySeasonFormatEnum;
import org.openapis.openapi.models.operations.ScoresBySeasonRequest;
import org.openapis.openapi.models.operations.ScoresBySeasonResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            ScoresBySeasonRequest req = new ScoresBySeasonRequest(ScoresBySeasonFormatEnum.JSON, "sapiente");            

            ScoresBySeasonResponse res = sdk.sdk.scoresBySeason(req);

            if (res.scores != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## scoresByWeek

Get game scores for a specified week of a season.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ScoresByWeekFormatEnum;
import org.openapis.openapi.models.operations.ScoresByWeekRequest;
import org.openapis.openapi.models.operations.ScoresByWeekResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            ScoresByWeekRequest req = new ScoresByWeekRequest(ScoresByWeekFormatEnum.JSON, "odit", "at");            

            ScoresByWeekResponse res = sdk.sdk.scoresByWeek(req);

            if (res.scores != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## scoresByWeekBasic

Get game scores for a specified week of a season.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ScoresByWeekBasicFormatEnum;
import org.openapis.openapi.models.operations.ScoresByWeekBasicRequest;
import org.openapis.openapi.models.operations.ScoresByWeekBasicResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            ScoresByWeekBasicRequest req = new ScoresByWeekBasicRequest(ScoresByWeekBasicFormatEnum.JSON, "maiores", "molestiae");            

            ScoresByWeekBasicResponse res = sdk.sdk.scoresByWeekBasic(req);

            if (res.scoreBasics != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## scoresByWeekSimulation

Gets simulated live scores of NFL games, covering the Conference Championship games on January 21, 2018.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ScoresByWeekSimulationFormatEnum;
import org.openapis.openapi.models.operations.ScoresByWeekSimulationRequest;
import org.openapis.openapi.models.operations.ScoresByWeekSimulationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            ScoresByWeekSimulationRequest req = new ScoresByWeekSimulationRequest(ScoresByWeekSimulationFormatEnum.JSON, "quod");            

            ScoresByWeekSimulationResponse res = sdk.sdk.scoresByWeekSimulation(req);

            if (res.scores != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## seasonCurrent

Year of the current NFL season. This value changes at the start of the new NFL league year. The earliest season for Fantasy data is 2001. The earliest season for Team data is 1985. The earliest season for Fantasy data is 2001. The earliest season for Team data is 1985.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SeasonCurrentFormatEnum;
import org.openapis.openapi.models.operations.SeasonCurrentRequest;
import org.openapis.openapi.models.operations.SeasonCurrentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            SeasonCurrentRequest req = new SeasonCurrentRequest(SeasonCurrentFormatEnum.XML);            

            SeasonCurrentResponse res = sdk.sdk.seasonCurrent(req);

            if (res.seasonCurrent200ApplicationJSONInteger != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## seasonLastCompleted

Year of the most recently completed season. this value changes immediately after the Super Bowl. The earliest season for Fantasy data is 2001. The earliest season for Team data is 1985.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SeasonLastCompletedFormatEnum;
import org.openapis.openapi.models.operations.SeasonLastCompletedRequest;
import org.openapis.openapi.models.operations.SeasonLastCompletedResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            SeasonLastCompletedRequest req = new SeasonLastCompletedRequest(SeasonLastCompletedFormatEnum.JSON);            

            SeasonLastCompletedResponse res = sdk.sdk.seasonLastCompleted(req);

            if (res.seasonLastCompleted200ApplicationJSONInteger != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## seasonUpcoming

Year of the current NFL season, if we are in the mid-season. If we are in the off-season, then year of the next upcoming season. This value changes immediately after the Super Bowl. The earliest season for Fantasy data is 2001. The earliest season for Team data is 1985.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SeasonUpcomingFormatEnum;
import org.openapis.openapi.models.operations.SeasonUpcomingRequest;
import org.openapis.openapi.models.operations.SeasonUpcomingResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            SeasonUpcomingRequest req = new SeasonUpcomingRequest(SeasonUpcomingFormatEnum.JSON);            

            SeasonUpcomingResponse res = sdk.sdk.seasonUpcoming(req);

            if (res.seasonUpcoming200ApplicationJSONInteger != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## stadiums

This method returns all stadiums.

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

            StandingsRequest req = new StandingsRequest(StandingsFormatEnum.XML, "nam");            

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

            TeamGameLogsBySeasonRequest req = new TeamGameLogsBySeasonRequest(TeamGameLogsBySeasonFormatEnum.JSON, "occaecati", "fugit", "deleniti");            

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

## teamGameStats

Team Game Stats

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TeamGameStatsFormatEnum;
import org.openapis.openapi.models.operations.TeamGameStatsRequest;
import org.openapis.openapi.models.operations.TeamGameStatsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            TeamGameStatsRequest req = new TeamGameStatsRequest(TeamGameStatsFormatEnum.JSON, "optio", "totam");            

            TeamGameStatsResponse res = sdk.sdk.teamGameStats(req);

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

            TeamSeasonStatsRequest req = new TeamSeasonStatsRequest(TeamSeasonStatsFormatEnum.XML, "commodi");            

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

Gets all active teams.

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

            TeamsActiveRequest req = new TeamsActiveRequest(TeamsActiveFormatEnum.XML);            

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

Gets all teams, including pro bowl teams.

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

## teamsBasic

Gets all teams, including pro bowl teams.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TeamsBasicFormatEnum;
import org.openapis.openapi.models.operations.TeamsBasicRequest;
import org.openapis.openapi.models.operations.TeamsBasicResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            TeamsBasicRequest req = new TeamsBasicRequest(TeamsBasicFormatEnum.XML);            

            TeamsBasicResponse res = sdk.sdk.teamsBasic(req);

            if (res.teamBasics != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## teamsBySeason

List of teams playing in a specified season.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TeamsBySeasonFormatEnum;
import org.openapis.openapi.models.operations.TeamsBySeasonRequest;
import org.openapis.openapi.models.operations.TeamsBySeasonResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            TeamsBySeasonRequest req = new TeamsBySeasonRequest(TeamsBySeasonFormatEnum.JSON, "cum");            

            TeamsBySeasonResponse res = sdk.sdk.teamsBySeason(req);

            if (res.teams != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## timeframes

Get detailed information about past, present, and future timeframes.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TimeframesFormatEnum;
import org.openapis.openapi.models.operations.TimeframesRequest;
import org.openapis.openapi.models.operations.TimeframesResponse;
import org.openapis.openapi.models.operations.TimeframesTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            TimeframesRequest req = new TimeframesRequest(TimeframesFormatEnum.XML, TimeframesTypeEnum.UPCOMING);            

            TimeframesResponse res = sdk.sdk.timeframes(req);

            if (res.timeframes != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## weekCurrent

Number of the current week of the NFL season. This value usually changes on Tuesday nights or Wednesday mornings at midnight ET.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WeekCurrentFormatEnum;
import org.openapis.openapi.models.operations.WeekCurrentRequest;
import org.openapis.openapi.models.operations.WeekCurrentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            WeekCurrentRequest req = new WeekCurrentRequest(WeekCurrentFormatEnum.JSON);            

            WeekCurrentResponse res = sdk.sdk.weekCurrent(req);

            if (res.weekCurrent200ApplicationJSONInteger != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## weekLastCompleted

Number of the last completed week of the NFL season. This value usually changes on Tuesday nights or Wednesday mornings at midnight ET.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WeekLastCompletedFormatEnum;
import org.openapis.openapi.models.operations.WeekLastCompletedRequest;
import org.openapis.openapi.models.operations.WeekLastCompletedResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            WeekLastCompletedRequest req = new WeekLastCompletedRequest(WeekLastCompletedFormatEnum.XML);            

            WeekLastCompletedResponse res = sdk.sdk.weekLastCompleted(req);

            if (res.weekLastCompleted200ApplicationJSONInteger != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## weekUpcoming

Number of the upcoming week of the NFL season. This value usually changes on Tuesday nights or Wednesday mornings at midnight ET.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WeekUpcomingFormatEnum;
import org.openapis.openapi.models.operations.WeekUpcomingRequest;
import org.openapis.openapi.models.operations.WeekUpcomingResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            WeekUpcomingRequest req = new WeekUpcomingRequest(WeekUpcomingFormatEnum.XML);            

            WeekUpcomingResponse res = sdk.sdk.weekUpcoming(req);

            if (res.weekUpcoming200ApplicationJSONInteger != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## xPing

Ping NFL API

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.XPingFormatEnum;
import org.openapis.openapi.models.operations.XPingRequest;
import org.openapis.openapi.models.operations.XPingResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            XPingRequest req = new XPingRequest(XPingFormatEnum.XML, "natus");            

            XPingResponse res = sdk.sdk.xPing(req);

            if (res.xPing200ApplicationJSONAny != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
