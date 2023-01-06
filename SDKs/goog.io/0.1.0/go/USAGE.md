<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    opts := []sdk.SDKOption{
        sdk.WithSecurity(
            shared.Security{
                Apikey: shared.SchemeApikey{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.CrawlRequest{
        PathParams: operations.CrawlPathParams{
            Query: "aperiam",
        },
    }
    
    res, err := s.Crawl(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Crawl200ApplicationJSONObject != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->