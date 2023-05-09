# Team

## Overview

Team is a group of users under a given name. For the purposes of identification and visualisation, the team object has its own properties (e.g. logo), the most important of which is the `members`, which contains the user objects of the team.

### Available Operations

* [GetTeamTeamname](#getteamteamname) - Get a Team

## GetTeamTeamname

Use this endpoint to generate a random group of users. The team is generated in a deterministic way, on the basis of the team name given as the path parameter.
In the case of identical team names, the endpoint will generate the same team object. The properties of the generated team object are randomly generated on the basis of the team name.
In lack of a team name, all calls generate a different team object to the randomly generated team name.

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
    res, err := s.Team.GetTeamTeamname(ctx, operations.GetTeamTeamnameRequest{
        Teamname: "odit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetTeamTeamname200ApplicationJSONObject != nil {
        // handle response
    }
}
```
