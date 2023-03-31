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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            AdvSecurityToken: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    req := operations.CompileRequest{
        ContentType: "application/json",
        RequestBody: map[string]interface{}{
            "provident": "distinctio",
            "quibusdam": "unde",
            "nulla": "corrupti",
        },
        DocFileName: "brilliantDocument",
        DocURLExpiresIn: 3600,
        LatexCompiler: "lualatex",
        LatexRuns: 423655,
        MainFileName: "inputFile.tex",
        TemplateToken: "7a582350acb835ed",
    }

    ctx := context.Background()
    res, err := s.PDFGeneration.Compile(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Compile200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->