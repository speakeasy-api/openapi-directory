# ByDevice

### Available Operations

* [GetNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDevice](#getnetworkswitchdhcpserverpolicyarpinspectionwarningsbydevice) - Return the devices that have a Dynamic ARP Inspection warning and their warnings
* [GetOrganizationDevicesPowerModulesStatusesByDevice](#getorganizationdevicespowermodulesstatusesbydevice) - List the power status information for devices in an organization
* [GetOrganizationDevicesUplinksAddressesByDevice](#getorganizationdevicesuplinksaddressesbydevice) - List the current uplink addresses for devices in an organization.
* [GetOrganizationFirmwareUpgradesByDevice](#getorganizationfirmwareupgradesbydevice) - Get firmware upgrade status for the filtered devices

## GetNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDevice

Return the devices that have a Dynamic ARP Inspection warning and their warnings

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
    res, err := s.ByDevice.GetNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDevice(ctx, operations.GetNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDeviceRequest{
        EndingBefore: sdk.String("nobis"),
        NetworkID: "asperiores",
        PerPage: sdk.Int64(836053),
        StartingAfter: sdk.String("id"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDevice200ApplicationJSONObjects != nil {
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
    res, err := s.ByDevice.GetOrganizationDevicesPowerModulesStatusesByDevice(ctx, operations.GetOrganizationDevicesPowerModulesStatusesByDeviceRequest{
        EndingBefore: sdk.String("atque"),
        NetworkIds: []string{
            "sit",
            "quo",
            "veniam",
            "aliquam",
        },
        OrganizationID: "provident",
        PerPage: sdk.Int64(875693),
        ProductTypes: []string{
            "doloremque",
            "ipsum",
            "alias",
            "doloremque",
        },
        Serials: []string{
            "perspiciatis",
            "quam",
        },
        StartingAfter: sdk.String("atque"),
        Tags: []string{
            "ex",
            "architecto",
            "a",
        },
        TagsFilterType: operations.GetOrganizationDevicesPowerModulesStatusesByDeviceTagsFilterTypeEnumWithAnyTags.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationDevicesPowerModulesStatusesByDevice200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetOrganizationDevicesUplinksAddressesByDevice

List the current uplink addresses for devices in an organization.

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
    res, err := s.ByDevice.GetOrganizationDevicesUplinksAddressesByDevice(ctx, operations.GetOrganizationDevicesUplinksAddressesByDeviceRequest{
        EndingBefore: sdk.String("veritatis"),
        NetworkIds: []string{
            "a",
            "qui",
            "accusantium",
            "commodi",
        },
        OrganizationID: "atque",
        PerPage: sdk.Int64(519985),
        ProductTypes: []string{
            "voluptate",
            "quam",
            "quod",
            "vitae",
        },
        Serials: []string{
            "reiciendis",
            "quod",
            "voluptate",
            "inventore",
        },
        StartingAfter: sdk.String("facere"),
        Tags: []string{
            "fuga",
            "ab",
            "ex",
            "consectetur",
        },
        TagsFilterType: operations.GetOrganizationDevicesUplinksAddressesByDeviceTagsFilterTypeEnumWithAnyTags.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationDevicesUplinksAddressesByDevice200ApplicationJSONObjects != nil {
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
    res, err := s.ByDevice.GetOrganizationFirmwareUpgradesByDevice(ctx, operations.GetOrganizationFirmwareUpgradesByDeviceRequest{
        EndingBefore: sdk.String("sed"),
        FirmwareUpgradeBatchIds: []string{
            "sequi",
            "eligendi",
            "voluptatum",
        },
        FirmwareUpgradeIds: []string{
            "laborum",
        },
        Macs: []string{
            "nihil",
            "tenetur",
            "sapiente",
        },
        NetworkIds: []string{
            "adipisci",
        },
        OrganizationID: "non",
        PerPage: sdk.Int64(763140),
        Serials: []string{
            "at",
            "tenetur",
            "molestias",
            "ipsam",
        },
        StartingAfter: sdk.String("esse"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationFirmwareUpgradesByDevice200ApplicationJSONObjects != nil {
        // handle response
    }
}
```
