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

    req := operations.GetfullnameparsedmatchRequest{
        QueryParams: operations.GetfullnameparsedmatchQueryParams{
            Firstname: "Katelynn",
            Lastname: "Medhurst",
            License: "porro",
        },
    }

    ctx := context.Background()
    res, err := s.FullNameParsedSimilarityKey.Getfullnameparsedmatch(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Getfullnameparsedmatch200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->