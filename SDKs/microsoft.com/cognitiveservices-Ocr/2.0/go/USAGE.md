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
            ApimKey: shared.SchemeApimKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    req := operations.BatchReadFileRequest{
        Request: shared.ImageURL{
            URL: "unde",
        },
    }

    ctx := context.Background()
    res, err := s.BatchReadFile(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->