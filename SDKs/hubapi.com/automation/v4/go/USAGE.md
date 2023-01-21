<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()
    
    req := operations.PostAutomationV4ActionsCallbacksCompleteCompleteBatchRequest{
        Security: operations.PostAutomationV4ActionsCallbacksCompleteCompleteBatchSecurity{
            Oauth2Legacy: &shared.SchemeOauth2Legacy{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        Request: shared.BatchInputCallbackCompletionBatchRequest{
            Inputs: []shared.CallbackCompletionBatchRequest{
                shared.CallbackCompletionBatchRequest{
                    CallbackID: "voluptas",
                    OutputFields: map[string]string{
                        "expedita": "consequuntur",
                        "dolor": "expedita",
                    },
                },
            },
        },
    }
    
    res, err := s.Callbacks.PostAutomationV4ActionsCallbacksCompleteCompleteBatch(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->