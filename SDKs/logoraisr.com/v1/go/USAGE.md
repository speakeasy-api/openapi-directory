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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Token: shared.SchemeToken{
                APIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    req := operations.PreviewsReadRequest{
        PathParams: operations.PreviewsReadPathParams{
            FileID: "corrupti",
        },
    }

    ctx := context.Background()
    res, err := s.Previews.PreviewsRead(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.PreviewResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->