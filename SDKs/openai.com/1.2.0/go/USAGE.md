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

    req := operations.CancelFineTuneRequest{
        FineTuneID: "ft-AF1WoRqd3aJAHsqc9NY7iL8F",
    }

    ctx := context.Background()
    res, err := s.OpenAI.CancelFineTune(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.FineTune != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->