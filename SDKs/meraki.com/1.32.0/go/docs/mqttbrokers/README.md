# MqttBrokers

### Available Operations

* [CreateNetworkMqttBroker](#createnetworkmqttbroker) - Add an MQTT broker
* [DeleteNetworkMqttBroker](#deletenetworkmqttbroker) - Delete an MQTT broker
* [GetNetworkMqttBroker](#getnetworkmqttbroker) - Return an MQTT broker
* [GetNetworkMqttBrokers](#getnetworkmqttbrokers) - List the MQTT brokers for this network
* [UpdateNetworkMqttBroker](#updatenetworkmqttbroker) - Update an MQTT broker

## CreateNetworkMqttBroker

Add an MQTT broker

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
    res, err := s.MqttBrokers.CreateNetworkMqttBroker(ctx, operations.CreateNetworkMqttBrokerRequest{
        RequestBody: operations.CreateNetworkMqttBrokerRequestBody{
            Authentication: map[string]interface{}{
                "libero": "delectus",
                "a": "rerum",
            },
            Host: "eligendi",
            Name: "Mr. Jordan Jerde",
            Port: 983496,
            Security: &operations.CreateNetworkMqttBrokerRequestBodySecurity{
                Mode: sdk.String("magni"),
                Security: &operations.CreateNetworkMqttBrokerRequestBodySecuritySecurity{
                    CaCertificate: sdk.String("veritatis"),
                    VerifyHostnames: sdk.Bool(false),
                },
            },
        },
        NetworkID: "aliquid",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateNetworkMqttBroker201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## DeleteNetworkMqttBroker

Delete an MQTT broker

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
    res, err := s.MqttBrokers.DeleteNetworkMqttBroker(ctx, operations.DeleteNetworkMqttBrokerRequest{
        MqttBrokerID: "est",
        NetworkID: "fuga",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetNetworkMqttBroker

Return an MQTT broker

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
    res, err := s.MqttBrokers.GetNetworkMqttBroker(ctx, operations.GetNetworkMqttBrokerRequest{
        MqttBrokerID: "eaque",
        NetworkID: "magnam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkMqttBroker200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkMqttBrokers

List the MQTT brokers for this network

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
    res, err := s.MqttBrokers.GetNetworkMqttBrokers(ctx, operations.GetNetworkMqttBrokersRequest{
        NetworkID: "aut",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkMqttBrokers200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## UpdateNetworkMqttBroker

Update an MQTT broker

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
    res, err := s.MqttBrokers.UpdateNetworkMqttBroker(ctx, operations.UpdateNetworkMqttBrokerRequest{
        RequestBody: &operations.UpdateNetworkMqttBrokerRequestBody{
            Authentication: map[string]interface{}{
                "consequatur": "odio",
                "hic": "dolorum",
            },
            Host: sdk.String("quam"),
            Name: sdk.String("Lindsay Little"),
            Port: sdk.Int64(487733),
            Security: &operations.UpdateNetworkMqttBrokerRequestBodySecurity{
                Mode: sdk.String("officia"),
                Security: &operations.UpdateNetworkMqttBrokerRequestBodySecuritySecurity{
                    CaCertificate: sdk.String("totam"),
                    VerifyHostnames: sdk.Bool(false),
                },
            },
        },
        MqttBrokerID: "esse",
        NetworkID: "sed",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkMqttBroker200ApplicationJSONObject != nil {
        // handle response
    }
}
```
