# SDK

## Overview

Use MotaWord API to post and track your translation projects.

<https://www.motaword.com/developer>
### Available Operations

* [DeleteCache](#deletecache) - Clear cache by key

## DeleteCache

Clear cache by key

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
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteCache(ctx, operations.DeleteCacheRequest{
        Key: "provident",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OperationStatus != nil {
        // handle response
    }
}
```
