# Clients

### Available Operations

* [GetDeviceClients](#getdeviceclients) - List the clients of a device, up to a maximum of a month ago
* [GetNetworkClient](#getnetworkclient) - Return the client associated with the given identifier
* [GetNetworkClientEvents](#getnetworkclientevents) - Return the events associated with this client
* [GetNetworkClientLatencyHistory](#getnetworkclientlatencyhistory) - Return the latency history for a client
* [GetNetworkClientPolicy](#getnetworkclientpolicy) - Return the policy assigned to a client on the network
* [GetNetworkClientSplashAuthorizationStatus](#getnetworkclientsplashauthorizationstatus) - Return the splash authorization for a client, for each SSID they've associated with through splash
* [GetNetworkClientUsageHistory](#getnetworkclientusagehistory) - Return the client's daily usage history
* [GetNetworkClients](#getnetworkclients) - List the clients that have used this network in the timespan
* [ProvisionNetworkClients](#provisionnetworkclients) - Provisions a client with a name and policy
* [UpdateNetworkClientPolicy](#updatenetworkclientpolicy) - Update the policy assigned to a client on the network
* [UpdateNetworkClientSplashAuthorizationStatus](#updatenetworkclientsplashauthorizationstatus) - Update a client's splash authorization

## GetDeviceClients

List the clients of a device, up to a maximum of a month ago. The usage of each client is returned in kilobytes. If the device is a switch, the switchport is returned; otherwise the switchport field is null.

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
    res, err := s.Clients.GetDeviceClients(ctx, operations.GetDeviceClientsRequest{
        Serial: "voluptate",
        T0: sdk.String("consectetur"),
        Timespan: sdk.Float32(8788.7),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceClients200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkClient

Return the client associated with the given identifier. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

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
    res, err := s.Clients.GetNetworkClient(ctx, operations.GetNetworkClientRequest{
        ClientID: "tenetur",
        NetworkID: "dignissimos",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkClient200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkClientEvents

Return the events associated with this client. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

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
    res, err := s.Clients.GetNetworkClientEvents(ctx, operations.GetNetworkClientEventsRequest{
        ClientID: "hic",
        EndingBefore: sdk.String("distinctio"),
        NetworkID: "quod",
        PerPage: sdk.Int64(486160),
        StartingAfter: sdk.String("similique"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkClientEvents200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkClientLatencyHistory

Return the latency history for a client. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP. The latency data is from a sample of 2% of packets and is grouped into 4 traffic categories: background, best effort, video, voice. Within these categories the sampled packet counters are bucketed by latency in milliseconds.

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
    res, err := s.Clients.GetNetworkClientLatencyHistory(ctx, operations.GetNetworkClientLatencyHistoryRequest{
        ClientID: "facilis",
        NetworkID: "vero",
        Resolution: sdk.Int64(498140),
        T0: sdk.String("dolore"),
        T1: sdk.String("quibusdam"),
        Timespan: sdk.Float32(8489.44),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkClientLatencyHistory200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkClientPolicy

Return the policy assigned to a client on the network. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

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
    res, err := s.Clients.GetNetworkClientPolicy(ctx, operations.GetNetworkClientPolicyRequest{
        ClientID: "sequi",
        NetworkID: "natus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkClientPolicy200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkClientSplashAuthorizationStatus

Return the splash authorization for a client, for each SSID they've associated with through splash. Only enabled SSIDs with Click-through splash enabled will be included. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

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
    res, err := s.Clients.GetNetworkClientSplashAuthorizationStatus(ctx, operations.GetNetworkClientSplashAuthorizationStatusRequest{
        ClientID: "impedit",
        NetworkID: "aut",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkClientSplashAuthorizationStatus200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkClientUsageHistory

Return the client's daily usage history. Usage data is in kilobytes. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

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
    res, err := s.Clients.GetNetworkClientUsageHistory(ctx, operations.GetNetworkClientUsageHistoryRequest{
        ClientID: "voluptatibus",
        NetworkID: "exercitationem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkClientUsageHistory200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkClients

List the clients that have used this network in the timespan

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
    res, err := s.Clients.GetNetworkClients(ctx, operations.GetNetworkClientsRequest{
        EndingBefore: sdk.String("nulla"),
        NetworkID: "fugit",
        PerPage: sdk.Int64(780427),
        StartingAfter: sdk.String("maiores"),
        T0: sdk.String("doloribus"),
        Timespan: sdk.Float32(4783.7),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkClients200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ProvisionNetworkClients

Provisions a client with a name and policy. Clients can be provisioned before they associate to the network.

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
    res, err := s.Clients.ProvisionNetworkClients(ctx, operations.ProvisionNetworkClientsRequest{
        RequestBody: operations.ProvisionNetworkClientsRequestBody{
            DevicePolicy: operations.ProvisionNetworkClientsRequestBodyDevicePolicyEnumPerConnection,
            GroupPolicyID: sdk.String("ducimus"),
            Mac: "alias",
            Name: sdk.String("Don Hills"),
            PoliciesBySecurityAppliance: &operations.ProvisionNetworkClientsRequestBodyPoliciesBySecurityAppliance{
                DevicePolicy: operations.ProvisionNetworkClientsRequestBodyPoliciesBySecurityApplianceDevicePolicyEnumNormal.ToPointer(),
            },
            PoliciesBySsid: &operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid{
                Zero: &operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid0{
                    DevicePolicy: operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid0DevicePolicyEnumWhitelisted,
                    GroupPolicyID: sdk.String("magnam"),
                },
                One: &operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid1{
                    DevicePolicy: operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid1DevicePolicyEnumBlocked,
                    GroupPolicyID: sdk.String("ex"),
                },
                Ten: &operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid10{
                    DevicePolicy: operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid10DevicePolicyEnumNormal,
                    GroupPolicyID: sdk.String("dicta"),
                },
                Eleven: &operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid11{
                    DevicePolicy: operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid11DevicePolicyEnumBlocked,
                    GroupPolicyID: sdk.String("maiores"),
                },
                Twelve: &operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid12{
                    DevicePolicy: operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid12DevicePolicyEnumBlocked,
                    GroupPolicyID: sdk.String("ex"),
                },
                Thirteen: &operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid13{
                    DevicePolicy: operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid13DevicePolicyEnumWhitelisted,
                    GroupPolicyID: sdk.String("excepturi"),
                },
                Fourteen: &operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid14{
                    DevicePolicy: operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid14DevicePolicyEnumWhitelisted,
                    GroupPolicyID: sdk.String("nostrum"),
                },
                Two: &operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid2{
                    DevicePolicy: operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid2DevicePolicyEnumWhitelisted,
                    GroupPolicyID: sdk.String("quisquam"),
                },
                Three: &operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid3{
                    DevicePolicy: operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid3DevicePolicyEnumWhitelisted,
                    GroupPolicyID: sdk.String("ea"),
                },
                Four: &operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid4{
                    DevicePolicy: operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid4DevicePolicyEnumWhitelisted,
                    GroupPolicyID: sdk.String("corporis"),
                },
                Five: &operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid5{
                    DevicePolicy: operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid5DevicePolicyEnumGroupPolicy,
                    GroupPolicyID: sdk.String("aliquid"),
                },
                Six: &operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid6{
                    DevicePolicy: operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid6DevicePolicyEnumBlocked,
                    GroupPolicyID: sdk.String("magnam"),
                },
                Seven: &operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid7{
                    DevicePolicy: operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid7DevicePolicyEnumGroupPolicy,
                    GroupPolicyID: sdk.String("quo"),
                },
                Eight: &operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid8{
                    DevicePolicy: operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid8DevicePolicyEnumBlocked,
                    GroupPolicyID: sdk.String("recusandae"),
                },
                Nine: &operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid9{
                    DevicePolicy: operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid9DevicePolicyEnumBlocked,
                    GroupPolicyID: sdk.String("minima"),
                },
            },
        },
        NetworkID: "eaque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProvisionNetworkClients201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkClientPolicy

Update the policy assigned to a client on the network. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

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
    res, err := s.Clients.UpdateNetworkClientPolicy(ctx, operations.UpdateNetworkClientPolicyRequest{
        RequestBody: operations.UpdateNetworkClientPolicyRequestBody{
            DevicePolicy: "a",
            GroupPolicyID: sdk.String("libero"),
        },
        ClientID: "aut",
        NetworkID: "aut",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkClientPolicy200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkClientSplashAuthorizationStatus

Update a client's splash authorization. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

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
    res, err := s.Clients.UpdateNetworkClientSplashAuthorizationStatus(ctx, operations.UpdateNetworkClientSplashAuthorizationStatusRequest{
        RequestBody: operations.UpdateNetworkClientSplashAuthorizationStatusRequestBody{
            Ssids: operations.UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids{
                Zero: &operations.UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids0{
                    IsAuthorized: sdk.Bool(false),
                },
                One: &operations.UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids1{
                    IsAuthorized: sdk.Bool(false),
                },
                Ten: &operations.UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids10{
                    IsAuthorized: sdk.Bool(false),
                },
                Eleven: &operations.UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids11{
                    IsAuthorized: sdk.Bool(false),
                },
                Twelve: &operations.UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids12{
                    IsAuthorized: sdk.Bool(false),
                },
                Thirteen: &operations.UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids13{
                    IsAuthorized: sdk.Bool(false),
                },
                Fourteen: &operations.UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids14{
                    IsAuthorized: sdk.Bool(false),
                },
                Two: &operations.UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids2{
                    IsAuthorized: sdk.Bool(false),
                },
                Three: &operations.UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids3{
                    IsAuthorized: sdk.Bool(false),
                },
                Four: &operations.UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids4{
                    IsAuthorized: sdk.Bool(false),
                },
                Five: &operations.UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids5{
                    IsAuthorized: sdk.Bool(false),
                },
                Six: &operations.UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids6{
                    IsAuthorized: sdk.Bool(false),
                },
                Seven: &operations.UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids7{
                    IsAuthorized: sdk.Bool(false),
                },
                Eight: &operations.UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids8{
                    IsAuthorized: sdk.Bool(false),
                },
                Nine: &operations.UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids9{
                    IsAuthorized: sdk.Bool(false),
                },
            },
        },
        ClientID: "deleniti",
        NetworkID: "impedit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkClientSplashAuthorizationStatus200ApplicationJSONObject != nil {
        // handle response
    }
}
```
