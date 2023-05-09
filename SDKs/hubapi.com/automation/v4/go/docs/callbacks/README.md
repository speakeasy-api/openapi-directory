# Callbacks

## Overview

Operations to complete callbacks for custom workflow actions.

### Available Operations

* [PostAutomationV4ActionsCallbacksCompleteCompleteBatch](#postautomationv4actionscallbackscompletecompletebatch) - Complete a batch of callbacks
* [PostAutomationV4ActionsCallbacksCallbackIDCompleteComplete](#postautomationv4actionscallbackscallbackidcompletecomplete) - Complete a callback

## PostAutomationV4ActionsCallbacksCompleteCompleteBatch

Completes the given action callbacks.

### Example Usage

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
                CallbackID: "excepturi",
                OutputFields: map[string]string{
                    "recusandae": "temporibus",
                    "ab": "quis",
                },
            },
            shared.CallbackCompletionBatchRequest{
                CallbackID: "veritatis",
                OutputFields: map[string]string{
                    "perferendis": "ipsam",
                    "repellendus": "sapiente",
                    "quo": "odit",
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

## PostAutomationV4ActionsCallbacksCallbackIDCompleteComplete

Completes the given action callback.

### Example Usage

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Callbacks.PostAutomationV4ActionsCallbacksCallbackIDCompleteComplete(ctx, operations.PostAutomationV4ActionsCallbacksCallbackIDCompleteCompleteRequest{
        CallbackCompletionRequest: shared.CallbackCompletionRequest{
            OutputFields: map[string]string{
                "at": "maiores",
                "molestiae": "quod",
                "quod": "esse",
                "totam": "porro",
            },
        },
        CallbackID: "dolorum",
    }, operations.PostAutomationV4ActionsCallbacksCallbackIDCompleteCompleteSecurity{
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
