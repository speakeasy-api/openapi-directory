# SDK

### Available Operations

* [areasCountries](#areascountries) - Areas (Countries)
* [canceledMemberships](#canceledmemberships) - Canceled Memberships
* [competitionFixturesLeagueDetails](#competitionfixturesleaguedetails) - Competition Fixtures (League Details)
* [competitionHierarchyLeagueHierarchy](#competitionhierarchyleaguehierarchy) - Competition Hierarchy (League Hierarchy)
* [competitionsLeagues](#competitionsleagues) - Competitions (Leagues)
* [gamesByDate](#gamesbydate) - Games by Date
* [membershipsActive](#membershipsactive) - Memberships (Active)
* [membershipsByCompetitionActive](#membershipsbycompetitionactive) - Memberships by Competition (Active)
* [membershipsByCompetitionHistorical](#membershipsbycompetitionhistorical) - Memberships by Competition (Historical)
* [membershipsByTeamActive](#membershipsbyteamactive) - Memberships by Team (Active)
* [membershipsByTeamHistorical](#membershipsbyteamhistorical) - Memberships by Team (Historical)
* [membershipsHistorical](#membershipshistorical) - Memberships (Historical)
* [membershipsRecentlyChanged](#membershipsrecentlychanged) - Memberships (Recently Changed)
* [player](#player) - Player
* [players](#players) - Players
* [playersByTeam](#playersbyteam) - Players by Team
* [schedule](#schedule) - Schedule
* [seasonTeams](#seasonteams) - Season Teams
* [standings](#standings) - Standings
* [teamGameStatsByDate](#teamgamestatsbydate) - Team Game Stats by Date
* [teamSeasonStats](#teamseasonstats) - Team Season Stats
* [teams](#teams) - Teams
* [upcomingScheduleByPlayer](#upcomingschedulebyplayer) - Upcoming Schedule By Player
* [venues](#venues) - Venues

## areasCountries

Areas (Countries)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AreasCountriesFormatEnum;
import org.openapis.openapi.models.operations.AreasCountriesRequest;
import org.openapis.openapi.models.operations.AreasCountriesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            AreasCountriesRequest req = new AreasCountriesRequest(AreasCountriesFormatEnum.JSON);            

            AreasCountriesResponse res = sdk.sdk.areasCountries(req);

            if (res.areas != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## canceledMemberships

Canceled Memberships

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CanceledMembershipsFormatEnum;
import org.openapis.openapi.models.operations.CanceledMembershipsRequest;
import org.openapis.openapi.models.operations.CanceledMembershipsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            CanceledMembershipsRequest req = new CanceledMembershipsRequest(CanceledMembershipsFormatEnum.JSON);            

            CanceledMembershipsResponse res = sdk.sdk.canceledMemberships(req);

            if (res.canceledMembership != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## competitionFixturesLeagueDetails

Competition Fixtures (League Details)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CompetitionFixturesLeagueDetailsFormatEnum;
import org.openapis.openapi.models.operations.CompetitionFixturesLeagueDetailsRequest;
import org.openapis.openapi.models.operations.CompetitionFixturesLeagueDetailsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            CompetitionFixturesLeagueDetailsRequest req = new CompetitionFixturesLeagueDetailsRequest("quibusdam", CompetitionFixturesLeagueDetailsFormatEnum.JSON);            

            CompetitionFixturesLeagueDetailsResponse res = sdk.sdk.competitionFixturesLeagueDetails(req);

            if (res.competitionDetail != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## competitionHierarchyLeagueHierarchy

Competition Hierarchy (League Hierarchy)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CompetitionHierarchyLeagueHierarchyFormatEnum;
import org.openapis.openapi.models.operations.CompetitionHierarchyLeagueHierarchyRequest;
import org.openapis.openapi.models.operations.CompetitionHierarchyLeagueHierarchyResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            CompetitionHierarchyLeagueHierarchyRequest req = new CompetitionHierarchyLeagueHierarchyRequest(CompetitionHierarchyLeagueHierarchyFormatEnum.JSON);            

            CompetitionHierarchyLeagueHierarchyResponse res = sdk.sdk.competitionHierarchyLeagueHierarchy(req);

            if (res.areas != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## competitionsLeagues

Competitions (Leagues)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CompetitionsLeaguesFormatEnum;
import org.openapis.openapi.models.operations.CompetitionsLeaguesRequest;
import org.openapis.openapi.models.operations.CompetitionsLeaguesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            CompetitionsLeaguesRequest req = new CompetitionsLeaguesRequest(CompetitionsLeaguesFormatEnum.JSON);            

            CompetitionsLeaguesResponse res = sdk.sdk.competitionsLeagues(req);

            if (res.competitions != null) {
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

## membershipsActive

Memberships (Active)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MembershipsActiveFormatEnum;
import org.openapis.openapi.models.operations.MembershipsActiveRequest;
import org.openapis.openapi.models.operations.MembershipsActiveResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            MembershipsActiveRequest req = new MembershipsActiveRequest(MembershipsActiveFormatEnum.JSON);            

            MembershipsActiveResponse res = sdk.sdk.membershipsActive(req);

            if (res.memberships != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## membershipsByCompetitionActive

Memberships by Competition (Active)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MembershipsByCompetitionActiveFormatEnum;
import org.openapis.openapi.models.operations.MembershipsByCompetitionActiveRequest;
import org.openapis.openapi.models.operations.MembershipsByCompetitionActiveResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            MembershipsByCompetitionActiveRequest req = new MembershipsByCompetitionActiveRequest("deserunt", MembershipsByCompetitionActiveFormatEnum.XML);            

            MembershipsByCompetitionActiveResponse res = sdk.sdk.membershipsByCompetitionActive(req);

            if (res.memberships != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## membershipsByCompetitionHistorical

Memberships by Competition (Historical)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MembershipsByCompetitionHistoricalFormatEnum;
import org.openapis.openapi.models.operations.MembershipsByCompetitionHistoricalRequest;
import org.openapis.openapi.models.operations.MembershipsByCompetitionHistoricalResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            MembershipsByCompetitionHistoricalRequest req = new MembershipsByCompetitionHistoricalRequest("iure", MembershipsByCompetitionHistoricalFormatEnum.XML);            

            MembershipsByCompetitionHistoricalResponse res = sdk.sdk.membershipsByCompetitionHistorical(req);

            if (res.memberships != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## membershipsByTeamActive

Memberships by Team (Active)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MembershipsByTeamActiveFormatEnum;
import org.openapis.openapi.models.operations.MembershipsByTeamActiveRequest;
import org.openapis.openapi.models.operations.MembershipsByTeamActiveResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            MembershipsByTeamActiveRequest req = new MembershipsByTeamActiveRequest(MembershipsByTeamActiveFormatEnum.JSON, "ipsa");            

            MembershipsByTeamActiveResponse res = sdk.sdk.membershipsByTeamActive(req);

            if (res.memberships != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## membershipsByTeamHistorical

Memberships by Team (Historical)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MembershipsByTeamHistoricalFormatEnum;
import org.openapis.openapi.models.operations.MembershipsByTeamHistoricalRequest;
import org.openapis.openapi.models.operations.MembershipsByTeamHistoricalResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            MembershipsByTeamHistoricalRequest req = new MembershipsByTeamHistoricalRequest(MembershipsByTeamHistoricalFormatEnum.JSON, "tempora");            

            MembershipsByTeamHistoricalResponse res = sdk.sdk.membershipsByTeamHistorical(req);

            if (res.memberships != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## membershipsHistorical

Memberships (Historical)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MembershipsHistoricalFormatEnum;
import org.openapis.openapi.models.operations.MembershipsHistoricalRequest;
import org.openapis.openapi.models.operations.MembershipsHistoricalResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            MembershipsHistoricalRequest req = new MembershipsHistoricalRequest(MembershipsHistoricalFormatEnum.XML);            

            MembershipsHistoricalResponse res = sdk.sdk.membershipsHistorical(req);

            if (res.memberships != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## membershipsRecentlyChanged

Memberships (Recently Changed)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MembershipsRecentlyChangedFormatEnum;
import org.openapis.openapi.models.operations.MembershipsRecentlyChangedRequest;
import org.openapis.openapi.models.operations.MembershipsRecentlyChangedResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            MembershipsRecentlyChangedRequest req = new MembershipsRecentlyChangedRequest("molestiae", MembershipsRecentlyChangedFormatEnum.JSON);            

            MembershipsRecentlyChangedResponse res = sdk.sdk.membershipsRecentlyChanged(req);

            if (res.memberships != null) {
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

            PlayerRequest req = new PlayerRequest(PlayerFormatEnum.JSON, "voluptatum");            

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

            PlayersRequest req = new PlayersRequest(PlayersFormatEnum.XML);            

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

            PlayersByTeamRequest req = new PlayersByTeamRequest(PlayersByTeamFormatEnum.JSON, "nisi");            

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

            ScheduleRequest req = new ScheduleRequest(ScheduleFormatEnum.JSON, "temporibus");            

            ScheduleResponse res = sdk.sdk.schedule(req);

            if (res.games != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## seasonTeams

Season Teams

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SeasonTeamsFormatEnum;
import org.openapis.openapi.models.operations.SeasonTeamsRequest;
import org.openapis.openapi.models.operations.SeasonTeamsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            SeasonTeamsRequest req = new SeasonTeamsRequest(SeasonTeamsFormatEnum.XML, "quis");            

            SeasonTeamsResponse res = sdk.sdk.seasonTeams(req);

            if (res.seasonTeams != null) {
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

            StandingsRequest req = new StandingsRequest(StandingsFormatEnum.XML, "deserunt");            

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

            TeamGameStatsByDateRequest req = new TeamGameStatsByDateRequest("perferendis", TeamGameStatsByDateFormatEnum.XML);            

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

            TeamSeasonStatsRequest req = new TeamSeasonStatsRequest(TeamSeasonStatsFormatEnum.JSON, "sapiente");            

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

            TeamsRequest req = new TeamsRequest(TeamsFormatEnum.JSON);            

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

## upcomingScheduleByPlayer

Upcoming Schedule By Player

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpcomingScheduleByPlayerFormatEnum;
import org.openapis.openapi.models.operations.UpcomingScheduleByPlayerRequest;
import org.openapis.openapi.models.operations.UpcomingScheduleByPlayerResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpcomingScheduleByPlayerRequest req = new UpcomingScheduleByPlayerRequest(UpcomingScheduleByPlayerFormatEnum.XML, "at");            

            UpcomingScheduleByPlayerResponse res = sdk.sdk.upcomingScheduleByPlayer(req);

            if (res.games != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## venues

Venues

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VenuesFormatEnum;
import org.openapis.openapi.models.operations.VenuesRequest;
import org.openapis.openapi.models.operations.VenuesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            VenuesRequest req = new VenuesRequest(VenuesFormatEnum.JSON);            

            VenuesResponse res = sdk.sdk.venues(req);

            if (res.venues != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
