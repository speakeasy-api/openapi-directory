# Async

### Available Operations

* [DownloadAsync](#downloadasync) - Download result of an async operation

## DownloadAsync

Download the result of an async operation that you have requested in other endpoints.

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
    res, err := s.Async.DownloadAsync(ctx, operations.DownloadAsyncRequest{
        AsyncRequestKey: "ipsam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DownloadAsync200ApplicationOctetStreamBinaryString != nil {
        // handle response
    }
}
```
