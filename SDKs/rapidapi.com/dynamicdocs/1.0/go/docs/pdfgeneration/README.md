# PDFGeneration

### Available Operations

* [Compile](#compile) - Compile New Document PDF

## Compile

Compile a PDF document from a specific template

### Example Usage

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
            "deserunt": "suscipit",
            "iure": "magnam",
            "debitis": "ipsa",
        },
        DocFileName: sdk.String("brilliantDocument"),
        DocURLExpiresIn: sdk.Int64(3600),
        LatexCompiler: operations.CompileLatexCompilerEnumLualatex.ToPointer(),
        LatexRuns: sdk.Int64(272656),
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
