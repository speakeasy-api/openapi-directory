# ConfigAPI

### Available Operations

* [GetConfig](#getconfig) - Get configurations

## GetConfig

This API endpoint responds with active configuration (result response)

---
**Note**
The `credentials` field in the `services` configuration and

The `private_key` and `key` fields in the `keys` configuration will be omitted from the API response

---

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
    res, err := s.ConfigAPI.GetConfig(ctx, operations.GetConfigRequest{
        Pretty: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TwoHundredSingleResult != nil {
        // handle response
    }
}
```
