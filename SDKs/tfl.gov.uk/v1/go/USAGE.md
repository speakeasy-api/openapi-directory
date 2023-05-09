<!-- Start SDK Example Usage -->
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
    res, err := s.AccidentStats.AccidentStatsGet(ctx, operations.AccidentStatsGetRequest{
        Year: 548814,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TflAPIPresentationEntitiesAccidentStatsAccidentDetails != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->