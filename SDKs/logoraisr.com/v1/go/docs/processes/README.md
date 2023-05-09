# Processes

### Available Operations

* [ProcessesList](#processeslist) - Get process list.

## ProcessesList

This GET-Method lists all on logoraisr available processes.

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
            Token: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Processes.ProcessesList(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Process != nil {
        // handle response
    }
}
```
