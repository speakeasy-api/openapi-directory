# Statuses

### Available Operations

* [GetDeviceSwitchPortsStatuses](#getdeviceswitchportsstatuses) - Return the status for all the ports of a switch
* [GetDeviceSwitchPortsStatusesPackets](#getdeviceswitchportsstatusespackets) - Return the packet counters for all the ports of a switch
* [GetOrganizationApplianceUplinkStatuses](#getorganizationapplianceuplinkstatuses) - List the uplink status of every Meraki MX and Z series appliances in the organization
* [GetOrganizationApplianceVpnStatuses](#getorganizationappliancevpnstatuses) - Show VPN status for networks in an organization
* [GetOrganizationCameraOnboardingStatuses](#getorganizationcameraonboardingstatuses) - Fetch onboarding status of cameras
* [GetOrganizationCellularGatewayUplinkStatuses](#getorganizationcellulargatewayuplinkstatuses) - List the uplink status of every Meraki MG cellular gateway in the organization
* [GetOrganizationDevicesPowerModulesStatusesByDevice](#getorganizationdevicespowermodulesstatusesbydevice) - List the power status information for devices in an organization
* [GetOrganizationDevicesStatuses](#getorganizationdevicesstatuses) - List the status of every Meraki device in the organization
* [GetOrganizationDevicesStatusesOverview](#getorganizationdevicesstatusesoverview) - Return an overview of current device statuses
* [GetOrganizationUplinksStatuses](#getorganizationuplinksstatuses) - List the uplink status of every Meraki MX, MG and Z series devices in the organization
* [GetOrganizationWirelessDevicesEthernetStatuses](#getorganizationwirelessdevicesethernetstatuses) - Endpoint to see power status for wireless devices
* [UpdateOrganizationCameraOnboardingStatuses](#updateorganizationcameraonboardingstatuses) - Notify that credential handoff to camera has completed

## GetDeviceSwitchPortsStatuses

Return the status for all the ports of a switch

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
    res, err := s.Statuses.GetDeviceSwitchPortsStatuses(ctx, operations.GetDeviceSwitchPortsStatusesRequest{
        Serial: "cumque",
        T0: sdk.String("animi"),
        Timespan: sdk.Float32(8856.2),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceSwitchPortsStatuses200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetDeviceSwitchPortsStatusesPackets

Return the packet counters for all the ports of a switch

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
    res, err := s.Statuses.GetDeviceSwitchPortsStatusesPackets(ctx, operations.GetDeviceSwitchPortsStatusesPacketsRequest{
        Serial: "sunt",
        T0: sdk.String("quidem"),
        Timespan: sdk.Float32(3731.11),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceSwitchPortsStatusesPackets200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetOrganizationApplianceUplinkStatuses

List the uplink status of every Meraki MX and Z series appliances in the organization

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
    res, err := s.Statuses.GetOrganizationApplianceUplinkStatuses(ctx, operations.GetOrganizationApplianceUplinkStatusesRequest{
        EndingBefore: sdk.String("pariatur"),
        Iccids: []string{
            "at",
            "totam",
        },
        NetworkIds: []string{
            "labore",
            "distinctio",
        },
        OrganizationID: "iure",
        PerPage: sdk.Int64(376951),
        Serials: []string{
            "ut",
            "aut",
        },
        StartingAfter: sdk.String("delectus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationApplianceUplinkStatuses200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetOrganizationApplianceVpnStatuses

Show VPN status for networks in an organization

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
    res, err := s.Statuses.GetOrganizationApplianceVpnStatuses(ctx, operations.GetOrganizationApplianceVpnStatusesRequest{
        EndingBefore: sdk.String("quibusdam"),
        NetworkIds: []string{
            "nulla",
            "nulla",
        },
        OrganizationID: "delectus",
        PerPage: sdk.Int64(602743),
        StartingAfter: sdk.String("tempore"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationApplianceVpnStatuses200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetOrganizationCameraOnboardingStatuses

Fetch onboarding status of cameras

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
    res, err := s.Statuses.GetOrganizationCameraOnboardingStatuses(ctx, operations.GetOrganizationCameraOnboardingStatusesRequest{
        NetworkIds: []string{
            "placeat",
            "voluptas",
        },
        OrganizationID: "quae",
        Serials: []string{
            "sapiente",
            "nesciunt",
            "aliquam",
            "esse",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationCameraOnboardingStatuses200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetOrganizationCellularGatewayUplinkStatuses

List the uplink status of every Meraki MG cellular gateway in the organization

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
    res, err := s.Statuses.GetOrganizationCellularGatewayUplinkStatuses(ctx, operations.GetOrganizationCellularGatewayUplinkStatusesRequest{
        EndingBefore: sdk.String("aperiam"),
        Iccids: []string{
            "provident",
        },
        NetworkIds: []string{
            "eaque",
            "aspernatur",
        },
        OrganizationID: "ratione",
        PerPage: sdk.Int64(342723),
        Serials: []string{
            "distinctio",
            "perspiciatis",
            "voluptas",
            "porro",
        },
        StartingAfter: sdk.String("esse"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationCellularGatewayUplinkStatuses200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetOrganizationDevicesPowerModulesStatusesByDevice

List the power status information for devices in an organization. The data returned by this endpoint is updated every 5 minutes.

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
    res, err := s.Statuses.GetOrganizationDevicesPowerModulesStatusesByDevice(ctx, operations.GetOrganizationDevicesPowerModulesStatusesByDeviceRequest{
        EndingBefore: sdk.String("aut"),
        NetworkIds: []string{
            "iure",
            "unde",
        },
        OrganizationID: "autem",
        PerPage: sdk.Int64(162204),
        ProductTypes: []string{
            "veritatis",
            "consectetur",
            "tenetur",
            "aliquid",
        },
        Serials: []string{
            "aperiam",
            "optio",
        },
        StartingAfter: sdk.String("ullam"),
        Tags: []string{
            "quia",
            "fuga",
            "debitis",
        },
        TagsFilterType: operations.GetOrganizationDevicesPowerModulesStatusesByDeviceTagsFilterTypeEnumWithAllTags.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationDevicesPowerModulesStatusesByDevice200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetOrganizationDevicesStatuses

List the status of every Meraki device in the organization

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
    res, err := s.Statuses.GetOrganizationDevicesStatuses(ctx, operations.GetOrganizationDevicesStatusesRequest{
        EndingBefore: sdk.String("eveniet"),
        Models: []string{
            "doloribus",
            "quibusdam",
            "ad",
        },
        NetworkIds: []string{
            "ipsam",
            "corrupti",
            "distinctio",
            "accusantium",
        },
        OrganizationID: "rerum",
        PerPage: sdk.Int64(493415),
        ProductTypes: []GetOrganizationDevicesStatusesProductTypesEnum{
            operations.GetOrganizationDevicesStatusesProductTypesEnumCamera,
            operations.GetOrganizationDevicesStatusesProductTypesEnumSensor,
            operations.GetOrganizationDevicesStatusesProductTypesEnumSensor,
        },
        Serials: []string{
            "occaecati",
        },
        StartingAfter: sdk.String("amet"),
        Statuses: []GetOrganizationDevicesStatusesStatusesEnum{
            operations.GetOrganizationDevicesStatusesStatusesEnumDormant,
            operations.GetOrganizationDevicesStatusesStatusesEnumOnline,
        },
        Tags: []string{
            "exercitationem",
        },
        TagsFilterType: operations.GetOrganizationDevicesStatusesTagsFilterTypeEnumWithAllTags.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationDevicesStatuses200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetOrganizationDevicesStatusesOverview

Return an overview of current device statuses

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
    res, err := s.Statuses.GetOrganizationDevicesStatusesOverview(ctx, operations.GetOrganizationDevicesStatusesOverviewRequest{
        NetworkIds: []string{
            "perspiciatis",
        },
        OrganizationID: "similique",
        ProductTypes: []GetOrganizationDevicesStatusesOverviewProductTypesEnum{
            operations.GetOrganizationDevicesStatusesOverviewProductTypesEnumAppliance,
            operations.GetOrganizationDevicesStatusesOverviewProductTypesEnumCamera,
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationDevicesStatusesOverview200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetOrganizationUplinksStatuses

List the uplink status of every Meraki MX, MG and Z series devices in the organization

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
    res, err := s.Statuses.GetOrganizationUplinksStatuses(ctx, operations.GetOrganizationUplinksStatusesRequest{
        EndingBefore: sdk.String("quaerat"),
        Iccids: []string{
            "aliquid",
            "ipsa",
            "illo",
        },
        NetworkIds: []string{
            "et",
            "voluptas",
            "corrupti",
            "minima",
        },
        OrganizationID: "expedita",
        PerPage: sdk.Int64(880010),
        Serials: []string{
            "fuga",
            "officiis",
            "vel",
            "nisi",
        },
        StartingAfter: sdk.String("officia"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationUplinksStatuses200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetOrganizationWirelessDevicesEthernetStatuses

Endpoint to see power status for wireless devices

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
    res, err := s.Statuses.GetOrganizationWirelessDevicesEthernetStatuses(ctx, operations.GetOrganizationWirelessDevicesEthernetStatusesRequest{
        EndingBefore: sdk.String("natus"),
        NetworkIds: []string{
            "vitae",
        },
        OrganizationID: "temporibus",
        PerPage: sdk.Int64(88943),
        StartingAfter: sdk.String("molestiae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationWirelessDevicesEthernetStatuses200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## UpdateOrganizationCameraOnboardingStatuses

Notify that credential handoff to camera has completed

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
    res, err := s.Statuses.UpdateOrganizationCameraOnboardingStatuses(ctx, operations.UpdateOrganizationCameraOnboardingStatusesRequest{
        RequestBody: &operations.UpdateOrganizationCameraOnboardingStatusesRequestBody{
            Serial: sdk.String("eius"),
            WirelessCredentialsSent: sdk.Bool(false),
        },
        OrganizationID: "temporibus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateOrganizationCameraOnboardingStatuses200ApplicationJSONObject != nil {
        // handle response
    }
}
```
