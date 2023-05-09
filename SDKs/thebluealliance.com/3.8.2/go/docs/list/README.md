# List

## Overview

Calls that return a list of records.

### Available Operations

* [GetDistrictEvents](#getdistrictevents) - Gets a list of events in the given district.
* [GetDistrictEventsKeys](#getdistricteventskeys) - Gets a list of event keys for events in the given district.
* [GetDistrictEventsSimple](#getdistricteventssimple) - Gets a short-form list of events in the given district.
* [GetDistrictRankings](#getdistrictrankings) - Gets a list of team district rankings for the given district.
* [GetDistrictTeams](#getdistrictteams) - Gets a list of `Team` objects that competed in events in the given district.
* [GetDistrictTeamsKeys](#getdistrictteamskeys) - Gets a list of `Team` objects that competed in events in the given district.
* [GetDistrictTeamsSimple](#getdistrictteamssimple) - Gets a short-form list of `Team` objects that competed in events in the given district.
* [GetEventTeams](#geteventteams) - Gets a list of `Team` objects that competed in the given event.
* [GetEventTeamsKeys](#geteventteamskeys) - Gets a list of `Team` keys that competed in the given event.
* [GetEventTeamsSimple](#geteventteamssimple) - Gets a short-form list of `Team` objects that competed in the given event.
* [GetEventTeamsStatuses](#geteventteamsstatuses) - Gets a key-value list of the event statuses for teams competing at the given event.
* [GetEventsByYear](#geteventsbyyear) - Gets a list of events in the given year.
* [GetEventsByYearKeys](#geteventsbyyearkeys) - Gets a list of event keys in the given year.
* [GetEventsByYearSimple](#geteventsbyyearsimple) - Gets a short-form list of events in the given year.
* [GetTeamEventsStatusesByYear](#getteameventsstatusesbyyear) - Gets a key-value list of the event statuses for events this team has competed at in the given year.
* [GetTeams](#getteams) - Gets a list of `Team` objects, paginated in groups of 500.
* [GetTeamsByYear](#getteamsbyyear) - Gets a list of `Team` objects that competed in the given year, paginated in groups of 500.
* [GetTeamsByYearKeys](#getteamsbyyearkeys) - Gets a list Team Keys that competed in the given year, paginated in groups of 500.
* [GetTeamsByYearSimple](#getteamsbyyearsimple) - Gets a list of short form `Team_Simple` objects that competed in the given year, paginated in groups of 500.
* [GetTeamsKeys](#getteamskeys) - Gets a list of Team keys, paginated in groups of 500. (Note, each page will not have 500 teams, but will include the teams within that range of 500.)
* [GetTeamsSimple](#getteamssimple) - Gets a list of short form `Team_Simple` objects, paginated in groups of 500.

## GetDistrictEvents

Gets a list of events in the given district.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.List.GetDistrictEvents(ctx, operations.GetDistrictEventsRequest{
        IfNoneMatch: sdk.String("accusantium"),
        DistrictKey: "iure",
    }, operations.GetDistrictEventsSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Events != nil {
        // handle response
    }
}
```

## GetDistrictEventsKeys

Gets a list of event keys for events in the given district.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.List.GetDistrictEventsKeys(ctx, operations.GetDistrictEventsKeysRequest{
        IfNoneMatch: sdk.String("culpa"),
        DistrictKey: "doloribus",
    }, operations.GetDistrictEventsKeysSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDistrictEventsKeys200ApplicationJSONStrings != nil {
        // handle response
    }
}
```

## GetDistrictEventsSimple

Gets a short-form list of events in the given district.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.List.GetDistrictEventsSimple(ctx, operations.GetDistrictEventsSimpleRequest{
        IfNoneMatch: sdk.String("sapiente"),
        DistrictKey: "architecto",
    }, operations.GetDistrictEventsSimpleSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EventSimples != nil {
        // handle response
    }
}
```

## GetDistrictRankings

Gets a list of team district rankings for the given district.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.List.GetDistrictRankings(ctx, operations.GetDistrictRankingsRequest{
        IfNoneMatch: sdk.String("mollitia"),
        DistrictKey: "dolorem",
    }, operations.GetDistrictRankingsSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DistrictRankings != nil {
        // handle response
    }
}
```

## GetDistrictTeams

Gets a list of `Team` objects that competed in events in the given district.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.List.GetDistrictTeams(ctx, operations.GetDistrictTeamsRequest{
        IfNoneMatch: sdk.String("culpa"),
        DistrictKey: "consequuntur",
    }, operations.GetDistrictTeamsSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Teams != nil {
        // handle response
    }
}
```

## GetDistrictTeamsKeys

Gets a list of `Team` objects that competed in events in the given district.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.List.GetDistrictTeamsKeys(ctx, operations.GetDistrictTeamsKeysRequest{
        IfNoneMatch: sdk.String("repellat"),
        DistrictKey: "mollitia",
    }, operations.GetDistrictTeamsKeysSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDistrictTeamsKeys200ApplicationJSONStrings != nil {
        // handle response
    }
}
```

## GetDistrictTeamsSimple

Gets a short-form list of `Team` objects that competed in events in the given district.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.List.GetDistrictTeamsSimple(ctx, operations.GetDistrictTeamsSimpleRequest{
        IfNoneMatch: sdk.String("occaecati"),
        DistrictKey: "numquam",
    }, operations.GetDistrictTeamsSimpleSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TeamSimples != nil {
        // handle response
    }
}
```

## GetEventTeams

Gets a list of `Team` objects that competed in the given event.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.List.GetEventTeams(ctx, operations.GetEventTeamsRequest{
        IfNoneMatch: sdk.String("commodi"),
        EventKey: "quam",
    }, operations.GetEventTeamsSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Teams != nil {
        // handle response
    }
}
```

## GetEventTeamsKeys

Gets a list of `Team` keys that competed in the given event.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.List.GetEventTeamsKeys(ctx, operations.GetEventTeamsKeysRequest{
        IfNoneMatch: sdk.String("molestiae"),
        EventKey: "velit",
    }, operations.GetEventTeamsKeysSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetEventTeamsKeys200ApplicationJSONStrings != nil {
        // handle response
    }
}
```

## GetEventTeamsSimple

Gets a short-form list of `Team` objects that competed in the given event.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.List.GetEventTeamsSimple(ctx, operations.GetEventTeamsSimpleRequest{
        IfNoneMatch: sdk.String("error"),
        EventKey: "quia",
    }, operations.GetEventTeamsSimpleSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TeamSimples != nil {
        // handle response
    }
}
```

## GetEventTeamsStatuses

Gets a key-value list of the event statuses for teams competing at the given event.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.List.GetEventTeamsStatuses(ctx, operations.GetEventTeamsStatusesRequest{
        IfNoneMatch: sdk.String("quis"),
        EventKey: "vitae",
    }, operations.GetEventTeamsStatusesSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetEventTeamsStatuses200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetEventsByYear

Gets a list of events in the given year.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.List.GetEventsByYear(ctx, operations.GetEventsByYearRequest{
        IfNoneMatch: sdk.String("laborum"),
        Year: 656330,
    }, operations.GetEventsByYearSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Events != nil {
        // handle response
    }
}
```

## GetEventsByYearKeys

Gets a list of event keys in the given year.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.List.GetEventsByYearKeys(ctx, operations.GetEventsByYearKeysRequest{
        IfNoneMatch: sdk.String("enim"),
        Year: 138183,
    }, operations.GetEventsByYearKeysSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetEventsByYearKeys200ApplicationJSONStrings != nil {
        // handle response
    }
}
```

## GetEventsByYearSimple

Gets a short-form list of events in the given year.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.List.GetEventsByYearSimple(ctx, operations.GetEventsByYearSimpleRequest{
        IfNoneMatch: sdk.String("quo"),
        Year: 196582,
    }, operations.GetEventsByYearSimpleSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EventSimples != nil {
        // handle response
    }
}
```

## GetTeamEventsStatusesByYear

Gets a key-value list of the event statuses for events this team has competed at in the given year.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.List.GetTeamEventsStatusesByYear(ctx, operations.GetTeamEventsStatusesByYearRequest{
        IfNoneMatch: sdk.String("tenetur"),
        TeamKey: "ipsam",
        Year: 662527,
    }, operations.GetTeamEventsStatusesByYearSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetTeamEventsStatusesByYear200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetTeams

Gets a list of `Team` objects, paginated in groups of 500.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.List.GetTeams(ctx, operations.GetTeamsRequest{
        IfNoneMatch: sdk.String("possimus"),
        PageNum: 13571,
    }, operations.GetTeamsSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Teams != nil {
        // handle response
    }
}
```

## GetTeamsByYear

Gets a list of `Team` objects that competed in the given year, paginated in groups of 500.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.List.GetTeamsByYear(ctx, operations.GetTeamsByYearRequest{
        IfNoneMatch: sdk.String("quasi"),
        PageNum: 622846,
        Year: 837945,
    }, operations.GetTeamsByYearSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Teams != nil {
        // handle response
    }
}
```

## GetTeamsByYearKeys

Gets a list Team Keys that competed in the given year, paginated in groups of 500.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.List.GetTeamsByYearKeys(ctx, operations.GetTeamsByYearKeysRequest{
        IfNoneMatch: sdk.String("laborum"),
        PageNum: 96098,
        Year: 971945,
    }, operations.GetTeamsByYearKeysSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetTeamsByYearKeys200ApplicationJSONStrings != nil {
        // handle response
    }
}
```

## GetTeamsByYearSimple

Gets a list of short form `Team_Simple` objects that competed in the given year, paginated in groups of 500.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.List.GetTeamsByYearSimple(ctx, operations.GetTeamsByYearSimpleRequest{
        IfNoneMatch: sdk.String("voluptatibus"),
        PageNum: 878194,
        Year: 468651,
    }, operations.GetTeamsByYearSimpleSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TeamSimples != nil {
        // handle response
    }
}
```

## GetTeamsKeys

Gets a list of Team keys, paginated in groups of 500. (Note, each page will not have 500 teams, but will include the teams within that range of 500.)

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.List.GetTeamsKeys(ctx, operations.GetTeamsKeysRequest{
        IfNoneMatch: sdk.String("praesentium"),
        PageNum: 976762,
    }, operations.GetTeamsKeysSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetTeamsKeys200ApplicationJSONStrings != nil {
        // handle response
    }
}
```

## GetTeamsSimple

Gets a list of short form `Team_Simple` objects, paginated in groups of 500.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.List.GetTeamsSimple(ctx, operations.GetTeamsSimpleRequest{
        IfNoneMatch: sdk.String("ipsa"),
        PageNum: 604846,
    }, operations.GetTeamsSimpleSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TeamSimples != nil {
        // handle response
    }
}
```
