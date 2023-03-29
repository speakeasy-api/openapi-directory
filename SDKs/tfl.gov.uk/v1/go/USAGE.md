<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.AccidentStatsGetRequest{
        PathParams: operations.AccidentStatsGetPathParams{
            Year: 548814,
        },
    }

    ctx := context.Background()
    res, err := s.AccidentStats.AccidentStatsGet(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.TflAPIPresentationEntitiesAccidentStatsAccidentDetails != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->