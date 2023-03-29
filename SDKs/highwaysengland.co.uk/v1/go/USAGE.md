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

    req := operations.AreasGetRequest{
        PathParams: operations.AreasGetPathParams{
            Version: "unde",
        },
    }

    ctx := context.Background()
    res, err := s.Areas.AreasGet(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AreaResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->