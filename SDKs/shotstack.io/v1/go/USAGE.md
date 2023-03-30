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
        Security: operations.GetRenderSecurity{
            DeveloperKey: shared.SchemeDeveloperKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        PathParams: operations.GetRenderPathParams{
            ID: "corrupti",
        },
    }

    ctx := context.Background()
    res, err := s.Edit.GetRender(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.RenderResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->