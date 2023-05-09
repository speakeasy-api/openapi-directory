# Producers

### Available Operations

* [GetProducers](#getproducers) - /producers

## GetProducers

### Get producers

Get a list of [producers](https://www.heraldapi.com/docs/producers).

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
            BearerToken: "Bearer YOUR_BEARER_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Producers.GetProducers(ctx, operations.GetProducersRequest{
        ExternalID: sdk.String("occaecati"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetProducers200ApplicationJSONObject != nil {
        // handle response
    }
}
```
