# SDK

## Overview

MLB scores API.

### Available Operations

* [AreGamesInProgress](#aregamesinprogress) - Are Games In Progress
* [CurrentSeason](#currentseason) - Current Season
* [GamesByDate](#gamesbydate) - Games by Date
* [GamesByDateBasic](#gamesbydatebasic) - Games by Date (Basic)
* [News](#news) - News
* [NewsByDate](#newsbydate) - News by Date
* [NewsByPlayer](#newsbyplayer) - News by Player
* [PlayerDetailsByActive](#playerdetailsbyactive) - Player Details by Active
* [PlayerDetailsByFreeAgents](#playerdetailsbyfreeagents) - Player Details by Free Agents
* [PlayerDetailsByPlayer](#playerdetailsbyplayer) - Player Details by Player
* [PlayersByTeam](#playersbyteam) - Players by Team
* [PlayersByTeamBasic](#playersbyteambasic) - Players by Team (Basic)
* [Schedules](#schedules) - Schedules
* [SchedulesBasic](#schedulesbasic) - Schedules (Basic)
* [Stadiums](#stadiums) - Stadiums
* [Standings](#standings) - Standings
* [TeamGameLogsBySeason](#teamgamelogsbyseason) - Team Game Logs By Season
* [TeamGameStatsByDate](#teamgamestatsbydate) - Team Game Stats by Date
* [TeamSeasonStats](#teamseasonstats) - Team Season Stats
* [TeamsActive](#teamsactive) - Teams (Active)
* [TeamsAll](#teamsall) - Teams (All)

## AreGamesInProgress

Returns <code>true</code> if there is at least one game being played at the time of the request or <code>false</code> if there are none.

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
    res, err := s.SDK.AreGamesInProgress(ctx, operations.AreGamesInProgressRequest{
        Format: operations.AreGamesInProgressFormatEnumJSON,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AreGamesInProgress200ApplicationJSONBoolean != nil {
        // handle response
    }
}
```

## CurrentSeason

Current Season

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
    res, err := s.SDK.CurrentSeason(ctx, operations.CurrentSeasonRequest{
        Format: operations.CurrentSeasonFormatEnumJSON,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Season != nil {
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
        Date: "quibusdam",
        Format: operations.GamesByDateFormatEnumJSON,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Games != nil {
        // handle response
    }
}
```

## GamesByDateBasic

Games by Date (Basic)

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
    res, err := s.SDK.GamesByDateBasic(ctx, operations.GamesByDateBasicRequest{
        Date: "nulla",
        Format: operations.GamesByDateBasicFormatEnumJSON,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ScoreBasics != nil {
        // handle response
    }
}
```

## News

News

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
    res, err := s.SDK.News(ctx, operations.NewsRequest{
        Format: operations.NewsFormatEnumJSON,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.News != nil {
        // handle response
    }
}
```

## NewsByDate

News by Date

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
    res, err := s.SDK.NewsByDate(ctx, operations.NewsByDateRequest{
        Date: "vel",
        Format: operations.NewsByDateFormatEnumJSON,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.News != nil {
        // handle response
    }
}
```

## NewsByPlayer

News by Player

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
    res, err := s.SDK.NewsByPlayer(ctx, operations.NewsByPlayerRequest{
        Format: operations.NewsByPlayerFormatEnumJSON,
        Playerid: "suscipit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.News != nil {
        // handle response
    }
}
```

## PlayerDetailsByActive

Player Details by Active

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
    res, err := s.SDK.PlayerDetailsByActive(ctx, operations.PlayerDetailsByActiveRequest{
        Format: operations.PlayerDetailsByActiveFormatEnumXML,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Players != nil {
        // handle response
    }
}
```

## PlayerDetailsByFreeAgents

Player Details by Free Agents

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
    res, err := s.SDK.PlayerDetailsByFreeAgents(ctx, operations.PlayerDetailsByFreeAgentsRequest{
        Format: operations.PlayerDetailsByFreeAgentsFormatEnumXML,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Players != nil {
        // handle response
    }
}
```

## PlayerDetailsByPlayer

Player Details by Player

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
    res, err := s.SDK.PlayerDetailsByPlayer(ctx, operations.PlayerDetailsByPlayerRequest{
        Format: operations.PlayerDetailsByPlayerFormatEnumJSON,
        Playerid: "ipsa",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Player != nil {
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
        Team: "tempora",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Players != nil {
        // handle response
    }
}
```

## PlayersByTeamBasic

Players by Team (Basic)

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
    res, err := s.SDK.PlayersByTeamBasic(ctx, operations.PlayersByTeamBasicRequest{
        Format: operations.PlayersByTeamBasicFormatEnumXML,
        Team: "molestiae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PlayerBasics != nil {
        // handle response
    }
}
```

## Schedules

Schedules

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
    res, err := s.SDK.Schedules(ctx, operations.SchedulesRequest{
        Format: operations.SchedulesFormatEnumJSON,
        Season: "placeat",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Games != nil {
        // handle response
    }
}
```

## SchedulesBasic

Schedules (Basic)

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
    res, err := s.SDK.SchedulesBasic(ctx, operations.SchedulesBasicRequest{
        Format: operations.SchedulesBasicFormatEnumJSON,
        Season: "iusto",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ScheduleBasics != nil {
        // handle response
    }
}
```

## Stadiums

Stadiums

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
    res, err := s.SDK.Stadiums(ctx, operations.StadiumsRequest{
        Format: operations.StadiumsFormatEnumJSON,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Stadiums != nil {
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
        Season: "recusandae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Standings != nil {
        // handle response
    }
}
```

## TeamGameLogsBySeason

Game by game log of total team statistics.

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
    res, err := s.SDK.TeamGameLogsBySeason(ctx, operations.TeamGameLogsBySeasonRequest{
        Format: operations.TeamGameLogsBySeasonFormatEnumJSON,
        Numberofgames: "ab",
        Season: "quis",
        Teamid: "veritatis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TeamGames != nil {
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
        Date: "deserunt",
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
        Format: operations.TeamSeasonStatsFormatEnumXML,
        Season: "repellendus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TeamSeasons != nil {
        // handle response
    }
}
```

## TeamsActive

Teams (Active)

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
    res, err := s.SDK.TeamsActive(ctx, operations.TeamsActiveRequest{
        Format: operations.TeamsActiveFormatEnumJSON,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Teams != nil {
        // handle response
    }
}
```

## TeamsAll

Teams (All)

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
    res, err := s.SDK.TeamsAll(ctx, operations.TeamsAllRequest{
        Format: operations.TeamsAllFormatEnumJSON,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Teams != nil {
        // handle response
    }
}
```
