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

    req := operations.CreateCallRequest{
        Security: operations.CreateCallSecurity{
            BearerAuth: shared.SchemeBearerAuth{
                Authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
            },
        },
        Request: &operations.CreateCallRequestBody{},
    }

    ctx := context.Background()
    res, err := s.Calls.CreateCall(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateCallResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->