# Indexes

### Available Operations

* [CreateIndexWithPrimaryKey](#createindexwithprimarykey) - Create index with primary key
* [DeleteAnIndex](#deleteanindex) - Delete an index
* [GetIndexes](#getindexes) - Get indexes
* [ShowIndex](#showindex) - Show index
* [SwapIndexes](#swapindexes) - Swap indexes
* [UpdateIndex](#updateindex) - Update index

## CreateIndexWithPrimaryKey

Create index with primary key

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
    res, err := s.Indexes.CreateIndexWithPrimaryKey(ctx, operations.CreateIndexWithPrimaryKeyRequestBody{
        PrimaryKey: sdk.String("number"),
        UID: sdk.String("books"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteAnIndex

Delete an index

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Indexes.DeleteAnIndex(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetIndexes

Get indexes

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
    res, err := s.Indexes.GetIndexes(ctx, operations.GetIndexesRequest{
        Limit: sdk.String("2"),
        Offset: sdk.String("0"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ShowIndex

Show index

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Indexes.ShowIndex(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## SwapIndexes

Swap indexes

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
    res, err := s.Indexes.SwapIndexes(ctx, []SwapIndexesRequestBody{
        operations.SwapIndexesRequestBody{
            Indexes: []string{
                "books",
                "books",
                "books",
            },
        },
        operations.SwapIndexesRequestBody{
            Indexes: []string{
                "books",
                "books",
                "books",
                "books",
            },
        },
        operations.SwapIndexesRequestBody{
            Indexes: []string{
                "books",
                "books",
            },
        },
        operations.SwapIndexesRequestBody{
            Indexes: []string{
                "books",
                "books",
                "books",
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateIndex

Can only change the document identifier if it has not already been added before.

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
    res, err := s.Indexes.UpdateIndex(ctx, operations.UpdateIndexRequestBody{
        PrimaryKey: sdk.String("title"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
