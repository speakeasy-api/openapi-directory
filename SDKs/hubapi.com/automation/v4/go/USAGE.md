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

    req := operations.PostAutomationV4ActionsCallbacksCompleteCompleteBatchRequest{
        Security: operations.PostAutomationV4ActionsCallbacksCompleteCompleteBatchSecurity{
            Hapikey: &shared.SchemeHapikey{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        Request: shared.BatchInputCallbackCompletionBatchRequest{
            Inputs: []shared.CallbackCompletionBatchRequest{
                shared.CallbackCompletionBatchRequest{
                    CallbackID: "deserunt",
                    OutputFields: map[string]string{
                        "nulla": "id",
                        "vero": "perspiciatis",
                        "nulla": "nihil",
                    },
                },
                shared.CallbackCompletionBatchRequest{
                    CallbackID: "fuga",
                    OutputFields: map[string]string{
                        "eum": "iusto",
                        "ullam": "saepe",
                        "inventore": "sapiente",
                    },
                },
                shared.CallbackCompletionBatchRequest{
                    CallbackID: "enim",
                    OutputFields: map[string]string{
                        "voluptatum": "autem",
                        "vel": "non",
                    },
                },
            },
        },
    }

    ctx := context.Background()
    res, err := s.Callbacks.PostAutomationV4ActionsCallbacksCompleteCompleteBatch(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->