# Stages

### Available Operations

* [GetNetworkFirmwareUpgradesStagedStages](#getnetworkfirmwareupgradesstagedstages) - Order of Staged Upgrade Groups in a network
* [UpdateNetworkFirmwareUpgradesStagedStages](#updatenetworkfirmwareupgradesstagedstages) - Assign Staged Upgrade Group order in the sequence.

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
    res, err := s.Stages.GetNetworkFirmwareUpgradesStagedStages(ctx, operations.GetNetworkFirmwareUpgradesStagedStagesRequest{
        NetworkID: "possimus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkFirmwareUpgradesStagedStages200ApplicationJSONObjects != nil {
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
    res, err := s.Stages.UpdateNetworkFirmwareUpgradesStagedStages(ctx, operations.UpdateNetworkFirmwareUpgradesStagedStagesRequest{
        RequestBody: &operations.UpdateNetworkFirmwareUpgradesStagedStagesRequestBody{
            JSON: []UpdateNetworkFirmwareUpgradesStagedStagesRequestBodyJSON{
                operations.UpdateNetworkFirmwareUpgradesStagedStagesRequestBodyJSON{
                    Group: &operations.UpdateNetworkFirmwareUpgradesStagedStagesRequestBodyJSONGroup{
                        ID: "959483ac-6df7-40c2-92c2-99b021e26c2d",
                    },
                },
            },
        },
        NetworkID: "cumque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkFirmwareUpgradesStagedStages200ApplicationJSONObjects != nil {
        // handle response
    }
}
```
