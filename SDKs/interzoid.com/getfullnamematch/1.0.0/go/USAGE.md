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
    res, err := s.FullNameMatchSimilarityKey.Getfullnamematch(ctx, operations.GetfullnamematchRequest{
        Fullname: "corrupti",
        License: "provident",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Getfullnamematch200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->