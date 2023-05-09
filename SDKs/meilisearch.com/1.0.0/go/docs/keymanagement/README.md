# KeyManagement

### Available Operations

* [CreateAKey](#createakey) - Create a key
* [DeleteAKey](#deleteakey) - Delete a key
* [GetKeys](#getkeys) - Get keys
* [GetOneKey](#getonekey) - Get one key
* [UpdateAKey](#updateakey) - Update a key

## CreateAKey

Create a key

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
    res, err := s.KeyManagement.CreateAKey(ctx, operations.CreateAKeyRequestBody{
        Actions: []string{
            "documents.add",
            "documents.add",
            "documents.add",
        },
        Description: sdk.String("Key to add and delete documents, in `books` index."),
        ExpiresAt: sdk.String("suscipit"),
        Indexes: []string{
            "books",
            "books",
        },
        Name: sdk.String("docs-key"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteAKey

Delete a key

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
    res, err := s.KeyManagement.DeleteAKey(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetKeys

Get keys

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
    res, err := s.KeyManagement.GetKeys(ctx, operations.GetKeysRequest{
        Limit: sdk.String("10"),
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

## GetOneKey

Get one key

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
    res, err := s.KeyManagement.GetOneKey(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateAKey

Update a key

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
    res, err := s.KeyManagement.UpdateAKey(ctx, operations.UpdateAKeyRequestBody{
        Description: sdk.String("Key to add and delete documents, but also to create indexes, in `book` index."),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
