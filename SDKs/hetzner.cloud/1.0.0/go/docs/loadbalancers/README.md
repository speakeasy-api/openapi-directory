# LoadBalancers

### Available Operations

* [DeleteLoadBalancersID](#deleteloadbalancersid) - Delete a Load Balancer
* [GetLoadBalancers](#getloadbalancers) - Get all Load Balancers
* [GetLoadBalancersID](#getloadbalancersid) - Get a Load Balancer
* [GetLoadBalancersIDMetrics](#getloadbalancersidmetrics) - Get Metrics for a LoadBalancer
* [PostLoadBalancers](#postloadbalancers) - Create a Load Balancer
* [PutLoadBalancersID](#putloadbalancersid) - Update a Load Balancer

## DeleteLoadBalancersID

Deletes a Load Balancer.

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
    res, err := s.LoadBalancers.DeleteLoadBalancersID(ctx, operations.DeleteLoadBalancersIDRequest{
        ID: 116202,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetLoadBalancers

Gets all existing Load Balancers that you have available.

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
    res, err := s.LoadBalancers.GetLoadBalancers(ctx, operations.GetLoadBalancersRequest{
        LabelSelector: sdk.String("magnam"),
        Name: sdk.String("Irving Jenkins"),
        Sort: operations.GetLoadBalancersSortEnumCreatedAsc.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetLoadBalancers200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetLoadBalancersID

Gets a specific Load Balancer object.

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
    res, err := s.LoadBalancers.GetLoadBalancersID(ctx, operations.GetLoadBalancersIDRequest{
        ID: 249796,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetLoadBalancersID200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetLoadBalancersIDMetrics

You must specify the type of metric to get: `open_connections`, `connections_per_second`, `requests_per_second` or `bandwidth`. You can also specify more than one type by comma separation, e.g. `requests_per_second,bandwidth`.

Depending on the type you will get different time series data:

|Type | Timeseries | Unit | Description |
|---- |------------|------|-------------|
| open_connections | open_connections | number | Open connections |
| connections_per_second | connections_per_second | connections/s | Connections per second |
| requests_per_second | requests_per_second | requests/s | Requests per second |
| bandwidth | bandwidth.in | bytes/s | Ingress bandwidth |
|| bandwidth.out | bytes/s | Egress bandwidth |

Metrics are available for the last 30 days only.

If you do not provide the step argument we will automatically adjust it so that 200 samples are returned.

We limit the number of samples to a maximum of 500 and will adjust the step parameter accordingly.


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
    res, err := s.LoadBalancers.GetLoadBalancersIDMetrics(ctx, operations.GetLoadBalancersIDMetricsRequest{
        End: "occaecati",
        ID: 313218,
        Start: "accusamus",
        Step: sdk.String("delectus"),
        Type: operations.GetLoadBalancersIDMetricsTypeEnumRequestsPerSecond,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetLoadBalancersIDMetrics200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostLoadBalancers

Creates a Load Balancer.

#### Call specific error codes

| Code                                    | Description                                                                                           |
|-----------------------------------------|-------------------------------------------------------------------------------------------------------|
| `cloud_resource_ip_not_allowed`         | The IP you are trying to add as a target belongs to a Hetzner Cloud resource                          |
| `ip_not_owned`                          | The IP is not owned by the owner of the project of the Load Balancer                                  |
| `load_balancer_not_attached_to_network` | The Load Balancer is not attached to a network                                                        |
| `robot_unavailable`                     | Robot was not available. The caller may retry the operation after a short delay.                      |
| `server_not_attached_to_network`        | The server you are trying to add as a target is not attached to the same network as the Load Balancer |
| `source_port_already_used`              | The source port you are trying to add is already in use                                               |
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
    res, err := s.LoadBalancers.PostLoadBalancers(ctx, operations.PostLoadBalancersCreateLoadBalancerRequest{
        Algorithm: operations.PostLoadBalancersCreateLoadBalancerRequestLoadBalancerAlgorithm{
            Type: operations.PostLoadBalancersCreateLoadBalancerRequestLoadBalancerAlgorithmTypeEnumLeastConnections,
        },
        Labels: &operations.PostLoadBalancersCreateLoadBalancerRequestLabels{
            Labelkey: sdk.String("value"),
        },
        LoadBalancerType: "lb11",
        Location: sdk.String("nam"),
        Name: "Web Frontend",
        Network: sdk.Int64(123),
        NetworkZone: sdk.String("eu-central"),
        PublicInterface: sdk.Bool(true),
        Services: []PostLoadBalancersCreateLoadBalancerRequestLoadBalancerService{
            operations.PostLoadBalancersCreateLoadBalancerRequestLoadBalancerService{
                DestinationPort: 80,
                HealthCheck: operations.PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceLoadBalancerServiceHealthCheck{
                    HTTP: &operations.PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceLoadBalancerServiceHealthCheckHTTP{
                        Domain: "example.com",
                        Path: "/",
                        Response: sdk.String("{"status": "ok"}"),
                        StatusCodes: []string{
                            "deleniti",
                            "sapiente",
                            "amet",
                        },
                        TLS: sdk.Bool(false),
                    },
                    Interval: 15,
                    Port: 4711,
                    Protocol: operations.PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnumHTTP,
                    Retries: 3,
                    Timeout: 10,
                },
                HTTP: &operations.PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceLoadBalancerServiceHTTP{
                    Certificates: []int64{
                        394869,
                        423855,
                        618809,
                    },
                    CookieLifetime: sdk.Int64(300),
                    CookieName: sdk.String("HCLBSTICKY"),
                    RedirectHTTP: sdk.Bool(true),
                    StickySessions: sdk.Bool(true),
                },
                ListenPort: 443,
                Protocol: operations.PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceProtocolEnumHTTPS,
                Proxyprotocol: false,
            },
            operations.PostLoadBalancersCreateLoadBalancerRequestLoadBalancerService{
                DestinationPort: 80,
                HealthCheck: operations.PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceLoadBalancerServiceHealthCheck{
                    HTTP: &operations.PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceLoadBalancerServiceHealthCheckHTTP{
                        Domain: "example.com",
                        Path: "/",
                        Response: sdk.String("{"status": "ok"}"),
                        StatusCodes: []string{
                            "molestiae",
                            "perferendis",
                            "nihil",
                        },
                        TLS: sdk.Bool(false),
                    },
                    Interval: 15,
                    Port: 4711,
                    Protocol: operations.PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnumHTTP,
                    Retries: 3,
                    Timeout: 10,
                },
                HTTP: &operations.PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceLoadBalancerServiceHTTP{
                    Certificates: []int64{
                        716075,
                        660174,
                    },
                    CookieLifetime: sdk.Int64(300),
                    CookieName: sdk.String("HCLBSTICKY"),
                    RedirectHTTP: sdk.Bool(true),
                    StickySessions: sdk.Bool(true),
                },
                ListenPort: 443,
                Protocol: operations.PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceProtocolEnumHTTPS,
                Proxyprotocol: false,
            },
            operations.PostLoadBalancersCreateLoadBalancerRequestLoadBalancerService{
                DestinationPort: 80,
                HealthCheck: operations.PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceLoadBalancerServiceHealthCheck{
                    HTTP: &operations.PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceLoadBalancerServiceHealthCheckHTTP{
                        Domain: "example.com",
                        Path: "/",
                        Response: sdk.String("{"status": "ok"}"),
                        StatusCodes: []string{
                            "labore",
                            "suscipit",
                        },
                        TLS: sdk.Bool(false),
                    },
                    Interval: 15,
                    Port: 4711,
                    Protocol: operations.PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnumHTTP,
                    Retries: 3,
                    Timeout: 10,
                },
                HTTP: &operations.PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceLoadBalancerServiceHTTP{
                    Certificates: []int64{
                        749170,
                        428769,
                        878453,
                    },
                    CookieLifetime: sdk.Int64(300),
                    CookieName: sdk.String("HCLBSTICKY"),
                    RedirectHTTP: sdk.Bool(true),
                    StickySessions: sdk.Bool(true),
                },
                ListenPort: 443,
                Protocol: operations.PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceProtocolEnumHTTPS,
                Proxyprotocol: false,
            },
        },
        Targets: []PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTarget{
            operations.PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTarget{
                HealthStatus: []PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetHealthStatus{
                    operations.PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetHealthStatus{
                        ListenPort: sdk.Int64(443),
                        Status: operations.PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetHealthStatusStatusEnumHealthy.ToPointer(),
                    },
                },
                IP: &operations.PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetLoadBalancerTargetIP{
                    IP: "203.0.113.1",
                },
                LabelSelector: &operations.PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetLoadBalancerTargetLabelSelector{
                    Selector: "env=prod",
                },
                Server: &operations.PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetLoadBalancerTargetServer{
                    ID: 80,
                },
                Targets: []PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetLoadBalancerTargetTarget{
                    operations.PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetLoadBalancerTargetTarget{
                        HealthStatus: []PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetLoadBalancerTargetTargetHealthStatus{
                            operations.PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetLoadBalancerTargetTargetHealthStatus{
                                ListenPort: sdk.Int64(443),
                                Status: operations.PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetLoadBalancerTargetTargetHealthStatusStatusEnumHealthy.ToPointer(),
                            },
                        },
                        Server: &operations.PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetLoadBalancerTargetTargetLoadBalancerTargetServer{
                            ID: 80,
                        },
                        Type: sdk.String("server"),
                        UsePrivateIP: sdk.Bool(false),
                    },
                    operations.PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetLoadBalancerTargetTarget{
                        HealthStatus: []PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetLoadBalancerTargetTargetHealthStatus{
                            operations.PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetLoadBalancerTargetTargetHealthStatus{
                                ListenPort: sdk.Int64(443),
                                Status: operations.PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetLoadBalancerTargetTargetHealthStatusStatusEnumHealthy.ToPointer(),
                            },
                            operations.PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetLoadBalancerTargetTargetHealthStatus{
                                ListenPort: sdk.Int64(443),
                                Status: operations.PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetLoadBalancerTargetTargetHealthStatusStatusEnumHealthy.ToPointer(),
                            },
                            operations.PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetLoadBalancerTargetTargetHealthStatus{
                                ListenPort: sdk.Int64(443),
                                Status: operations.PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetLoadBalancerTargetTargetHealthStatusStatusEnumHealthy.ToPointer(),
                            },
                        },
                        Server: &operations.PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetLoadBalancerTargetTargetLoadBalancerTargetServer{
                            ID: 80,
                        },
                        Type: sdk.String("server"),
                        UsePrivateIP: sdk.Bool(false),
                    },
                },
                Type: operations.PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetTypeEnumLabelSelector,
                UsePrivateIP: sdk.Bool(false),
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostLoadBalancers201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PutLoadBalancersID

Updates a Load Balancer. You can update a Load Balancer’s name and a Load Balancer’s labels.

Note that when updating labels, the Load Balancer’s current set of labels will be replaced with the labels provided in the request body. So, for example, if you want to add a new label, you have to provide all existing labels plus the new label in the request body.

Note: if the Load Balancer object changes during the request, the response will be a “conflict” error.


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
    res, err := s.LoadBalancers.PutLoadBalancersID(ctx, operations.PutLoadBalancersIDRequest{
        RequestBody: &operations.PutLoadBalancersIDRequestBody{
            Labels: map[string]interface{}{
                "quos": "sint",
                "accusantium": "mollitia",
                "reiciendis": "mollitia",
            },
            Name: sdk.String("new-name"),
        },
        ID: 320997,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutLoadBalancersID200ApplicationJSONObject != nil {
        // handle response
    }
}
```
