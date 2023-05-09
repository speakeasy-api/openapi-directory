# IndexOperations

## Overview

Endpoints for manipulating indexes

### Available Operations

* [ConfigureIndex](#configureindex) - Configure index
* [CreateCollection](#createcollection) - Create collection
* [CreateIndex](#createindex) - Create index
* [DeleteCollection](#deletecollection) - Delete Collection
* [DeleteIndex](#deleteindex) - Delete Index
* [DescribeCollection](#describecollection) - Describe collection
* [DescribeIndex](#describeindex) - Describe index
* [ListCollections](#listcollections) - List collections
* [ListIndexes](#listindexes) - List indexes

## ConfigureIndex

This operation specifies the pod type and number of replicas for an index.

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
    res, err := s.IndexOperations.ConfigureIndex(ctx, operations.ConfigureIndexRequest{
        IndexConfiguration: shared.IndexConfiguration{
            PodType: shared.PodTypeEnumP2X1.ToPointer(),
            Replicas: sdk.Int(844266),
        },
        IndexName: "example",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## CreateCollection

This operation creates a Pinecone collection.

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
    res, err := s.IndexOperations.CreateCollection(ctx, shared.CollectionDefinition{
        Name: "example",
        Source: "example",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## CreateIndex

This operation creates a Pinecone index. You can use it to specify the measure of similarity, the dimension of vectors to be stored in the index, the numbers of replicas to use, and more.

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
    res, err := s.IndexOperations.CreateIndex(ctx, shared.IndexDefinition{
        Dimension: 602763,
        MetadataConfig: &shared.IndexMetadataConfig{
            Indexed: []string{
                "corrupti",
                "illum",
                "vel",
                "error",
            },
        },
        Metric: shared.IndexMetricEnumCosine.ToPointer(),
        Name: "example",
        PodType: shared.PodTypeEnumP1X1.ToPointer(),
        Pods: sdk.Int(437587),
        Replicas: sdk.Int(297534),
        SourceCollection: sdk.String("example"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteCollection

This operation deletes an existing collection.

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
    res, err := s.IndexOperations.DeleteCollection(ctx, operations.DeleteCollectionRequest{
        CollectionName: "example",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteIndex

This operation deletes an existing index.

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
    res, err := s.IndexOperations.DeleteIndex(ctx, operations.DeleteIndexRequest{
        IndexName: "example",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DescribeCollection

Get a description of a collection.

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
    res, err := s.IndexOperations.DescribeCollection(ctx, operations.DescribeCollectionRequest{
        CollectionName: "example",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Collection != nil {
        // handle response
    }
}
```

## DescribeIndex

Get a description of an index.

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
    res, err := s.IndexOperations.DescribeIndex(ctx, operations.DescribeIndexRequest{
        IndexName: "example",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Index != nil {
        // handle response
    }
}
```

## ListCollections

This operation returns a list of your Pinecone collections.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.IndexOperations.ListCollections(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.CollectionsList != nil {
        // handle response
    }
}
```

## ListIndexes

This operation returns a list of your Pinecone indexes.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.IndexOperations.ListIndexes(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.IndexesList != nil {
        // handle response
    }
}
```
