# SwitchPortSchedules

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
    res, err := s.SwitchPortSchedules.CreateNetworkSwitchPortSchedule(ctx, operations.CreateNetworkSwitchPortScheduleRequest{
        RequestBody: operations.CreateNetworkSwitchPortScheduleRequestBody{
            Name: "Antonio Jerde",
            PortSchedule: &operations.CreateNetworkSwitchPortScheduleRequestBodyPortSchedule{
                Friday: &operations.CreateNetworkSwitchPortScheduleRequestBodyPortScheduleFriday{
                    Active: sdk.Bool(false),
                    From: sdk.String("veniam"),
                    To: sdk.String("debitis"),
                },
                Monday: &operations.CreateNetworkSwitchPortScheduleRequestBodyPortScheduleMonday{
                    Active: sdk.Bool(false),
                    From: sdk.String("officia"),
                    To: sdk.String("sint"),
                },
                Saturday: &operations.CreateNetworkSwitchPortScheduleRequestBodyPortScheduleSaturday{
                    Active: sdk.Bool(false),
                    From: sdk.String("ut"),
                    To: sdk.String("numquam"),
                },
                Sunday: &operations.CreateNetworkSwitchPortScheduleRequestBodyPortScheduleSunday{
                    Active: sdk.Bool(false),
                    From: sdk.String("tenetur"),
                    To: sdk.String("adipisci"),
                },
                Thursday: &operations.CreateNetworkSwitchPortScheduleRequestBodyPortScheduleThursday{
                    Active: sdk.Bool(false),
                    From: sdk.String("libero"),
                    To: sdk.String("in"),
                },
                Tuesday: &operations.CreateNetworkSwitchPortScheduleRequestBodyPortScheduleTuesday{
                    Active: sdk.Bool(false),
                    From: sdk.String("minima"),
                    To: sdk.String("ex"),
                },
                Wednesday: &operations.CreateNetworkSwitchPortScheduleRequestBodyPortScheduleWednesday{
                    Active: sdk.Bool(false),
                    From: sdk.String("minus"),
                    To: sdk.String("ab"),
                },
            },
        },
        NetworkID: "beatae",
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
    res, err := s.SwitchPortSchedules.DeleteNetworkSwitchPortSchedule(ctx, operations.DeleteNetworkSwitchPortScheduleRequest{
        NetworkID: "hic",
        PortScheduleID: "nisi",
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
    res, err := s.SwitchPortSchedules.GetNetworkSwitchPortSchedules(ctx, operations.GetNetworkSwitchPortSchedulesRequest{
        NetworkID: "quisquam",
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
    res, err := s.SwitchPortSchedules.UpdateNetworkSwitchPortSchedule(ctx, operations.UpdateNetworkSwitchPortScheduleRequest{
        RequestBody: &operations.UpdateNetworkSwitchPortScheduleRequestBody{
            Name: sdk.String("Dora Paucek Sr."),
            PortSchedule: &operations.UpdateNetworkSwitchPortScheduleRequestBodyPortSchedule{
                Friday: &operations.UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleFriday{
                    Active: sdk.Bool(false),
                    From: sdk.String("aliquid"),
                    To: sdk.String("magni"),
                },
                Monday: &operations.UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleMonday{
                    Active: sdk.Bool(false),
                    From: sdk.String("incidunt"),
                    To: sdk.String("adipisci"),
                },
                Saturday: &operations.UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleSaturday{
                    Active: sdk.Bool(false),
                    From: sdk.String("praesentium"),
                    To: sdk.String("dolor"),
                },
                Sunday: &operations.UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleSunday{
                    Active: sdk.Bool(false),
                    From: sdk.String("exercitationem"),
                    To: sdk.String("expedita"),
                },
                Thursday: &operations.UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleThursday{
                    Active: sdk.Bool(false),
                    From: sdk.String("facilis"),
                    To: sdk.String("impedit"),
                },
                Tuesday: &operations.UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleTuesday{
                    Active: sdk.Bool(false),
                    From: sdk.String("sit"),
                    To: sdk.String("nemo"),
                },
                Wednesday: &operations.UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleWednesday{
                    Active: sdk.Bool(false),
                    From: sdk.String("culpa"),
                    To: sdk.String("consequuntur"),
                },
            },
        },
        NetworkID: "amet",
        PortScheduleID: "deserunt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkSwitchPortSchedule200ApplicationJSONObject != nil {
        // handle response
    }
}
```
