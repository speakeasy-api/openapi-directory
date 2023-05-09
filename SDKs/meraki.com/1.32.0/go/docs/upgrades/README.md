# Upgrades

### Available Operations

* [GetOrganizationFirmwareUpgrades](#getorganizationfirmwareupgrades) - Get firmware upgrade information for an organization
* [GetOrganizationFirmwareUpgradesByDevice](#getorganizationfirmwareupgradesbydevice) - Get firmware upgrade status for the filtered devices

## GetOrganizationFirmwareUpgrades

Get firmware upgrade information for an organization

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
    res, err := s.Upgrades.GetOrganizationFirmwareUpgrades(ctx, operations.GetOrganizationFirmwareUpgradesRequest{
        OrganizationID: "beatae",
        ProductType: []string{
            "culpa",
            "accusamus",
            "porro",
            "placeat",
        },
        Status: []string{
            "perferendis",
            "quidem",
            "laboriosam",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationFirmwareUpgrades200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetOrganizationFirmwareUpgradesByDevice

Get firmware upgrade status for the filtered devices

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
    res, err := s.Upgrades.GetOrganizationFirmwareUpgradesByDevice(ctx, operations.GetOrganizationFirmwareUpgradesByDeviceRequest{
        EndingBefore: sdk.String("quod"),
        FirmwareUpgradeBatchIds: []string{
            "accusamus",
            "suscipit",
        },
        FirmwareUpgradeIds: []string{
            "facilis",
        },
        Macs: []string{
            "excepturi",
            "odit",
            "quo",
        },
        NetworkIds: []string{
            "corrupti",
        },
        OrganizationID: "eaque",
        PerPage: sdk.Int64(194716),
        Serials: []string{
            "accusamus",
        },
        StartingAfter: sdk.String("aperiam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationFirmwareUpgradesByDevice200ApplicationJSONObjects != nil {
        // handle response
    }
}
```
