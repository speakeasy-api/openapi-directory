# SDK

## Overview

CFB schedules, scores, team stats, odds, weather, and news API.

### Available Operations

* [areGamesInProgress](#aregamesinprogress) - Are Games In Progress
* [conferenceHierarchyWithTeams](#conferencehierarchywithteams) - Conference Hierarchy (with Teams)
* [currentSeason](#currentseason) - Current Season
* [currentSeasonDetails](#currentseasondetails) - Current Season Details
* [currentSeasontype](#currentseasontype) - Current SeasonType
* [currentWeek](#currentweek) - Current Week
* [gamesByDate](#gamesbydate) - Games by Date
* [gamesByWeek](#gamesbyweek) - Games by Week
* [gamesByWeekBasic](#gamesbyweekbasic) - Games by Week (Basic)
* [injuredPlayers](#injuredplayers) - Injured Players
* [playerDetailsByActive](#playerdetailsbyactive) - Player Details By Active
* [playerDetailsByPlayer](#playerdetailsbyplayer) - Player Details By Player
* [playerDetailsByTeam](#playerdetailsbyteam) - Player Details by Team
* [playersByTeamBasic](#playersbyteambasic) - Players by Team (Basic)
* [schedules](#schedules) - Schedules
* [schedulesBasic](#schedulesbasic) - Schedules (Basic)
* [stadiums](#stadiums) - Stadiums
* [teamGameLogsBySeason](#teamgamelogsbyseason) - Team Game Logs By Season
* [teamGameStatsByWeek](#teamgamestatsbyweek) - Team Game Stats by Week
* [teamSeasonStatsStandings](#teamseasonstatsstandings) - Team Season Stats & Standings
* [teams](#teams) - Teams
* [teamsBasic](#teamsbasic) - Teams (Basic)

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

## conferenceHierarchyWithTeams

Conference Hierarchy (with Teams)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConferenceHierarchyWithTeamsFormatEnum;
import org.openapis.openapi.models.operations.ConferenceHierarchyWithTeamsRequest;
import org.openapis.openapi.models.operations.ConferenceHierarchyWithTeamsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            ConferenceHierarchyWithTeamsRequest req = new ConferenceHierarchyWithTeamsRequest(ConferenceHierarchyWithTeamsFormatEnum.JSON);            

            ConferenceHierarchyWithTeamsResponse res = sdk.sdk.conferenceHierarchyWithTeams(req);

            if (res.conferences != null) {
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

            if (res.currentSeason200ApplicationJSONInteger != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## currentSeasonDetails

Current Season Details

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CurrentSeasonDetailsFormatEnum;
import org.openapis.openapi.models.operations.CurrentSeasonDetailsRequest;
import org.openapis.openapi.models.operations.CurrentSeasonDetailsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            CurrentSeasonDetailsRequest req = new CurrentSeasonDetailsRequest(CurrentSeasonDetailsFormatEnum.JSON);            

            CurrentSeasonDetailsResponse res = sdk.sdk.currentSeasonDetails(req);

            if (res.season != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## currentSeasontype

Current SeasonType

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CurrentSeasontypeFormatEnum;
import org.openapis.openapi.models.operations.CurrentSeasontypeRequest;
import org.openapis.openapi.models.operations.CurrentSeasontypeResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            CurrentSeasontypeRequest req = new CurrentSeasontypeRequest(CurrentSeasontypeFormatEnum.JSON);            

            CurrentSeasontypeResponse res = sdk.sdk.currentSeasontype(req);

            if (res.currentSeasontype200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## currentWeek

Current Week

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CurrentWeekFormatEnum;
import org.openapis.openapi.models.operations.CurrentWeekRequest;
import org.openapis.openapi.models.operations.CurrentWeekResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            CurrentWeekRequest req = new CurrentWeekRequest(CurrentWeekFormatEnum.JSON);            

            CurrentWeekResponse res = sdk.sdk.currentWeek(req);

            if (res.currentWeek200ApplicationJSONInteger != null) {
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

            GamesByDateRequest req = new GamesByDateRequest("illum", GamesByDateFormatEnum.XML);            

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

## gamesByWeek

Games by Week

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GamesByWeekFormatEnum;
import org.openapis.openapi.models.operations.GamesByWeekRequest;
import org.openapis.openapi.models.operations.GamesByWeekResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            GamesByWeekRequest req = new GamesByWeekRequest(GamesByWeekFormatEnum.JSON, "deserunt", "suscipit");            

            GamesByWeekResponse res = sdk.sdk.gamesByWeek(req);

            if (res.games != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## gamesByWeekBasic

Games by Week (Basic)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GamesByWeekBasicFormatEnum;
import org.openapis.openapi.models.operations.GamesByWeekBasicRequest;
import org.openapis.openapi.models.operations.GamesByWeekBasicResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            GamesByWeekBasicRequest req = new GamesByWeekBasicRequest(GamesByWeekBasicFormatEnum.XML, "magnam", "debitis");            

            GamesByWeekBasicResponse res = sdk.sdk.gamesByWeekBasic(req);

            if (res.gamesByWeekBasic200ApplicationJSONAny != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## injuredPlayers

This endpoint provides all currently injured college football players, along with injury details.

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

## playerDetailsByActive

Player Details By Active

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

Player Details By Player

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

            PlayerDetailsByPlayerRequest req = new PlayerDetailsByPlayerRequest(PlayerDetailsByPlayerFormatEnum.XML, "suscipit");            

            PlayerDetailsByPlayerResponse res = sdk.sdk.playerDetailsByPlayer(req);

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

            PlayerDetailsByTeamRequest req = new PlayerDetailsByTeamRequest(PlayerDetailsByTeamFormatEnum.XML, "minus");            

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

            PlayersByTeamBasicRequest req = new PlayersByTeamBasicRequest(PlayersByTeamBasicFormatEnum.JSON, "voluptatum");            

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

            SchedulesRequest req = new SchedulesRequest(SchedulesFormatEnum.XML, "excepturi");            

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

            SchedulesBasicRequest req = new SchedulesBasicRequest(SchedulesBasicFormatEnum.XML, "recusandae");            

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

            TeamGameLogsBySeasonRequest req = new TeamGameLogsBySeasonRequest(TeamGameLogsBySeasonFormatEnum.XML, "quis", "veritatis", "deserunt");            

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

## teamGameStatsByWeek

Team Game Stats by Week

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TeamGameStatsByWeekFormatEnum;
import org.openapis.openapi.models.operations.TeamGameStatsByWeekRequest;
import org.openapis.openapi.models.operations.TeamGameStatsByWeekResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            TeamGameStatsByWeekRequest req = new TeamGameStatsByWeekRequest(TeamGameStatsByWeekFormatEnum.XML, "ipsam", "repellendus");            

            TeamGameStatsByWeekResponse res = sdk.sdk.teamGameStatsByWeek(req);

            if (res.teamGames != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## teamSeasonStatsStandings

Team Season Stats & Standings

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TeamSeasonStatsStandingsFormatEnum;
import org.openapis.openapi.models.operations.TeamSeasonStatsStandingsRequest;
import org.openapis.openapi.models.operations.TeamSeasonStatsStandingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            TeamSeasonStatsStandingsRequest req = new TeamSeasonStatsStandingsRequest(TeamSeasonStatsStandingsFormatEnum.JSON, "quo");            

            TeamSeasonStatsStandingsResponse res = sdk.sdk.teamSeasonStatsStandings(req);

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

## teamsBasic

Teams (Basic)

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

            TeamsBasicRequest req = new TeamsBasicRequest(TeamsBasicFormatEnum.JSON);            

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
