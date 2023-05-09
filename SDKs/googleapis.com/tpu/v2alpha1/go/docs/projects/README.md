# Projects

### Available Operations

* [TpuProjectsLocationsAcceleratorTypesList](#tpuprojectslocationsacceleratortypeslist) - Lists accelerator types supported by this API.
* [TpuProjectsLocationsGenerateServiceIdentity](#tpuprojectslocationsgenerateserviceidentity) - Generates the Cloud TPU service identity for the project.
* [TpuProjectsLocationsList](#tpuprojectslocationslist) - Lists information about the supported locations for this service.
* [TpuProjectsLocationsNodesCreate](#tpuprojectslocationsnodescreate) - Creates a node.
* [TpuProjectsLocationsNodesGetGuestAttributes](#tpuprojectslocationsnodesgetguestattributes) - Retrieves the guest attributes for the node.
* [TpuProjectsLocationsNodesList](#tpuprojectslocationsnodeslist) - Lists nodes.
* [TpuProjectsLocationsNodesPatch](#tpuprojectslocationsnodespatch) - Updates the configurations of a node.
* [TpuProjectsLocationsNodesSimulateMaintenanceEvent](#tpuprojectslocationsnodessimulatemaintenanceevent) - Simulates a maintenance event.
* [TpuProjectsLocationsNodesStart](#tpuprojectslocationsnodesstart) - Starts a node.
* [TpuProjectsLocationsNodesStop](#tpuprojectslocationsnodesstop) - Stops a node. This operation is only available with single TPU nodes.
* [TpuProjectsLocationsOperationsCancel](#tpuprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [TpuProjectsLocationsOperationsList](#tpuprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [TpuProjectsLocationsQueuedResourcesCreate](#tpuprojectslocationsqueuedresourcescreate) - Creates a QueuedResource TPU instance.
* [TpuProjectsLocationsQueuedResourcesDelete](#tpuprojectslocationsqueuedresourcesdelete) - Deletes a QueuedResource TPU instance.
* [TpuProjectsLocationsQueuedResourcesList](#tpuprojectslocationsqueuedresourceslist) - Lists queued resources.
* [TpuProjectsLocationsRuntimeVersionsGet](#tpuprojectslocationsruntimeversionsget) - Gets a runtime version.
* [TpuProjectsLocationsRuntimeVersionsList](#tpuprojectslocationsruntimeversionslist) - Lists runtime versions supported by this API.

## TpuProjectsLocationsAcceleratorTypesList

Lists accelerator types supported by this API.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.TpuProjectsLocationsAcceleratorTypesList(ctx, operations.TpuProjectsLocationsAcceleratorTypesListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("delectus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("suscipit"),
        Fields: sdk.String("molestiae"),
        Filter: sdk.String("minus"),
        Key: sdk.String("placeat"),
        OauthToken: sdk.String("voluptatum"),
        OrderBy: sdk.String("iusto"),
        PageSize: sdk.Int64(568045),
        PageToken: sdk.String("nisi"),
        Parent: "recusandae",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("temporibus"),
        UploadType: sdk.String("ab"),
        UploadProtocol: sdk.String("quis"),
    }, operations.TpuProjectsLocationsAcceleratorTypesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAcceleratorTypesResponse != nil {
        // handle response
    }
}
```

## TpuProjectsLocationsGenerateServiceIdentity

Generates the Cloud TPU service identity for the project.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.TpuProjectsLocationsGenerateServiceIdentity(ctx, operations.TpuProjectsLocationsGenerateServiceIdentityRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RequestBody: map[string]interface{}{
            "perferendis": "ipsam",
            "repellendus": "sapiente",
            "quo": "odit",
        },
        AccessToken: sdk.String("at"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("maiores"),
        Fields: sdk.String("molestiae"),
        Key: sdk.String("quod"),
        OauthToken: sdk.String("quod"),
        Parent: "esse",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("totam"),
        UploadType: sdk.String("porro"),
        UploadProtocol: sdk.String("dolorum"),
    }, operations.TpuProjectsLocationsGenerateServiceIdentitySecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GenerateServiceIdentityResponse != nil {
        // handle response
    }
}
```

## TpuProjectsLocationsList

Lists information about the supported locations for this service.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.TpuProjectsLocationsList(ctx, operations.TpuProjectsLocationsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("nam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("occaecati"),
        Fields: sdk.String("fugit"),
        Filter: sdk.String("deleniti"),
        Key: sdk.String("hic"),
        Name: "Everett Breitenberg",
        OauthToken: sdk.String("modi"),
        PageSize: sdk.Int64(186332),
        PageToken: sdk.String("impedit"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("cum"),
        UploadType: sdk.String("esse"),
        UploadProtocol: sdk.String("ipsum"),
    }, operations.TpuProjectsLocationsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListLocationsResponse != nil {
        // handle response
    }
}
```

## TpuProjectsLocationsNodesCreate

Creates a node.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.TpuProjectsLocationsNodesCreate(ctx, operations.TpuProjectsLocationsNodesCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        NodeInput: &shared.NodeInput{
            AcceleratorConfig: &shared.AcceleratorConfig{
                Topology: sdk.String("aspernatur"),
                Type: shared.AcceleratorConfigTypeEnumTypeUnspecified.ToPointer(),
            },
            AcceleratorType: sdk.String("ad"),
            CidrBlock: sdk.String("natus"),
            DataDisks: []shared.AttachedDisk{
                shared.AttachedDisk{
                    Mode: shared.AttachedDiskModeEnumReadWrite.ToPointer(),
                    SourceDisk: sdk.String("dolor"),
                },
            },
            Description: sdk.String("natus"),
            Health: shared.NodeHealthEnumHealthy.ToPointer(),
            Labels: map[string]string{
                "saepe": "fuga",
                "in": "corporis",
                "iste": "iure",
                "saepe": "quidem",
            },
            Metadata: map[string]string{
                "ipsa": "reiciendis",
            },
            NetworkConfig: &shared.NetworkConfig{
                CanIPForward: sdk.Bool(false),
                EnableExternalIps: sdk.Bool(false),
                Network: sdk.String("est"),
                Subnetwork: sdk.String("mollitia"),
            },
            RuntimeVersion: sdk.String("laborum"),
            SchedulingConfig: &shared.SchedulingConfig{
                Preemptible: sdk.Bool(false),
                Reserved: sdk.Bool(false),
            },
            ServiceAccount: &shared.ServiceAccount{
                Email: sdk.String("Corrine75@gmail.com"),
                Scope: []string{
                    "omnis",
                    "nemo",
                },
            },
            ShieldedInstanceConfig: &shared.ShieldedInstanceConfig{
                EnableSecureBoot: sdk.Bool(false),
            },
            Tags: []string{
                "excepturi",
                "accusantium",
            },
        },
        AccessToken: sdk.String("iure"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("doloribus"),
        Fields: sdk.String("sapiente"),
        Key: sdk.String("architecto"),
        NodeID: sdk.String("mollitia"),
        OauthToken: sdk.String("dolorem"),
        Parent: "culpa",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("consequuntur"),
        RequestID: sdk.String("repellat"),
        UploadType: sdk.String("mollitia"),
        UploadProtocol: sdk.String("occaecati"),
    }, operations.TpuProjectsLocationsNodesCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## TpuProjectsLocationsNodesGetGuestAttributes

Retrieves the guest attributes for the node.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.TpuProjectsLocationsNodesGetGuestAttributes(ctx, operations.TpuProjectsLocationsNodesGetGuestAttributesRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GetGuestAttributesRequest: &shared.GetGuestAttributesRequest{
            QueryPath: sdk.String("commodi"),
            WorkerIds: []string{
                "molestiae",
                "velit",
            },
        },
        AccessToken: sdk.String("error"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("quis"),
        Fields: sdk.String("vitae"),
        Key: sdk.String("laborum"),
        Name: "Bill Conn",
        OauthToken: sdk.String("tenetur"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ipsam"),
        UploadType: sdk.String("id"),
        UploadProtocol: sdk.String("possimus"),
    }, operations.TpuProjectsLocationsNodesGetGuestAttributesSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetGuestAttributesResponse != nil {
        // handle response
    }
}
```

## TpuProjectsLocationsNodesList

Lists nodes.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.TpuProjectsLocationsNodesList(ctx, operations.TpuProjectsLocationsNodesListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("quasi"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("temporibus"),
        Fields: sdk.String("laborum"),
        Key: sdk.String("quasi"),
        OauthToken: sdk.String("reiciendis"),
        PageSize: sdk.Int64(976460),
        PageToken: sdk.String("vero"),
        Parent: "nihil",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("praesentium"),
        UploadType: sdk.String("voluptatibus"),
        UploadProtocol: sdk.String("ipsa"),
    }, operations.TpuProjectsLocationsNodesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListNodesResponse != nil {
        // handle response
    }
}
```

## TpuProjectsLocationsNodesPatch

Updates the configurations of a node.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.TpuProjectsLocationsNodesPatch(ctx, operations.TpuProjectsLocationsNodesPatchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        NodeInput: &shared.NodeInput{
            AcceleratorConfig: &shared.AcceleratorConfig{
                Topology: sdk.String("voluptate"),
                Type: shared.AcceleratorConfigTypeEnumV3.ToPointer(),
            },
            AcceleratorType: sdk.String("perferendis"),
            CidrBlock: sdk.String("doloremque"),
            DataDisks: []shared.AttachedDisk{
                shared.AttachedDisk{
                    Mode: shared.AttachedDiskModeEnumDiskModeUnspecified.ToPointer(),
                    SourceDisk: sdk.String("maiores"),
                },
                shared.AttachedDisk{
                    Mode: shared.AttachedDiskModeEnumDiskModeUnspecified.ToPointer(),
                    SourceDisk: sdk.String("corporis"),
                },
            },
            Description: sdk.String("dolore"),
            Health: shared.NodeHealthEnumTimeout.ToPointer(),
            Labels: map[string]string{
                "harum": "enim",
            },
            Metadata: map[string]string{
                "commodi": "repudiandae",
                "quae": "ipsum",
                "quidem": "molestias",
                "excepturi": "pariatur",
            },
            NetworkConfig: &shared.NetworkConfig{
                CanIPForward: sdk.Bool(false),
                EnableExternalIps: sdk.Bool(false),
                Network: sdk.String("modi"),
                Subnetwork: sdk.String("praesentium"),
            },
            RuntimeVersion: sdk.String("rem"),
            SchedulingConfig: &shared.SchedulingConfig{
                Preemptible: sdk.Bool(false),
                Reserved: sdk.Bool(false),
            },
            ServiceAccount: &shared.ServiceAccount{
                Email: sdk.String("Aurelia.Waelchi@hotmail.com"),
                Scope: []string{
                    "incidunt",
                    "enim",
                    "consequatur",
                    "est",
                },
            },
            ShieldedInstanceConfig: &shared.ShieldedInstanceConfig{
                EnableSecureBoot: sdk.Bool(false),
            },
            Tags: []string{
                "explicabo",
                "deserunt",
                "distinctio",
                "quibusdam",
            },
        },
        AccessToken: sdk.String("labore"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("qui"),
        Fields: sdk.String("aliquid"),
        Key: sdk.String("cupiditate"),
        Name: "Christopher Cummerata",
        OauthToken: sdk.String("alias"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("fugit"),
        UpdateMask: sdk.String("dolorum"),
        UploadType: sdk.String("excepturi"),
        UploadProtocol: sdk.String("tempora"),
    }, operations.TpuProjectsLocationsNodesPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## TpuProjectsLocationsNodesSimulateMaintenanceEvent

Simulates a maintenance event.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.TpuProjectsLocationsNodesSimulateMaintenanceEvent(ctx, operations.TpuProjectsLocationsNodesSimulateMaintenanceEventRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        SimulateMaintenanceEventRequest: &shared.SimulateMaintenanceEventRequest{
            WorkerIds: []string{
                "labore",
                "delectus",
                "eum",
            },
        },
        AccessToken: sdk.String("non"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("sint"),
        Fields: sdk.String("aliquid"),
        Key: sdk.String("provident"),
        Name: "Perry Nikolaus",
        OauthToken: sdk.String("a"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolorum"),
        UploadType: sdk.String("in"),
        UploadProtocol: sdk.String("in"),
    }, operations.TpuProjectsLocationsNodesSimulateMaintenanceEventSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## TpuProjectsLocationsNodesStart

Starts a node.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.TpuProjectsLocationsNodesStart(ctx, operations.TpuProjectsLocationsNodesStartRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RequestBody: map[string]interface{}{
            "rerum": "dicta",
            "magnam": "cumque",
            "facere": "ea",
            "aliquid": "laborum",
        },
        AccessToken: sdk.String("accusamus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("occaecati"),
        Fields: sdk.String("enim"),
        Key: sdk.String("accusamus"),
        Name: "Abraham McKenzie",
        OauthToken: sdk.String("blanditiis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("deleniti"),
        UploadType: sdk.String("sapiente"),
        UploadProtocol: sdk.String("amet"),
    }, operations.TpuProjectsLocationsNodesStartSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## TpuProjectsLocationsNodesStop

Stops a node. This operation is only available with single TPU nodes.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.TpuProjectsLocationsNodesStop(ctx, operations.TpuProjectsLocationsNodesStopRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RequestBody: map[string]interface{}{
            "vel": "natus",
            "omnis": "molestiae",
        },
        AccessToken: sdk.String("perferendis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("magnam"),
        Fields: sdk.String("distinctio"),
        Key: sdk.String("id"),
        Name: "Jamie Hoppe",
        OauthToken: sdk.String("eum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("vero"),
        UploadType: sdk.String("aspernatur"),
        UploadProtocol: sdk.String("architecto"),
    }, operations.TpuProjectsLocationsNodesStopSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## TpuProjectsLocationsOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.TpuProjectsLocationsOperationsCancel(ctx, operations.TpuProjectsLocationsOperationsCancelRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("et"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("ullam"),
        Fields: sdk.String("provident"),
        Key: sdk.String("quos"),
        Name: "Kenneth O'Hara",
        OauthToken: sdk.String("ad"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("eum"),
        UploadType: sdk.String("dolor"),
        UploadProtocol: sdk.String("necessitatibus"),
    }, operations.TpuProjectsLocationsOperationsCancelSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## TpuProjectsLocationsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.TpuProjectsLocationsOperationsList(ctx, operations.TpuProjectsLocationsOperationsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("nemo"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("iure"),
        Fields: sdk.String("doloribus"),
        Filter: sdk.String("debitis"),
        Key: sdk.String("eius"),
        Name: "Alfredo Prosacco Sr.",
        OauthToken: sdk.String("repudiandae"),
        PageSize: sdk.Int64(352312),
        PageToken: sdk.String("expedita"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nihil"),
        UploadType: sdk.String("repellat"),
        UploadProtocol: sdk.String("quibusdam"),
    }, operations.TpuProjectsLocationsOperationsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListOperationsResponse != nil {
        // handle response
    }
}
```

## TpuProjectsLocationsQueuedResourcesCreate

Creates a QueuedResource TPU instance.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.TpuProjectsLocationsQueuedResourcesCreate(ctx, operations.TpuProjectsLocationsQueuedResourcesCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        QueuedResourceInput: &shared.QueuedResourceInput{
            BestEffort: map[string]interface{}{
                "pariatur": "accusantium",
                "consequuntur": "praesentium",
                "natus": "magni",
                "sunt": "quo",
            },
            Guaranteed: &shared.Guaranteed{
                MinDuration: sdk.String("illum"),
                Reserved: sdk.Bool(false),
            },
            QueueingPolicy: &shared.QueueingPolicy{
                ValidAfterDuration: sdk.String("pariatur"),
                ValidAfterTime: sdk.String("maxime"),
                ValidInterval: &shared.Interval{
                    EndTime: sdk.String("ea"),
                    StartTime: sdk.String("excepturi"),
                },
                ValidUntilDuration: sdk.String("odit"),
                ValidUntilTime: sdk.String("ea"),
            },
            ReservationName: sdk.String("accusantium"),
            State: &shared.QueuedResourceState{
                AcceptedData: map[string]interface{}{
                    "maiores": "quidem",
                },
                ActiveData: map[string]interface{}{
                    "voluptate": "autem",
                    "nam": "eaque",
                },
                CreatingData: map[string]interface{}{
                    "nemo": "voluptatibus",
                    "perferendis": "fugiat",
                    "amet": "aut",
                    "cumque": "corporis",
                },
                DeletingData: map[string]interface{}{
                    "libero": "nobis",
                    "dolores": "quis",
                    "totam": "dignissimos",
                    "eaque": "quis",
                },
                FailedData: &shared.FailedData{
                    Error: &shared.Status{
                        Code: sdk.Int(199996),
                        Details: []map[string]interface{}{
                            map[string]interface{}{
                                "dolores": "minus",
                            },
                        },
                        Message: sdk.String("quam"),
                    },
                },
                ProvisioningData: map[string]interface{}{
                    "vero": "nostrum",
                },
                State: shared.QueuedResourceStateStateEnumSuspended.ToPointer(),
                SuspendedData: map[string]interface{}{
                    "omnis": "facilis",
                    "perspiciatis": "voluptatem",
                    "porro": "consequuntur",
                    "blanditiis": "error",
                },
                SuspendingData: map[string]interface{}{
                    "occaecati": "rerum",
                },
            },
            Tpu: &shared.TpuInput{
                NodeSpec: []shared.NodeSpecInput{
                    shared.NodeSpecInput{
                        Node: &shared.NodeInput{
                            AcceleratorConfig: &shared.AcceleratorConfig{
                                Topology: sdk.String("asperiores"),
                                Type: shared.AcceleratorConfigTypeEnumV4.ToPointer(),
                            },
                            AcceleratorType: sdk.String("modi"),
                            CidrBlock: sdk.String("iste"),
                            DataDisks: []shared.AttachedDisk{
                                shared.AttachedDisk{
                                    Mode: shared.AttachedDiskModeEnumReadWrite.ToPointer(),
                                    SourceDisk: sdk.String("pariatur"),
                                },
                                shared.AttachedDisk{
                                    Mode: shared.AttachedDiskModeEnumReadWrite.ToPointer(),
                                    SourceDisk: sdk.String("nobis"),
                                },
                                shared.AttachedDisk{
                                    Mode: shared.AttachedDiskModeEnumReadOnly.ToPointer(),
                                    SourceDisk: sdk.String("delectus"),
                                },
                            },
                            Description: sdk.String("quaerat"),
                            Health: shared.NodeHealthEnumTimeout.ToPointer(),
                            Labels: map[string]string{
                                "dolorem": "dolorem",
                                "dolor": "qui",
                            },
                            Metadata: map[string]string{
                                "hic": "excepturi",
                            },
                            NetworkConfig: &shared.NetworkConfig{
                                CanIPForward: sdk.Bool(false),
                                EnableExternalIps: sdk.Bool(false),
                                Network: sdk.String("cum"),
                                Subnetwork: sdk.String("voluptate"),
                            },
                            RuntimeVersion: sdk.String("dignissimos"),
                            SchedulingConfig: &shared.SchedulingConfig{
                                Preemptible: sdk.Bool(false),
                                Reserved: sdk.Bool(false),
                            },
                            ServiceAccount: &shared.ServiceAccount{
                                Email: sdk.String("Danika8@hotmail.com"),
                                Scope: []string{
                                    "ipsa",
                                },
                            },
                            ShieldedInstanceConfig: &shared.ShieldedInstanceConfig{
                                EnableSecureBoot: sdk.Bool(false),
                            },
                            Tags: []string{
                                "odio",
                                "quaerat",
                            },
                        },
                        NodeID: sdk.String("accusamus"),
                        Parent: sdk.String("quidem"),
                    },
                },
            },
        },
        AccessToken: sdk.String("voluptatibus"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("natus"),
        Fields: sdk.String("eos"),
        Key: sdk.String("atque"),
        OauthToken: sdk.String("sit"),
        Parent: "fugiat",
        PrettyPrint: sdk.Bool(false),
        QueuedResourceID: sdk.String("ab"),
        QuotaUser: sdk.String("soluta"),
        RequestID: sdk.String("dolorum"),
        UploadType: sdk.String("iusto"),
        UploadProtocol: sdk.String("voluptate"),
    }, operations.TpuProjectsLocationsQueuedResourcesCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## TpuProjectsLocationsQueuedResourcesDelete

Deletes a QueuedResource TPU instance.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.TpuProjectsLocationsQueuedResourcesDelete(ctx, operations.TpuProjectsLocationsQueuedResourcesDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("deleniti"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("necessitatibus"),
        Fields: sdk.String("distinctio"),
        Key: sdk.String("asperiores"),
        Name: "Edna Klocko",
        OauthToken: sdk.String("eius"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("aspernatur"),
        RequestID: sdk.String("perferendis"),
        UploadType: sdk.String("amet"),
        UploadProtocol: sdk.String("optio"),
    }, operations.TpuProjectsLocationsQueuedResourcesDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## TpuProjectsLocationsQueuedResourcesList

Lists queued resources.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.TpuProjectsLocationsQueuedResourcesList(ctx, operations.TpuProjectsLocationsQueuedResourcesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("ad"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("suscipit"),
        Fields: sdk.String("deserunt"),
        Key: sdk.String("provident"),
        OauthToken: sdk.String("minima"),
        PageSize: sdk.Int64(831049),
        PageToken: sdk.String("totam"),
        Parent: "similique",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("alias"),
        UploadType: sdk.String("at"),
        UploadProtocol: sdk.String("quaerat"),
    }, operations.TpuProjectsLocationsQueuedResourcesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListQueuedResourcesResponse != nil {
        // handle response
    }
}
```

## TpuProjectsLocationsRuntimeVersionsGet

Gets a runtime version.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.TpuProjectsLocationsRuntimeVersionsGet(ctx, operations.TpuProjectsLocationsRuntimeVersionsGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("vel"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("officiis"),
        Fields: sdk.String("qui"),
        Key: sdk.String("dolorum"),
        Name: "Cory Pfeffer",
        OauthToken: sdk.String("quisquam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("tenetur"),
        UploadType: sdk.String("amet"),
        UploadProtocol: sdk.String("tempore"),
    }, operations.TpuProjectsLocationsRuntimeVersionsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RuntimeVersion != nil {
        // handle response
    }
}
```

## TpuProjectsLocationsRuntimeVersionsList

Lists runtime versions supported by this API.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.TpuProjectsLocationsRuntimeVersionsList(ctx, operations.TpuProjectsLocationsRuntimeVersionsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("numquam"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("dolorem"),
        Fields: sdk.String("sapiente"),
        Filter: sdk.String("totam"),
        Key: sdk.String("nihil"),
        OauthToken: sdk.String("sit"),
        OrderBy: sdk.String("expedita"),
        PageSize: sdk.Int64(207470),
        PageToken: sdk.String("sed"),
        Parent: "vel",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("libero"),
        UploadType: sdk.String("voluptas"),
        UploadProtocol: sdk.String("deserunt"),
    }, operations.TpuProjectsLocationsRuntimeVersionsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListRuntimeVersionsResponse != nil {
        // handle response
    }
}
```
