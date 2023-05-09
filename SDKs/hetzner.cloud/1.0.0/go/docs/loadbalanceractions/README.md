# LoadBalancerActions

### Available Operations

* [GetLoadBalancersIDActions](#getloadbalancersidactions) - Get all Actions for a Load Balancer
* [GetLoadBalancersIDActionsActionID](#getloadbalancersidactionsactionid) - Get an Action for a Load Balancer
* [PostLoadBalancersIDActionsAddService](#postloadbalancersidactionsaddservice) - Add Service
* [PostLoadBalancersIDActionsAddTarget](#postloadbalancersidactionsaddtarget) - Add Target
* [PostLoadBalancersIDActionsAttachToNetwork](#postloadbalancersidactionsattachtonetwork) - Attach a Load Balancer to a Network
* [PostLoadBalancersIDActionsChangeAlgorithm](#postloadbalancersidactionschangealgorithm) - Change Algorithm
* [PostLoadBalancersIDActionsChangeDNSPtr](#postloadbalancersidactionschangednsptr) - Change reverse DNS entry for this Load Balancer
* [PostLoadBalancersIDActionsChangeProtection](#postloadbalancersidactionschangeprotection) - Change Load Balancer Protection
* [PostLoadBalancersIDActionsChangeType](#postloadbalancersidactionschangetype) - Change the Type of a Load Balancer
* [PostLoadBalancersIDActionsDeleteService](#postloadbalancersidactionsdeleteservice) - Delete Service
* [PostLoadBalancersIDActionsDetachFromNetwork](#postloadbalancersidactionsdetachfromnetwork) - Detach a Load Balancer from a Network
* [PostLoadBalancersIDActionsDisablePublicInterface](#postloadbalancersidactionsdisablepublicinterface) - Disable the public interface of a Load Balancer
* [PostLoadBalancersIDActionsEnablePublicInterface](#postloadbalancersidactionsenablepublicinterface) - Enable the public interface of a Load Balancer
* [PostLoadBalancersIDActionsRemoveTarget](#postloadbalancersidactionsremovetarget) - Remove Target
* [PostLoadBalancersIDActionsUpdateService](#postloadbalancersidactionsupdateservice) - Update Service

## GetLoadBalancersIDActions

Returns all Action objects for a Load Balancer. You can sort the results by using the `sort` URI parameter, and filter them with the `status` parameter.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.LoadBalancerActions.GetLoadBalancersIDActions(ctx, operations.GetLoadBalancersIDActionsRequest{
        ID: 647174,
        Sort: operations.GetLoadBalancersIDActionsSortParameterSortEnumStarted.ToPointer(),
        Status: operations.GetLoadBalancersIDActionsStatusParameterStatusEnumError.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionsResponse != nil {
        // handle response
    }
}
```

## GetLoadBalancersIDActionsActionID

Returns a specific Action for a Load Balancer.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.LoadBalancerActions.GetLoadBalancersIDActionsActionID(ctx, operations.GetLoadBalancersIDActionsActionIDRequest{
        ActionID: 289406,
        ID: 264730,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionResponse != nil {
        // handle response
    }
}
```

## PostLoadBalancersIDActionsAddService

Adds a service to a Load Balancer.

#### Call specific error codes

| Code                       | Description                                             |
|----------------------------|---------------------------------------------------------|
| `source_port_already_used` | The source port you are trying to add is already in use |


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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.LoadBalancerActions.PostLoadBalancersIDActionsAddService(ctx, operations.PostLoadBalancersIDActionsAddServiceRequest{
        RequestBody: &operations.PostLoadBalancersIDActionsAddServiceLoadBalancerService{
            DestinationPort: 80,
            HealthCheck: operations.PostLoadBalancersIDActionsAddServiceLoadBalancerServiceLoadBalancerServiceHealthCheck{
                HTTP: &operations.PostLoadBalancersIDActionsAddServiceLoadBalancerServiceLoadBalancerServiceHealthCheckHTTP{
                    Domain: "example.com",
                    Path: "/",
                    Response: sdk.String("{"status": "ok"}"),
                    StatusCodes: []string{
                        "aliquid",
                    },
                    TLS: sdk.Bool(false),
                },
                Interval: 15,
                Port: 4711,
                Protocol: operations.PostLoadBalancersIDActionsAddServiceLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnumHTTP,
                Retries: 3,
                Timeout: 10,
            },
            HTTP: &operations.PostLoadBalancersIDActionsAddServiceLoadBalancerServiceLoadBalancerServiceHTTP{
                Certificates: []int64{
                    552822,
                    20107,
                    164940,
                },
                CookieLifetime: sdk.Int64(300),
                CookieName: sdk.String("HCLBSTICKY"),
                RedirectHTTP: sdk.Bool(true),
                StickySessions: sdk.Bool(true),
            },
            ListenPort: 443,
            Protocol: operations.PostLoadBalancersIDActionsAddServiceLoadBalancerServiceProtocolEnumHTTPS,
            Proxyprotocol: false,
        },
        ID: 828940,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionResponse != nil {
        // handle response
    }
}
```

## PostLoadBalancersIDActionsAddTarget

Adds a target to a Load Balancer.

#### Call specific error codes

| Code                                    | Description                                                                                           |
|-----------------------------------------|-------------------------------------------------------------------------------------------------------|
| `cloud_resource_ip_not_allowed`         | The IP you are trying to add as a target belongs to a Hetzner Cloud resource                          |
| `ip_not_owned`                          | The IP you are trying to add as a target is not owned by the Project owner                            |
| `load_balancer_not_attached_to_network` | The Load Balancer is not attached to a network                                                        |
| `robot_unavailable`                     | Robot was not available. The caller may retry the operation after a short delay.                      |
| `server_not_attached_to_network`        | The server you are trying to add as a target is not attached to the same network as the Load Balancer |
| `target_already_defined`                | The Load Balancer target you are trying to define is already defined                                  |


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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.LoadBalancerActions.PostLoadBalancersIDActionsAddTarget(ctx, operations.PostLoadBalancersIDActionsAddTargetRequest{
        RequestBody: &operations.PostLoadBalancersIDActionsAddTargetAddTargetRequest{
            IP: &operations.PostLoadBalancersIDActionsAddTargetAddTargetRequestLoadBalancerTargetIP{
                IP: "203.0.113.1",
            },
            LabelSelector: &operations.PostLoadBalancersIDActionsAddTargetAddTargetRequestLabelSelector{
                Selector: "env=prod",
            },
            Server: &operations.PostLoadBalancersIDActionsAddTargetAddTargetRequestServer{
                ID: 80,
            },
            Type: operations.PostLoadBalancersIDActionsAddTargetAddTargetRequestTypeEnumLabelSelector,
            UsePrivateIP: sdk.Bool(true),
        },
        ID: 4695,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionResponse != nil {
        // handle response
    }
}
```

## PostLoadBalancersIDActionsAttachToNetwork

Attach a Load Balancer to a Network.

**Call specific error codes**

| Code                             | Description                                                           |
|----------------------------------|-----------------------------------------------------------------------|
| `load_balancer_already_attached` | The Load Balancer is already attached to a network                    |
| `ip_not_available`               | The provided Network IP is not available                              |
| `no_subnet_available`            | No Subnet or IP is available for the Load Balancer within the network |


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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.LoadBalancerActions.PostLoadBalancersIDActionsAttachToNetwork(ctx, operations.PostLoadBalancersIDActionsAttachToNetworkRequest{
        RequestBody: &operations.PostLoadBalancersIDActionsAttachToNetworkRequestBody{
            IP: sdk.String("10.0.1.1"),
            Network: 4711,
        },
        ID: 146441,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionResponse != nil {
        // handle response
    }
}
```

## PostLoadBalancersIDActionsChangeAlgorithm

Change the algorithm that determines to which target new requests are sent.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.LoadBalancerActions.PostLoadBalancersIDActionsChangeAlgorithm(ctx, operations.PostLoadBalancersIDActionsChangeAlgorithmRequest{
        RequestBody: &operations.PostLoadBalancersIDActionsChangeAlgorithmRequestBody{
            Type: operations.PostLoadBalancersIDActionsChangeAlgorithmRequestBodyTypeEnumLeastConnections,
        },
        ID: 569618,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionResponse != nil {
        // handle response
    }
}
```

## PostLoadBalancersIDActionsChangeDNSPtr

Changes the hostname that will appear when getting the hostname belonging to the public IPs (IPv4 and IPv6) of this Load Balancer.

Floating IPs assigned to the Server are not affected by this.


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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.LoadBalancerActions.PostLoadBalancersIDActionsChangeDNSPtr(ctx, operations.PostLoadBalancersIDActionsChangeDNSPtrRequest{
        RequestBody: &operations.PostLoadBalancersIDActionsChangeDNSPtrChangeLoadbalancerDNSPtrRequest{
            DNSPtr: "lb1.example.com",
            IP: "1.2.3.4",
        },
        ID: 270008,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionResponse != nil {
        // handle response
    }
}
```

## PostLoadBalancersIDActionsChangeProtection

Changes the protection configuration of a Load Balancer.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.LoadBalancerActions.PostLoadBalancersIDActionsChangeProtection(ctx, operations.PostLoadBalancersIDActionsChangeProtectionRequest{
        RequestBody: &operations.PostLoadBalancersIDActionsChangeProtectionRequestBody{
            Delete: sdk.Bool(true),
        },
        ID: 703737,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionResponse != nil {
        // handle response
    }
}
```

## PostLoadBalancersIDActionsChangeType

Changes the type (Max Services, Max Targets and Max Connections) of a Load Balancer.

**Call specific error codes**

| Code                         | Description                                                     |
|------------------------------|-----------------------------------------------------------------|
| `invalid_load_balancer_type` | The Load Balancer type does not fit for the given Load Balancer |


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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.LoadBalancerActions.PostLoadBalancersIDActionsChangeType(ctx, operations.PostLoadBalancersIDActionsChangeTypeRequest{
        RequestBody: &operations.PostLoadBalancersIDActionsChangeTypeChangeTypeRequest{
            LoadBalancerType: "lb21",
        },
        ID: 735194,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionResponse != nil {
        // handle response
    }
}
```

## PostLoadBalancersIDActionsDeleteService

Delete a service of a Load Balancer.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.LoadBalancerActions.PostLoadBalancersIDActionsDeleteService(ctx, operations.PostLoadBalancersIDActionsDeleteServiceRequest{
        RequestBody: &operations.PostLoadBalancersIDActionsDeleteServiceRequestBody{
            ListenPort: 4711,
        },
        ID: 288476,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionResponse != nil {
        // handle response
    }
}
```

## PostLoadBalancersIDActionsDetachFromNetwork

Detaches a Load Balancer from a network.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.LoadBalancerActions.PostLoadBalancersIDActionsDetachFromNetwork(ctx, operations.PostLoadBalancersIDActionsDetachFromNetworkRequest{
        RequestBody: &operations.PostLoadBalancersIDActionsDetachFromNetworkRequestBody{
            Network: 4711,
        },
        ID: 962189,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionResponse != nil {
        // handle response
    }
}
```

## PostLoadBalancersIDActionsDisablePublicInterface

Disable the public interface of a Load Balancer. The Load Balancer will be not accessible from the internet via its public IPs.

#### Call specific error codes

| Code                                      | Description                                                                    |
|-------------------------------------------|--------------------------------------------------------------------------------|
| `load_balancer_not_attached_to_network`   |  The Load Balancer is not attached to a network                                |
| `targets_without_use_private_ip`          | The Load Balancer has targets that use the public IP instead of the private IP |


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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.LoadBalancerActions.PostLoadBalancersIDActionsDisablePublicInterface(ctx, operations.PostLoadBalancersIDActionsDisablePublicInterfaceRequest{
        ID: 433288,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionResponse != nil {
        // handle response
    }
}
```

## PostLoadBalancersIDActionsEnablePublicInterface

Enable the public interface of a Load Balancer. The Load Balancer will be accessible from the internet via its public IPs.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.LoadBalancerActions.PostLoadBalancersIDActionsEnablePublicInterface(ctx, operations.PostLoadBalancersIDActionsEnablePublicInterfaceRequest{
        ID: 248753,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionResponse != nil {
        // handle response
    }
}
```

## PostLoadBalancersIDActionsRemoveTarget

Removes a target from a Load Balancer.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.LoadBalancerActions.PostLoadBalancersIDActionsRemoveTarget(ctx, operations.PostLoadBalancersIDActionsRemoveTargetRequest{
        RequestBody: &operations.PostLoadBalancersIDActionsRemoveTargetRemoveTargetRequest{
            IP: &operations.PostLoadBalancersIDActionsRemoveTargetRemoveTargetRequestLoadBalancerTargetIP{
                IP: "203.0.113.1",
            },
            LabelSelector: &operations.PostLoadBalancersIDActionsRemoveTargetRemoveTargetRequestLabelSelector{
                Selector: "env=prod",
            },
            Server: &operations.PostLoadBalancersIDActionsRemoveTargetRemoveTargetRequestServer{
                ID: 80,
            },
            Type: operations.PostLoadBalancersIDActionsRemoveTargetRemoveTargetRequestTypeEnumIP,
        },
        ID: 576157,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionResponse != nil {
        // handle response
    }
}
```

## PostLoadBalancersIDActionsUpdateService

Updates a Load Balancer Service.

#### Call specific error codes

| Code                       | Description                                             |
|----------------------------|---------------------------------------------------------|
| `source_port_already_used` | The source port you are trying to add is already in use |


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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.LoadBalancerActions.PostLoadBalancersIDActionsUpdateService(ctx, operations.PostLoadBalancersIDActionsUpdateServiceRequest{
        RequestBody: &operations.PostLoadBalancersIDActionsUpdateServiceLoadBalancerService{
            DestinationPort: 80,
            HealthCheck: operations.PostLoadBalancersIDActionsUpdateServiceLoadBalancerServiceLoadBalancerServiceHealthCheck{
                HTTP: &operations.PostLoadBalancersIDActionsUpdateServiceLoadBalancerServiceLoadBalancerServiceHealthCheckHTTP{
                    Domain: "example.com",
                    Path: "/",
                    Response: sdk.String("{"status": "ok"}"),
                    StatusCodes: []string{
                        "provident",
                        "necessitatibus",
                    },
                    TLS: sdk.Bool(false),
                },
                Interval: 15,
                Port: 4711,
                Protocol: operations.PostLoadBalancersIDActionsUpdateServiceLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnumHTTP,
                Retries: 3,
                Timeout: 10,
            },
            HTTP: &operations.PostLoadBalancersIDActionsUpdateServiceLoadBalancerServiceLoadBalancerServiceHTTP{
                Certificates: []int64{
                    638921,
                    223081,
                    891555,
                },
                CookieLifetime: sdk.Int64(300),
                CookieName: sdk.String("HCLBSTICKY"),
                RedirectHTTP: sdk.Bool(true),
                StickySessions: sdk.Bool(true),
            },
            ListenPort: 443,
            Protocol: operations.PostLoadBalancersIDActionsUpdateServiceLoadBalancerServiceProtocolEnumHTTPS,
            Proxyprotocol: false,
        },
        ID: 952749,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionResponse != nil {
        // handle response
    }
}
```
