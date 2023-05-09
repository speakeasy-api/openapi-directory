<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.PostRegressionAPI(ctx, shared.RegressionAPIBody{
        ConvertDateTo: sdk.String("month"),
        Data: []map[string]interface{}{
            map[string]interface{}{
                "distinctio": "quibusdam",
                "unde": "nulla",
                "corrupti": "illum",
            },
            map[string]interface{}{
                "error": "deserunt",
                "suscipit": "iure",
            },
            map[string]interface{}{
                "debitis": "ipsa",
                "delectus": "tempora",
            },
        },
        IgnoreVariables: []map[string]interface{}{
            map[string]interface{}{
                "minus": "placeat",
                "voluptatum": "iusto",
            },
            map[string]interface{}{
                "nisi": "recusandae",
                "temporibus": "ab",
                "quis": "veritatis",
            },
        },
        Key: "abc123",
        OutcomeVariable: "sales",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InlineResponse200 != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->