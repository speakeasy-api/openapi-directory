<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.ApplyYaraRules(ctx, operations.ApplyYaraRulesRequestBody{
        File: operations.ApplyYaraRulesRequestBodyFile{
            Content: []byte("corrupti"),
            File: "provident",
        },
        IsUnpackingRequired: operations.ApplyYaraRulesRequestBodyIsUnpackingRequiredEnumFalse.ToPointer(),
        Rules: []string{
            "unde",
            "nulla",
            "corrupti",
            "illum",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->