# AccountAPI

### Available Operations

* [GetAccountInfo](#getaccountinfo) - Get basic information about your account

## GetAccountInfo

Get basic information about your account

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
    res, err := s.AccountAPI.GetAccountInfo(ctx, operations.GetAccountInfoRequest{
        TrainingKey: "provident",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Account != nil {
        // handle response
    }
}
```
