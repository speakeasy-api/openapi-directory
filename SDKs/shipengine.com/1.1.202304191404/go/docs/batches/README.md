# Batches

## Overview

batches


### Available Operations

* [AddToBatch](#addtobatch) - Add to a Batch
* [CreateBatch](#createbatch) - Create A Batch
* [DeleteBatch](#deletebatch) - Delete Batch By Id
* [GetBatchByExternalID](#getbatchbyexternalid) - Get Batch By External ID
* [GetBatchByID](#getbatchbyid) - Get Batch By ID
* [ListBatchErrors](#listbatcherrors) - Get Batch Errors
* [ListBatches](#listbatches) - List Batches
* [ProcessBatch](#processbatch) - Process Batch ID Labels
* [RemoveFromBatch](#removefrombatch) - Remove From Batch
* [UpdateBatch](#updatebatch) - Update Batch By Id

## AddToBatch

Add a Shipment or Rate to a Batch

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Batches.AddToBatch(ctx, operations.AddToBatchRequest{
        AddToBatchRequestBody: shared.AddToBatchRequestBody{
            RateIds: []string{
                "se-28529731",
                "se-28529731",
                "se-28529731",
            },
            ShipmentIds: []string{
                "se-28529731",
                "se-28529731",
                "se-28529731",
                "se-28529731",
            },
        },
        BatchID: "se-28529731",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EmptyResponseBody != nil {
        // handle response
    }
}
```

## CreateBatch

Create a Batch

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Batches.CreateBatch(ctx, shared.CreateBatchRequestBody{
        BatchNotes: sdk.String("This is my batch"),
        ExternalBatchID: sdk.String("se-28529731"),
        RateIds: []string{
            "se-28529731",
            "se-28529731",
            "se-28529731",
        },
        ShipmentIds: []string{
            "se-28529731",
            "se-28529731",
            "se-28529731",
            "se-28529731",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateBatchResponseBody != nil {
        // handle response
    }
}
```

## DeleteBatch

Delete Batch By Id

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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Batches.DeleteBatch(ctx, operations.DeleteBatchRequest{
        BatchID: "se-28529731",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EmptyResponseBody != nil {
        // handle response
    }
}
```

## GetBatchByExternalID

Get Batch By External ID

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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Batches.GetBatchByExternalID(ctx, operations.GetBatchByExternalIDRequest{
        ExternalBatchID: "vel",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetBatchByExternalIDResponseBody != nil {
        // handle response
    }
}
```

## GetBatchByID

Get Batch By ID

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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Batches.GetBatchByID(ctx, operations.GetBatchByIDRequest{
        BatchID: "se-28529731",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetBatchByIDResponseBody != nil {
        // handle response
    }
}
```

## ListBatchErrors

Error handling in batches are handled differently than in a single synchronous request.
You must retrieve the status of your batch by [getting a batch](https://www.shipengine.com/docs/reference/get-batch-by-id/) and getting an overview of the statuses or you can list errors directly here below to get detailed information about the errors.


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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Batches.ListBatchErrors(ctx, operations.ListBatchErrorsRequest{
        BatchID: "se-28529731",
        Page: sdk.Int(623564),
        Pagesize: sdk.Int(645894),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListBatchErrorsResponseBody != nil {
        // handle response
    }
}
```

## ListBatches

List Batches associated with your Shipengine account

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Batches.ListBatches(ctx, operations.ListBatchesRequest{
        BatchNumber: sdk.String("suscipit"),
        Page: sdk.Int(437587),
        PageSize: sdk.Int(297534),
        SortBy: shared.BatchesSortByEnumCreatedAt.ToPointer(),
        SortDir: operations.ListBatchesSortDirSortDirEnumAsc.ToPointer(),
        Status: shared.BatchStatusEnumInvalid.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListBatchesResponseBody != nil {
        // handle response
    }
}
```

## ProcessBatch

Process Batch ID Labels

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Batches.ProcessBatch(ctx, operations.ProcessBatchRequest{
        BatchID: "se-28529731",
        ProcessBatchRequestBody: shared.ProcessBatchRequestBody{
            DisplayScheme: shared.ProcessBatchRequestBodyDisplaySchemeEnumLabel.ToPointer(),
            LabelFormat: shared.ProcessBatchRequestBodyLabelFormatEnumPng.ToPointer(),
            LabelLayout: shared.ProcessBatchRequestBodyLabelLayoutEnumFourx6.ToPointer(),
            ShipDate: types.MustTimeFromString("2018-09-23T15:00:00.000Z"),
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EmptyResponseBody != nil {
        // handle response
    }
}
```

## RemoveFromBatch

Remove a shipment or rate from a batch

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Batches.RemoveFromBatch(ctx, operations.RemoveFromBatchRequest{
        BatchID: "se-28529731",
        RemoveFromBatchRequestBody: shared.RemoveFromBatchRequestBody{
            RateIds: []string{
                "se-28529731",
                "se-28529731",
                "se-28529731",
                "se-28529731",
            },
            ShipmentIds: []string{
                "se-28529731",
                "se-28529731",
                "se-28529731",
                "se-28529731",
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EmptyResponseBody != nil {
        // handle response
    }
}
```

## UpdateBatch

Update Batch By Id

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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Batches.UpdateBatch(ctx, operations.UpdateBatchRequest{
        BatchID: "se-28529731",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EmptyResponseBody != nil {
        // handle response
    }
}
```
