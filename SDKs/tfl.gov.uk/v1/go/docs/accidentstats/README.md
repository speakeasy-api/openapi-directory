# AccidentStats

### Available Operations

* [AccidentStatsGet](#accidentstatsget) - Gets all accident details for accidents occuring in the specified year

## AccidentStatsGet

Gets all accident details for accidents occuring in the specified year

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
    res, err := s.AccidentStats.AccidentStatsGet(ctx, operations.AccidentStatsGetRequest{
        Year: 592845,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TflAPIPresentationEntitiesAccidentStatsAccidentDetails != nil {
        // handle response
    }
}
```
