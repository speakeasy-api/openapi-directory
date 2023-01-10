<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()
    
    req := operations.GetClientClientIDRequest{
        PathParams: operations.GetClientClientIDPathParams{
            ClientID: "neque",
        },
    }
    
    res, err := s.Client.GetClientClientID(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetClientClientID200ApplicationJSONObject != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->