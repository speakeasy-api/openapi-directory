# Projects

### Available Operations

* [TpuProjectsLocationsAcceleratorTypesList](#tpuprojectslocationsacceleratortypeslist) - Lists accelerator types supported by this API.
* [TpuProjectsLocationsGenerateServiceIdentity](#tpuprojectslocationsgenerateserviceidentity) - Generates the Cloud TPU service identity for the project.
* [TpuProjectsLocationsList](#tpuprojectslocationslist) - Lists information about the supported locations for this service.
* [TpuProjectsLocationsNodesCreate](#tpuprojectslocationsnodescreate) - Creates a node.
* [TpuProjectsLocationsNodesGetGuestAttributes](#tpuprojectslocationsnodesgetguestattributes) - Retrieves the guest attributes for the node.
* [TpuProjectsLocationsNodesList](#tpuprojectslocationsnodeslist) - Lists nodes.
* [TpuProjectsLocationsNodesPatch](#tpuprojectslocationsnodespatch) - Updates the configurations of a node.
* [TpuProjectsLocationsNodesStart](#tpuprojectslocationsnodesstart) - Starts a node.
* [TpuProjectsLocationsNodesStop](#tpuprojectslocationsnodesstop) - Stops a node. This operation is only available with single TPU nodes.
* [TpuProjectsLocationsOperationsCancel](#tpuprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [TpuProjectsLocationsOperationsDelete](#tpuprojectslocationsoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [TpuProjectsLocationsOperationsList](#tpuprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
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
        UploadType: sdk.String("repellat"),
        UploadProtocol: sdk.String("mollitia"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GetGuestAttributesRequest: &shared.GetGuestAttributesRequest{
            QueryPath: sdk.String("numquam"),
            WorkerIds: []string{
                "quam",
                "molestiae",
            },
        },
        AccessToken: sdk.String("velit"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("quia"),
        Fields: sdk.String("quis"),
        Key: sdk.String("vitae"),
        Name: "Matt Hamill",
        OauthToken: sdk.String("sequi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("tenetur"),
        UploadType: sdk.String("ipsam"),
        UploadProtocol: sdk.String("id"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("aut"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("error"),
        Fields: sdk.String("temporibus"),
        Key: sdk.String("laborum"),
        OauthToken: sdk.String("quasi"),
        PageSize: sdk.Int64(971945),
        PageToken: sdk.String("voluptatibus"),
        Parent: "vero",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nihil"),
        UploadType: sdk.String("praesentium"),
        UploadProtocol: sdk.String("voluptatibus"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        NodeInput: &shared.NodeInput{
            AcceleratorConfig: &shared.AcceleratorConfig{
                Topology: sdk.String("omnis"),
                Type: shared.AcceleratorConfigTypeEnumV2.ToPointer(),
            },
            AcceleratorType: sdk.String("cum"),
            CidrBlock: sdk.String("perferendis"),
            DataDisks: []shared.AttachedDisk{
                shared.AttachedDisk{
                    Mode: shared.AttachedDiskModeEnumReadWrite.ToPointer(),
                    SourceDisk: sdk.String("ut"),
                },
            },
            Description: sdk.String("maiores"),
            Health: shared.NodeHealthEnumHealthUnspecified.ToPointer(),
            Labels: map[string]string{
                "dolore": "iusto",
                "dicta": "harum",
            },
            Metadata: map[string]string{
                "accusamus": "commodi",
                "repudiandae": "quae",
            },
            NetworkConfig: &shared.NetworkConfig{
                CanIPForward: sdk.Bool(false),
                EnableExternalIps: sdk.Bool(false),
                Network: sdk.String("ipsum"),
                Subnetwork: sdk.String("quidem"),
            },
            RuntimeVersion: sdk.String("molestias"),
            SchedulingConfig: &shared.SchedulingConfig{
                Preemptible: sdk.Bool(false),
                Reserved: sdk.Bool(false),
            },
            ServiceAccount: &shared.ServiceAccount{
                Email: sdk.String("Samantha_Gleason@yahoo.com"),
                Scope: []string{
                    "quasi",
                    "repudiandae",
                    "sint",
                    "veritatis",
                },
            },
            ShieldedInstanceConfig: &shared.ShieldedInstanceConfig{
                EnableSecureBoot: sdk.Bool(false),
            },
            Tags: []string{
                "incidunt",
                "enim",
                "consequatur",
                "est",
            },
        },
        AccessToken: sdk.String("quibusdam"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("deserunt"),
        Fields: sdk.String("distinctio"),
        Key: sdk.String("quibusdam"),
        Name: "Pauline Deckow",
        OauthToken: sdk.String("quos"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("perferendis"),
        UpdateMask: sdk.String("magni"),
        UploadType: sdk.String("assumenda"),
        UploadProtocol: sdk.String("ipsam"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RequestBody: map[string]interface{}{
            "dolorum": "excepturi",
        },
        AccessToken: sdk.String("tempora"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("tempore"),
        Fields: sdk.String("labore"),
        Key: sdk.String("delectus"),
        Name: "Ethel Roob",
        OauthToken: sdk.String("provident"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("necessitatibus"),
        UploadType: sdk.String("sint"),
        UploadProtocol: sdk.String("officia"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RequestBody: map[string]interface{}{
            "a": "dolorum",
            "in": "in",
            "illum": "maiores",
            "rerum": "dicta",
        },
        AccessToken: sdk.String("magnam"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("facere"),
        Fields: sdk.String("ea"),
        Key: sdk.String("aliquid"),
        Name: "Tomas Friesen",
        OauthToken: sdk.String("accusamus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("delectus"),
        UploadType: sdk.String("quidem"),
        UploadProtocol: sdk.String("provident"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("id"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("deleniti"),
        Fields: sdk.String("sapiente"),
        Key: sdk.String("amet"),
        Name: "Tyler Kassulke",
        OauthToken: sdk.String("molestiae"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("perferendis"),
        UploadType: sdk.String("nihil"),
        UploadProtocol: sdk.String("magnam"),
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

## TpuProjectsLocationsOperationsDelete

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

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
    res, err := s.Projects.TpuProjectsLocationsOperationsDelete(ctx, operations.TpuProjectsLocationsOperationsDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("id"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("labore"),
        Fields: sdk.String("suscipit"),
        Key: sdk.String("natus"),
        Name: "Duane Thiel II",
        OauthToken: sdk.String("et"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("excepturi"),
        UploadType: sdk.String("ullam"),
        UploadProtocol: sdk.String("provident"),
    }, operations.TpuProjectsLocationsOperationsDeleteSecurity{
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("sint"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("mollitia"),
        Fields: sdk.String("reiciendis"),
        Filter: sdk.String("mollitia"),
        Key: sdk.String("ad"),
        Name: "Carmen Treutel",
        OauthToken: sdk.String("quasi"),
        PageSize: sdk.Int64(435865),
        PageToken: sdk.String("doloribus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("debitis"),
        UploadType: sdk.String("eius"),
        UploadProtocol: sdk.String("maxime"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("facilis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("architecto"),
        Fields: sdk.String("architecto"),
        Key: sdk.String("repudiandae"),
        Name: "Lola Koss",
        OauthToken: sdk.String("sed"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("saepe"),
        UploadType: sdk.String("pariatur"),
        UploadProtocol: sdk.String("accusantium"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("praesentium"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("magni"),
        Fields: sdk.String("sunt"),
        Filter: sdk.String("quo"),
        Key: sdk.String("illum"),
        OauthToken: sdk.String("pariatur"),
        OrderBy: sdk.String("maxime"),
        PageSize: sdk.Int64(411397),
        PageToken: sdk.String("excepturi"),
        Parent: "odit",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ea"),
        UploadType: sdk.String("accusantium"),
        UploadProtocol: sdk.String("ab"),
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
