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

    req := operations.CreateAMapRequest{
        QueryParams: operations.CreateAMapQueryParams{
            AppToken: "unde",
            Constraint: "deserunt",
            EntityID: "porro",
            Variable: "nulla",
        },
        Headers: operations.CreateAMapHeaders{
            XAppToken: "id",
        },
    }

    ctx := context.Background()
    res, err := s.CreateAMap(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->