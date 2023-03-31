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

    req := operations.GetSectionFormatRequest{
        Callback: "corrupti",
        Format: "jsonp",
        Section: "tmagazine",
    }

    ctx := context.Background()
    res, err := s.Stories.GetSectionFormat(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSectionFormat200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->