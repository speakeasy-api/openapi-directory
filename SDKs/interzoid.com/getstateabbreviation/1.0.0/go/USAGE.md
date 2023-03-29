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

    req := operations.GetstateabbreviationRequest{
        QueryParams: operations.GetstateabbreviationQueryParams{
            License: "unde",
            State: "deserunt",
        },
    }

    ctx := context.Background()
    res, err := s.StateDataStandardization.Getstateabbreviation(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Getstateabbreviation200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->