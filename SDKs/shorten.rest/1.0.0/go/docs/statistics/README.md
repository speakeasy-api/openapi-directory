# Statistics

### Available Operations

* [GetStatistics](#getstatistics) - Get clicks statistics

## GetStatistics

Retrieve the raw click statistics for your account. Clicks are retrieved by creation date in descending order.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Statistics.GetStatistics(ctx, shared.ClicksFilterModel{
        AliasID: sdk.String("aBcDe012"),
        DateFrom: sdk.String("2001-05-02"),
        DateTo: sdk.String("2001-05-02"),
        Domain: sdk.String("short.fyi"),
        LastID: sdk.Int64(100),
    }, operations.GetStatisticsSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ClickModelPg != nil {
        // handle response
    }
}
```
