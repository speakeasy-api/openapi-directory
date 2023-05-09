# Staged

### Available Operations

* [CreateNetworkFirmwareUpgradesStagedEvent](#createnetworkfirmwareupgradesstagedevent) - Create a Staged Upgrade Event for a network
* [CreateNetworkFirmwareUpgradesStagedGroup](#createnetworkfirmwareupgradesstagedgroup) - Create a Staged Upgrade Group for a network
* [DeferNetworkFirmwareUpgradesStagedEvents](#defernetworkfirmwareupgradesstagedevents) - Postpone by 1 week all pending staged upgrade stages for a network
* [DeleteNetworkFirmwareUpgradesStagedGroup](#deletenetworkfirmwareupgradesstagedgroup) - Delete a Staged Upgrade Group
* [GetNetworkFirmwareUpgradesStagedEvents](#getnetworkfirmwareupgradesstagedevents) - Get the Staged Upgrade Event from a network
* [GetNetworkFirmwareUpgradesStagedGroup](#getnetworkfirmwareupgradesstagedgroup) - Get a Staged Upgrade Group from a network
* [GetNetworkFirmwareUpgradesStagedGroups](#getnetworkfirmwareupgradesstagedgroups) - List of Staged Upgrade Groups in a network
* [GetNetworkFirmwareUpgradesStagedStages](#getnetworkfirmwareupgradesstagedstages) - Order of Staged Upgrade Groups in a network
* [RollbacksNetworkFirmwareUpgradesStagedEvents](#rollbacksnetworkfirmwareupgradesstagedevents) - Rollback a Staged Upgrade Event for a network
* [UpdateNetworkFirmwareUpgradesStagedEvents](#updatenetworkfirmwareupgradesstagedevents) - Update the Staged Upgrade Event for a network
* [UpdateNetworkFirmwareUpgradesStagedGroup](#updatenetworkfirmwareupgradesstagedgroup) - Update a Staged Upgrade Group for a network
* [UpdateNetworkFirmwareUpgradesStagedStages](#updatenetworkfirmwareupgradesstagedstages) - Assign Staged Upgrade Group order in the sequence.

## CreateNetworkFirmwareUpgradesStagedEvent

Create a Staged Upgrade Event for a network

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
    res, err := s.Staged.CreateNetworkFirmwareUpgradesStagedEvent(ctx, operations.CreateNetworkFirmwareUpgradesStagedEventRequest{
        RequestBody: operations.CreateNetworkFirmwareUpgradesStagedEventRequestBody{
            Products: &operations.CreateNetworkFirmwareUpgradesStagedEventRequestBodyProducts{
                Switch: &operations.CreateNetworkFirmwareUpgradesStagedEventRequestBodyProductsSwitch{
                    NextUpgrade: &operations.CreateNetworkFirmwareUpgradesStagedEventRequestBodyProductsSwitchNextUpgrade{
                        ToVersion: &operations.CreateNetworkFirmwareUpgradesStagedEventRequestBodyProductsSwitchNextUpgradeToVersion{
                            ID: "5f9cf815-9206-4b83-aee3-a461c124db0b",
                        },
                    },
                },
            },
            Stages: []CreateNetworkFirmwareUpgradesStagedEventRequestBodyStages{
                operations.CreateNetworkFirmwareUpgradesStagedEventRequestBodyStages{
                    Group: &operations.CreateNetworkFirmwareUpgradesStagedEventRequestBodyStagesGroup{
                        ID: "78e29a7f-f110-41b2-8766-5a5bdc01c429",
                    },
                    Milestones: &operations.CreateNetworkFirmwareUpgradesStagedEventRequestBodyStagesMilestones{
                        ScheduledFor: "possimus",
                    },
                },
                operations.CreateNetworkFirmwareUpgradesStagedEventRequestBodyStages{
                    Group: &operations.CreateNetworkFirmwareUpgradesStagedEventRequestBodyStagesGroup{
                        ID: "488d5252-e328-4370-8142-cc13ee6ac12b",
                    },
                    Milestones: &operations.CreateNetworkFirmwareUpgradesStagedEventRequestBodyStagesMilestones{
                        ScheduledFor: "quisquam",
                    },
                },
            },
        },
        NetworkID: "esse",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateNetworkFirmwareUpgradesStagedEvent200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CreateNetworkFirmwareUpgradesStagedGroup

Create a Staged Upgrade Group for a network

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
    res, err := s.Staged.CreateNetworkFirmwareUpgradesStagedGroup(ctx, operations.CreateNetworkFirmwareUpgradesStagedGroupRequest{
        RequestBody: operations.CreateNetworkFirmwareUpgradesStagedGroupRequestBody{
            AssignedDevices: &operations.CreateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevices{
                Devices: []CreateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesDevices{
                    operations.CreateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesDevices{
                        Name: sdk.String("John Marvin"),
                        Serial: "provident",
                    },
                    operations.CreateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesDevices{
                        Name: sdk.String("Janie Bashirian"),
                        Serial: "consectetur",
                    },
                },
                SwitchStacks: []CreateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesSwitchStacks{
                    operations.CreateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesSwitchStacks{
                        ID: "5502e77c-2009-4c15-b4d8-37399065df23",
                        Name: sdk.String("Mr. Lorraine Orn"),
                    },
                },
            },
            Description: sdk.String("aspernatur"),
            IsDefault: false,
            Name: "Alison Jakubowski",
        },
        NetworkID: "impedit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateNetworkFirmwareUpgradesStagedGroup200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## DeferNetworkFirmwareUpgradesStagedEvents

Postpone by 1 week all pending staged upgrade stages for a network

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
    res, err := s.Staged.DeferNetworkFirmwareUpgradesStagedEvents(ctx, operations.DeferNetworkFirmwareUpgradesStagedEventsRequest{
        NetworkID: "rerum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeferNetworkFirmwareUpgradesStagedEvents200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## DeleteNetworkFirmwareUpgradesStagedGroup

Delete a Staged Upgrade Group

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
    res, err := s.Staged.DeleteNetworkFirmwareUpgradesStagedGroup(ctx, operations.DeleteNetworkFirmwareUpgradesStagedGroupRequest{
        GroupID: "sed",
        NetworkID: "voluptate",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetNetworkFirmwareUpgradesStagedEvents

Get the Staged Upgrade Event from a network

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
    res, err := s.Staged.GetNetworkFirmwareUpgradesStagedEvents(ctx, operations.GetNetworkFirmwareUpgradesStagedEventsRequest{
        NetworkID: "sint",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkFirmwareUpgradesStagedEvents200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkFirmwareUpgradesStagedGroup

Get a Staged Upgrade Group from a network

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
    res, err := s.Staged.GetNetworkFirmwareUpgradesStagedGroup(ctx, operations.GetNetworkFirmwareUpgradesStagedGroupRequest{
        GroupID: "eius",
        NetworkID: "magnam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkFirmwareUpgradesStagedGroup200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkFirmwareUpgradesStagedGroups

List of Staged Upgrade Groups in a network

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
    res, err := s.Staged.GetNetworkFirmwareUpgradesStagedGroups(ctx, operations.GetNetworkFirmwareUpgradesStagedGroupsRequest{
        NetworkID: "dignissimos",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkFirmwareUpgradesStagedGroups200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkFirmwareUpgradesStagedStages

Order of Staged Upgrade Groups in a network

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
    res, err := s.Staged.GetNetworkFirmwareUpgradesStagedStages(ctx, operations.GetNetworkFirmwareUpgradesStagedStagesRequest{
        NetworkID: "et",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkFirmwareUpgradesStagedStages200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## RollbacksNetworkFirmwareUpgradesStagedEvents

Rollback a Staged Upgrade Event for a network

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
    res, err := s.Staged.RollbacksNetworkFirmwareUpgradesStagedEvents(ctx, operations.RollbacksNetworkFirmwareUpgradesStagedEventsRequest{
        RequestBody: operations.RollbacksNetworkFirmwareUpgradesStagedEventsRequestBody{
            Reasons: []RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyReasons{
                operations.RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyReasons{
                    Category: operations.RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyReasonsCategoryEnumOther,
                    Comment: "nihil",
                },
                operations.RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyReasons{
                    Category: operations.RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyReasonsCategoryEnumPerformance,
                    Comment: "odit",
                },
                operations.RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyReasons{
                    Category: operations.RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyReasonsCategoryEnumOther,
                    Comment: "possimus",
                },
                operations.RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyReasons{
                    Category: operations.RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyReasonsCategoryEnumTesting,
                    Comment: "voluptates",
                },
            },
            Stages: []RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyStages{
                operations.RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyStages{
                    Group: &operations.RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyStagesGroup{
                        ID: "530cc55a-88c8-4734-ad7e-eb0090092c22",
                    },
                    Milestones: &operations.RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyStagesMilestones{
                        ScheduledFor: "blanditiis",
                    },
                },
                operations.RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyStages{
                    Group: &operations.RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyStagesGroup{
                        ID: "efe9cfa3-5316-4f54-b2cf-f96f0d044a59",
                    },
                    Milestones: &operations.RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyStagesMilestones{
                        ScheduledFor: "ab",
                    },
                },
                operations.RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyStages{
                    Group: &operations.RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyStagesGroup{
                        ID: "688b8814-2c8c-405c-b6c1-3d21d28cce60",
                    },
                    Milestones: &operations.RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyStagesMilestones{
                        ScheduledFor: "repudiandae",
                    },
                },
                operations.RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyStages{
                    Group: &operations.RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyStagesGroup{
                        ID: "0a7f63f8-72b2-45b2-bbc7-89dc45879831",
                    },
                    Milestones: &operations.RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyStagesMilestones{
                        ScheduledFor: "libero",
                    },
                },
            },
        },
        NetworkID: "harum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RollbacksNetworkFirmwareUpgradesStagedEvents200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkFirmwareUpgradesStagedEvents

Update the Staged Upgrade Event for a network

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
    res, err := s.Staged.UpdateNetworkFirmwareUpgradesStagedEvents(ctx, operations.UpdateNetworkFirmwareUpgradesStagedEventsRequest{
        RequestBody: operations.UpdateNetworkFirmwareUpgradesStagedEventsRequestBody{
            Stages: []UpdateNetworkFirmwareUpgradesStagedEventsRequestBodyStages{
                operations.UpdateNetworkFirmwareUpgradesStagedEventsRequestBodyStages{
                    Group: &operations.UpdateNetworkFirmwareUpgradesStagedEventsRequestBodyStagesGroup{
                        ID: "7d98e745-a689-484e-85b1-75307ddf9dbc",
                    },
                    Milestones: &operations.UpdateNetworkFirmwareUpgradesStagedEventsRequestBodyStagesMilestones{
                        ScheduledFor: "nesciunt",
                    },
                },
                operations.UpdateNetworkFirmwareUpgradesStagedEventsRequestBodyStages{
                    Group: &operations.UpdateNetworkFirmwareUpgradesStagedEventsRequestBodyStagesGroup{
                        ID: "a2939b6e-2fae-40d3-80f7-05b6b971f4a3",
                    },
                    Milestones: &operations.UpdateNetworkFirmwareUpgradesStagedEventsRequestBodyStagesMilestones{
                        ScheduledFor: "odio",
                    },
                },
                operations.UpdateNetworkFirmwareUpgradesStagedEventsRequestBodyStages{
                    Group: &operations.UpdateNetworkFirmwareUpgradesStagedEventsRequestBodyStagesGroup{
                        ID: "e8be28d9-7dc9-4be5-8969-1e419db62214",
                    },
                    Milestones: &operations.UpdateNetworkFirmwareUpgradesStagedEventsRequestBodyStagesMilestones{
                        ScheduledFor: "ducimus",
                    },
                },
            },
        },
        NetworkID: "dolores",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkFirmwareUpgradesStagedEvents200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkFirmwareUpgradesStagedGroup

Update a Staged Upgrade Group for a network

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
    res, err := s.Staged.UpdateNetworkFirmwareUpgradesStagedGroup(ctx, operations.UpdateNetworkFirmwareUpgradesStagedGroupRequest{
        RequestBody: operations.UpdateNetworkFirmwareUpgradesStagedGroupRequestBody{
            AssignedDevices: &operations.UpdateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevices{
                Devices: []UpdateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesDevices{
                    operations.UpdateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesDevices{
                        Name: sdk.String("Claudia Gibson"),
                        Serial: "eaque",
                    },
                    operations.UpdateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesDevices{
                        Name: sdk.String("Lorenzo Wilderman"),
                        Serial: "minima",
                    },
                },
                SwitchStacks: []UpdateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesSwitchStacks{
                    operations.UpdateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesSwitchStacks{
                        ID: "d6eb1d33-e541-415e-9681-b27c08bb3aa9",
                        Name: sdk.String("Nathan Jast II"),
                    },
                },
            },
            Description: sdk.String("itaque"),
            IsDefault: false,
            Name: "Joanne Littel",
        },
        GroupID: "nostrum",
        NetworkID: "doloribus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkFirmwareUpgradesStagedGroup200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkFirmwareUpgradesStagedStages

Assign Staged Upgrade Group order in the sequence.

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
    res, err := s.Staged.UpdateNetworkFirmwareUpgradesStagedStages(ctx, operations.UpdateNetworkFirmwareUpgradesStagedStagesRequest{
        RequestBody: &operations.UpdateNetworkFirmwareUpgradesStagedStagesRequestBody{
            JSON: []UpdateNetworkFirmwareUpgradesStagedStagesRequestBodyJSON{
                operations.UpdateNetworkFirmwareUpgradesStagedStagesRequestBodyJSON{
                    Group: &operations.UpdateNetworkFirmwareUpgradesStagedStagesRequestBodyJSONGroup{
                        ID: "ea245202-7c11-4f29-9525-0c3a456ebdc1",
                    },
                },
                operations.UpdateNetworkFirmwareUpgradesStagedStagesRequestBodyJSON{
                    Group: &operations.UpdateNetworkFirmwareUpgradesStagedStagesRequestBodyJSONGroup{
                        ID: "a08d1570-11dd-44d6-b056-4ad72d66ef7d",
                    },
                },
                operations.UpdateNetworkFirmwareUpgradesStagedStagesRequestBodyJSON{
                    Group: &operations.UpdateNetworkFirmwareUpgradesStagedStagesRequestBodyJSONGroup{
                        ID: "5c82d375-9261-480c-a807-27ec7316e421",
                    },
                },
                operations.UpdateNetworkFirmwareUpgradesStagedStagesRequestBodyJSON{
                    Group: &operations.UpdateNetworkFirmwareUpgradesStagedStagesRequestBodyJSONGroup{
                        ID: "79daf12e-b914-490c-8559-f5f475aa991e",
                    },
                },
            },
        },
        NetworkID: "tempora",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkFirmwareUpgradesStagedStages200ApplicationJSONObjects != nil {
        // handle response
    }
}
```
