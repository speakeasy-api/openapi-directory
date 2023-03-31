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

    req := operations.GetApodRequest{
        Date: "corrupti",
        Hd: false,
    }

    ctx := context.Background()
    res, err := s.RequestTag.GetApod(ctx, req, operations.GetApodSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetApod200ApplicationJSONAnies != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->