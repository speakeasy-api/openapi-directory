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
    res, err := s.FullNameParsedSimilarityKey.Getfullnameparsedmatch(ctx, operations.GetfullnameparsedmatchRequest{
        Firstname: "Katharina",
        Lastname: "Medhurst",
        License: "distinctio",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Getfullnameparsedmatch200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->