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

    req := operations.GetRequest{
        QueryParams: operations.GetQueryParams{
            Addon: []GetAddonEnum{
                "geotargeting",
                "country_groupings",
                "country_groupings",
            },
            Format: "xml",
            IP: "8.8.8.8",
            Key: "vero",
            Lang: "ja",
            Package: "WS22",
        },
    }

    ctx := context.Background()
    res, err := s.Get(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Get200ApplicationJSONString != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->