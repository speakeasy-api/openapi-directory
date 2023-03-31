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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    req := operations.AnonymizeRequest{
        Anonymized: false,
        Source: "corrupti",
        Token: "provident",
    }

    ctx := context.Background()
    res, err := s.Admin.Anonymize(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.APIKeyOut != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->