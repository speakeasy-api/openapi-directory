# Rollbacks

### Available Operations

* [CreateNetworkFirmwareUpgradesRollback](#createnetworkfirmwareupgradesrollback) - Rollback a Firmware Upgrade For A Network

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
    res, err := s.Rollbacks.CreateNetworkFirmwareUpgradesRollback(ctx, operations.CreateNetworkFirmwareUpgradesRollbackRequest{
        RequestBody: operations.CreateNetworkFirmwareUpgradesRollbackRequestBody{
            Product: operations.CreateNetworkFirmwareUpgradesRollbackRequestBodyProductEnumAppliance.ToPointer(),
            Reasons: []CreateNetworkFirmwareUpgradesRollbackRequestBodyReasons{
                operations.CreateNetworkFirmwareUpgradesRollbackRequestBodyReasons{
                    Category: operations.CreateNetworkFirmwareUpgradesRollbackRequestBodyReasonsCategoryEnumStability,
                    Comment: "numquam",
                },
                operations.CreateNetworkFirmwareUpgradesRollbackRequestBodyReasons{
                    Category: operations.CreateNetworkFirmwareUpgradesRollbackRequestBodyReasonsCategoryEnumTesting,
                    Comment: "consequuntur",
                },
                operations.CreateNetworkFirmwareUpgradesRollbackRequestBodyReasons{
                    Category: operations.CreateNetworkFirmwareUpgradesRollbackRequestBodyReasonsCategoryEnumPerformance,
                    Comment: "iusto",
                },
            },
            Time: types.MustTimeFromString("2021-03-15T04:25:39.828Z"),
            ToVersion: &operations.CreateNetworkFirmwareUpgradesRollbackRequestBodyToVersion{
                ID: sdk.String("8ae9d4a5-76c3-4534-b123-178e0763b4fc"),
            },
        },
        NetworkID: "ducimus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateNetworkFirmwareUpgradesRollback200ApplicationJSONObject != nil {
        // handle response
    }
}
```
