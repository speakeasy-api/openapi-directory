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

    req := operations.KeysAPICurrentRequest{
        PathParams: operations.KeysAPICurrentPathParams{
            Serial: "unde",
        },
    }

    ctx := context.Background()
    res, err := s.KeysAPI.KeysAPICurrent(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.KeysAPICurrent200ApplicationJSONOneOf != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->