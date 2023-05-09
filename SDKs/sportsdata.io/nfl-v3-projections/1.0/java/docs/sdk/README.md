# SDK

## Overview

NFL projected stats API.

### Available Operations

* [dfsSlateOwnershipProjectionsBySlateid](#dfsslateownershipprojectionsbyslateid) - DFS Slate Ownership Projections by SlateID
* [dfsSlatesByDate](#dfsslatesbydate) - DFS Slates by Date
* [dfsSlatesByWeek](#dfsslatesbyweek) - DFS Slates by Week
* [idpProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalaries](#idpprojectedplayergamestatsbyplayerwinjurieslineupsdfssalaries) - IDP Projected Player Game Stats by Player (w/ Injuries, Lineups, DFS Salaries)
* [idpProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalaries](#idpprojectedplayergamestatsbyteamwinjurieslineupsdfssalaries) - IDP Projected Player Game Stats by Team (w/ Injuries, Lineups, DFS Salaries)
* [idpProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalaries](#idpprojectedplayergamestatsbyweekwinjurieslineupsdfssalaries) - IDP Projected Player Game Stats by Week (w/ Injuries, Lineups, DFS Salaries)
* [injuredPlayers](#injuredplayers) - Injured Players
* [projectedFantasyDefenseGameStatsWDfsSalaries](#projectedfantasydefensegamestatswdfssalaries) - Projected Fantasy Defense Game Stats (w/ DFS Salaries)
* [projectedFantasyDefenseSeasonStatsWAdp](#projectedfantasydefenseseasonstatswadp) - Projected Fantasy Defense Season Stats (w/ ADP)
* [projectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalaries](#projectedplayergamestatsbyplayerwinjurieslineupsdfssalaries) - Projected Player Game Stats by Player (w/ Injuries, Lineups, DFS Salaries)
* [projectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalaries](#projectedplayergamestatsbyteamwinjurieslineupsdfssalaries) - Projected Player Game Stats by Team (w/ Injuries, Lineups, DFS Salaries)
* [projectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalaries](#projectedplayergamestatsbyweekwinjurieslineupsdfssalaries) - Projected Player Game Stats by Week (w/ Injuries, Lineups, DFS Salaries)
* [projectedPlayerSeasonStatsByPlayerWAdp](#projectedplayerseasonstatsbyplayerwadp) - Projected Player Season Stats by Player (w/ ADP)
* [projectedPlayerSeasonStatsByTeamWAdp](#projectedplayerseasonstatsbyteamwadp) - Projected Player Season Stats by Team (w/ ADP)
* [projectedPlayerSeasonStatsWAdp](#projectedplayerseasonstatswadp) - Projected Player Season Stats (w/ ADP)
* [upcomingDfsSlateOwnershipProjections](#upcomingdfsslateownershipprojections) - Upcoming DFS Slate Ownership Projections

## dfsSlateOwnershipProjectionsBySlateid

Slate Ownership Projections for a specific slate. Projections are for GPP format ownership. Will return an empty list if the slate is not yet projected or not a slate we have projections for.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfsSlateOwnershipProjectionsBySlateidFormatEnum;
import org.openapis.openapi.models.operations.DfsSlateOwnershipProjectionsBySlateidRequest;
import org.openapis.openapi.models.operations.DfsSlateOwnershipProjectionsBySlateidResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            DfsSlateOwnershipProjectionsBySlateidRequest req = new DfsSlateOwnershipProjectionsBySlateidRequest(DfsSlateOwnershipProjectionsBySlateidFormatEnum.JSON, "quibusdam");            

            DfsSlateOwnershipProjectionsBySlateidResponse res = sdk.sdk.dfsSlateOwnershipProjectionsBySlateid(req);

            if (res.dfsSlateWithOwnershipProjection != null) {
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

            DfsSlatesByDateRequest req = new DfsSlatesByDateRequest("unde", DfsSlatesByDateFormatEnum.JSON);            

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

            DfsSlatesByWeekRequest req = new DfsSlatesByWeekRequest(DfsSlatesByWeekFormatEnum.JSON, "illum", "vel");            

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

## idpProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalaries

IDP Projected Player Game Stats by Player (w/ Injuries, Lineups, DFS Salaries)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IdpProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesFormatEnum;
import org.openapis.openapi.models.operations.IdpProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesRequest;
import org.openapis.openapi.models.operations.IdpProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            IdpProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesRequest req = new IdpProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesRequest(IdpProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesFormatEnum.JSON, "deserunt", "suscipit", "iure");            

            IdpProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesResponse res = sdk.sdk.idpProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalaries(req);

            if (res.playerGameProjection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## idpProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalaries

IDP Projected Player Game Stats by Team (w/ Injuries, Lineups, DFS Salaries)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IdpProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesFormatEnum;
import org.openapis.openapi.models.operations.IdpProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesRequest;
import org.openapis.openapi.models.operations.IdpProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            IdpProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesRequest req = new IdpProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesRequest(IdpProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesFormatEnum.XML, "debitis", "ipsa", "delectus");            

            IdpProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesResponse res = sdk.sdk.idpProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalaries(req);

            if (res.playerGameProjections != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## idpProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalaries

IDP Projected Player Game Stats by Week (w/ Injuries, Lineups, DFS Salaries)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IdpProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesFormatEnum;
import org.openapis.openapi.models.operations.IdpProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesRequest;
import org.openapis.openapi.models.operations.IdpProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            IdpProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesRequest req = new IdpProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesRequest(IdpProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesFormatEnum.XML, "suscipit", "molestiae");            

            IdpProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesResponse res = sdk.sdk.idpProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalaries(req);

            if (res.playerGameProjections != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## injuredPlayers

This endpoint provides all currently injured NFL players, along with injury details.

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

## projectedFantasyDefenseGameStatsWDfsSalaries

Projected Fantasy Defense Game Stats (w/ DFS Salaries)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProjectedFantasyDefenseGameStatsWDfsSalariesFormatEnum;
import org.openapis.openapi.models.operations.ProjectedFantasyDefenseGameStatsWDfsSalariesRequest;
import org.openapis.openapi.models.operations.ProjectedFantasyDefenseGameStatsWDfsSalariesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            ProjectedFantasyDefenseGameStatsWDfsSalariesRequest req = new ProjectedFantasyDefenseGameStatsWDfsSalariesRequest(ProjectedFantasyDefenseGameStatsWDfsSalariesFormatEnum.JSON, "voluptatum", "iusto");            

            ProjectedFantasyDefenseGameStatsWDfsSalariesResponse res = sdk.sdk.projectedFantasyDefenseGameStatsWDfsSalaries(req);

            if (res.fantasyDefenseGameProjections != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## projectedFantasyDefenseSeasonStatsWAdp

Projected Fantasy Defense Season Stats (w/ ADP)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProjectedFantasyDefenseSeasonStatsWAdpFormatEnum;
import org.openapis.openapi.models.operations.ProjectedFantasyDefenseSeasonStatsWAdpRequest;
import org.openapis.openapi.models.operations.ProjectedFantasyDefenseSeasonStatsWAdpResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            ProjectedFantasyDefenseSeasonStatsWAdpRequest req = new ProjectedFantasyDefenseSeasonStatsWAdpRequest(ProjectedFantasyDefenseSeasonStatsWAdpFormatEnum.JSON, "nisi");            

            ProjectedFantasyDefenseSeasonStatsWAdpResponse res = sdk.sdk.projectedFantasyDefenseSeasonStatsWAdp(req);

            if (res.fantasyDefenseSeasonProjections != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## projectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalaries

Projected Player Game Stats by Player (w/ Injuries, Lineups, DFS Salaries)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesFormatEnum;
import org.openapis.openapi.models.operations.ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesRequest;
import org.openapis.openapi.models.operations.ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesRequest req = new ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesRequest(ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesFormatEnum.JSON, "temporibus", "ab", "quis");            

            ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesResponse res = sdk.sdk.projectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalaries(req);

            if (res.playerGameProjection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## projectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalaries

Projected Player Game Stats by Team (w/ Injuries, Lineups, DFS Salaries)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesFormatEnum;
import org.openapis.openapi.models.operations.ProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesRequest;
import org.openapis.openapi.models.operations.ProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            ProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesRequest req = new ProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesRequest(ProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesFormatEnum.XML, "deserunt", "perferendis", "ipsam");            

            ProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesResponse res = sdk.sdk.projectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalaries(req);

            if (res.playerGameProjections != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## projectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalaries

Projected Player Game Stats by Week (w/ Injuries, Lineups, DFS Salaries)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesFormatEnum;
import org.openapis.openapi.models.operations.ProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesRequest;
import org.openapis.openapi.models.operations.ProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            ProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesRequest req = new ProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesRequest(ProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesFormatEnum.JSON, "sapiente", "quo");            

            ProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesResponse res = sdk.sdk.projectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalaries(req);

            if (res.playerGameProjections != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## projectedPlayerSeasonStatsByPlayerWAdp

Projected Player Season Stats by Player (w/ ADP)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProjectedPlayerSeasonStatsByPlayerWAdpFormatEnum;
import org.openapis.openapi.models.operations.ProjectedPlayerSeasonStatsByPlayerWAdpRequest;
import org.openapis.openapi.models.operations.ProjectedPlayerSeasonStatsByPlayerWAdpResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            ProjectedPlayerSeasonStatsByPlayerWAdpRequest req = new ProjectedPlayerSeasonStatsByPlayerWAdpRequest(ProjectedPlayerSeasonStatsByPlayerWAdpFormatEnum.XML, "at", "at");            

            ProjectedPlayerSeasonStatsByPlayerWAdpResponse res = sdk.sdk.projectedPlayerSeasonStatsByPlayerWAdp(req);

            if (res.playerSeasonProjection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## projectedPlayerSeasonStatsByTeamWAdp

Projected Player Season Stats by Team (w/ ADP)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProjectedPlayerSeasonStatsByTeamWAdpFormatEnum;
import org.openapis.openapi.models.operations.ProjectedPlayerSeasonStatsByTeamWAdpRequest;
import org.openapis.openapi.models.operations.ProjectedPlayerSeasonStatsByTeamWAdpResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            ProjectedPlayerSeasonStatsByTeamWAdpRequest req = new ProjectedPlayerSeasonStatsByTeamWAdpRequest(ProjectedPlayerSeasonStatsByTeamWAdpFormatEnum.JSON, "molestiae", "quod");            

            ProjectedPlayerSeasonStatsByTeamWAdpResponse res = sdk.sdk.projectedPlayerSeasonStatsByTeamWAdp(req);

            if (res.playerSeasonProjections != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## projectedPlayerSeasonStatsWAdp

Projected Player Season Stats (w/ ADP)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProjectedPlayerSeasonStatsWAdpFormatEnum;
import org.openapis.openapi.models.operations.ProjectedPlayerSeasonStatsWAdpRequest;
import org.openapis.openapi.models.operations.ProjectedPlayerSeasonStatsWAdpResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            ProjectedPlayerSeasonStatsWAdpRequest req = new ProjectedPlayerSeasonStatsWAdpRequest(ProjectedPlayerSeasonStatsWAdpFormatEnum.JSON, "esse");            

            ProjectedPlayerSeasonStatsWAdpResponse res = sdk.sdk.projectedPlayerSeasonStatsWAdp(req);

            if (res.playerSeasonProjections != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## upcomingDfsSlateOwnershipProjections

Grabs DFS Slates which have not yet started for which we have DFS Ownership projections. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpcomingDfsSlateOwnershipProjectionsFormatEnum;
import org.openapis.openapi.models.operations.UpcomingDfsSlateOwnershipProjectionsRequest;
import org.openapis.openapi.models.operations.UpcomingDfsSlateOwnershipProjectionsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpcomingDfsSlateOwnershipProjectionsRequest req = new UpcomingDfsSlateOwnershipProjectionsRequest(UpcomingDfsSlateOwnershipProjectionsFormatEnum.JSON);            

            UpcomingDfsSlateOwnershipProjectionsResponse res = sdk.sdk.upcomingDfsSlateOwnershipProjections(req);

            if (res.dfsSlateWithOwnershipProjections != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
