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
            UserID: shared.SchemeUserID{
                APIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    req := operations.BadWordFilterRequest{
        Request: &operations.BadWordFilterRequestBody{
            Catalog: "unde",
            CensorCharacter: "deserunt",
            Content: "porro",
            OutputCase: "camel",
        },
    }

    ctx := context.Background()
    res, err := s.DataTools.BadWordFilter(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.BadWordFilterResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->