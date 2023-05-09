# Servers

## Overview

Servers are virtual machines that can be provisioned.

### Available Operations

* [DeleteServersID](#deleteserversid) - Delete a Server
* [GetServers](#getservers) - Get all Servers
* [GetServersID](#getserversid) - Get a Server
* [GetServersIDMetrics](#getserversidmetrics) - Get Metrics for a Server
* [PostServers](#postservers) - Create a Server
* [PutServersID](#putserversid) - Update a Server

## DeleteServersID

Deletes a Server. This immediately removes the Server from your account, and it is no longer accessible.

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
    res, err := s.Servers.DeleteServersID(ctx, operations.DeleteServersIDRequest{
        ID: 183280,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteServersID200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetServers

Returns all existing Server objects

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
    res, err := s.Servers.GetServers(ctx, operations.GetServersRequest{
        LabelSelector: sdk.String("neque"),
        Name: sdk.String("Mrs. Louise Kuhlman"),
        Sort: operations.GetServersSortEnumCreatedDesc.ToPointer(),
        Status: operations.GetServersStatusEnumInitializing.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetServers200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetServersID

Returns a specific Server object. The Server must exist inside the Project

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
    res, err := s.Servers.GetServersID(ctx, operations.GetServersIDRequest{
        ID: 765326,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetServersID200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetServersIDMetrics

Get Metrics for specified Server.

You must specify the type of metric to get: cpu, disk or network. You can also specify more than one type by comma separation, e.g. cpu,disk.

Depending on the type you will get different time series data

| Type    | Timeseries              | Unit      | Description                                          |
|---------|-------------------------|-----------|------------------------------------------------------|
| cpu     | cpu                     | percent   | Percent CPU usage                                    |
| disk    | disk.0.iops.read        | iop/s     | Number of read IO operations per second              |
|         | disk.0.iops.write       | iop/s     | Number of write IO operations per second             |
|         | disk.0.bandwidth.read   | bytes/s   | Bytes read per second                                |
|         | disk.0.bandwidth.write  | bytes/s   | Bytes written per second                             |
| network | network.0.pps.in        | packets/s | Public Network interface packets per second received |
|         | network.0.pps.out       | packets/s | Public Network interface packets per second sent     |
|         | network.0.bandwidth.in  | bytes/s   | Public Network interface bytes/s received            |
|         | network.0.bandwidth.out | bytes/s   | Public Network interface bytes/s sent                |

Metrics are available for the last 30 days only.

If you do not provide the step argument we will automatically adjust it so that a maximum of 200 samples are returned.

We limit the number of samples returned to a maximum of 500 and will adjust the step parameter accordingly.


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
    res, err := s.Servers.GetServersIDMetrics(ctx, operations.GetServersIDMetricsRequest{
        End: "soluta",
        ID: 748664,
        Start: "et",
        Step: sdk.String("saepe"),
        Type: operations.GetServersIDMetricsTypeEnumCPU,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetServersIDMetrics200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostServers

Creates a new Server. Returns preliminary information about the Server as well as an Action that covers progress of creation.

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
    res, err := s.Servers.PostServers(ctx, operations.PostServersCreateServerRequest{
        Automount: sdk.Bool(false),
        Datacenter: sdk.String("nbg1-dc3"),
        Firewalls: []PostServersCreateServerRequestFirewalls{
            operations.PostServersCreateServerRequestFirewalls{
                Firewall: sdk.Int64(749255),
            },
        },
        Image: "ubuntu-20.04",
        Labels: map[string]interface{}{
            "tempore": "cupiditate",
            "aperiam": "delectus",
            "dolorem": "dolore",
        },
        Location: sdk.String("nbg1"),
        Name: "my-server",
        Networks: []int64{
            240829,
            677263,
        },
        PlacementGroup: sdk.Int64(1),
        PublicNet: &operations.PostServersCreateServerRequestPublicNet{
            EnableIpv4: sdk.Bool(false),
            EnableIpv6: sdk.Bool(false),
            Ipv4: sdk.Int64(100294),
            Ipv6: sdk.Int64(63038),
        },
        ServerType: "cx11",
        SSHKeys: []string{
            "quas",
        },
        StartAfterCreate: sdk.Bool(true),
        UserData: sdk.String("#cloud-config
    runcmd:
    - [touch, /root/cloud-init-worked]
    "),
        Volumes: []int64{
            9240,
            669917,
            833038,
            785153,
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateServerResponse != nil {
        // handle response
    }
}
```

## PutServersID

Updates a Server. You can update a Server’s name and a Server’s labels.
Please note that Server names must be unique per Project and valid hostnames as per RFC 1123 (i.e. may only contain letters, digits, periods, and dashes).
Also note that when updating labels, the Server’s current set of labels will be replaced with the labels provided in the request body. So, for example, if you want to add a new label, you have to provide all existing labels plus the new label in the request body.

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
    res, err := s.Servers.PutServersID(ctx, operations.PutServersIDRequest{
        RequestBody: &operations.PutServersIDUpdateServerRequest{
            Labels: map[string]interface{}{
                "ut": "facilis",
                "cupiditate": "qui",
                "quae": "laudantium",
                "odio": "occaecati",
            },
            Name: sdk.String("my-server"),
        },
        ID: 977496,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutServersID200ApplicationJSONObject != nil {
        // handle response
    }
}
```
