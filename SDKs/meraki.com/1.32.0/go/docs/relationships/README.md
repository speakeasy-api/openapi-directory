# Relationships

### Available Operations

* [GetDeviceSensorRelationships](#getdevicesensorrelationships) - List the sensor roles for a given sensor or camera device.
* [GetNetworkSensorRelationships](#getnetworksensorrelationships) - List the sensor roles for devices in a given network
* [UpdateDeviceSensorRelationships](#updatedevicesensorrelationships) - Assign one or more sensor roles to a given sensor or camera device.

## GetDeviceSensorRelationships

List the sensor roles for a given sensor or camera device.

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
    res, err := s.Relationships.GetDeviceSensorRelationships(ctx, operations.GetDeviceSensorRelationshipsRequest{
        Serial: "quasi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceSensorRelationships200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkSensorRelationships

List the sensor roles for devices in a given network

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
    res, err := s.Relationships.GetNetworkSensorRelationships(ctx, operations.GetNetworkSensorRelationshipsRequest{
        NetworkID: "deserunt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSensorRelationships200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## UpdateDeviceSensorRelationships

Assign one or more sensor roles to a given sensor or camera device.

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
    res, err := s.Relationships.UpdateDeviceSensorRelationships(ctx, operations.UpdateDeviceSensorRelationshipsRequest{
        RequestBody: &operations.UpdateDeviceSensorRelationshipsRequestBody{
            Livestream: &operations.UpdateDeviceSensorRelationshipsRequestBodyLivestream{
                RelatedDevices: []UpdateDeviceSensorRelationshipsRequestBodyLivestreamRelatedDevices{
                    operations.UpdateDeviceSensorRelationshipsRequestBodyLivestreamRelatedDevices{
                        Serial: "pariatur",
                    },
                    operations.UpdateDeviceSensorRelationshipsRequestBodyLivestreamRelatedDevices{
                        Serial: "aliquid",
                    },
                },
            },
        },
        Serial: "dicta",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateDeviceSensorRelationships200ApplicationJSONObject != nil {
        // handle response
    }
}
```
