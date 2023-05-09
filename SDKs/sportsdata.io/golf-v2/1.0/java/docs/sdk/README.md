# SDK

### Available Operations

* [currentSeason](#currentseason) - Current Season
* [dfsSlates](#dfsslates) - DFS Slates
* [injuries](#injuries) - Injuries
* [injuriesHistorical](#injurieshistorical) - Injuries (Historical)
* [leaderboard](#leaderboard) - Leaderboard
* [news](#news) - News
* [newsByDate](#newsbydate) - News by Date
* [newsByPlayer](#newsbyplayer) - News by Player
* [player](#player) - Player
* [playerSeasonStatsWWorldGolfRankings](#playerseasonstatswworldgolfrankings) - Player Season Stats (w/ World Golf Rankings)
* [playerTournamentProjectedStatsWDraftkingsSalaries](#playertournamentprojectedstatswdraftkingssalaries) - Player Tournament Projected Stats (w/ DraftKings Salaries)
* [playerTournamentStatsByPlayer](#playertournamentstatsbyplayer) - Player Tournament Stats By Player
* [players](#players) - Players
* [schedule](#schedule) - Schedule
* [scheduleBySeason](#schedulebyseason) - Schedule by Season

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

## dfsSlates

DFS Slates

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfsSlatesFormatEnum;
import org.openapis.openapi.models.operations.DfsSlatesRequest;
import org.openapis.openapi.models.operations.DfsSlatesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            DfsSlatesRequest req = new DfsSlatesRequest(DfsSlatesFormatEnum.JSON, "quibusdam");            

            DfsSlatesResponse res = sdk.sdk.dfsSlates(req);

            if (res.dfsSlates != null) {
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

            InjuriesRequest req = new InjuriesRequest(InjuriesFormatEnum.JSON);            

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

## injuriesHistorical

Injuries (Historical)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.InjuriesHistoricalFormatEnum;
import org.openapis.openapi.models.operations.InjuriesHistoricalRequest;
import org.openapis.openapi.models.operations.InjuriesHistoricalResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            InjuriesHistoricalRequest req = new InjuriesHistoricalRequest(InjuriesHistoricalFormatEnum.JSON);            

            InjuriesHistoricalResponse res = sdk.sdk.injuriesHistorical(req);

            if (res.injuries != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## leaderboard

Leaderboard

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LeaderboardFormatEnum;
import org.openapis.openapi.models.operations.LeaderboardRequest;
import org.openapis.openapi.models.operations.LeaderboardResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            LeaderboardRequest req = new LeaderboardRequest(LeaderboardFormatEnum.JSON, "illum");            

            LeaderboardResponse res = sdk.sdk.leaderboard(req);

            if (res.leaderboard != null) {
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

            NewsByDateRequest req = new NewsByDateRequest("error", NewsByDateFormatEnum.JSON);            

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

            NewsByPlayerRequest req = new NewsByPlayerRequest(NewsByPlayerFormatEnum.XML, "iure");            

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

## player

Player

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PlayerFormatEnum;
import org.openapis.openapi.models.operations.PlayerRequest;
import org.openapis.openapi.models.operations.PlayerResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            PlayerRequest req = new PlayerRequest(PlayerFormatEnum.XML, "debitis");            

            PlayerResponse res = sdk.sdk.player(req);

            if (res.player != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## playerSeasonStatsWWorldGolfRankings

Player Season Stats (w/ World Golf Rankings)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PlayerSeasonStatsWWorldGolfRankingsFormatEnum;
import org.openapis.openapi.models.operations.PlayerSeasonStatsWWorldGolfRankingsRequest;
import org.openapis.openapi.models.operations.PlayerSeasonStatsWWorldGolfRankingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            PlayerSeasonStatsWWorldGolfRankingsRequest req = new PlayerSeasonStatsWWorldGolfRankingsRequest(PlayerSeasonStatsWWorldGolfRankingsFormatEnum.XML, "delectus");            

            PlayerSeasonStatsWWorldGolfRankingsResponse res = sdk.sdk.playerSeasonStatsWWorldGolfRankings(req);

            if (res.playerSeasons != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## playerTournamentProjectedStatsWDraftkingsSalaries

Player Tournament Projected Stats (w/ DraftKings Salaries)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PlayerTournamentProjectedStatsWDraftkingsSalariesFormatEnum;
import org.openapis.openapi.models.operations.PlayerTournamentProjectedStatsWDraftkingsSalariesRequest;
import org.openapis.openapi.models.operations.PlayerTournamentProjectedStatsWDraftkingsSalariesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            PlayerTournamentProjectedStatsWDraftkingsSalariesRequest req = new PlayerTournamentProjectedStatsWDraftkingsSalariesRequest(PlayerTournamentProjectedStatsWDraftkingsSalariesFormatEnum.XML, "suscipit");            

            PlayerTournamentProjectedStatsWDraftkingsSalariesResponse res = sdk.sdk.playerTournamentProjectedStatsWDraftkingsSalaries(req);

            if (res.playerTournamentProjections != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## playerTournamentStatsByPlayer

Player Tournament Stats By Player

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PlayerTournamentStatsByPlayerFormatEnum;
import org.openapis.openapi.models.operations.PlayerTournamentStatsByPlayerRequest;
import org.openapis.openapi.models.operations.PlayerTournamentStatsByPlayerResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            PlayerTournamentStatsByPlayerRequest req = new PlayerTournamentStatsByPlayerRequest(PlayerTournamentStatsByPlayerFormatEnum.XML, "minus", "placeat");            

            PlayerTournamentStatsByPlayerResponse res = sdk.sdk.playerTournamentStatsByPlayer(req);

            if (res.playerTournament != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## players

Players

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PlayersFormatEnum;
import org.openapis.openapi.models.operations.PlayersRequest;
import org.openapis.openapi.models.operations.PlayersResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            PlayersRequest req = new PlayersRequest(PlayersFormatEnum.JSON);            

            PlayersResponse res = sdk.sdk.players(req);

            if (res.players != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## schedule

Schedule

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

            ScheduleRequest req = new ScheduleRequest(ScheduleFormatEnum.XML);            

            ScheduleResponse res = sdk.sdk.schedule(req);

            if (res.tournaments != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## scheduleBySeason

Schedule by Season

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ScheduleBySeasonFormatEnum;
import org.openapis.openapi.models.operations.ScheduleBySeasonRequest;
import org.openapis.openapi.models.operations.ScheduleBySeasonResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            ScheduleBySeasonRequest req = new ScheduleBySeasonRequest(ScheduleBySeasonFormatEnum.JSON, "nisi");            

            ScheduleBySeasonResponse res = sdk.sdk.scheduleBySeason(req);

            if (res.tournaments != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
