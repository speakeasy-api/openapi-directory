# VlanAssignments

### Available Operations

* [GetDeviceAppliancePrefixesDelegatedVlanAssignments](#getdeviceapplianceprefixesdelegatedvlanassignments) - Return prefixes assigned to all IPv6 enabled VLANs on an appliance.

## GetDeviceAppliancePrefixesDelegatedVlanAssignments

Return prefixes assigned to all IPv6 enabled VLANs on an appliance.

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
    res, err := s.VlanAssignments.GetDeviceAppliancePrefixesDelegatedVlanAssignments(ctx, operations.GetDeviceAppliancePrefixesDelegatedVlanAssignmentsRequest{
        Serial: "perspiciatis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceAppliancePrefixesDelegatedVlanAssignments200ApplicationJSONObjects != nil {
        // handle response
    }
}
```
