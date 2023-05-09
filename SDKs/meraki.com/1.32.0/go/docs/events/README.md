# Events

### Available Operations

* [CreateNetworkFirmwareUpgradesStagedEvent](#createnetworkfirmwareupgradesstagedevent) - Create a Staged Upgrade Event for a network
* [DeferNetworkFirmwareUpgradesStagedEvents](#defernetworkfirmwareupgradesstagedevents) - Postpone by 1 week all pending staged upgrade stages for a network
* [GetNetworkApplianceClientSecurityEvents](#getnetworkapplianceclientsecurityevents) - List the security events for a client
* [GetNetworkApplianceSecurityEvents](#getnetworkappliancesecurityevents) - List the security events for a network
* [GetNetworkEvents](#getnetworkevents) - List the events for the network
* [GetNetworkEventsEventTypes](#getnetworkeventseventtypes) - List the event type to human-readable description
* [GetNetworkFirmwareUpgradesStagedEvents](#getnetworkfirmwareupgradesstagedevents) - Get the Staged Upgrade Event from a network
* [GetOrganizationApplianceSecurityEvents](#getorganizationappliancesecurityevents) - List the security events for an organization
* [RollbacksNetworkFirmwareUpgradesStagedEvents](#rollbacksnetworkfirmwareupgradesstagedevents) - Rollback a Staged Upgrade Event for a network
* [UpdateNetworkFirmwareUpgradesStagedEvents](#updatenetworkfirmwareupgradesstagedevents) - Update the Staged Upgrade Event for a network

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
    res, err := s.Events.CreateNetworkFirmwareUpgradesStagedEvent(ctx, operations.CreateNetworkFirmwareUpgradesStagedEventRequest{
        RequestBody: operations.CreateNetworkFirmwareUpgradesStagedEventRequestBody{
            Products: &operations.CreateNetworkFirmwareUpgradesStagedEventRequestBodyProducts{
                Switch: &operations.CreateNetworkFirmwareUpgradesStagedEventRequestBodyProductsSwitch{
                    NextUpgrade: &operations.CreateNetworkFirmwareUpgradesStagedEventRequestBodyProductsSwitchNextUpgrade{
                        ToVersion: &operations.CreateNetworkFirmwareUpgradesStagedEventRequestBodyProductsSwitchNextUpgradeToVersion{
                            ID: "e966e97e-0541-4033-87d7-8ff2491145fa",
                        },
                    },
                },
            },
            Stages: []CreateNetworkFirmwareUpgradesStagedEventRequestBodyStages{
                operations.CreateNetworkFirmwareUpgradesStagedEventRequestBodyStages{
                    Group: &operations.CreateNetworkFirmwareUpgradesStagedEventRequestBodyStagesGroup{
                        ID: "9e59a4af-3366-464e-aa6b-f2ff14e8c1b3",
                    },
                    Milestones: &operations.CreateNetworkFirmwareUpgradesStagedEventRequestBodyStagesMilestones{
                        ScheduledFor: "nemo",
                    },
                },
                operations.CreateNetworkFirmwareUpgradesStagedEventRequestBodyStages{
                    Group: &operations.CreateNetworkFirmwareUpgradesStagedEventRequestBodyStagesGroup{
                        ID: "2accedac-c522-4781-8eca-016bc41ea134",
                    },
                    Milestones: &operations.CreateNetworkFirmwareUpgradesStagedEventRequestBodyStagesMilestones{
                        ScheduledFor: "explicabo",
                    },
                },
                operations.CreateNetworkFirmwareUpgradesStagedEventRequestBodyStages{
                    Group: &operations.CreateNetworkFirmwareUpgradesStagedEventRequestBodyStagesGroup{
                        ID: "d4104a25-ef71-4de5-ba11-d614a4317692",
                    },
                    Milestones: &operations.CreateNetworkFirmwareUpgradesStagedEventRequestBodyStagesMilestones{
                        ScheduledFor: "repudiandae",
                    },
                },
            },
        },
        NetworkID: "fuga",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateNetworkFirmwareUpgradesStagedEvent200ApplicationJSONObject != nil {
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
    res, err := s.Events.DeferNetworkFirmwareUpgradesStagedEvents(ctx, operations.DeferNetworkFirmwareUpgradesStagedEventsRequest{
        NetworkID: "ut",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeferNetworkFirmwareUpgradesStagedEvents200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkApplianceClientSecurityEvents

List the security events for a client. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

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
    res, err := s.Events.GetNetworkApplianceClientSecurityEvents(ctx, operations.GetNetworkApplianceClientSecurityEventsRequest{
        ClientID: "totam",
        EndingBefore: sdk.String("laboriosam"),
        NetworkID: "esse",
        PerPage: sdk.Int64(199595),
        SortOrder: operations.GetNetworkApplianceClientSecurityEventsSortOrderEnumDescending.ToPointer(),
        StartingAfter: sdk.String("nostrum"),
        T0: sdk.String("qui"),
        T1: sdk.String("sunt"),
        Timespan: sdk.Float32(6992.06),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkApplianceClientSecurityEvents200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkApplianceSecurityEvents

List the security events for a network

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
    res, err := s.Events.GetNetworkApplianceSecurityEvents(ctx, operations.GetNetworkApplianceSecurityEventsRequest{
        EndingBefore: sdk.String("corrupti"),
        NetworkID: "qui",
        PerPage: sdk.Int64(559232),
        SortOrder: operations.GetNetworkApplianceSecurityEventsSortOrderEnumDescending.ToPointer(),
        StartingAfter: sdk.String("error"),
        T0: sdk.String("doloremque"),
        T1: sdk.String("amet"),
        Timespan: sdk.Float32(343.92),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkApplianceSecurityEvents200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkEvents

List the events for the network

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
    res, err := s.Events.GetNetworkEvents(ctx, operations.GetNetworkEventsRequest{
        ClientIP: sdk.String("eum"),
        ClientMac: sdk.String("commodi"),
        ClientName: sdk.String("doloremque"),
        DeviceMac: sdk.String("asperiores"),
        DeviceName: sdk.String("doloremque"),
        DeviceSerial: sdk.String("fugit"),
        EndingBefore: sdk.String("quaerat"),
        ExcludedEventTypes: []string{
            "dignissimos",
            "sint",
            "quidem",
            "ut",
        },
        IncludedEventTypes: []string{
            "cumque",
            "ex",
            "dolore",
            "eligendi",
        },
        NetworkID: "magni",
        PerPage: sdk.Int64(727604),
        ProductType: operations.GetNetworkEventsProductTypeEnumCamera.ToPointer(),
        SmDeviceMac: sdk.String("culpa"),
        SmDeviceName: sdk.String("ratione"),
        StartingAfter: sdk.String("odit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkEvents200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkEventsEventTypes

List the event type to human-readable description

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
    res, err := s.Events.GetNetworkEventsEventTypes(ctx, operations.GetNetworkEventsEventTypesRequest{
        NetworkID: "optio",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkEventsEventTypes200ApplicationJSONObjects != nil {
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
    res, err := s.Events.GetNetworkFirmwareUpgradesStagedEvents(ctx, operations.GetNetworkFirmwareUpgradesStagedEventsRequest{
        NetworkID: "labore",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkFirmwareUpgradesStagedEvents200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetOrganizationApplianceSecurityEvents

List the security events for an organization

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
    res, err := s.Events.GetOrganizationApplianceSecurityEvents(ctx, operations.GetOrganizationApplianceSecurityEventsRequest{
        EndingBefore: sdk.String("voluptatum"),
        OrganizationID: "deleniti",
        PerPage: sdk.Int64(653565),
        SortOrder: operations.GetOrganizationApplianceSecurityEventsSortOrderEnumDescending.ToPointer(),
        StartingAfter: sdk.String("debitis"),
        T0: sdk.String("ex"),
        T1: sdk.String("magni"),
        Timespan: sdk.Float32(9670.67),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationApplianceSecurityEvents200ApplicationJSONObjects != nil {
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
    res, err := s.Events.RollbacksNetworkFirmwareUpgradesStagedEvents(ctx, operations.RollbacksNetworkFirmwareUpgradesStagedEventsRequest{
        RequestBody: operations.RollbacksNetworkFirmwareUpgradesStagedEventsRequestBody{
            Reasons: []RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyReasons{
                operations.RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyReasons{
                    Category: operations.RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyReasonsCategoryEnumStability,
                    Comment: "dolorum",
                },
                operations.RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyReasons{
                    Category: operations.RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyReasonsCategoryEnumOther,
                    Comment: "exercitationem",
                },
            },
            Stages: []RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyStages{
                operations.RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyStages{
                    Group: &operations.RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyStagesGroup{
                        ID: "a65e2083-016c-4a34-bb87-d4f62127a607",
                    },
                    Milestones: &operations.RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyStagesMilestones{
                        ScheduledFor: "facere",
                    },
                },
                operations.RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyStages{
                    Group: &operations.RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyStagesGroup{
                        ID: "16062945-14c3-4db9-8a9f-38bd2be87870",
                    },
                    Milestones: &operations.RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyStagesMilestones{
                        ScheduledFor: "neque",
                    },
                },
                operations.RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyStages{
                    Group: &operations.RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyStagesGroup{
                        ID: "493f49aa-8465-4a32-8327-9b719d1cea67",
                    },
                    Milestones: &operations.RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyStagesMilestones{
                        ScheduledFor: "neque",
                    },
                },
            },
        },
        NetworkID: "facere",
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
    res, err := s.Events.UpdateNetworkFirmwareUpgradesStagedEvents(ctx, operations.UpdateNetworkFirmwareUpgradesStagedEventsRequest{
        RequestBody: operations.UpdateNetworkFirmwareUpgradesStagedEventsRequestBody{
            Stages: []UpdateNetworkFirmwareUpgradesStagedEventsRequestBodyStages{
                operations.UpdateNetworkFirmwareUpgradesStagedEventsRequestBodyStages{
                    Group: &operations.UpdateNetworkFirmwareUpgradesStagedEventsRequestBodyStagesGroup{
                        ID: "6e3b35e4-9a31-4357-b8ce-54cacb0e3ea9",
                    },
                    Milestones: &operations.UpdateNetworkFirmwareUpgradesStagedEventsRequestBodyStagesMilestones{
                        ScheduledFor: "ducimus",
                    },
                },
                operations.UpdateNetworkFirmwareUpgradesStagedEventsRequestBodyStages{
                    Group: &operations.UpdateNetworkFirmwareUpgradesStagedEventsRequestBodyStagesGroup{
                        ID: "5045bacf-63b2-4151-86ab-5e3a02261431",
                    },
                    Milestones: &operations.UpdateNetworkFirmwareUpgradesStagedEventsRequestBodyStagesMilestones{
                        ScheduledFor: "ad",
                    },
                },
                operations.UpdateNetworkFirmwareUpgradesStagedEventsRequestBodyStages{
                    Group: &operations.UpdateNetworkFirmwareUpgradesStagedEventsRequestBodyStagesGroup{
                        ID: "d1568299-e61a-4fc7-986f-f20b7a73df40",
                    },
                    Milestones: &operations.UpdateNetworkFirmwareUpgradesStagedEventsRequestBodyStagesMilestones{
                        ScheduledFor: "quo",
                    },
                },
            },
        },
        NetworkID: "id",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkFirmwareUpgradesStagedEvents200ApplicationJSONObject != nil {
        // handle response
    }
}
```
