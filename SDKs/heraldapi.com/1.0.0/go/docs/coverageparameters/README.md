# CoverageParameters

### Available Operations

* [GetCoverageParameters](#getcoverageparameters) - /coverage_parameters

## GetCoverageParameters

### Get coverage parameters

Get a list of [coverage parameters](https://www.heraldapi.com/docs/risk-and-coverage-parameters).

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
            BearerToken: "Bearer YOUR_BEARER_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.CoverageParameters.GetCoverageParameters(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetCoverageParameters200ApplicationJSONObject != nil {
        // handle response
    }
}
```
