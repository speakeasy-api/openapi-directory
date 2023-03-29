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
            Keys: []string{
                "deserunt",
                "porro",
                "nulla",
            },
        },
        Headers: operations.GetHeaders{
            XMarketID: "id",
            XPrivateLabelID: 857946,
        },
    }

    ctx := context.Background()
    res, err := s.V1.Get(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->