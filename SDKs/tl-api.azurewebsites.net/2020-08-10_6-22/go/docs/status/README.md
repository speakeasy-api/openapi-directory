# Status

### Available Operations

* [StatusGet](#statusget) - Get the current status of message

## StatusGet

Get the current status of message

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
            Bearer: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Status.StatusGet(ctx, operations.StatusGetRequest{
        MessageID: sdk.String("quos"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MessageStatus != nil {
        // handle response
    }
}
```
