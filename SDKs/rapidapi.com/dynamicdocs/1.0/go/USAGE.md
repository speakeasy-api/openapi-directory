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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            AdvSecurityToken: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.PDFGeneration.Compile(ctx, operations.CompileRequest{
        ContentType: "application/json",
        RequestBody: map[string]interface{}{
            "provident": "distinctio",
            "quibusdam": "unde",
            "nulla": "corrupti",
        },
        DocFileName: sdk.String("brilliantDocument"),
        DocURLExpiresIn: sdk.Int64(3600),
        LatexCompiler: operations.CompileLatexCompilerEnumLualatex.ToPointer(),
        LatexRuns: sdk.Int64(423655),
        MainFileName: sdk.String("inputFile.tex"),
        TemplateToken: "7a582350acb835ed",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Compile200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->