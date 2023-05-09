# FirmwareUpgrades

### Available Operations

* [CreateNetworkFirmwareUpgradesRollback](#createnetworkfirmwareupgradesrollback) - Rollback a Firmware Upgrade For A Network
* [CreateNetworkFirmwareUpgradesStagedEvent](#createnetworkfirmwareupgradesstagedevent) - Create a Staged Upgrade Event for a network
* [CreateNetworkFirmwareUpgradesStagedGroup](#createnetworkfirmwareupgradesstagedgroup) - Create a Staged Upgrade Group for a network
* [DeferNetworkFirmwareUpgradesStagedEvents](#defernetworkfirmwareupgradesstagedevents) - Postpone by 1 week all pending staged upgrade stages for a network
* [DeleteNetworkFirmwareUpgradesStagedGroup](#deletenetworkfirmwareupgradesstagedgroup) - Delete a Staged Upgrade Group
* [GetNetworkFirmwareUpgrades](#getnetworkfirmwareupgrades) - Get firmware upgrade information for a network
* [GetNetworkFirmwareUpgradesStagedEvents](#getnetworkfirmwareupgradesstagedevents) - Get the Staged Upgrade Event from a network
* [GetNetworkFirmwareUpgradesStagedGroup](#getnetworkfirmwareupgradesstagedgroup) - Get a Staged Upgrade Group from a network
* [GetNetworkFirmwareUpgradesStagedGroups](#getnetworkfirmwareupgradesstagedgroups) - List of Staged Upgrade Groups in a network
* [GetNetworkFirmwareUpgradesStagedStages](#getnetworkfirmwareupgradesstagedstages) - Order of Staged Upgrade Groups in a network
* [RollbacksNetworkFirmwareUpgradesStagedEvents](#rollbacksnetworkfirmwareupgradesstagedevents) - Rollback a Staged Upgrade Event for a network
* [UpdateNetworkFirmwareUpgrades](#updatenetworkfirmwareupgrades) - Update firmware upgrade information for a network
* [UpdateNetworkFirmwareUpgradesStagedEvents](#updatenetworkfirmwareupgradesstagedevents) - Update the Staged Upgrade Event for a network
* [UpdateNetworkFirmwareUpgradesStagedGroup](#updatenetworkfirmwareupgradesstagedgroup) - Update a Staged Upgrade Group for a network
* [UpdateNetworkFirmwareUpgradesStagedStages](#updatenetworkfirmwareupgradesstagedstages) - Assign Staged Upgrade Group order in the sequence.

## CreateNetworkFirmwareUpgradesRollback

Rollback a Firmware Upgrade For A Network

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.FirmwareUpgrades.CreateNetworkFirmwareUpgradesRollback(ctx, operations.CreateNetworkFirmwareUpgradesRollbackRequest{
        RequestBody: operations.CreateNetworkFirmwareUpgradesRollbackRequestBody{
            Product: operations.CreateNetworkFirmwareUpgradesRollbackRequestBodyProductEnumCamera.ToPointer(),
            Reasons: []CreateNetworkFirmwareUpgradesRollbackRequestBodyReasons{
                operations.CreateNetworkFirmwareUpgradesRollbackRequestBodyReasons{
                    Category: operations.CreateNetworkFirmwareUpgradesRollbackRequestBodyReasonsCategoryEnumUnifyingNetworksVersions,
                    Comment: "beatae",
                },
            },
            Time: types.MustTimeFromString("2021-10-19T05:02:45.113Z"),
            ToVersion: &operations.CreateNetworkFirmwareUpgradesRollbackRequestBodyToVersion{
                ID: sdk.String("237e9984-c80b-4479-a891-923c18ca8d69"),
            },
        },
        NetworkID: "porro",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateNetworkFirmwareUpgradesRollback200ApplicationJSONObject != nil {
        // handle response
    }
}
```

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
    res, err := s.FirmwareUpgrades.CreateNetworkFirmwareUpgradesStagedEvent(ctx, operations.CreateNetworkFirmwareUpgradesStagedEventRequest{
        RequestBody: operations.CreateNetworkFirmwareUpgradesStagedEventRequestBody{
            Products: &operations.CreateNetworkFirmwareUpgradesStagedEventRequestBodyProducts{
                Switch: &operations.CreateNetworkFirmwareUpgradesStagedEventRequestBodyProductsSwitch{
                    NextUpgrade: &operations.CreateNetworkFirmwareUpgradesStagedEventRequestBodyProductsSwitchNextUpgrade{
                        ToVersion: &operations.CreateNetworkFirmwareUpgradesStagedEventRequestBodyProductsSwitchNextUpgradeToVersion{
                            ID: "5689214f-a202-407e-8fae-038cd7f1bc2c",
                        },
                    },
                },
            },
            Stages: []CreateNetworkFirmwareUpgradesStagedEventRequestBodyStages{
                operations.CreateNetworkFirmwareUpgradesStagedEventRequestBodyStages{
                    Group: &operations.CreateNetworkFirmwareUpgradesStagedEventRequestBodyStagesGroup{
                        ID: "baf7fc2c-cba4-4bef-8df6-8eaedb2ee70b",
                    },
                    Milestones: &operations.CreateNetworkFirmwareUpgradesStagedEventRequestBodyStagesMilestones{
                        ScheduledFor: "itaque",
                    },
                },
                operations.CreateNetworkFirmwareUpgradesStagedEventRequestBodyStages{
                    Group: &operations.CreateNetworkFirmwareUpgradesStagedEventRequestBodyStagesGroup{
                        ID: "069fb36a-dd70-4408-8e0a-3fc73a5a034b",
                    },
                    Milestones: &operations.CreateNetworkFirmwareUpgradesStagedEventRequestBodyStagesMilestones{
                        ScheduledFor: "inventore",
                    },
                },
                operations.CreateNetworkFirmwareUpgradesStagedEventRequestBodyStages{
                    Group: &operations.CreateNetworkFirmwareUpgradesStagedEventRequestBodyStagesGroup{
                        ID: "1499243a-fa69-487a-872b-709a153e2230",
                    },
                    Milestones: &operations.CreateNetworkFirmwareUpgradesStagedEventRequestBodyStagesMilestones{
                        ScheduledFor: "dicta",
                    },
                },
            },
        },
        NetworkID: "quae",
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
    res, err := s.FirmwareUpgrades.CreateNetworkFirmwareUpgradesStagedGroup(ctx, operations.CreateNetworkFirmwareUpgradesStagedGroupRequest{
        RequestBody: operations.CreateNetworkFirmwareUpgradesStagedGroupRequestBody{
            AssignedDevices: &operations.CreateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevices{
                Devices: []CreateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesDevices{
                    operations.CreateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesDevices{
                        Name: sdk.String("Tommy Emard"),
                        Serial: "saepe",
                    },
                    operations.CreateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesDevices{
                        Name: sdk.String("Claire Feil"),
                        Serial: "vitae",
                    },
                },
                SwitchStacks: []CreateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesSwitchStacks{
                    operations.CreateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesSwitchStacks{
                        ID: "acd15d8c-c306-4b78-ab3d-37bd204a1f34",
                        Name: sdk.String("Candice Price"),
                    },
                },
            },
            Description: sdk.String("voluptatibus"),
            IsDefault: false,
            Name: "Melinda Kuhic",
        },
        NetworkID: "praesentium",
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
    res, err := s.FirmwareUpgrades.DeferNetworkFirmwareUpgradesStagedEvents(ctx, operations.DeferNetworkFirmwareUpgradesStagedEventsRequest{
        NetworkID: "corporis",
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
    res, err := s.FirmwareUpgrades.DeleteNetworkFirmwareUpgradesStagedGroup(ctx, operations.DeleteNetworkFirmwareUpgradesStagedGroupRequest{
        GroupID: "inventore",
        NetworkID: "provident",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetNetworkFirmwareUpgrades

Get firmware upgrade information for a network

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
    res, err := s.FirmwareUpgrades.GetNetworkFirmwareUpgrades(ctx, operations.GetNetworkFirmwareUpgradesRequest{
        NetworkID: "quod",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkFirmwareUpgrades200ApplicationJSONObject != nil {
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
    res, err := s.FirmwareUpgrades.GetNetworkFirmwareUpgradesStagedEvents(ctx, operations.GetNetworkFirmwareUpgradesStagedEventsRequest{
        NetworkID: "dolor",
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
    res, err := s.FirmwareUpgrades.GetNetworkFirmwareUpgradesStagedGroup(ctx, operations.GetNetworkFirmwareUpgradesStagedGroupRequest{
        GroupID: "velit",
        NetworkID: "quam",
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
    res, err := s.FirmwareUpgrades.GetNetworkFirmwareUpgradesStagedGroups(ctx, operations.GetNetworkFirmwareUpgradesStagedGroupsRequest{
        NetworkID: "incidunt",
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
    res, err := s.FirmwareUpgrades.GetNetworkFirmwareUpgradesStagedStages(ctx, operations.GetNetworkFirmwareUpgradesStagedStagesRequest{
        NetworkID: "sint",
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
    res, err := s.FirmwareUpgrades.RollbacksNetworkFirmwareUpgradesStagedEvents(ctx, operations.RollbacksNetworkFirmwareUpgradesStagedEventsRequest{
        RequestBody: operations.RollbacksNetworkFirmwareUpgradesStagedEventsRequestBody{
            Reasons: []RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyReasons{
                operations.RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyReasons{
                    Category: operations.RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyReasonsCategoryEnumBrokeOldFeatures,
                    Comment: "quas",
                },
            },
            Stages: []RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyStages{
                operations.RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyStages{
                    Group: &operations.RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyStagesGroup{
                        ID: "8826bb03-c7fd-4225-a478-71a88ed72a2d",
                    },
                    Milestones: &operations.RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyStagesMilestones{
                        ScheduledFor: "eius",
                    },
                },
                operations.RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyStages{
                    Group: &operations.RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyStagesGroup{
                        ID: "af4158ac-2d0f-40f5-8c3b-87b47040d0d9",
                    },
                    Milestones: &operations.RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyStagesMilestones{
                        ScheduledFor: "quos",
                    },
                },
            },
        },
        NetworkID: "necessitatibus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RollbacksNetworkFirmwareUpgradesStagedEvents200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkFirmwareUpgrades

Update firmware upgrade information for a network

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
    res, err := s.FirmwareUpgrades.UpdateNetworkFirmwareUpgrades(ctx, operations.UpdateNetworkFirmwareUpgradesRequest{
        RequestBody: &operations.UpdateNetworkFirmwareUpgradesRequestBody{
            Products: &operations.UpdateNetworkFirmwareUpgradesRequestBodyProducts{
                Appliance: &operations.UpdateNetworkFirmwareUpgradesRequestBodyProductsAppliance{
                    NextUpgrade: &operations.UpdateNetworkFirmwareUpgradesRequestBodyProductsApplianceNextUpgrade{
                        Time: sdk.String("unde"),
                        ToVersion: &operations.UpdateNetworkFirmwareUpgradesRequestBodyProductsApplianceNextUpgradeToVersion{
                            ID: sdk.String("d82c5e30-6f55-476f-9cde-b0286d0bc43b"),
                        },
                    },
                    ParticipateInNextBetaRelease: sdk.Bool(false),
                },
                Camera: &operations.UpdateNetworkFirmwareUpgradesRequestBodyProductsCamera{
                    NextUpgrade: &operations.UpdateNetworkFirmwareUpgradesRequestBodyProductsCameraNextUpgrade{
                        Time: sdk.String("veritatis"),
                        ToVersion: &operations.UpdateNetworkFirmwareUpgradesRequestBodyProductsCameraNextUpgradeToVersion{
                            ID: sdk.String("8ab378f2-fcff-481d-9f7e-088f74ef54c9"),
                        },
                    },
                    ParticipateInNextBetaRelease: sdk.Bool(false),
                },
                CellularGateway: &operations.UpdateNetworkFirmwareUpgradesRequestBodyProductsCellularGateway{
                    NextUpgrade: &operations.UpdateNetworkFirmwareUpgradesRequestBodyProductsCellularGatewayNextUpgrade{
                        Time: sdk.String("aspernatur"),
                        ToVersion: &operations.UpdateNetworkFirmwareUpgradesRequestBodyProductsCellularGatewayNextUpgradeToVersion{
                            ID: sdk.String("16e89263-13bb-46fc-ac8d-2701096b66ad"),
                        },
                    },
                    ParticipateInNextBetaRelease: sdk.Bool(false),
                },
                Sensor: &operations.UpdateNetworkFirmwareUpgradesRequestBodyProductsSensor{
                    NextUpgrade: &operations.UpdateNetworkFirmwareUpgradesRequestBodyProductsSensorNextUpgrade{
                        Time: sdk.String("laboriosam"),
                        ToVersion: &operations.UpdateNetworkFirmwareUpgradesRequestBodyProductsSensorNextUpgradeToVersion{
                            ID: sdk.String("e3e1d9d3-b660-4334-a11a-a1d5d2247de9"),
                        },
                    },
                    ParticipateInNextBetaRelease: sdk.Bool(false),
                },
                Switch: &operations.UpdateNetworkFirmwareUpgradesRequestBodyProductsSwitch{
                    NextUpgrade: &operations.UpdateNetworkFirmwareUpgradesRequestBodyProductsSwitchNextUpgrade{
                        Time: sdk.String("libero"),
                        ToVersion: &operations.UpdateNetworkFirmwareUpgradesRequestBodyProductsSwitchNextUpgradeToVersion{
                            ID: sdk.String("3d46170e-768a-496b-b398-788398eba1bb"),
                        },
                    },
                    ParticipateInNextBetaRelease: sdk.Bool(false),
                },
                Wireless: &operations.UpdateNetworkFirmwareUpgradesRequestBodyProductsWireless{
                    NextUpgrade: &operations.UpdateNetworkFirmwareUpgradesRequestBodyProductsWirelessNextUpgrade{
                        Time: sdk.String("reiciendis"),
                        ToVersion: &operations.UpdateNetworkFirmwareUpgradesRequestBodyProductsWirelessNextUpgradeToVersion{
                            ID: sdk.String("7143356f-6349-4a16-8249-b211ce46b951"),
                        },
                    },
                    ParticipateInNextBetaRelease: sdk.Bool(false),
                },
            },
            Timezone: sdk.String("vel"),
            UpgradeWindow: &operations.UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindow{
                DayOfWeek: operations.UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowDayOfWeekEnumSat.ToPointer(),
                HourOfDay: operations.UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowHourOfDayEnumTwelve00.ToPointer(),
            },
        },
        NetworkID: "facilis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkFirmwareUpgrades200ApplicationJSONObject != nil {
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
    res, err := s.FirmwareUpgrades.UpdateNetworkFirmwareUpgradesStagedEvents(ctx, operations.UpdateNetworkFirmwareUpgradesStagedEventsRequest{
        RequestBody: operations.UpdateNetworkFirmwareUpgradesStagedEventsRequestBody{
            Stages: []UpdateNetworkFirmwareUpgradesStagedEventsRequestBodyStages{
                operations.UpdateNetworkFirmwareUpgradesStagedEventsRequestBodyStages{
                    Group: &operations.UpdateNetworkFirmwareUpgradesStagedEventsRequestBodyStagesGroup{
                        ID: "58ca9142-f052-4632-b31c-ad692ffc8745",
                    },
                    Milestones: &operations.UpdateNetworkFirmwareUpgradesStagedEventsRequestBodyStagesMilestones{
                        ScheduledFor: "ipsa",
                    },
                },
            },
        },
        NetworkID: "alias",
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
    res, err := s.FirmwareUpgrades.UpdateNetworkFirmwareUpgradesStagedGroup(ctx, operations.UpdateNetworkFirmwareUpgradesStagedGroupRequest{
        RequestBody: operations.UpdateNetworkFirmwareUpgradesStagedGroupRequestBody{
            AssignedDevices: &operations.UpdateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevices{
                Devices: []UpdateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesDevices{
                    operations.UpdateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesDevices{
                        Name: sdk.String("Joey Stracke"),
                        Serial: "excepturi",
                    },
                    operations.UpdateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesDevices{
                        Name: sdk.String("Mrs. Eva Terry"),
                        Serial: "sapiente",
                    },
                },
                SwitchStacks: []UpdateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesSwitchStacks{
                    operations.UpdateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesSwitchStacks{
                        ID: "c388664f-6985-4530-a2e2-aed6aaf863c2",
                        Name: sdk.String("Clint Beatty DDS"),
                    },
                    operations.UpdateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesSwitchStacks{
                        ID: "69a3d906-f6eb-4d5a-97ec-7394f25f634b",
                        Name: sdk.String("Ms. Constance Effertz I"),
                    },
                },
            },
            Description: sdk.String("itaque"),
            IsDefault: false,
            Name: "Patty Walter",
        },
        GroupID: "dolorem",
        NetworkID: "debitis",
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
    res, err := s.FirmwareUpgrades.UpdateNetworkFirmwareUpgradesStagedStages(ctx, operations.UpdateNetworkFirmwareUpgradesStagedStagesRequest{
        RequestBody: &operations.UpdateNetworkFirmwareUpgradesStagedStagesRequestBody{
            JSON: []UpdateNetworkFirmwareUpgradesStagedStagesRequestBodyJSON{
                operations.UpdateNetworkFirmwareUpgradesStagedStagesRequestBodyJSON{
                    Group: &operations.UpdateNetworkFirmwareUpgradesStagedStagesRequestBodyJSONGroup{
                        ID: "9c64d342-ac29-49a6-a5e7-aef13402e945",
                    },
                },
            },
        },
        NetworkID: "voluptatibus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkFirmwareUpgradesStagedStages200ApplicationJSONObjects != nil {
        // handle response
    }
}
```
