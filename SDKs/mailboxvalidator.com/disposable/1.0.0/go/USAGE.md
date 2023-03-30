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

    req := operations.GetV1EmailDisposableRequest{
        QueryParams: operations.GetV1EmailDisposableQueryParams{
            Email: "Larue_Rau85@yahoo.com",
            Format: "xml",
            Key: "illum",
        },
    }

    ctx := context.Background()
    res, err := s.GetV1EmailDisposable(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetV1EmailDisposable200ApplicationJSONString != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->