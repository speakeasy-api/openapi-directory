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
            APIKeyHeader: "YOUR_API_KEY_HERE",
        }),
    )

    req := operations.CommunicationRequest{
        RequestBody: []shared.Post{
            shared.Post{
                ID: "1",
                Language: "en",
                Text: "I love the service",
            },
            shared.Post{
                ID: "1",
                Language: "en",
                Text: "I love the service",
            },
            shared.Post{
                ID: "1",
                Language: "en",
                Text: "I love the service",
            },
        },
        All: false,
    }

    ctx := context.Background()
    res, err := s.TextAnalysis.Communication(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.PredictionResults != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->