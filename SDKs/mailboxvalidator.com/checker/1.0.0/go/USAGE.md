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

    req := operations.GetV1EmailFreeRequest{
        QueryParams: operations.GetV1EmailFreeQueryParams{
            Email: "Larry_Rau85@yahoo.com",
            Format: "xml",
            Key: "nulla",
        },
    }

    ctx := context.Background()
    res, err := s.GetV1EmailFree(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetV1EmailFree200ApplicationJSONString != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->