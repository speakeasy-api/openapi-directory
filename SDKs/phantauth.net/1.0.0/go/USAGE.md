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

    req := operations.GetClientClientIDRequest{
        ClientID: "corrupti",
    }

    ctx := context.Background()
    res, err := s.Client.GetClientClientID(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetClientClientID200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->