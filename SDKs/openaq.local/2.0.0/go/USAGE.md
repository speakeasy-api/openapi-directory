<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.FavicoFaviconIcoGet(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.FavicoFaviconIcoGet200ApplicationJSONAny != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->