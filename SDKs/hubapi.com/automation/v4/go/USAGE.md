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