# RiskParameters

### Available Operations

* [GetRiskParameters](#getriskparameters) - /risk_parameters

## GetRiskParameters

### Get risk parameters

Get a list of [risk parameters](https://www.heraldapi.com/docs/risk-and-coverage-parameters).

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
    res, err := s.RiskParameters.GetRiskParameters(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetRiskParameters200ApplicationJSONObject != nil {
        // handle response
    }
}
```
