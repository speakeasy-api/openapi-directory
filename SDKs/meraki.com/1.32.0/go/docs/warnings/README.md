# Warnings

### Available Operations

* [GetNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDevice](#getnetworkswitchdhcpserverpolicyarpinspectionwarningsbydevice) - Return the devices that have a Dynamic ARP Inspection warning and their warnings

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
    res, err := s.Warnings.GetNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDevice(ctx, operations.GetNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDeviceRequest{
        EndingBefore: sdk.String("vero"),
        NetworkID: "ad",
        PerPage: sdk.Int64(241230),
        StartingAfter: sdk.String("iure"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDevice200ApplicationJSONObjects != nil {
        // handle response
    }
}
```
