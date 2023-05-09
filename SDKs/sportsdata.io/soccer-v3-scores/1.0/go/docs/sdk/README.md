# SDK

### Available Operations

* [AreasCountries](#areascountries) - Areas (Countries)
* [CanceledMemberships](#canceledmemberships) - Canceled Memberships
* [CompetitionFixturesLeagueDetails](#competitionfixturesleaguedetails) - Competition Fixtures (League Details)
* [CompetitionHierarchyLeagueHierarchy](#competitionhierarchyleaguehierarchy) - Competition Hierarchy (League Hierarchy)
* [CompetitionsLeagues](#competitionsleagues) - Competitions (Leagues)
* [GamesByDate](#gamesbydate) - Games by Date
* [MembershipsActive](#membershipsactive) - Memberships (Active)
* [MembershipsByCompetitionActive](#membershipsbycompetitionactive) - Memberships by Competition (Active)
* [MembershipsByCompetitionHistorical](#membershipsbycompetitionhistorical) - Memberships by Competition (Historical)
* [MembershipsByTeamActive](#membershipsbyteamactive) - Memberships by Team (Active)
* [MembershipsByTeamHistorical](#membershipsbyteamhistorical) - Memberships by Team (Historical)
* [MembershipsHistorical](#membershipshistorical) - Memberships (Historical)
* [MembershipsRecentlyChanged](#membershipsrecentlychanged) - Memberships (Recently Changed)
* [Player](#player) - Player
* [Players](#players) - Players
* [PlayersByTeam](#playersbyteam) - Players by Team
* [Schedule](#schedule) - Schedule
* [SeasonTeams](#seasonteams) - Season Teams
* [Standings](#standings) - Standings
* [TeamGameStatsByDate](#teamgamestatsbydate) - Team Game Stats by Date
* [TeamSeasonStats](#teamseasonstats) - Team Season Stats
* [Teams](#teams) - Teams
* [UpcomingScheduleByPlayer](#upcomingschedulebyplayer) - Upcoming Schedule By Player
* [Venues](#venues) - Venues

## AreasCountries

Areas (Countries)

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyHeader: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.AreasCountries(ctx, operations.AreasCountriesRequest{
        Format: operations.AreasCountriesFormatEnumJSON,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Areas != nil {
        // handle response
    }
}
```

## CanceledMemberships

Canceled Memberships

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyHeader: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CanceledMemberships(ctx, operations.CanceledMembershipsRequest{
        Format: operations.CanceledMembershipsFormatEnumJSON,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CanceledMembership != nil {
        // handle response
    }
}
```

## CompetitionFixturesLeagueDetails

Competition Fixtures (League Details)

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyHeader: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CompetitionFixturesLeagueDetails(ctx, operations.CompetitionFixturesLeagueDetailsRequest{
        Competition: "quibusdam",
        Format: operations.CompetitionFixturesLeagueDetailsFormatEnumJSON,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CompetitionDetail != nil {
        // handle response
    }
}
```

## CompetitionHierarchyLeagueHierarchy

Competition Hierarchy (League Hierarchy)

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyHeader: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CompetitionHierarchyLeagueHierarchy(ctx, operations.CompetitionHierarchyLeagueHierarchyRequest{
        Format: operations.CompetitionHierarchyLeagueHierarchyFormatEnumJSON,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Areas != nil {
        // handle response
    }
}
```

## CompetitionsLeagues

Competitions (Leagues)

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyHeader: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CompetitionsLeagues(ctx, operations.CompetitionsLeaguesRequest{
        Format: operations.CompetitionsLeaguesFormatEnumJSON,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Competitions != nil {
        // handle response
    }
}
```

## GamesByDate

Games by Date

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyHeader: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GamesByDate(ctx, operations.GamesByDateRequest{
        Date: "illum",
        Format: operations.GamesByDateFormatEnumXML,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Games != nil {
        // handle response
    }
}
```

## MembershipsActive

Memberships (Active)

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyHeader: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.MembershipsActive(ctx, operations.MembershipsActiveRequest{
        Format: operations.MembershipsActiveFormatEnumJSON,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Memberships != nil {
        // handle response
    }
}
```

## MembershipsByCompetitionActive

Memberships by Competition (Active)

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyHeader: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.MembershipsByCompetitionActive(ctx, operations.MembershipsByCompetitionActiveRequest{
        Competition: "deserunt",
        Format: operations.MembershipsByCompetitionActiveFormatEnumXML,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Memberships != nil {
        // handle response
    }
}
```

## MembershipsByCompetitionHistorical

Memberships by Competition (Historical)

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyHeader: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.MembershipsByCompetitionHistorical(ctx, operations.MembershipsByCompetitionHistoricalRequest{
        Competition: "iure",
        Format: operations.MembershipsByCompetitionHistoricalFormatEnumXML,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Memberships != nil {
        // handle response
    }
}
```

## MembershipsByTeamActive

Memberships by Team (Active)

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyHeader: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.MembershipsByTeamActive(ctx, operations.MembershipsByTeamActiveRequest{
        Format: operations.MembershipsByTeamActiveFormatEnumJSON,
        Teamid: "ipsa",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Memberships != nil {
        // handle response
    }
}
```

## MembershipsByTeamHistorical

Memberships by Team (Historical)

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyHeader: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.MembershipsByTeamHistorical(ctx, operations.MembershipsByTeamHistoricalRequest{
        Format: operations.MembershipsByTeamHistoricalFormatEnumJSON,
        Teamid: "tempora",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Memberships != nil {
        // handle response
    }
}
```

## MembershipsHistorical

Memberships (Historical)

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyHeader: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.MembershipsHistorical(ctx, operations.MembershipsHistoricalRequest{
        Format: operations.MembershipsHistoricalFormatEnumXML,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Memberships != nil {
        // handle response
    }
}
```

## MembershipsRecentlyChanged

Memberships (Recently Changed)

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyHeader: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.MembershipsRecentlyChanged(ctx, operations.MembershipsRecentlyChangedRequest{
        Days: "molestiae",
        Format: operations.MembershipsRecentlyChangedFormatEnumJSON,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Memberships != nil {
        // handle response
    }
}
```

## Player

Player

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyHeader: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.Player(ctx, operations.PlayerRequest{
        Format: operations.PlayerFormatEnumJSON,
        Playerid: "voluptatum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Player != nil {
        // handle response
    }
}
```

## Players

Players

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyHeader: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.Players(ctx, operations.PlayersRequest{
        Format: operations.PlayersFormatEnumXML,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Players != nil {
        // handle response
    }
}
```

## PlayersByTeam

Players by Team

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyHeader: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.PlayersByTeam(ctx, operations.PlayersByTeamRequest{
        Format: operations.PlayersByTeamFormatEnumJSON,
        Teamid: "nisi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Players != nil {
        // handle response
    }
}
```

## Schedule

Schedule

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyHeader: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.Schedule(ctx, operations.ScheduleRequest{
        Format: operations.ScheduleFormatEnumJSON,
        Roundid: "temporibus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Games != nil {
        // handle response
    }
}
```

## SeasonTeams

Season Teams

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyHeader: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.SeasonTeams(ctx, operations.SeasonTeamsRequest{
        Format: operations.SeasonTeamsFormatEnumXML,
        Seasonid: "quis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SeasonTeams != nil {
        // handle response
    }
}
```

## Standings

Standings

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyHeader: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.Standings(ctx, operations.StandingsRequest{
        Format: operations.StandingsFormatEnumXML,
        Roundid: "deserunt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Standings != nil {
        // handle response
    }
}
```

## TeamGameStatsByDate

Team Game Stats by Date

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyHeader: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.TeamGameStatsByDate(ctx, operations.TeamGameStatsByDateRequest{
        Date: "perferendis",
        Format: operations.TeamGameStatsByDateFormatEnumXML,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TeamGames != nil {
        // handle response
    }
}
```

## TeamSeasonStats

Team Season Stats

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyHeader: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.TeamSeasonStats(ctx, operations.TeamSeasonStatsRequest{
        Format: operations.TeamSeasonStatsFormatEnumJSON,
        Roundid: "sapiente",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TeamSeasons != nil {
        // handle response
    }
}
```

## Teams

Teams

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyHeader: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.Teams(ctx, operations.TeamsRequest{
        Format: operations.TeamsFormatEnumJSON,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Teams != nil {
        // handle response
    }
}
```

## UpcomingScheduleByPlayer

Upcoming Schedule By Player

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyHeader: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpcomingScheduleByPlayer(ctx, operations.UpcomingScheduleByPlayerRequest{
        Format: operations.UpcomingScheduleByPlayerFormatEnumXML,
        Playerid: "at",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Games != nil {
        // handle response
    }
}
```

## Venues

Venues

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyHeader: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.Venues(ctx, operations.VenuesRequest{
        Format: operations.VenuesFormatEnumJSON,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Venues != nil {
        // handle response
    }
}
```
