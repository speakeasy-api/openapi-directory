# PortSchedules

### Available Operations

* [CreateNetworkSwitchPortSchedule](#createnetworkswitchportschedule) - Add a switch port schedule
* [DeleteNetworkSwitchPortSchedule](#deletenetworkswitchportschedule) - Delete a switch port schedule
* [GetNetworkSwitchPortSchedules](#getnetworkswitchportschedules) - List switch port schedules
* [UpdateNetworkSwitchPortSchedule](#updatenetworkswitchportschedule) - Update a switch port schedule

## CreateNetworkSwitchPortSchedule

Add a switch port schedule

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
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.PortSchedules.CreateNetworkSwitchPortSchedule(ctx, operations.CreateNetworkSwitchPortScheduleRequest{
        RequestBody: operations.CreateNetworkSwitchPortScheduleRequestBody{
            Name: "Dr. Terrence Smitham",
            PortSchedule: &operations.CreateNetworkSwitchPortScheduleRequestBodyPortSchedule{
                Friday: &operations.CreateNetworkSwitchPortScheduleRequestBodyPortScheduleFriday{
                    Active: sdk.Bool(false),
                    From: sdk.String("atque"),
                    To: sdk.String("minus"),
                },
                Monday: &operations.CreateNetworkSwitchPortScheduleRequestBodyPortScheduleMonday{
                    Active: sdk.Bool(false),
                    From: sdk.String("suscipit"),
                    To: sdk.String("commodi"),
                },
                Saturday: &operations.CreateNetworkSwitchPortScheduleRequestBodyPortScheduleSaturday{
                    Active: sdk.Bool(false),
                    From: sdk.String("totam"),
                    To: sdk.String("ullam"),
                },
                Sunday: &operations.CreateNetworkSwitchPortScheduleRequestBodyPortScheduleSunday{
                    Active: sdk.Bool(false),
                    From: sdk.String("repudiandae"),
                    To: sdk.String("consectetur"),
                },
                Thursday: &operations.CreateNetworkSwitchPortScheduleRequestBodyPortScheduleThursday{
                    Active: sdk.Bool(false),
                    From: sdk.String("rem"),
                    To: sdk.String("fugiat"),
                },
                Tuesday: &operations.CreateNetworkSwitchPortScheduleRequestBodyPortScheduleTuesday{
                    Active: sdk.Bool(false),
                    From: sdk.String("deleniti"),
                    To: sdk.String("nihil"),
                },
                Wednesday: &operations.CreateNetworkSwitchPortScheduleRequestBodyPortScheduleWednesday{
                    Active: sdk.Bool(false),
                    From: sdk.String("totam"),
                    To: sdk.String("eligendi"),
                },
            },
        },
        NetworkID: "voluptatibus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateNetworkSwitchPortSchedule201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## DeleteNetworkSwitchPortSchedule

Delete a switch port schedule

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
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.PortSchedules.DeleteNetworkSwitchPortSchedule(ctx, operations.DeleteNetworkSwitchPortScheduleRequest{
        NetworkID: "natus",
        PortScheduleID: "necessitatibus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetNetworkSwitchPortSchedules

List switch port schedules

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
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.PortSchedules.GetNetworkSwitchPortSchedules(ctx, operations.GetNetworkSwitchPortSchedulesRequest{
        NetworkID: "fugit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSwitchPortSchedules200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## UpdateNetworkSwitchPortSchedule

Update a switch port schedule

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
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.PortSchedules.UpdateNetworkSwitchPortSchedule(ctx, operations.UpdateNetworkSwitchPortScheduleRequest{
        RequestBody: &operations.UpdateNetworkSwitchPortScheduleRequestBody{
            Name: sdk.String("Jacqueline Kreiger"),
            PortSchedule: &operations.UpdateNetworkSwitchPortScheduleRequestBodyPortSchedule{
                Friday: &operations.UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleFriday{
                    Active: sdk.Bool(false),
                    From: sdk.String("nulla"),
                    To: sdk.String("aperiam"),
                },
                Monday: &operations.UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleMonday{
                    Active: sdk.Bool(false),
                    From: sdk.String("ad"),
                    To: sdk.String("a"),
                },
                Saturday: &operations.UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleSaturday{
                    Active: sdk.Bool(false),
                    From: sdk.String("officiis"),
                    To: sdk.String("sequi"),
                },
                Sunday: &operations.UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleSunday{
                    Active: sdk.Bool(false),
                    From: sdk.String("similique"),
                    To: sdk.String("error"),
                },
                Thursday: &operations.UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleThursday{
                    Active: sdk.Bool(false),
                    From: sdk.String("facilis"),
                    To: sdk.String("vero"),
                },
                Tuesday: &operations.UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleTuesday{
                    Active: sdk.Bool(false),
                    From: sdk.String("ut"),
                    To: sdk.String("labore"),
                },
                Wednesday: &operations.UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleWednesday{
                    Active: sdk.Bool(false),
                    From: sdk.String("aperiam"),
                    To: sdk.String("temporibus"),
                },
            },
        },
        NetworkID: "voluptate",
        PortScheduleID: "corporis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkSwitchPortSchedule200ApplicationJSONObject != nil {
        // handle response
    }
}
```
