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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Apikey: "YOUR_API_KEY_HERE",
        }),
    )

    req := operations.CrawlRequest{
        Query: "corrupti",
    }

    ctx := context.Background()
    res, err := s.Crawl(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Crawl200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->