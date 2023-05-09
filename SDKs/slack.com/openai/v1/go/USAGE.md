<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.AiAlphaSearchMessages(ctx, shared.SearchRequest{
        Query: "corrupti",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AiAlphaSearchMessages200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->