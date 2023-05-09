# Firmware

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
    res, err := s.Firmware.GetOrganizationFirmwareUpgrades(ctx, operations.GetOrganizationFirmwareUpgradesRequest{
        OrganizationID: "natus",
        ProductType: []string{
            "exercitationem",
            "quidem",
            "repellat",
        },
        Status: []string{
            "amet",
            "veniam",
            "pariatur",
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
    res, err := s.Firmware.GetOrganizationFirmwareUpgradesByDevice(ctx, operations.GetOrganizationFirmwareUpgradesByDeviceRequest{
        EndingBefore: sdk.String("voluptatibus"),
        FirmwareUpgradeBatchIds: []string{
            "provident",
            "iure",
            "incidunt",
            "repellat",
        },
        FirmwareUpgradeIds: []string{
            "ut",
            "tempore",
            "et",
        },
        Macs: []string{
            "excepturi",
            "placeat",
            "consequatur",
            "natus",
        },
        NetworkIds: []string{
            "accusamus",
            "temporibus",
        },
        OrganizationID: "animi",
        PerPage: sdk.Int64(419707),
        Serials: []string{
            "neque",
        },
        StartingAfter: sdk.String("magnam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationFirmwareUpgradesByDevice200ApplicationJSONObjects != nil {
        // handle response
    }
}
```
