# VectorOperations

## Overview

Endpoints for manipulating vectors

### Available Operations

* [Delete](#delete) - Delete
* [DescribeIndexStats](#describeindexstats) - Describe Index Stats
* [Fetch](#fetch) - Fetch
* [Query](#query) - Query
* [Update](#update) - Fetch
* [Upsert](#upsert) - Upsert

## Delete

The `Delete` operation deletes vectors, by id, from a single namespace. You can delete items by their id, from a single namespace.

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
    res, err := s.VectorOperations.Delete(ctx, shared.DeleteRequest{
        DeleteAll: sdk.Bool(false),
        Filter: map[string]interface{}{
            "ipsa": "delectus",
            "tempora": "suscipit",
            "molestiae": "minus",
            "placeat": "voluptatum",
        },
        Ids: []string{
            "vector-0",
            "vector-0",
        },
        Namespace: sdk.String("namespace-0"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteResponse != nil {
        // handle response
    }
}
```

## DescribeIndexStats

The `DescribeIndexStats` operation returns statistics about the index's contents, including the vector count per namespace and the number of dimensions.

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
    res, err := s.VectorOperations.DescribeIndexStats(ctx, shared.DescribeIndexStatsRequest{
        Filter: map[string]interface{}{
            "nisi": "recusandae",
            "temporibus": "ab",
            "quis": "veritatis",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeIndexStatsResponse != nil {
        // handle response
    }
}
```

## Fetch

The `Fetch` operation looks up and returns vectors, by ID, from a single namespace. The returned vectors include the vector data and/or metadata.

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
    res, err := s.VectorOperations.Fetch(ctx, shared.FetchRequest{
        Ids: []string{
            "vector-0",
            "vector-0",
            "vector-0",
        },
        Namespace: sdk.String("namespace-0"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FetchResponse != nil {
        // handle response
    }
}
```

## Query

The `Query` operation searches a namespace, using a query vector. It retrieves the ids of the most similar items in a namespace, along with their similarity scores.

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
    res, err := s.VectorOperations.Query(ctx, shared.QueryRequest{
        Filter: map[string]interface{}{
            "ipsam": "repellendus",
        },
        ID: sdk.String("vector-0"),
        IncludeMetadata: sdk.Bool(false),
        IncludeValues: sdk.Bool(false),
        Namespace: sdk.String("namespace-0"),
        SparseVector: &shared.SparseVectorData{
            Indices: []int64{
                778157,
                140350,
                870013,
                870088,
            },
            Values: []float32{
                4736.08,
                7991.59,
                8009.11,
                4614.79,
            },
        },
        TopK: 520478,
        Vector: []float32{
            6788.8,
            1182.74,
            7206.33,
            6399.21,
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.QueryResponse != nil {
        // handle response
    }
}
```

## Update

The `Update` operation updates vector in a namespace. If a value is included, it will overwrite the previous value. If a set_metadata is included, the values of the fields specified in it will be added or overwrite the previous value.

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
    res, err := s.VectorOperations.Update(ctx, shared.UpdateRequest{
        ID: "occaecati",
        Namespace: sdk.String("namespace-0"),
        SetMetadata: map[string]interface{}{
            "deleniti": "hic",
        },
        SparseValues: &shared.SparseVectorData{
            Indices: []int64{
                521848,
                105907,
                414662,
                473600,
            },
            Values: []float32{
                1863.32,
                7742.34,
            },
        },
        Values: []float32{
            4561.5,
            2165.5,
            5684.34,
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateResponse != nil {
        // handle response
    }
}
```

## Upsert

The Upsert operation writes vectors into a namespace. If a new value is upserted for an existing vector id, it will overwrite the previous value.

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
    res, err := s.VectorOperations.Upsert(ctx, shared.UpsertRequest{
        Namespace: sdk.String("namespace-0"),
        Vectors: []shared.UpsertVector{
            shared.UpsertVector{
                ID: sdk.String("vector-0"),
                Metadata: map[string]interface{}{
                    "ad": "natus",
                },
                SparseValues: &shared.SparseVectorData{
                    Indices: []int64{
                        612096,
                    },
                    Values: []float32{
                        6169.34,
                    },
                },
                Values: []float32{
                    9437.49,
                    9025.99,
                },
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpsertResponse != nil {
        // handle response
    }
}
```
