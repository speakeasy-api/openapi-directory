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

    req := operations.GetBulkLookupRequest{
        QueryParams: operations.GetBulkLookupQueryParams{
            Format: "XML",
            Ips: "1.1.1.1,2.2.2.2",
            Key: "2517bc4fc3f790e8f09bc808bb63b899",
            Lang: "AR",
            Params: "currency",
        },
    }

    ctx := context.Background()
    res, err := s.GetBulkLookup(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->