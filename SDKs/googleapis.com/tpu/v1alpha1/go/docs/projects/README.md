# Projects

### Available Operations

* [TpuProjectsLocationsAcceleratorTypesList](#tpuprojectslocationsacceleratortypeslist) - Lists accelerator types supported by this API.
* [TpuProjectsLocationsList](#tpuprojectslocationslist) - Lists information about the supported locations for this service.
* [TpuProjectsLocationsNodesCreate](#tpuprojectslocationsnodescreate) - Creates a node.
* [TpuProjectsLocationsNodesList](#tpuprojectslocationsnodeslist) - Lists nodes.
* [TpuProjectsLocationsNodesReimage](#tpuprojectslocationsnodesreimage) - Reimages a node's OS.
* [TpuProjectsLocationsNodesStart](#tpuprojectslocationsnodesstart) - Starts a node.
* [TpuProjectsLocationsNodesStop](#tpuprojectslocationsnodesstop) - Stops a node. This operation is only available with single TPU nodes.
* [TpuProjectsLocationsOperationsCancel](#tpuprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [TpuProjectsLocationsOperationsDelete](#tpuprojectslocationsoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [TpuProjectsLocationsOperationsList](#tpuprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [TpuProjectsLocationsTensorflowVersionsGet](#tpuprojectslocationstensorflowversionsget) - Gets TensorFlow Version.
* [TpuProjectsLocationsTensorflowVersionsList](#tpuprojectslocationstensorflowversionslist) - Lists TensorFlow versions supported by this API.

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
        AccessToken: sdk.String("deserunt"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("ipsam"),
        Fields: sdk.String("repellendus"),
        Filter: sdk.String("sapiente"),
        Key: sdk.String("quo"),
        Name: "Teri Strosin",
        OauthToken: sdk.String("quod"),
        PageSize: sdk.Int64(800911),
        PageToken: sdk.String("esse"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("totam"),
        UploadType: sdk.String("porro"),
        UploadProtocol: sdk.String("dolorum"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        NodeInput: &shared.NodeInput{
            AcceleratorType: sdk.String("nam"),
            CidrBlock: sdk.String("officia"),
            Description: sdk.String("occaecati"),
            Health: shared.NodeHealthEnumHealthUnspecified.ToPointer(),
            IPAddress: sdk.String("deleniti"),
            Labels: map[string]string{
                "optio": "totam",
                "beatae": "commodi",
                "molestiae": "modi",
                "qui": "impedit",
            },
            Network: sdk.String("cum"),
            Port: sdk.String("esse"),
            SchedulingConfig: &shared.SchedulingConfig{
                Preemptible: sdk.Bool(false),
                Reserved: sdk.Bool(false),
            },
            TensorflowVersion: sdk.String("ipsum"),
            UseServiceNetworking: sdk.Bool(false),
        },
        AccessToken: sdk.String("excepturi"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("perferendis"),
        Fields: sdk.String("ad"),
        Key: sdk.String("natus"),
        NodeID: sdk.String("sed"),
        OauthToken: sdk.String("iste"),
        Parent: "dolor",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("natus"),
        RequestID: sdk.String("laboriosam"),
        UploadType: sdk.String("hic"),
        UploadProtocol: sdk.String("saepe"),
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
        AccessToken: sdk.String("in"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("iste"),
        Fields: sdk.String("iure"),
        Key: sdk.String("saepe"),
        OauthToken: sdk.String("quidem"),
        PageSize: sdk.Int64(99280),
        PageToken: sdk.String("ipsa"),
        Parent: "reiciendis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("est"),
        UploadType: sdk.String("mollitia"),
        UploadProtocol: sdk.String("laborum"),
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

## TpuProjectsLocationsNodesReimage

Reimages a node's OS.

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
    res, err := s.Projects.TpuProjectsLocationsNodesReimage(ctx, operations.TpuProjectsLocationsNodesReimageRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        ReimageNodeRequest: &shared.ReimageNodeRequest{
            TensorflowVersion: sdk.String("dolorem"),
        },
        AccessToken: sdk.String("corporis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("nobis"),
        Fields: sdk.String("enim"),
        Key: sdk.String("omnis"),
        Name: "Ms. Cathy Marks",
        OauthToken: sdk.String("doloribus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sapiente"),
        UploadType: sdk.String("architecto"),
        UploadProtocol: sdk.String("mollitia"),
    }, operations.TpuProjectsLocationsNodesReimageSecurity{
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
            "consequuntur": "repellat",
            "mollitia": "occaecati",
            "numquam": "commodi",
        },
        AccessToken: sdk.String("quam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("velit"),
        Fields: sdk.String("error"),
        Key: sdk.String("quia"),
        Name: "Gloria Padberg",
        OauthToken: sdk.String("odit"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quo"),
        UploadType: sdk.String("sequi"),
        UploadProtocol: sdk.String("tenetur"),
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
            "possimus": "aut",
            "quasi": "error",
            "temporibus": "laborum",
        },
        AccessToken: sdk.String("quasi"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("voluptatibus"),
        Fields: sdk.String("vero"),
        Key: sdk.String("nihil"),
        Name: "Jan Bednar",
        OauthToken: sdk.String("cum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("perferendis"),
        UploadType: sdk.String("doloremque"),
        UploadProtocol: sdk.String("reprehenderit"),
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
        AccessToken: sdk.String("maiores"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("corporis"),
        Fields: sdk.String("dolore"),
        Key: sdk.String("iusto"),
        Name: "Maryann Hamill",
        OauthToken: sdk.String("repudiandae"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quae"),
        UploadType: sdk.String("ipsum"),
        UploadProtocol: sdk.String("quidem"),
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
        AccessToken: sdk.String("excepturi"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("modi"),
        Fields: sdk.String("praesentium"),
        Key: sdk.String("rem"),
        Name: "Carl Waelchi DVM",
        OauthToken: sdk.String("incidunt"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("enim"),
        RequestID: sdk.String("consequatur"),
        UploadType: sdk.String("est"),
        UploadProtocol: sdk.String("quibusdam"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("deserunt"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quibusdam"),
        Fields: sdk.String("labore"),
        Filter: sdk.String("modi"),
        Key: sdk.String("qui"),
        Name: "Mr. Shelly Lueilwitz",
        OauthToken: sdk.String("ipsam"),
        PageSize: sdk.Int64(4695),
        PageToken: sdk.String("fugit"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolorum"),
        UploadType: sdk.String("excepturi"),
        UploadProtocol: sdk.String("tempora"),
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

## TpuProjectsLocationsTensorflowVersionsGet

Gets TensorFlow Version.

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
    res, err := s.Projects.TpuProjectsLocationsTensorflowVersionsGet(ctx, operations.TpuProjectsLocationsTensorflowVersionsGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("tempore"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("delectus"),
        Fields: sdk.String("eum"),
        Key: sdk.String("non"),
        Name: "Sergio Hyatt",
        OauthToken: sdk.String("sint"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("officia"),
        UploadType: sdk.String("dolor"),
        UploadProtocol: sdk.String("debitis"),
    }, operations.TpuProjectsLocationsTensorflowVersionsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TensorFlowVersion != nil {
        // handle response
    }
}
```

## TpuProjectsLocationsTensorflowVersionsList

Lists TensorFlow versions supported by this API.

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
    res, err := s.Projects.TpuProjectsLocationsTensorflowVersionsList(ctx, operations.TpuProjectsLocationsTensorflowVersionsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("dolorum"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("in"),
        Fields: sdk.String("illum"),
        Filter: sdk.String("maiores"),
        Key: sdk.String("rerum"),
        OauthToken: sdk.String("dicta"),
        OrderBy: sdk.String("magnam"),
        PageSize: sdk.Int64(767024),
        PageToken: sdk.String("facere"),
        Parent: "ea",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("aliquid"),
        UploadType: sdk.String("laborum"),
        UploadProtocol: sdk.String("accusamus"),
    }, operations.TpuProjectsLocationsTensorflowVersionsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTensorFlowVersionsResponse != nil {
        // handle response
    }
}
```
