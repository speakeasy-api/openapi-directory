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

    req := operations.PostRegressionAPIRequest{
        Request: shared.RegressionAPIBody{
            ConvertDateTo: "month",
            Data: []map[string]interface{}{
                map[string]interface{}{
                    "porro": "nulla",
                    "id": "vero",
                    "perspiciatis": "nulla",
                },
                map[string]interface{}{
                    "fuga": "facilis",
                    "eum": "iusto",
                },
                map[string]interface{}{
                    "saepe": "inventore",
                    "sapiente": "enim",
                },
            },
            IgnoreVariables: []map[string]interface{}{
                map[string]interface{}{
                    "autem": "vel",
                    "non": "deleniti",
                },
                map[string]interface{}{
                    "reprehenderit": "molestiae",
                    "quo": "quasi",
                    "laboriosam": "dicta",
                },
            },
            Key: "abc123",
            OutcomeVariable: "sales",
        },
    }

    ctx := context.Background()
    res, err := s.PostRegressionAPI(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.InlineResponse200 != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->