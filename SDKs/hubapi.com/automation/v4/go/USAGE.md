<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Callbacks.PostAutomationV4ActionsCallbacksCompleteCompleteBatch(ctx, shared.BatchInputCallbackCompletionBatchRequest{
        Inputs: []shared.CallbackCompletionBatchRequest{
            shared.CallbackCompletionBatchRequest{
                CallbackID: "provident",
                OutputFields: map[string]string{
                    "quibusdam": "unde",
                    "nulla": "corrupti",
                    "illum": "vel",
                },
            },
            shared.CallbackCompletionBatchRequest{
                CallbackID: "error",
                OutputFields: map[string]string{
                    "suscipit": "iure",
                    "magnam": "debitis",
                    "ipsa": "delectus",
                },
            },
            shared.CallbackCompletionBatchRequest{
                CallbackID: "tempora",
                OutputFields: map[string]string{
                    "molestiae": "minus",
                    "placeat": "voluptatum",
                },
            },
        },
    }, operations.PostAutomationV4ActionsCallbacksCompleteCompleteBatchSecurity{
        Hapikey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->