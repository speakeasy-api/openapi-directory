# SDK

## Overview

LoL v3 Stats

### Available Operations

* [AreasCountries](#areascountries) - Areas (Countries)
* [BoxScore](#boxscore) - Box Score
* [BoxScoresByDate](#boxscoresbydate) - Box Scores by Date
* [Champions](#champions) - Champions
* [CompetitionFixturesLeagueDetails](#competitionfixturesleaguedetails) - Competition Fixtures (League Details)
* [CompetitionsLeagues](#competitionsleagues) - Competitions (Leagues)
* [GamesByDate](#gamesbydate) - Games by Date
* [Items](#items) - Items
* [MembershipsActive](#membershipsactive) - Memberships (Active)
* [MembershipsByTeamActive](#membershipsbyteamactive) - Memberships by Team (Active)
* [MembershipsByTeamHistorical](#membershipsbyteamhistorical) - Memberships by Team (Historical)
* [MembershipsHistorical](#membershipshistorical) - Memberships (Historical)
* [Player](#player) - Player
* [Players](#players) - Players
* [PlayersByTeam](#playersbyteam) - Players by Team
* [Schedule](#schedule) - Schedule
* [SeasonTeams](#seasonteams) - Season Teams
* [Spells](#spells) - Spells
* [Standings](#standings) - Standings
* [Teams](#teams) - Teams
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

## BoxScore

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
    res, err := s.SDK.BoxScore(ctx, operations.BoxScoreRequest{
        Format: operations.BoxScoreFormatEnumJSON,
        Gameid: "quibusdam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BoxScores != nil {
        // handle response
    }
}
```

## BoxScoresByDate

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
    res, err := s.SDK.BoxScoresByDate(ctx, operations.BoxScoresByDateRequest{
        Date: "unde",
        Format: operations.BoxScoresByDateFormatEnumJSON,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BoxScores != nil {
        // handle response
    }
}
```

## Champions

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
    res, err := s.SDK.Champions(ctx, operations.ChampionsRequest{
        Format: operations.ChampionsFormatEnumJSON,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Champions != nil {
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
        Competitionid: "illum",
        Format: operations.CompetitionFixturesLeagueDetailsFormatEnumXML,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CompetitionDetail != nil {
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
        Date: "deserunt",
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

## Items

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
    res, err := s.SDK.Items(ctx, operations.ItemsRequest{
        Format: operations.ItemsFormatEnumXML,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Items != nil {
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
        Format: operations.MembershipsActiveFormatEnumXML,
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
        Format: operations.PlayerFormatEnumXML,
        Playerid: "minus",
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
        Format: operations.PlayersFormatEnumJSON,
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
        Teamid: "iusto",
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
        Roundid: "nisi",
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
        Format: operations.SeasonTeamsFormatEnumJSON,
        Seasonid: "temporibus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SeasonTeams != nil {
        // handle response
    }
}
```

## Spells

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
    res, err := s.SDK.Spells(ctx, operations.SpellsRequest{
        Format: operations.SpellsFormatEnumXML,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Spells != nil {
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
        Roundid: "veritatis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Standings != nil {
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
        Format: operations.VenuesFormatEnumXML,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Venues != nil {
        // handle response
    }
}
```
