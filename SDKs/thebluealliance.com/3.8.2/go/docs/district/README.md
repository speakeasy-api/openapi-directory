# District

## Overview

Calls that return district, or district-related information.

### Available Operations

* [GetDistrictEvents](#getdistrictevents) - Gets a list of events in the given district.
* [GetDistrictEventsKeys](#getdistricteventskeys) - Gets a list of event keys for events in the given district.
* [GetDistrictEventsSimple](#getdistricteventssimple) - Gets a short-form list of events in the given district.
* [GetDistrictRankings](#getdistrictrankings) - Gets a list of team district rankings for the given district.
* [GetDistrictTeams](#getdistrictteams) - Gets a list of `Team` objects that competed in events in the given district.
* [GetDistrictTeamsKeys](#getdistrictteamskeys) - Gets a list of `Team` objects that competed in events in the given district.
* [GetDistrictTeamsSimple](#getdistrictteamssimple) - Gets a short-form list of `Team` objects that competed in events in the given district.
* [GetDistrictsByYear](#getdistrictsbyyear) - Gets a list of districts and their corresponding district key, for the given year.
* [GetEventDistrictPoints](#geteventdistrictpoints) - Gets a list of team rankings for the Event.
* [GetTeamDistricts](#getteamdistricts) - Gets an array of districts representing each year the team was in a district. Will return an empty array if the team was never in a district.

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
    res, err := s.District.GetDistrictEvents(ctx, operations.GetDistrictEventsRequest{
        IfNoneMatch: sdk.String("distinctio"),
        DistrictKey: "quibusdam",
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
    res, err := s.District.GetDistrictEventsKeys(ctx, operations.GetDistrictEventsKeysRequest{
        IfNoneMatch: sdk.String("unde"),
        DistrictKey: "nulla",
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
    res, err := s.District.GetDistrictEventsSimple(ctx, operations.GetDistrictEventsSimpleRequest{
        IfNoneMatch: sdk.String("corrupti"),
        DistrictKey: "illum",
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
    res, err := s.District.GetDistrictRankings(ctx, operations.GetDistrictRankingsRequest{
        IfNoneMatch: sdk.String("vel"),
        DistrictKey: "error",
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
    res, err := s.District.GetDistrictTeams(ctx, operations.GetDistrictTeamsRequest{
        IfNoneMatch: sdk.String("deserunt"),
        DistrictKey: "suscipit",
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
    res, err := s.District.GetDistrictTeamsKeys(ctx, operations.GetDistrictTeamsKeysRequest{
        IfNoneMatch: sdk.String("iure"),
        DistrictKey: "magnam",
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
    res, err := s.District.GetDistrictTeamsSimple(ctx, operations.GetDistrictTeamsSimpleRequest{
        IfNoneMatch: sdk.String("debitis"),
        DistrictKey: "ipsa",
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

## GetDistrictsByYear

Gets a list of districts and their corresponding district key, for the given year.

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
    res, err := s.District.GetDistrictsByYear(ctx, operations.GetDistrictsByYearRequest{
        IfNoneMatch: sdk.String("delectus"),
        Year: 272656,
    }, operations.GetDistrictsByYearSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DistrictLists != nil {
        // handle response
    }
}
```

## GetEventDistrictPoints

Gets a list of team rankings for the Event.

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
    res, err := s.District.GetEventDistrictPoints(ctx, operations.GetEventDistrictPointsRequest{
        IfNoneMatch: sdk.String("suscipit"),
        EventKey: "molestiae",
    }, operations.GetEventDistrictPointsSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EventDistrictPoints != nil {
        // handle response
    }
}
```

## GetTeamDistricts

Gets an array of districts representing each year the team was in a district. Will return an empty array if the team was never in a district.

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
    res, err := s.District.GetTeamDistricts(ctx, operations.GetTeamDistrictsRequest{
        IfNoneMatch: sdk.String("minus"),
        TeamKey: "placeat",
    }, operations.GetTeamDistrictsSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DistrictLists != nil {
        // handle response
    }
}
```
