# Services

### Available Operations

* [GetV05HiServicesServiceID](#getv05hiservicesserviceid) - Get bridge service details/profile by the serviceId provided.

## GetV05HiServicesServiceID

This API is meant for displaying the bridge service details by the serviceId provided .


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
    res, err := s.Services.GetV05HiServicesServiceID(ctx, operations.GetV05HiServicesServiceIDRequest{
        Authorization: "soluta",
        ServiceID: "necessitatibus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ServiceProfileResponse != nil {
        // handle response
    }
}
```
