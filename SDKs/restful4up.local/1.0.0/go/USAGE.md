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

    req := operations.ApplyYaraRulesRequestBody{
        File: operations.ApplyYaraRulesRequestBodyFile{
            Content: []byte("corrupti"),
            File: "provident",
        },
        IsUnpackingRequired: "false",
        Rules: []string{
            "unde",
            "nulla",
            "corrupti",
            "illum",
        },
    }

    ctx := context.Background()
    res, err := s.ApplyYaraRules(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->