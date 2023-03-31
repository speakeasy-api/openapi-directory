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

    req := operations.GetRenderRequest{
        ID: "corrupti",
    }

    ctx := context.Background()
    res, err := s.Edit.GetRender(ctx, req, operations.GetRenderSecurity{
        DeveloperKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RenderResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->