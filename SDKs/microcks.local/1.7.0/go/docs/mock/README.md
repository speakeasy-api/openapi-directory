# Mock

## Overview

Operations related to API and Services mocks

### Available Operations

* [DeleteService](#deleteservice) - Delete Service
* [GetService](#getservice) - Get Service
* [GetServices](#getservices) - Get Services and APIs
* [GetServicesCounter](#getservicescounter) - Get the Services counter
* [GetServicesLabels](#getserviceslabels) - Get the already used labels for Services
* [OverrideServiceOperation](#overrideserviceoperation) - Override Service Operation
* [SearchServices](#searchservices) - Search for Services and APIs
* [UpdateServiceMetadata](#updateservicemetadata) - Update Service Metadata
* [ExportSnapshot](#exportsnapshot) - Export a snapshot
* [ImportSnapshot](#importsnapshot) - Import a snapshot

## DeleteService

Delete a Service

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
    res, err := s.Mock.DeleteService(ctx, operations.DeleteServiceRequest{
        ID: "879fce95-3f73-4ef7-bbc7-abd74dd39c0f",
    }, operations.DeleteServiceSecurity{
        JwtBearer: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetService

Get Service

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
    res, err := s.Mock.GetService(ctx, operations.GetServiceRequest{
        ID: "5d2cff7c-70a4-4562-ad43-6813f16d9f5f",
        Messages: sdk.Bool(false),
    }, operations.GetServiceSecurity{
        JwtBearer: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetService200ApplicationJSONOneOf != nil {
        // handle response
    }
}
```

## GetServices

Get Services and APIs

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
    res, err := s.Mock.GetServices(ctx, operations.GetServicesRequest{
        Page: sdk.Int64(788873),
        Size: sdk.Int64(906556),
    }, operations.GetServicesSecurity{
        JwtBearer: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Service != nil {
        // handle response
    }
}
```

## GetServicesCounter

Get the Services counter

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
    res, err := s.Mock.GetServicesCounter(ctx, operations.GetServicesCounterSecurity{
        JwtBearer: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Counter != nil {
        // handle response
    }
}
```

## GetServicesLabels

Get the already used labels for Services

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
    res, err := s.Mock.GetServicesLabels(ctx, operations.GetServicesLabelsSecurity{
        JwtBearer: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LabelsMap != nil {
        // handle response
    }
}
```

## OverrideServiceOperation

Override Service Operation

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
    res, err := s.Mock.OverrideServiceOperation(ctx, operations.OverrideServiceOperationRequest{
        OperationOverrideDTO: shared.OperationOverrideDTO{
            DefaultDelay: sdk.Int64(411372),
            Dispatcher: sdk.String("impedit"),
            DispatcherRules: sdk.String("corporis"),
            ParameterConstraints: []shared.ParameterConstraint{
                shared.ParameterConstraint{
                    In: shared.ParameterConstraintInEnumQuery.ToPointer(),
                    MustMatchRegexp: sdk.String("inventore"),
                    Name: "Rosemary Ryan",
                    Recopy: sdk.Bool(false),
                    Required: sdk.Bool(false),
                },
                shared.ParameterConstraint{
                    In: shared.ParameterConstraintInEnumPath.ToPointer(),
                    MustMatchRegexp: sdk.String("minima"),
                    Name: "Mr. Elsa Reinger",
                    Recopy: sdk.Bool(false),
                    Required: sdk.Bool(false),
                },
            },
        },
        ID: "c42e141a-ac36-46c8-9d6b-144290747477",
        OperationName: "rem",
    }, operations.OverrideServiceOperationSecurity{
        JwtBearer: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## SearchServices

Search for Services and APIs

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
    res, err := s.Mock.SearchServices(ctx, operations.SearchServicesRequest{
        QueryMap: map[string]string{
            "reprehenderit": "quidem",
            "fugiat": "ut",
            "eum": "suscipit",
        },
    }, operations.SearchServicesSecurity{
        JwtBearer: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Services != nil {
        // handle response
    }
}
```

## UpdateServiceMetadata

Update Service Metadata

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
    res, err := s.Mock.UpdateServiceMetadata(ctx, operations.UpdateServiceMetadataRequest{
        Metadata: shared.Metadata{
            Annotations: map[string]string{
                "eos": "praesentium",
                "quisquam": "veritatis",
                "ipsa": "id",
                "quidem": "neque",
            },
            CreatedOn: 778696,
            Labels: map[string]string{
                "quo": "fuga",
                "eius": "eos",
                "voluptas": "ab",
                "cupiditate": "consequatur",
            },
            LastUpdate: 272822,
        },
        ID: "e523c7e0-bc71-478e-8796-f2a70c688282",
    }, operations.UpdateServiceMetadataSecurity{
        JwtBearer: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ExportSnapshot

Export a repostiory snapshot with requested services

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
    res, err := s.Mock.ExportSnapshot(ctx, operations.ExportSnapshotRequest{
        ServiceIds: []string{
            "mollitia",
            "incidunt",
            "atque",
        },
    }, operations.ExportSnapshotSecurity{
        JwtBearer: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ExportSnapshot200ApplicationJSONBinaryString != nil {
        // handle response
    }
}
```

## ImportSnapshot

Import a repository snapshot previsouly exported into Microcks

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Mock.ImportSnapshot(ctx, shared.SnapshotUpload{
        File: shared.SnapshotUploadFile{
            Content: []byte("explicabo"),
            File: "minima",
        },
    }, operations.ImportSnapshotSecurity{
        JwtBearer: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
