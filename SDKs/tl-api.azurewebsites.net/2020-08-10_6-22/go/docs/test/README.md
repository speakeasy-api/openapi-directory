# Test

### Available Operations

* [TestGet](#testget) - Get the all Test objects.
            

## TestGet

Get the all Test objects.
            

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
            Bearer: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Test.TestGet(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.TestDTO != nil {
        // handle response
    }
}
```
