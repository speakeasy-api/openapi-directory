# SDK

## Overview

NFL rosters, player stats, team stats, and fantasy stats API.

### Available Operations

* [areGamesInProgress](#aregamesinprogress) - Are Games In Progress
* [boxScoreByScoreidV](#boxscorebyscoreidv) - Box Score by ScoreID V3
* [boxScoreV](#boxscorev) - Box Score V3
* [boxScoresDeltaV](#boxscoresdeltav) - Box Scores Delta V3
* [boxScoresVSimulation](#boxscoresvsimulation) - Box Scores V3 Simulation
* [byeWeeks](#byeweeks) - Bye Weeks
* [dailyFantasyPlayers](#dailyfantasyplayers) - Daily Fantasy Players
* [dailyFantasyScoring](#dailyfantasyscoring) - Daily Fantasy Scoring
* [dfsSlatesByDate](#dfsslatesbydate) - DFS Slates by Date
* [dfsSlatesByWeek](#dfsslatesbyweek) - DFS Slates by Week
* [fantasyDefenseGameStats](#fantasydefensegamestats) - Fantasy Defense Game Stats
* [fantasyDefenseGameStatsByTeam](#fantasydefensegamestatsbyteam) - Fantasy Defense Game Stats by Team
* [fantasyDefenseSeasonStats](#fantasydefenseseasonstats) - Fantasy Defense Season Stats
* [fantasyDefenseSeasonStatsByTeam](#fantasydefenseseasonstatsbyteam) - Fantasy Defense Season Stats by Team
* [fantasyPlayerOwnershipPercentagesSeasonLong](#fantasyplayerownershippercentagesseasonlong) - Fantasy Player Ownership Percentages (Season-Long)
* [fantasyPlayersWithAdp](#fantasyplayerswithadp) - Fantasy Players with ADP
* [gameStatsBySeasonDeprecatedUseTeamGameStatsInstead](#gamestatsbyseasondeprecateduseteamgamestatsinstead) - Game Stats by Season (Deprecated, use Team Game Stats instead)
* [gameStatsByWeekDeprecatedUseTeamGameStatsInstead](#gamestatsbyweekdeprecateduseteamgamestatsinstead) - Game Stats by Week (Deprecated, use Team Game Stats instead)
* [idpFantasyPlayersWithAdp](#idpfantasyplayerswithadp) - IDP Fantasy Players with ADP
* [injuries](#injuries) - Injuries
* [injuriesByTeam](#injuriesbyteam) - Injuries by Team
* [leagueLeadersBySeason](#leagueleadersbyseason) - League Leaders by Season
* [leagueLeadersByWeek](#leagueleadersbyweek) - League Leaders by Week
* [legacyBoxScore](#legacyboxscore) - Legacy Box Score
* [legacyBoxScores](#legacyboxscores) - Legacy Box Scores
* [legacyBoxScoresActive](#legacyboxscoresactive) - Legacy Box Scores Active
* [legacyBoxScoresDelta](#legacyboxscoresdelta) - Legacy Box Scores Delta
* [legacyBoxScoresDeltaCurrentWeek](#legacyboxscoresdeltacurrentweek) - Legacy Box Scores Delta (Current Week)
* [legacyBoxScoresFinal](#legacyboxscoresfinal) - Legacy Box Scores Final
* [legacyBoxScoresLive](#legacyboxscoreslive) - Legacy Box Scores Live
* [news](#news) - News
* [newsByDate](#newsbydate) - News by Date
* [newsByPlayer](#newsbyplayer) - News by Player
* [newsByTeam](#newsbyteam) - News by Team
* [playerDetailsByAvailable](#playerdetailsbyavailable) - Player Details by Available
* [playerDetailsByFreeAgents](#playerdetailsbyfreeagents) - Player Details by Free Agents
* [playerDetailsByPlayer](#playerdetailsbyplayer) - Player Details by Player
* [playerDetailsByRookieDraftYear](#playerdetailsbyrookiedraftyear) - Player Details by Rookie Draft Year
* [playerDetailsByTeam](#playerdetailsbyteam) - Player Details by Team
* [playerGameLogsBySeason](#playergamelogsbyseason) - Player Game Logs By Season
* [playerGameRedZoneStats](#playergameredzonestats) - Player Game Red Zone Stats
* [playerGameRedZoneStatsInsideFive](#playergameredzonestatsinsidefive) - Player Game Red Zone Stats Inside Five
* [playerGameRedZoneStatsInsideTen](#playergameredzonestatsinsideten) - Player Game Red Zone Stats Inside Ten
* [playerGameStatsByPlayer](#playergamestatsbyplayer) - Player Game Stats by Player
* [playerGameStatsByTeam](#playergamestatsbyteam) - Player Game Stats by Team
* [playerGameStatsByWeek](#playergamestatsbyweek) - Player Game Stats by Week
* [playerGameStatsByWeekDelta](#playergamestatsbyweekdelta) - Player Game Stats by Week Delta
* [playerGameStatsDelta](#playergamestatsdelta) - Player Game Stats Delta
* [playerSeasonRedZoneStats](#playerseasonredzonestats) - Player Season Red Zone Stats
* [playerSeasonRedZoneStatsInsideFive](#playerseasonredzonestatsinsidefive) - Player Season Red Zone Stats Inside Five
* [playerSeasonRedZoneStatsInsideTen](#playerseasonredzonestatsinsideten) - Player Season Red Zone Stats Inside Ten
* [playerSeasonStats](#playerseasonstats) - Player Season Stats
* [playerSeasonStatsByPlayer](#playerseasonstatsbyplayer) - Player Season Stats by Player
* [playerSeasonStatsByTeam](#playerseasonstatsbyteam) - Player Season Stats by Team
* [playerSeasonThirdDownStats](#playerseasonthirddownstats) - Player Season Third Down Stats
* [proBowlers](#probowlers) - Pro Bowlers
* [schedule](#schedule) - Schedule
* [scoresByDate](#scoresbydate) - Scores by Date
* [scoresBySeason](#scoresbyseason) - Scores by Season 
* [scoresByWeek](#scoresbyweek) - Scores by Week
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
* [teamsBySeason](#teamsbyseason) - Teams by Season
* [timeframes](#timeframes) - Timeframes
* [weekCurrent](#weekcurrent) - Week Current
* [weekLastCompleted](#weeklastcompleted) - Week Last Completed
* [weekUpcoming](#weekupcoming) - Week Upcoming

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

## boxScoreByScoreidV

Box Score by ScoreID V3

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BoxScoreByScoreidVFormatEnum;
import org.openapis.openapi.models.operations.BoxScoreByScoreidVRequest;
import org.openapis.openapi.models.operations.BoxScoreByScoreidVResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            BoxScoreByScoreidVRequest req = new BoxScoreByScoreidVRequest(BoxScoreByScoreidVFormatEnum.JSON, "quibusdam");            

            BoxScoreByScoreidVResponse res = sdk.sdk.boxScoreByScoreidV(req);

            if (res.boxScoreV3 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## boxScoreV

Box Score V3

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BoxScoreVFormatEnum;
import org.openapis.openapi.models.operations.BoxScoreVRequest;
import org.openapis.openapi.models.operations.BoxScoreVResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            BoxScoreVRequest req = new BoxScoreVRequest(BoxScoreVFormatEnum.JSON, "nulla", "corrupti", "illum");            

            BoxScoreVResponse res = sdk.sdk.boxScoreV(req);

            if (res.boxScoreV3 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## boxScoresDeltaV

This method returns all box scores for a given season and week, but only returns player stats that have changed in the last X minutes. You can also filter by type of player stats to include, such as traditional fantasy players, IDP players or all players.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BoxScoresDeltaVFormatEnum;
import org.openapis.openapi.models.operations.BoxScoresDeltaVPlayerstoincludeEnum;
import org.openapis.openapi.models.operations.BoxScoresDeltaVRequest;
import org.openapis.openapi.models.operations.BoxScoresDeltaVResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            BoxScoresDeltaVRequest req = new BoxScoresDeltaVRequest(BoxScoresDeltaVFormatEnum.XML, "error", BoxScoresDeltaVPlayerstoincludeEnum.FANTASY, "suscipit", "iure");            

            BoxScoresDeltaVResponse res = sdk.sdk.boxScoresDeltaV(req);

            if (res.boxScoreV3s != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## boxScoresVSimulation

Gets simulated live box scores of NFL games, covering the Conference Championship games on January 21, 2018.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BoxScoresVSimulationFormatEnum;
import org.openapis.openapi.models.operations.BoxScoresVSimulationRequest;
import org.openapis.openapi.models.operations.BoxScoresVSimulationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            BoxScoresVSimulationRequest req = new BoxScoresVSimulationRequest(BoxScoresVSimulationFormatEnum.XML, "debitis");            

            BoxScoresVSimulationResponse res = sdk.sdk.boxScoresVSimulation(req);

            if (res.boxScoreV3s != null) {
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

            ByeWeeksRequest req = new ByeWeeksRequest("ipsa", "delectus");            

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

## dailyFantasyPlayers

Daily Fantasy Players

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DailyFantasyPlayersFormatEnum;
import org.openapis.openapi.models.operations.DailyFantasyPlayersRequest;
import org.openapis.openapi.models.operations.DailyFantasyPlayersResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            DailyFantasyPlayersRequest req = new DailyFantasyPlayersRequest("tempora", DailyFantasyPlayersFormatEnum.XML);            

            DailyFantasyPlayersResponse res = sdk.sdk.dailyFantasyPlayers(req);

            if (res.dailyFantasyPlayers != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dailyFantasyScoring

Daily Fantasy Scoring

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DailyFantasyScoringFormatEnum;
import org.openapis.openapi.models.operations.DailyFantasyScoringRequest;
import org.openapis.openapi.models.operations.DailyFantasyScoringResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            DailyFantasyScoringRequest req = new DailyFantasyScoringRequest("molestiae", DailyFantasyScoringFormatEnum.JSON);            

            DailyFantasyScoringResponse res = sdk.sdk.dailyFantasyScoring(req);

            if (res.dailyFantasyScorings != null) {
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

            DfsSlatesByDateRequest req = new DfsSlatesByDateRequest("placeat", DfsSlatesByDateFormatEnum.JSON);            

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

## dfsSlatesByWeek

DFS Slates by Week

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfsSlatesByWeekFormatEnum;
import org.openapis.openapi.models.operations.DfsSlatesByWeekRequest;
import org.openapis.openapi.models.operations.DfsSlatesByWeekResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            DfsSlatesByWeekRequest req = new DfsSlatesByWeekRequest(DfsSlatesByWeekFormatEnum.XML, "excepturi", "nisi");            

            DfsSlatesByWeekResponse res = sdk.sdk.dfsSlatesByWeek(req);

            if (res.dfsSlates != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fantasyDefenseGameStats

Fantasy Defense Game Stats

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FantasyDefenseGameStatsFormatEnum;
import org.openapis.openapi.models.operations.FantasyDefenseGameStatsRequest;
import org.openapis.openapi.models.operations.FantasyDefenseGameStatsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            FantasyDefenseGameStatsRequest req = new FantasyDefenseGameStatsRequest(FantasyDefenseGameStatsFormatEnum.JSON, "temporibus", "ab");            

            FantasyDefenseGameStatsResponse res = sdk.sdk.fantasyDefenseGameStats(req);

            if (res.fantasyDefenseGames != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fantasyDefenseGameStatsByTeam

Fantasy Defense Game Stats by Team

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FantasyDefenseGameStatsByTeamFormatEnum;
import org.openapis.openapi.models.operations.FantasyDefenseGameStatsByTeamRequest;
import org.openapis.openapi.models.operations.FantasyDefenseGameStatsByTeamResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            FantasyDefenseGameStatsByTeamRequest req = new FantasyDefenseGameStatsByTeamRequest(FantasyDefenseGameStatsByTeamFormatEnum.XML, "veritatis", "deserunt", "perferendis");            

            FantasyDefenseGameStatsByTeamResponse res = sdk.sdk.fantasyDefenseGameStatsByTeam(req);

            if (res.fantasyDefenseGame != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fantasyDefenseSeasonStats

Fantasy Defense Season Stats

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FantasyDefenseSeasonStatsFormatEnum;
import org.openapis.openapi.models.operations.FantasyDefenseSeasonStatsRequest;
import org.openapis.openapi.models.operations.FantasyDefenseSeasonStatsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            FantasyDefenseSeasonStatsRequest req = new FantasyDefenseSeasonStatsRequest(FantasyDefenseSeasonStatsFormatEnum.XML, "repellendus");            

            FantasyDefenseSeasonStatsResponse res = sdk.sdk.fantasyDefenseSeasonStats(req);

            if (res.fantasyDefenseSeasons != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fantasyDefenseSeasonStatsByTeam

Fantasy Defense Season Stats by Team

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FantasyDefenseSeasonStatsByTeamFormatEnum;
import org.openapis.openapi.models.operations.FantasyDefenseSeasonStatsByTeamRequest;
import org.openapis.openapi.models.operations.FantasyDefenseSeasonStatsByTeamResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            FantasyDefenseSeasonStatsByTeamRequest req = new FantasyDefenseSeasonStatsByTeamRequest(FantasyDefenseSeasonStatsByTeamFormatEnum.JSON, "quo", "odit");            

            FantasyDefenseSeasonStatsByTeamResponse res = sdk.sdk.fantasyDefenseSeasonStatsByTeam(req);

            if (res.fantasyDefenseSeason != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fantasyPlayerOwnershipPercentagesSeasonLong

Fantasy Player Ownership Percentages (Season-Long)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FantasyPlayerOwnershipPercentagesSeasonLongFormatEnum;
import org.openapis.openapi.models.operations.FantasyPlayerOwnershipPercentagesSeasonLongRequest;
import org.openapis.openapi.models.operations.FantasyPlayerOwnershipPercentagesSeasonLongResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            FantasyPlayerOwnershipPercentagesSeasonLongRequest req = new FantasyPlayerOwnershipPercentagesSeasonLongRequest(FantasyPlayerOwnershipPercentagesSeasonLongFormatEnum.JSON, "at", "maiores");            

            FantasyPlayerOwnershipPercentagesSeasonLongResponse res = sdk.sdk.fantasyPlayerOwnershipPercentagesSeasonLong(req);

            if (res.playerOwnerships != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fantasyPlayersWithAdp

This method returns a comprehensive list of draftable fantasy football players, including QB, RB, WR, TE, K and DEF.  Players are sorted by ADP (AverageDraftPosition).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FantasyPlayersWithAdpFormatEnum;
import org.openapis.openapi.models.operations.FantasyPlayersWithAdpRequest;
import org.openapis.openapi.models.operations.FantasyPlayersWithAdpResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            FantasyPlayersWithAdpRequest req = new FantasyPlayersWithAdpRequest(FantasyPlayersWithAdpFormatEnum.XML);            

            FantasyPlayersWithAdpResponse res = sdk.sdk.fantasyPlayersWithAdp(req);

            if (res.fantasyPlayers != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## gameStatsBySeasonDeprecatedUseTeamGameStatsInstead

Game stats for a specified season.

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

            GameStatsBySeasonDeprecatedUseTeamGameStatsInsteadRequest req = new GameStatsBySeasonDeprecatedUseTeamGameStatsInsteadRequest(GameStatsBySeasonDeprecatedUseTeamGameStatsInsteadFormatEnum.JSON, "quod");            

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

Game stats for a specified season and week.

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

            GameStatsByWeekDeprecatedUseTeamGameStatsInsteadRequest req = new GameStatsByWeekDeprecatedUseTeamGameStatsInsteadRequest(GameStatsByWeekDeprecatedUseTeamGameStatsInsteadFormatEnum.XML, "totam", "porro");            

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

## idpFantasyPlayersWithAdp

This method returns the top 300+ IDP Fantasy Players for the current or upcoming season, ordered by AverageDraftPositionIDP.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IdpFantasyPlayersWithAdpFormatEnum;
import org.openapis.openapi.models.operations.IdpFantasyPlayersWithAdpRequest;
import org.openapis.openapi.models.operations.IdpFantasyPlayersWithAdpResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            IdpFantasyPlayersWithAdpRequest req = new IdpFantasyPlayersWithAdpRequest(IdpFantasyPlayersWithAdpFormatEnum.JSON);            

            IdpFantasyPlayersWithAdpResponse res = sdk.sdk.idpFantasyPlayersWithAdp(req);

            if (res.fantasyPlayers != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## injuries

Injuries

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.InjuriesFormatEnum;
import org.openapis.openapi.models.operations.InjuriesRequest;
import org.openapis.openapi.models.operations.InjuriesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            InjuriesRequest req = new InjuriesRequest(InjuriesFormatEnum.XML, "nam", "officia");            

            InjuriesResponse res = sdk.sdk.injuries(req);

            if (res.injuries != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## injuriesByTeam

Injuries by Team

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.InjuriesByTeamFormatEnum;
import org.openapis.openapi.models.operations.InjuriesByTeamRequest;
import org.openapis.openapi.models.operations.InjuriesByTeamResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            InjuriesByTeamRequest req = new InjuriesByTeamRequest(InjuriesByTeamFormatEnum.JSON, "fugit", "deleniti", "hic");            

            InjuriesByTeamResponse res = sdk.sdk.injuriesByTeam(req);

            if (res.injuries != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## leagueLeadersBySeason

League Leaders by Season

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LeagueLeadersBySeasonColumnEnum;
import org.openapis.openapi.models.operations.LeagueLeadersBySeasonFormatEnum;
import org.openapis.openapi.models.operations.LeagueLeadersBySeasonPositionEnum;
import org.openapis.openapi.models.operations.LeagueLeadersBySeasonRequest;
import org.openapis.openapi.models.operations.LeagueLeadersBySeasonResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            LeagueLeadersBySeasonRequest req = new LeagueLeadersBySeasonRequest(LeagueLeadersBySeasonColumnEnum.INTERCEPTIONS, LeagueLeadersBySeasonFormatEnum.JSON, LeagueLeadersBySeasonPositionEnum.OFFENSE, "commodi");            

            LeagueLeadersBySeasonResponse res = sdk.sdk.leagueLeadersBySeason(req);

            if (res.playerSeasons != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## leagueLeadersByWeek

League Leaders by Week

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LeagueLeadersByWeekColumnEnum;
import org.openapis.openapi.models.operations.LeagueLeadersByWeekFormatEnum;
import org.openapis.openapi.models.operations.LeagueLeadersByWeekPositionEnum;
import org.openapis.openapi.models.operations.LeagueLeadersByWeekRequest;
import org.openapis.openapi.models.operations.LeagueLeadersByWeekResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            LeagueLeadersByWeekRequest req = new LeagueLeadersByWeekRequest(LeagueLeadersByWeekColumnEnum.RECEPTIONS, LeagueLeadersByWeekFormatEnum.XML, LeagueLeadersByWeekPositionEnum.QB, "impedit", "cum");            

            LeagueLeadersByWeekResponse res = sdk.sdk.leagueLeadersByWeek(req);

            if (res.playerGames != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## legacyBoxScore

Legacy Box Score

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LegacyBoxScoreFormatEnum;
import org.openapis.openapi.models.operations.LegacyBoxScoreRequest;
import org.openapis.openapi.models.operations.LegacyBoxScoreResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            LegacyBoxScoreRequest req = new LegacyBoxScoreRequest(LegacyBoxScoreFormatEnum.XML, "ipsum", "excepturi", "aspernatur");            

            LegacyBoxScoreResponse res = sdk.sdk.legacyBoxScore(req);

            if (res.boxScore != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## legacyBoxScores

This method returns all box scores for a given season and week.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LegacyBoxScoresFormatEnum;
import org.openapis.openapi.models.operations.LegacyBoxScoresRequest;
import org.openapis.openapi.models.operations.LegacyBoxScoresResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            LegacyBoxScoresRequest req = new LegacyBoxScoresRequest(LegacyBoxScoresFormatEnum.XML, "ad", "natus");            

            LegacyBoxScoresResponse res = sdk.sdk.legacyBoxScores(req);

            if (res.boxScores != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## legacyBoxScoresActive

This method returns box scores for all games that are either in-progress or have been updated within the last 30 minutes.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LegacyBoxScoresActiveFormatEnum;
import org.openapis.openapi.models.operations.LegacyBoxScoresActiveRequest;
import org.openapis.openapi.models.operations.LegacyBoxScoresActiveResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            LegacyBoxScoresActiveRequest req = new LegacyBoxScoresActiveRequest(LegacyBoxScoresActiveFormatEnum.XML);            

            LegacyBoxScoresActiveResponse res = sdk.sdk.legacyBoxScoresActive(req);

            if (res.boxScores != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## legacyBoxScoresDelta

This method returns all box scores for a given season and week, but only returns player stats that have changed in the last X minutes.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LegacyBoxScoresDeltaFormatEnum;
import org.openapis.openapi.models.operations.LegacyBoxScoresDeltaRequest;
import org.openapis.openapi.models.operations.LegacyBoxScoresDeltaResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            LegacyBoxScoresDeltaRequest req = new LegacyBoxScoresDeltaRequest(LegacyBoxScoresDeltaFormatEnum.JSON, "dolor", "natus", "laboriosam");            

            LegacyBoxScoresDeltaResponse res = sdk.sdk.legacyBoxScoresDelta(req);

            if (res.boxScores != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## legacyBoxScoresDeltaCurrentWeek

Legacy Box Scores Delta (Current Week)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LegacyBoxScoresDeltaCurrentWeekFormatEnum;
import org.openapis.openapi.models.operations.LegacyBoxScoresDeltaCurrentWeekRequest;
import org.openapis.openapi.models.operations.LegacyBoxScoresDeltaCurrentWeekResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            LegacyBoxScoresDeltaCurrentWeekRequest req = new LegacyBoxScoresDeltaCurrentWeekRequest(LegacyBoxScoresDeltaCurrentWeekFormatEnum.JSON, "saepe");            

            LegacyBoxScoresDeltaCurrentWeekResponse res = sdk.sdk.legacyBoxScoresDeltaCurrentWeek(req);

            if (res.boxScores != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## legacyBoxScoresFinal

Legacy Box Scores Final

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LegacyBoxScoresFinalFormatEnum;
import org.openapis.openapi.models.operations.LegacyBoxScoresFinalRequest;
import org.openapis.openapi.models.operations.LegacyBoxScoresFinalResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            LegacyBoxScoresFinalRequest req = new LegacyBoxScoresFinalRequest(LegacyBoxScoresFinalFormatEnum.JSON);            

            LegacyBoxScoresFinalResponse res = sdk.sdk.legacyBoxScoresFinal(req);

            if (res.boxScores != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## legacyBoxScoresLive

Legacy Box Scores Live

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LegacyBoxScoresLiveFormatEnum;
import org.openapis.openapi.models.operations.LegacyBoxScoresLiveRequest;
import org.openapis.openapi.models.operations.LegacyBoxScoresLiveResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            LegacyBoxScoresLiveRequest req = new LegacyBoxScoresLiveRequest(LegacyBoxScoresLiveFormatEnum.XML);            

            LegacyBoxScoresLiveResponse res = sdk.sdk.legacyBoxScoresLive(req);

            if (res.boxScores != null) {
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

            NewsRequest req = new NewsRequest("corporis");            

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

            NewsByDateRequest req = new NewsByDateRequest("iste", "iure");            

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

            NewsByPlayerRequest req = new NewsByPlayerRequest("saepe", "quidem");            

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

            NewsByTeamRequest req = new NewsByTeamRequest("architecto", "ipsa");            

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

            PlayerDetailsByAvailableRequest req = new PlayerDetailsByAvailableRequest(PlayerDetailsByAvailableFormatEnum.JSON);            

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

            PlayerDetailsByFreeAgentsRequest req = new PlayerDetailsByFreeAgentsRequest(PlayerDetailsByFreeAgentsFormatEnum.JSON);            

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

            PlayerDetailsByPlayerRequest req = new PlayerDetailsByPlayerRequest(PlayerDetailsByPlayerFormatEnum.JSON, "laborum");            

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

            PlayerDetailsByRookieDraftYearRequest req = new PlayerDetailsByRookieDraftYearRequest("dolores", "dolorem");            

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

            PlayerDetailsByTeamRequest req = new PlayerDetailsByTeamRequest(PlayerDetailsByTeamFormatEnum.XML, "explicabo");            

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

            PlayerGameLogsBySeasonRequest req = new PlayerGameLogsBySeasonRequest(PlayerGameLogsBySeasonFormatEnum.XML, "enim", "omnis", "nemo");            

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

## playerGameRedZoneStats

Player Game Red Zone Stats

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PlayerGameRedZoneStatsFormatEnum;
import org.openapis.openapi.models.operations.PlayerGameRedZoneStatsRequest;
import org.openapis.openapi.models.operations.PlayerGameRedZoneStatsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            PlayerGameRedZoneStatsRequest req = new PlayerGameRedZoneStatsRequest(PlayerGameRedZoneStatsFormatEnum.XML, "excepturi", "accusantium");            

            PlayerGameRedZoneStatsResponse res = sdk.sdk.playerGameRedZoneStats(req);

            if (res.playerGameRedZones != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## playerGameRedZoneStatsInsideFive

Player Game Red Zone Stats Inside Five

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PlayerGameRedZoneStatsInsideFiveFormatEnum;
import org.openapis.openapi.models.operations.PlayerGameRedZoneStatsInsideFiveRequest;
import org.openapis.openapi.models.operations.PlayerGameRedZoneStatsInsideFiveResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            PlayerGameRedZoneStatsInsideFiveRequest req = new PlayerGameRedZoneStatsInsideFiveRequest(PlayerGameRedZoneStatsInsideFiveFormatEnum.XML, "culpa", "doloribus");            

            PlayerGameRedZoneStatsInsideFiveResponse res = sdk.sdk.playerGameRedZoneStatsInsideFive(req);

            if (res.playerGameRedZones != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## playerGameRedZoneStatsInsideTen

Player Game Red Zone Stats Inside Ten

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PlayerGameRedZoneStatsInsideTenFormatEnum;
import org.openapis.openapi.models.operations.PlayerGameRedZoneStatsInsideTenRequest;
import org.openapis.openapi.models.operations.PlayerGameRedZoneStatsInsideTenResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            PlayerGameRedZoneStatsInsideTenRequest req = new PlayerGameRedZoneStatsInsideTenRequest(PlayerGameRedZoneStatsInsideTenFormatEnum.JSON, "architecto", "mollitia");            

            PlayerGameRedZoneStatsInsideTenResponse res = sdk.sdk.playerGameRedZoneStatsInsideTen(req);

            if (res.playerGameRedZones != null) {
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

            PlayerGameStatsByPlayerRequest req = new PlayerGameStatsByPlayerRequest(PlayerGameStatsByPlayerFormatEnum.XML, "culpa", "consequuntur", "repellat");            

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

## playerGameStatsByTeam

Player Game Stats by Team

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PlayerGameStatsByTeamFormatEnum;
import org.openapis.openapi.models.operations.PlayerGameStatsByTeamRequest;
import org.openapis.openapi.models.operations.PlayerGameStatsByTeamResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            PlayerGameStatsByTeamRequest req = new PlayerGameStatsByTeamRequest(PlayerGameStatsByTeamFormatEnum.JSON, "occaecati", "numquam", "commodi");            

            PlayerGameStatsByTeamResponse res = sdk.sdk.playerGameStatsByTeam(req);

            if (res.playerGames != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## playerGameStatsByWeek

Player Game Stats by Week

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PlayerGameStatsByWeekFormatEnum;
import org.openapis.openapi.models.operations.PlayerGameStatsByWeekRequest;
import org.openapis.openapi.models.operations.PlayerGameStatsByWeekResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            PlayerGameStatsByWeekRequest req = new PlayerGameStatsByWeekRequest(PlayerGameStatsByWeekFormatEnum.XML, "molestiae", "velit");            

            PlayerGameStatsByWeekResponse res = sdk.sdk.playerGameStatsByWeek(req);

            if (res.playerGames != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## playerGameStatsByWeekDelta

Player Game Stats by Week Delta

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PlayerGameStatsByWeekDeltaFormatEnum;
import org.openapis.openapi.models.operations.PlayerGameStatsByWeekDeltaRequest;
import org.openapis.openapi.models.operations.PlayerGameStatsByWeekDeltaResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            PlayerGameStatsByWeekDeltaRequest req = new PlayerGameStatsByWeekDeltaRequest(PlayerGameStatsByWeekDeltaFormatEnum.JSON, "quia", "quis", "vitae");            

            PlayerGameStatsByWeekDeltaResponse res = sdk.sdk.playerGameStatsByWeekDelta(req);

            if (res.playerGames != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## playerGameStatsDelta

Player Game Stats Delta

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PlayerGameStatsDeltaFormatEnum;
import org.openapis.openapi.models.operations.PlayerGameStatsDeltaRequest;
import org.openapis.openapi.models.operations.PlayerGameStatsDeltaResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            PlayerGameStatsDeltaRequest req = new PlayerGameStatsDeltaRequest(PlayerGameStatsDeltaFormatEnum.JSON, "animi");            

            PlayerGameStatsDeltaResponse res = sdk.sdk.playerGameStatsDelta(req);

            if (res.playerGames != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## playerSeasonRedZoneStats

Player Season Red Zone Stats

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PlayerSeasonRedZoneStatsFormatEnum;
import org.openapis.openapi.models.operations.PlayerSeasonRedZoneStatsRequest;
import org.openapis.openapi.models.operations.PlayerSeasonRedZoneStatsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            PlayerSeasonRedZoneStatsRequest req = new PlayerSeasonRedZoneStatsRequest(PlayerSeasonRedZoneStatsFormatEnum.XML, "odit");            

            PlayerSeasonRedZoneStatsResponse res = sdk.sdk.playerSeasonRedZoneStats(req);

            if (res.playerSeasonRedZones != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## playerSeasonRedZoneStatsInsideFive

Player Season Red Zone Stats Inside Five

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PlayerSeasonRedZoneStatsInsideFiveFormatEnum;
import org.openapis.openapi.models.operations.PlayerSeasonRedZoneStatsInsideFiveRequest;
import org.openapis.openapi.models.operations.PlayerSeasonRedZoneStatsInsideFiveResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            PlayerSeasonRedZoneStatsInsideFiveRequest req = new PlayerSeasonRedZoneStatsInsideFiveRequest(PlayerSeasonRedZoneStatsInsideFiveFormatEnum.JSON, "sequi");            

            PlayerSeasonRedZoneStatsInsideFiveResponse res = sdk.sdk.playerSeasonRedZoneStatsInsideFive(req);

            if (res.playerSeasonRedZones != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## playerSeasonRedZoneStatsInsideTen

Player Season Red Zone Stats Inside Ten

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PlayerSeasonRedZoneStatsInsideTenFormatEnum;
import org.openapis.openapi.models.operations.PlayerSeasonRedZoneStatsInsideTenRequest;
import org.openapis.openapi.models.operations.PlayerSeasonRedZoneStatsInsideTenResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            PlayerSeasonRedZoneStatsInsideTenRequest req = new PlayerSeasonRedZoneStatsInsideTenRequest(PlayerSeasonRedZoneStatsInsideTenFormatEnum.JSON, "ipsam");            

            PlayerSeasonRedZoneStatsInsideTenResponse res = sdk.sdk.playerSeasonRedZoneStatsInsideTen(req);

            if (res.playerSeasonRedZones != null) {
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

            PlayerSeasonStatsRequest req = new PlayerSeasonStatsRequest(PlayerSeasonStatsFormatEnum.JSON, "possimus");            

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

Player Season Stats by Player

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

            PlayerSeasonStatsByPlayerRequest req = new PlayerSeasonStatsByPlayerRequest(PlayerSeasonStatsByPlayerFormatEnum.XML, "quasi", "error");            

            PlayerSeasonStatsByPlayerResponse res = sdk.sdk.playerSeasonStatsByPlayer(req);

            if (res.playerSeasons != null) {
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

            PlayerSeasonStatsByTeamRequest req = new PlayerSeasonStatsByTeamRequest(PlayerSeasonStatsByTeamFormatEnum.JSON, "laborum", "quasi");            

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

## playerSeasonThirdDownStats

Player Season Third Down Stats

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PlayerSeasonThirdDownStatsFormatEnum;
import org.openapis.openapi.models.operations.PlayerSeasonThirdDownStatsRequest;
import org.openapis.openapi.models.operations.PlayerSeasonThirdDownStatsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            PlayerSeasonThirdDownStatsRequest req = new PlayerSeasonThirdDownStatsRequest(PlayerSeasonThirdDownStatsFormatEnum.JSON, "voluptatibus");            

            PlayerSeasonThirdDownStatsResponse res = sdk.sdk.playerSeasonThirdDownStats(req);

            if (res.playerSeasonThirdDowns != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## proBowlers

Pro Bowlers

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProBowlersFormatEnum;
import org.openapis.openapi.models.operations.ProBowlersRequest;
import org.openapis.openapi.models.operations.ProBowlersResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            ProBowlersRequest req = new ProBowlersRequest(ProBowlersFormatEnum.JSON, "nihil");            

            ProBowlersResponse res = sdk.sdk.proBowlers(req);

            if (res.playerInfos != null) {
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

            ScheduleRequest req = new ScheduleRequest("praesentium", "voluptatibus");            

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

## scoresByDate

Get game scores for a specified week of a season.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
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

            ScoresByDateRequest req = new ScoresByDateRequest("ipsa", "omnis");            

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

            ScoresBySeasonRequest req = new ScoresBySeasonRequest("voluptate", "cum");            

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

            ScoresByWeekRequest req = new ScoresByWeekRequest("perferendis", "doloremque", "reprehenderit");            

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

            ScoresByWeekSimulationRequest req = new ScoresByWeekSimulationRequest(ScoresByWeekSimulationFormatEnum.XML, "maiores");            

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

            SeasonCurrentRequest req = new SeasonCurrentRequest("dicta");            

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

            SeasonLastCompletedRequest req = new SeasonLastCompletedRequest("corporis");            

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

            SeasonUpcomingRequest req = new SeasonUpcomingRequest("dolore");            

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

            StadiumsRequest req = new StadiumsRequest("iusto");            

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

            StandingsRequest req = new StandingsRequest("dicta", "harum");            

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

            TeamGameLogsBySeasonRequest req = new TeamGameLogsBySeasonRequest(TeamGameLogsBySeasonFormatEnum.JSON, "accusamus", "commodi", "repudiandae");            

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

            TeamGameStatsRequest req = new TeamGameStatsRequest(TeamGameStatsFormatEnum.XML, "ipsum", "quidem");            

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

            TeamSeasonStatsRequest req = new TeamSeasonStatsRequest(TeamSeasonStatsFormatEnum.JSON, "excepturi");            

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

            TeamsActiveRequest req = new TeamsActiveRequest("pariatur");            

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

            TeamsAllRequest req = new TeamsAllRequest("modi");            

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

## teamsBySeason

List of teams playing in a specified season.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
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

            TeamsBySeasonRequest req = new TeamsBySeasonRequest("praesentium", "rem");            

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
import org.openapis.openapi.models.operations.TimeframesRequest;
import org.openapis.openapi.models.operations.TimeframesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            TimeframesRequest req = new TimeframesRequest("voluptates", "quasi");            

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

            WeekCurrentRequest req = new WeekCurrentRequest("repudiandae");            

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

Number of the current week of the NFL season. This value usually changes on Tuesday nights or Wednesday mornings at midnight ET.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
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

            WeekLastCompletedRequest req = new WeekLastCompletedRequest("sint");            

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

Number of the current week of the NFL season. This value usually changes on Tuesday nights or Wednesday mornings at midnight ET.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
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

            WeekUpcomingRequest req = new WeekUpcomingRequest("veritatis");            

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
