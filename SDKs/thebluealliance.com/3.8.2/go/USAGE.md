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

    req := operations.GetStatusRequest{
        Security: operations.GetStatusSecurity{
            APIKey: shared.SchemeAPIKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        Headers: operations.GetStatusHeaders{
            IfNoneMatch: "corrupti",
        },
    }

    ctx := context.Background()
    res, err := s.Tba.GetStatus(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.APIStatus != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->