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
    
    req := operations.GetRequest{
        QueryParams: operations.GetQueryParams{
            Addon: []GetAddonEnum{
                "city",
                "region",
            },
            Format: "json",
            IP: "voluptas",
            Key: "sed",
            Lang: "ms",
            Package: "WS20",
        },
    }
    
    res, err := s.Get(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Get200ApplicationJSONString != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->