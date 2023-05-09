# Events

### Available Operations

* [DeleteEventsID](#deleteeventsid) - Delete event
* [GetEventsID](#geteventsid) - Get event
* [GetScenariosIDEvents](#getscenariosidevents) - List events in scenario.
* [GetUsersIDEvents](#getusersidevents) - List events in user.
* [PostScenariosIDEvents](#postscenariosidevents) - Create event in scenario
* [PutEventsID](#puteventsid) - Update event

## DeleteEventsID

Deletes an event by its ID.

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
            DeveloperKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Events.DeleteEventsID(ctx, operations.DeleteEventsIDRequest{
        Behaviour: operations.DeleteEventsIDBehaviourEnumForward,
        ID: "94677392-51aa-452c-bf5a-d019da1ffe78",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetEventsID

Gets a particular event by its ID.

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
            DeveloperKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Events.GetEventsID(ctx, operations.GetEventsIDRequest{
        ID: "f097b007-4f15-4471-b5e6-e13b99d488e1",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Event != nil {
        // handle response
    }
}
```

## GetScenariosIDEvents

Lists events belonging to a scenario by their ID.

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
            DeveloperKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Events.GetScenariosIDEvents(ctx, operations.GetScenariosIDEventsRequest{
        EndDate: "repudiandae",
        ID: 575947,
        StartDate: "veritatis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Events != nil {
        // handle response
    }
}
```

## GetUsersIDEvents

Lists events belonging to a user by their ID.

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
            DeveloperKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Events.GetUsersIDEvents(ctx, operations.GetUsersIDEventsRequest{
        EndDate: "itaque",
        ID: 277718,
        StartDate: "enim",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Events != nil {
        // handle response
    }
}
```

## PostScenariosIDEvents

Creates an event in a scenario by its ID.

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
            DeveloperKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Events.PostScenariosIDEvents(ctx, operations.PostScenariosIDEventsRequest{
        RequestBody: &operations.PostScenariosIDEventsRequestBody{
            Amount: 11.5,
            CategoryID: 42,
            Date: "2020-10-27",
            Note: sdk.String("New beers for sampling over the weekends."),
            RepeatInterval: sdk.Int64(1),
            RepeatType: operations.PostScenariosIDEventsRequestBodyRepeatTypeEnumWeekly,
        },
        ID: 9356,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Event != nil {
        // handle response
    }
}
```

## PutEventsID

Updates an event by its ID.

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
            DeveloperKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Events.PutEventsID(ctx, operations.PutEventsIDRequest{
        RequestBody: &operations.PutEventsIDRequestBody{
            Amount: sdk.Float64(11.5),
            Behaviour: operations.PutEventsIDRequestBodyBehaviourEnumAll,
            Note: sdk.String("Need more beer."),
            RepeatInterval: sdk.Int64(1),
            RepeatType: operations.PutEventsIDRequestBodyRepeatTypeEnumWeekly.ToPointer(),
        },
        ID: "ad2abd44-2698-402d-902a-94bb4f63c969",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Event != nil {
        // handle response
    }
}
```
