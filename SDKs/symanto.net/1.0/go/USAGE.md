<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyHeader: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.TextAnalysis.Communication(ctx, operations.CommunicationRequest{
        RequestBody: []shared.Post{
            shared.Post{
                ID: sdk.String("1"),
                Language: "en",
                Text: "I love the service",
            },
            shared.Post{
                ID: sdk.String("1"),
                Language: "en",
                Text: "I love the service",
            },
            shared.Post{
                ID: sdk.String("1"),
                Language: "en",
                Text: "I love the service",
            },
        },
        All: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PredictionResults != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->