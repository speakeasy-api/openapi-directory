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
            APIKeyHeader: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    req := operations.PlayByPlayRequest{
        Format: "JSON",
        Hometeam: "provident",
        Season: "distinctio",
        Week: "quibusdam",
    }

    ctx := context.Background()
    res, err := s.PlayByPlay(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.PlayByPlay != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->