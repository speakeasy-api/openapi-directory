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
            APIKey: shared.SchemeAPIKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    req := operations.GetMapVersionNumberCopyrightsFormatRequest{
        PathParams: operations.GetMapVersionNumberCopyrightsFormatPathParams{
            Format: "jsonp",
            VersionNumber: "1",
        },
        QueryParams: operations.GetMapVersionNumberCopyrightsFormatQueryParams{
            Callback: "porro",
        },
    }

    ctx := context.Background()
    res, err := s.Copyrights.GetMapVersionNumberCopyrightsFormat(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->