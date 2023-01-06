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
            },
            Format: "xml",
            IP: "delectus",
            Key: "omnis",
            Lang: "et",
            Package: "WS9",
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